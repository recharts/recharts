import { ReactNode } from 'react';

/**
 * The allowed types of tools in the playground.
 */
export type ToolType = 'source' | 'devtools' | 'controls';

/**
 * Definition of a tool item in the playground.
 */
export type ToolItem = {
  /**
   * The unique identifier for the tool.
   */
  name: ToolType;
  /**
   * The label to display in the tool selector.
   */
  label: string;
  /**
   * The component to render when this tool is active.
   */
  component: ReactNode;
  /**
   * Optional list of action buttons/components to render in the toolbar when this tool is active.
   */
  actions?: ReactNode[];
};

/**
 * Props for the ToolFrame component.
 */
type ToolFrameProps = {
  /**
   * The currently active tool.
   */
  activeTool: ToolType;
  /**
   * Callback when the active tool changes.
   */
  onToolChange: (tool: ToolType) => void;
  /**
   * List of available tools.
   */
  tools: ReadonlyArray<ToolItem>;
  /**
   * Additional CSS class name.
   */
  className?: string;
};

/**
 * A frame component that renders a toolbar and the active tool's content.
 * Handles switching between different tools (Source, DevTools, Controls).
 */
export function ToolFrame({ activeTool, onToolChange, tools, className = '' }: ToolFrameProps) {
  const activeToolItem = tools.find(t => t.name === activeTool);

  return (
    <div className={`codemirror-wrapper ${className}`}>
      <div id="codemirror-container">
        <div className="codemirror-toolbar">
          {tools.length > 1 && (
            <select
              className="codemirror-toolbar-item"
              value={activeTool}
              onChange={e => onToolChange(e.target.value as ToolType)}
              style={{ paddingRight: '12px' }}
            >
              {tools.map(tool => (
                <option key={tool.name} value={tool.name}>
                  {tool.label}
                </option>
              ))}
            </select>
          )}
          {activeToolItem?.actions}
        </div>

        {tools.map(tool => (
          <div
            key={tool.name}
            style={{
              height: '100%',
              display: activeTool === tool.name ? 'block' : 'none',
              overflow: 'hidden', // Ensure content doesn't overflow the frame
            }}
          >
            {tool.component}
          </div>
        ))}
      </div>
    </div>
  );
}
