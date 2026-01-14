import React, { useEffect, useRef, useState } from 'react';
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
import '../../utils/CodeMirrorEditor.css'; // Keep using the same CSS for now

// Custom highlight style with improved color contrast for accessibility
const accessibleHighlightStyle = HighlightStyle.define([
  { tag: t.keyword, color: 'var(--color-code-1)' },
  { tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName], color: 'var(--color-code-4)' },
  { tag: [t.function(t.variableName), t.labelName], color: 'var(--color-code-2)' },
  { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: 'var(--color-code-6)' },
  { tag: [t.definition(t.name), t.separator], color: 'var(--color-code-3)' },
  {
    tag: [t.typeName, t.className, t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
    color: 'var(--color-code-5)',
  },
  {
    tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp, t.link, t.special(t.string)],
    color: 'var(--color-code-6)',
  },
  { tag: [t.meta, t.comment], color: 'var(--color-code-7)', fontStyle: 'italic' },
  { tag: t.strong, fontWeight: 'bold' },
  { tag: t.emphasis, fontStyle: 'italic' },
  { tag: t.strikethrough, textDecoration: 'line-through' },
  { tag: t.link, color: 'var(--color-code-6)', textDecoration: 'underline' },
  { tag: t.heading, fontWeight: 'bold', color: 'var(--color-code-6)' },
  { tag: [t.atom, t.bool, t.special(t.variableName)], color: 'var(--color-code-6)' },
  { tag: [t.processingInstruction, t.string, t.inserted], color: 'var(--color-code-8)' },
  { tag: t.invalid, color: '#82071e' },
  { tag: [t.attributeName], color: 'var(--color-code-9)' },
]);

// Custom fold service for #region/#endregion
const regionFoldService = foldService.of((state, from, _to) => {
  const line = state.doc.lineAt(from);
  const { text } = line;
  const regionMatch = text.match(/\/\/\s*#region/);
  if (regionMatch) {
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
 * Props for the SourceCodeEditor component.
 */
export type SourceCodeEditorProps = {
  /**
   * The initial code to display in the editor.
   */
  value: string;
  /**
   * Callback when the code changes (only active if readOnly is false).
   */
  onChange?: (value: string) => void;
  /**
   * Whether the editor is read-only. Defaults to true.
   */
  readOnly?: boolean;
  /**
   * Additional CSS class name.
   */
  className?: string;
  /**
   * Ref to expose editor methods (like get value).
   */
  getEditorValue?: (getValue: () => string) => void;
};

/**
 * A CodeMirror 6 editor wrapper for editing source code.
 * Supports lazy-loading of editing capabilities.
 */
export function SourceCodeEditor({
  value,
  onChange,
  readOnly = true,
  className = '',
  getEditorValue,
}: SourceCodeEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef: React.MutableRefObject<EditorView | null> = useRef<EditorView | null>(null);
  const editableCompartment = useRef(new Compartment());
  const [editExtensions, setEditExtensions] = useState<Extension[]>([]);

  const valueWithoutTrailingNewline = trimNewlinesFromStartAndEnd(value);

  // Expose getting the value to the parent
  useEffect(() => {
    if (getEditorValue) {
      getEditorValue(() => viewRef.current?.state.doc.toString() ?? '');
    }
  }, [getEditorValue]);

  // Lazy load editing extensions
  useEffect(() => {
    if (!readOnly && editExtensions.length === 0) {
      import('@codemirror/commands').then(({ history, historyKeymap, defaultKeymap }) => {
        setEditExtensions([history(), keymap.of([...defaultKeymap, ...historyKeymap])]);
      });
    }
  }, [readOnly, editExtensions.length]);

  // Initialize editor
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
        '&': { height: '100%', fontSize: '14px' },
        '.cm-scroller': { fontFamily: 'monospace' },
        '.cm-foldGutter': { width: '20px' },
        '.cm-content': { maxWidth: '100%' },
        '.cm-foldPlaceholder': {
          backgroundColor: 'var(--color-surface-sunken)',
          borderColor: 'var(--color-border-3)',
        },
        '.cm-gutters': {
          backgroundColor: 'var(--color-surface-sunken)',
          borderColor: 'var(--color-border-3)',
        },
      }),
      editableCompartment.current.of([]),
    ];

    const startState = EditorState.create({
      doc: valueWithoutTrailingNewline,
      extensions,
    });

    viewRef.current = new EditorView({
      state: startState,
      parent: editorRef.current,
    });

    // Fold logic
    const view = viewRef.current;
    if (view) {
      const { state } = view;
      const effects = [];
      for (let lineNum = 1; lineNum <= state.doc.lines; lineNum++) {
        const line = state.doc.line(lineNum);
        if (line.text.match(/\/\/\s*#region/)) {
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
                effects.push(foldEffect.of({ from: line.to, to: currentLine.from }));
                break;
              }
            }
            endLine++;
          }
        }
      }
      if (effects.length > 0) view.dispatch({ effects });
    }

    return () => {
      if (viewRef.current) {
        viewRef.current.destroy();
        viewRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update doc when value changes externally
  useEffect(() => {
    if (!viewRef.current) return;
    const currentValue = viewRef.current.state.doc.toString();
    if (currentValue !== valueWithoutTrailingNewline) {
      viewRef.current.dispatch({
        changes: { from: 0, to: currentValue.length, insert: valueWithoutTrailingNewline },
      });
    }
  }, [valueWithoutTrailingNewline]);

  // Update editable extensions
  useEffect(() => {
    if (!viewRef.current) return;
    const extensions: Extension[] = [];
    if (!readOnly) {
      if (editExtensions.length > 0) extensions.push(...editExtensions);
      if (onChange) {
        extensions.push(
          EditorView.updateListener.of(update => {
            if (update.docChanged) onChange(update.state.doc.toString());
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
    <div
      ref={editorRef}
      className={`codemirror-example-editor ${className}`}
      style={{ height: '100%', overflow: 'auto' }}
    />
  );
}
