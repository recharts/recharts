import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from '../../../../src';
import { ZoomPanContainer } from '../../../../src/context/zoomPanContext';

const meta: Meta<typeof ZoomPanContainer> = {
  title: 'Examples/ZoomPan/Enhanced Controls',
  component: ZoomPanContainer,
  parameters: {
    docs: {
      description: {
        component: 'Enhanced zoom and pan functionality with customizable controls and improved scroll bars.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ZoomPanContainer>;

// Generate sample data
const generateData = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    name: `Point ${i}`,
    x: i,
    value1: Math.sin(i * 0.1) * 100 + Math.random() * 20,
    value2: Math.cos(i * 0.1) * 100 + Math.random() * 20,
    value3: Math.sin(i * 0.05) * 50 + 150 + Math.random() * 10,
  }));
};

const data = generateData(200);

export const CustomScrollBars: Story = {
  render: () => {
    const [zoomState, setZoomState] = useState(null);
    
    return (
      <div style={{ width: '100%', height: '500px' }}>
        <h3>Custom Scroll Bars</h3>
        <p>Thick, customizable scroll bars with hover effects</p>
        
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
            <ZoomPanContainer
              config={{
                mode: 'x',
                disableAnimation: true,
                showScrollBar: true,
                scrollBar: {
                  thickness: 16,
                  color: 'rgba(59, 130, 246, 0.6)',
                  hoverColor: 'rgba(59, 130, 246, 0.9)',
                  borderRadius: 8,
                  opacity: 0.7,
                  hoverOpacity: 1,
                },
                controls: {
                  keyboardZoom: true,
                  keyboardPan: true,
                  wheelZoom: true,
                  dragScrollBars: true,
                },
                preventDefault: {
                  pageScroll: true,
                  pageZoom: true,
                },
                onZoomChange: setZoomState,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value1" stroke="#8884d8" dot={false} />
              <Line type="monotone" dataKey="value2" stroke="#82ca9d" dot={false} />
              <Line type="monotone" dataKey="value3" stroke="#ffc658" dot={false} />
            </ZoomPanContainer>
          </LineChart>
        </ResponsiveContainer>
        
        {zoomState && (
          <div style={{ marginTop: '10px', fontSize: '12px' }}>
            Scale: {zoomState.scaleX.toFixed(2)}x | 
            Offset: {zoomState.offsetX.toFixed(0)}px
          </div>
        )}
      </div>
    );
  },
};

export const MobileOptimized: Story = {
  render: () => {
    return (
      <div style={{ width: '100%', height: '500px' }}>
        <h3>Mobile-Optimized Gestures</h3>
        <p>Enhanced mobile support with conflict resolution</p>
        
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
            <ZoomPanContainer
              config={{
                mode: 'xy',
                disableAnimation: true,
                showScrollBar: true,
                scrollBar: {
                  thickness: 20, // Thicker for mobile
                  color: 'rgba(34, 197, 94, 0.5)',
                  hoverColor: 'rgba(34, 197, 94, 0.8)',
                },
                controls: {
                  pinchZoom: true,
                  twoFingerPan: true,
                  twoFingerPanThreshold: 15,
                  edgeThreshold: 60, // Larger edge area for mobile
                  dragScrollBars: true,
                },
                dragToZoom: true,
                preventDefault: {
                  pageScroll: true,
                  contextMenu: true,
                },
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value1" stroke="#ef4444" dot={false} />
              <Line type="monotone" dataKey="value3" stroke="#f97316" dot={false} />
            </ZoomPanContainer>
          </LineChart>
        </ResponsiveContainer>
        
        <div style={{ marginTop: '10px', fontSize: '12px' }}>
          <strong>Mobile Gestures:</strong><br/>
          • Pinch to zoom<br/>
          • Two-finger pan (keep distance constant)<br/>
          • Drag scroll bars<br/>
          • Shift+drag to select zoom area<br/>
          • Edge dragging for pan (conflicts with tooltip avoided)
        </div>
      </div>
    );
  },
};

export const KeyboardControls: Story = {
  render: () => {
    return (
      <div style={{ width: '100%', height: '500px' }}>
        <h3>Enhanced Keyboard Controls</h3>
        <p>Full keyboard navigation with page interference prevention</p>
        
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
            <ZoomPanContainer
              config={{
                mode: 'x',
                disableAnimation: true,
                showScrollBar: true,
                scrollBar: {
                  thickness: 14,
                  color: 'rgba(168, 85, 247, 0.4)',
                  hoverColor: 'rgba(168, 85, 247, 0.7)',
                  borderRadius: 7,
                },
                controls: {
                  keyboardZoom: true,
                  keyboardPan: true,
                  wheelZoom: true,
                },
                preventDefault: {
                  pageScroll: true,
                  pageZoom: true,
                },
                resetKey: 'dblclick',
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value2" stroke="#8b5cf6" dot={false} strokeWidth={2} />
            </ZoomPanContainer>
          </LineChart>
        </ResponsiveContainer>
        
        <div style={{ marginTop: '10px', fontSize: '12px' }}>
          <strong>Keyboard Controls:</strong><br/>
          • <kbd>+</kbd>/<kbd>-</kbd> or <kbd>Ctrl</kbd>+<kbd>+</kbd>/<kbd>-</kbd> to zoom<br/>
          • <kbd>←</kbd>/<kbd>→</kbd>/<kbd>↑</kbd>/<kbd>↓</kbd> to pan<br/>
          • <kbd>Shift</kbd> + arrows for faster panning<br/>
          • Double-click to reset zoom<br/>
          • Mouse wheel to zoom (page scroll prevented)
        </div>
      </div>
    );
  },
};

export const AdvancedConfiguration: Story = {
  render: () => {
    const [config, setConfig] = useState({
      wheelZoom: true,
      keyboardControls: true,
      dragScrollBars: true,
      pinchZoom: true,
      thickness: 12,
      preventPageScroll: true,
    });
    
    return (
      <div style={{ width: '100%', height: '600px' }}>
        <h3>Advanced Configuration</h3>
        
        <div style={{ marginBottom: '20px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          <label style={{ fontSize: '12px' }}>
            <input
              type="checkbox"
              checked={config.wheelZoom}
              onChange={(e) => setConfig({ ...config, wheelZoom: e.target.checked })}
            />
            Wheel Zoom
          </label>
          <label style={{ fontSize: '12px' }}>
            <input
              type="checkbox"
              checked={config.keyboardControls}
              onChange={(e) => setConfig({ ...config, keyboardControls: e.target.checked })}
            />
            Keyboard Controls
          </label>
          <label style={{ fontSize: '12px' }}>
            <input
              type="checkbox"
              checked={config.dragScrollBars}
              onChange={(e) => setConfig({ ...config, dragScrollBars: e.target.checked })}
            />
            Drag Scroll Bars
          </label>
          <label style={{ fontSize: '12px' }}>
            <input
              type="checkbox"
              checked={config.pinchZoom}
              onChange={(e) => setConfig({ ...config, pinchZoom: e.target.checked })}
            />
            Pinch Zoom
          </label>
          <label style={{ fontSize: '12px' }}>
            <input
              type="checkbox"
              checked={config.preventPageScroll}
              onChange={(e) => setConfig({ ...config, preventPageScroll: e.target.checked })}
            />
            Prevent Page Scroll
          </label>
          <label style={{ fontSize: '12px' }}>
            Thickness: 
            <input
              type="range"
              min="6"
              max="24"
              value={config.thickness}
              onChange={(e) => setConfig({ ...config, thickness: parseInt(e.target.value) })}
              style={{ width: '100px', marginLeft: '5px' }}
            />
            {config.thickness}px
          </label>
        </div>
        
        <ResponsiveContainer height={400}>
          <LineChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
            <ZoomPanContainer
              config={{
                mode: 'xy',
                disableAnimation: true,
                showScrollBar: true,
                scrollBar: {
                  thickness: config.thickness,
                  color: 'rgba(239, 68, 68, 0.5)',
                  hoverColor: 'rgba(239, 68, 68, 0.8)',
                  borderRadius: config.thickness / 2,
                },
                controls: {
                  wheelZoom: config.wheelZoom,
                  keyboardZoom: config.keyboardControls,
                  keyboardPan: config.keyboardControls,
                  dragScrollBars: config.dragScrollBars,
                  pinchZoom: config.pinchZoom,
                  twoFingerPan: config.pinchZoom,
                  labelDrag: true,
                  wheelPan: true,
                },
                preventDefault: {
                  pageScroll: config.preventPageScroll,
                  pageZoom: config.preventPageScroll,
                },
                dragToZoom: true,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value1" stroke="#ef4444" dot={false} />
              <Line type="monotone" dataKey="value2" stroke="#06b6d4" dot={false} />
              <Line type="monotone" dataKey="value3" stroke="#84cc16" dot={false} />
            </ZoomPanContainer>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
};

export const AxisLabelInteractions: Story = {
  render: () => {
    return (
      <div style={{ width: '100%', height: '500px' }}>
        <h3>Axis Label Interactions</h3>
        <p>Drag and scroll on axis labels to pan</p>
        
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
            <ZoomPanContainer
              config={{
                mode: 'xy',
                disableAnimation: true,
                showScrollBar: true,
                scrollBar: {
                  thickness: 16,
                  color: 'rgba(0,0,0,0.3)',
                  hoverColor: 'rgba(0,0,0,0.5)',
                  borderRadius: 8,
                  opacity: 0.8,
                  hoverOpacity: 1,
                },
                controls: {
                  labelDrag: true,
                  wheelPan: true,
                },
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value1" stroke="#9333ea" dot={false} strokeWidth={2} />
              <Line type="monotone" dataKey="value2" stroke="#06b6d4" dot={false} strokeWidth={2} />
            </ZoomPanContainer>
          </LineChart>
        </ResponsiveContainer>
        
        <div style={{ marginTop: '10px', fontSize: '12px' }}>
          <strong>Try:</strong><br/>
          • Scroll wheel on axis labels to pan<br/>
          • Drag axis labels to pan<br/>
          • Pinch to zoom on mobile<br/>
          • Single tap for tooltips
        </div>
      </div>
    );
  },
};

export const MobileTooltipFixed: Story = {
  render: () => {
    return (
      <div style={{ width: '100%', height: '500px' }}>
        <h3>Mobile Tooltip + Zoom Fixed</h3>
        <p>Tooltips now work properly on mobile alongside zoom/pan gestures</p>
        
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
            <ZoomPanContainer
              config={{
                mode: 'xy',
                disableAnimation: true,
                showScrollBar: true,
                scrollBar: {
                  thickness: 18,
                  color: 'rgba(34, 197, 94, 0.6)',
                  hoverColor: 'rgba(34, 197, 94, 0.9)',
                },
                controls: {
                  pinchZoom: true,
                  twoFingerPan: true,
                  dragPan: true,
                  edgeThreshold: 60,     // Smart edge detection
                  dragScrollBars: true,
                },
                preventDefault: {
                  pageScroll: true,
                  contextMenu: true,
                },
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value1" stroke="#22c55e" dot={false} strokeWidth={2} />
              <Line type="monotone" dataKey="value3" stroke="#eab308" dot={false} strokeWidth={2} />
            </ZoomPanContainer>
          </LineChart>
        </ResponsiveContainer>
        
        <div style={{ marginTop: '10px', fontSize: '12px' }}>
          <strong>Fixed Issues:</strong><br/>
          • ✅ <strong>Mobile tooltips work:</strong> Single touch shows tooltip<br/>
          • ✅ <strong>Pinch zoom works:</strong> Two-finger pinch to zoom<br/>
          • ✅ <strong>Smart conflicts:</strong> Edge detection prevents tooltip conflicts<br/>
          • ✅ <strong>Scroll bars fixed:</strong> No more position jumping when dragging
        </div>
      </div>
    );
  },
};

export const KeyboardControlsFixed: Story = {
  render: () => {
    return (
      <div style={{ width: '100%', height: '500px' }}>
        <h3>Keyboard Controls Fixed</h3>
        <p>+/- and Ctrl+/- now work properly without making the graph disappear</p>
        
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
            <ZoomPanContainer
              config={{
                mode: 'x',
                disableAnimation: true,
                showScrollBar: true,
                scrollBar: {    
                  thickness: 16,
                  color: 'rgba(239, 68, 68, 0.5)',
                  hoverColor: 'rgba(239, 68, 68, 0.8)',
                  borderRadius: 8,
                },
                controls: {
                  keyboardZoom: true,
                  keyboardPan: true,
                  wheelZoom: true,
                  dragScrollBars: true,
                },
                preventDefault: {
                  pageScroll: true,
                  pageZoom: true,       // Prevents browser zoom conflicts
                },
                resetKey: 'dblclick',
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value1" stroke="#ef4444" dot={false} strokeWidth={3} />
            </ZoomPanContainer>
          </LineChart>
        </ResponsiveContainer>
        
        <div style={{ marginTop: '10px', fontSize: '12px' }}>
          <strong>Fixed Keyboard Issues:</strong><br/>
          • ✅ <strong>+/- keys work:</strong> Direct zoom implementation (click chart first)<br/>
          • ✅ <strong>Ctrl+/- works:</strong> No browser zoom interference<br/>
          • ✅ <strong>Graph stays visible:</strong> Proper zoom calculations<br/>
          • ✅ <strong>Arrow keys pan:</strong> Hold Shift for faster movement<br/>
          • ✅ <strong>Double-click reset:</strong> Returns to original view
        </div>
      </div>
    );
  },
}; 