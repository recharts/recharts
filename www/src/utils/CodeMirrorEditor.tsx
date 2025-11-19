import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { EditorView, keymap } from '@codemirror/view';
import { EditorState, Extension, Compartment } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import {
  syntaxHighlighting,
  foldGutter,
  foldKeymap,
  foldService,
  foldEffect,
  HighlightStyle,
} from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import './CodeMirrorEditor.css';
import { CopyButton } from './CopyButton.tsx';

// Custom highlight style with improved color contrast for accessibility
const accessibleHighlightStyle = HighlightStyle.define([
  { tag: t.keyword, color: '#0077aa' },
  { tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName], color: '#116329' },
  { tag: [t.function(t.variableName), t.labelName], color: '#6639ba' },
  { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: '#0550ae' },
  { tag: [t.definition(t.name), t.separator], color: '#24292f' },
  {
    tag: [t.typeName, t.className, t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
    color: '#953800',
  },
  { tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp, t.link, t.special(t.string)], color: '#0550ae' },
  { tag: [t.meta, t.comment], color: '#6a737d', fontStyle: 'italic' },
  { tag: t.strong, fontWeight: 'bold' },
  { tag: t.emphasis, fontStyle: 'italic' },
  { tag: t.strikethrough, textDecoration: 'line-through' },
  { tag: t.link, color: '#0550ae', textDecoration: 'underline' },
  { tag: t.heading, fontWeight: 'bold', color: '#0550ae' },
  { tag: [t.atom, t.bool, t.special(t.variableName)], color: '#0550ae' },
  { tag: [t.processingInstruction, t.string, t.inserted], color: '#0a3069' },
  { tag: t.invalid, color: '#82071e' },
  // Property names and attribute names - fixed for better contrast
  { tag: [t.attributeName], color: '#007070' }, // Changed from #008080 to meet 4.5:1 contrast
]);

type CodeMirrorEditorProps = {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  className?: string;
  extraToolbarItems?: ReactNode[];
};

// Custom fold service for #region/#endregion
const regionFoldService = foldService.of((state, from, _to) => {
  const line = state.doc.lineAt(from);
  const { text } = line;

  // Check if this line has #region
  const regionMatch = text.match(/\/\/\s*#region/);
  if (regionMatch) {
    // Find the matching #endregion
    let endLine = line.number + 1;
    let depth = 1;

    while (endLine <= state.doc.lines && depth > 0) {
      const currentLine = state.doc.line(endLine);
      const currentText = currentLine.text;

      if (currentText.match(/\/\/\s*#region/)) {
        depth++;
      } else if (currentText.match(/\/\/\s*#endregion/)) {
        depth--;
        if (depth === 0) {
          // Return fold range from end of #region line to start of #endregion line
          return { from: line.to, to: currentLine.from };
        }
      }
      endLine++;
    }
  }

  return null;
});

const trimNewlinesFromStartAndEnd = (s: string): string => s.replace(/^\n+|\n+$/g, '');

/**
 * CodeMirror 6 editor component with lazy-loading of editing features.
 *
 * By default, the editor is read-only with syntax highlighting and code folding.
 * When readOnly is set to false, editing extensions are loaded dynamically.
 */
export function CodeMirrorEditor({
  value,
  onChange,
  extraToolbarItems,
  readOnly = true,
  className = '',
}: CodeMirrorEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef: React.MutableRefObject<EditorView | null> = useRef<EditorView | null>(null);
  const editableCompartment = useRef(new Compartment());
  const [editExtensions, setEditExtensions] = useState<Extension[]>([]);

  // remove trailing newline from the value to save on vertical space
  const valueWithoutTrailingNewline = trimNewlinesFromStartAndEnd(value);

  // Lazy load editing extensions when switching to editable mode
  useEffect(() => {
    if (!readOnly && editExtensions.length === 0) {
      import('@codemirror/commands').then(({ history, historyKeymap, defaultKeymap }) => {
        setEditExtensions([history(), keymap.of([...defaultKeymap, ...historyKeymap])]);
      });
    }
  }, [readOnly, editExtensions.length]);

  // Initialize the editor once
  useEffect(() => {
    if (!editorRef.current || viewRef.current) return () => {};

    const extensions: Extension[] = [
      javascript({ jsx: true, typescript: true }),
      syntaxHighlighting(accessibleHighlightStyle),
      regionFoldService,
      foldGutter(),
      keymap.of(foldKeymap),
      EditorView.lineWrapping,
      EditorView.theme({
        '&': {
          height: '100%',
          fontSize: '14px',
        },
        '.cm-scroller': {
          fontFamily: 'monospace',
        },
        '.cm-foldGutter': {
          width: '20px',
        },
        '.cm-content': {
          maxWidth: '100%',
        },
      }),
      editableCompartment.current.of([]),
    ];

    // Create new view
    const startState = EditorState.create({
      doc: valueWithoutTrailingNewline,
      extensions,
    });

    viewRef.current = new EditorView({
      state: startState,
      parent: editorRef.current,
    });

    // Fold all #region blocks on mount
    if (viewRef.current) {
      const view = viewRef.current;
      const { state } = view;
      const effects = [];

      // Find all lines with #region and fold them
      for (let lineNum = 1; lineNum <= state.doc.lines; lineNum++) {
        const line = state.doc.line(lineNum);
        if (line.text.match(/\/\/\s*#region/)) {
          // Find matching endregion
          let endLine = lineNum + 1;
          let depth = 1;

          while (endLine <= state.doc.lines && depth > 0) {
            const currentLine = state.doc.line(endLine);
            const currentText = currentLine.text;

            if (currentText.match(/\/\/\s*#region/)) {
              depth++;
            } else if (currentText.match(/\/\/\s*#endregion/)) {
              depth--;
              if (depth === 0) {
                // Fold from end of #region line to start of #endregion line
                effects.push(foldEffect.of({ from: line.to, to: currentLine.from }));
                break;
              }
            }
            endLine++;
          }
        }
      }

      if (effects.length > 0) {
        view.dispatch({ effects });
      }
    }

    return () => {
      // Cleanup on unmount
      if (viewRef.current) {
        viewRef.current.destroy();
        viewRef.current = null;
      }
    };
    // Only run once on mount, which is why the deps array is empty and ignores `value` on purpose
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update document when value changes externally
  useEffect(() => {
    if (!viewRef.current) return;

    const currentValue = viewRef.current.state.doc.toString();
    if (currentValue !== valueWithoutTrailingNewline) {
      viewRef.current.dispatch({
        changes: {
          from: 0,
          to: currentValue.length,
          insert: valueWithoutTrailingNewline,
        },
      });
    }
  }, [valueWithoutTrailingNewline]);

  // Update editable extensions when switching between read-only and editable
  useEffect(() => {
    if (!viewRef.current) return;

    const extensions: Extension[] = [];

    if (!readOnly) {
      if (editExtensions.length > 0) {
        extensions.push(...editExtensions);
      }
      if (onChange) {
        extensions.push(
          EditorView.updateListener.of(update => {
            if (update.docChanged) {
              onChange(update.state.doc.toString());
            }
          }),
        );
      }
    } else {
      extensions.push(EditorState.readOnly.of(true));
    }

    viewRef.current.dispatch({
      effects: editableCompartment.current.reconfigure(extensions),
    });
  }, [readOnly, editExtensions, onChange]);

  return (
    <div className="codemirror-wrapper">
      <div id="codemirror-container">
        <div className="codemirror-toolbar">
          <CopyButton viewRef={viewRef} />
          {extraToolbarItems}
        </div>
        <div ref={editorRef} className={`codemirror-example-editor ${className}`} style={{ height: '100%' }} />
      </div>
    </div>
  );
}
