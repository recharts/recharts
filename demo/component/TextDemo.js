import React, { Component } from 'react';
import { Text } from 'recharts';

class TextDemo extends Component {
  state = {
    exampleText: 'This is really long text',
    x: 0,
    y: 0,
    width: 300,
    height: 200,
    angle: 0,
    scaleToFit: false,
    textAnchor: 'start',
    verticalAnchor: 'start',
    fontSize: '1em',
    fontFamily: 'Arial',
    lineHeight: '1em',
    showAnchor: true,
    resizeSvg: true,
  };

  render() {
    const styles = {
      exampleText: {
        width: 200,
      },
      range: {
        marginLeft: 25,
        width: 275,
      },
      svg: {
        height: 200,
        display: 'block',
        border: '1px solid #aaa',
        marginBottom: 10,
      },
    };

    return (
      <div>
        <h2>Demo</h2>
        <svg width={this.state.resizeSvg ? this.state.width : 300} style={styles.svg}>
          <Text
            x={this.state.x}
            y={this.state.y}
            width={this.state.width}
            textAnchor={this.state.textAnchor}
            verticalAnchor={this.state.verticalAnchor}
            lineHeight={this.state.lineHeight}
            scaleToFit={this.state.scaleToFit}
            angle={this.state.angle}
            style={{ fontSize: this.state.fontSize, fontFamily: this.state.fontFamily }}
          >
            {this.state.exampleText}
          </Text>
          { this.state.showAnchor && <circle cx={this.state.x} cy={this.state.y} r="2" fill="red" /> }
        </svg>

        <div>
          text:
          <input
            type="text"
            style={styles.exampleText}
            value={this.state.exampleText}
            onChange={e => this.setState({ exampleText: e.target.value })}
          />
        </div>

        <div>
          x: <input type="text" value={this.state.x} onChange={e => this.setState({ x: Number(e.target.value) })} />
          y: <input type="text" value={this.state.y} onChange={e => this.setState({ y: Number(e.target.value) })} />
        </div>

        <div>
          width:
          <input
            type="range"
            style={styles.range}
            min="25" max="300"
            value={this.state.width}
            onChange={e => this.setState({ width: Number(e.target.value) })}
          /> {this.state.width}
        </div>

        <div>
          textAnchor:
          <label>
            <input
              type="radio"
              value="start"
              onChange={e => this.setState({ textAnchor: e.target.value })}
              checked={this.state.textAnchor === 'start'}
            /> start
          </label>
          <label>
            <input
              type="radio"
              value="middle"
              onChange={e => this.setState({ textAnchor: e.target.value })}
              checked={this.state.textAnchor === 'middle'}
            /> middle
          </label>
          <label>
            <input
              type="radio"
              value="end"
              onChange={e => this.setState({ textAnchor: e.target.value })}
              checked={this.state.textAnchor === 'end'}
            /> end
          </label>
        </div>

        <div>
          verticalAnchor:
          <label>
            <input
              type="radio"
              value="start"
              onChange={e => this.setState({ verticalAnchor: e.target.value })}
              checked={this.state.verticalAnchor === 'start'}
            /> start
          </label>
          <label>
            <input
              type="radio"
              value="middle"
              onChange={e => this.setState({ verticalAnchor: e.target.value })}
              checked={this.state.verticalAnchor === 'middle'}
            /> middle
          </label>
          <label>
            <input
              type="radio"
              value="end"
              onChange={e => this.setState({ verticalAnchor: e.target.value })}
              checked={this.state.verticalAnchor === 'end'}
            /> end
          </label>
        </div>

        <div>
          fontSize:
          <input
            type="text"
            value={this.state.fontSize}
            onChange={e => this.setState({ fontSize: e.target.value })}
          />
        </div>

        <div>
          fontFamily:
          <input
            type="text"
            value={this.state.fontFamily}
            onChange={e => this.setState({ fontFamily: e.target.value })}
          />
        </div>

        <div>
          lineHeight:
          <input
            type="text"
            value={this.state.lineHeight}
            onChange={e => this.setState({ lineHeight: e.target.value })}
          />
        </div>

        <div>
          angle:
          <input
            type="range"
            min="0" max="360"
            value={this.state.angle}
            onChange={e => this.setState({ angle: Number(e.target.value) })}
          />
        </div>

        <div>
          <label>
            scaleToFit:
            <input
              type="checkbox"
              onChange={e => this.setState({ scaleToFit: !this.state.scaleToFit })}
              checked={this.state.scaleToFit}
            />
          </label>
        </div>

        <div>
          <label>
            show anchor:
            <input
              type="checkbox"
              onChange={e => this.setState({ showAnchor: !this.state.showAnchor })}
              checked={this.state.showAnchor}
            />
          </label>
        </div>

        <div>
          <label>
            resize svg (container):
            <input
              type="checkbox"
              onChange={e => this.setState({ resizeSvg: !this.state.resizeSvg })}
              checked={this.state.resizeSvg}
            />
          </label>
        </div>

        <hr />

        <h2>Simple</h2>
        <svg width={this.state.resizeSvg ? this.state.width : 300} style={styles.svg}>
          <Text x={0} width={this.state.width} verticalAnchor="start">
            {this.state.exampleText}
          </Text>
        </svg>

        <h2>Centered</h2>
        <svg width={this.state.resizeSvg ? this.state.width : 300} style={styles.svg}>
          <Text x={this.state.width / 2} width={this.state.width} verticalAnchor="start" textAnchor="middle">
            {this.state.exampleText}
          </Text>
        </svg>

        <h2>Right-aligned</h2>
        <svg width={this.state.resizeSvg ? this.state.width : 300} style={styles.svg}>
          <Text x={this.state.width} width={this.state.width} verticalAnchor="start" textAnchor="end">
            {this.state.exampleText}
          </Text>
        </svg>

        <h2>Line height</h2>
        <svg width={this.state.resizeSvg ? this.state.width : 300} style={styles.svg}>
          <Text x={0} width={this.state.width} verticalAnchor="start" lineHeight="2em">
            {this.state.exampleText}
          </Text>
        </svg>

        <h2>Styled text (fontWeight)</h2>
        <svg width={this.state.resizeSvg ? this.state.width : 300} style={styles.svg}>
          <Text x={0} width={this.state.width} verticalAnchor="start" style={{ fontWeight: 900 }}>
            {this.state.exampleText}
          </Text>
        </svg>

        <h2>Styled (fontSize px)</h2>
        <svg width={this.state.resizeSvg ? this.state.width : 300} style={styles.svg}>
          <Text x={0} width={this.state.width} verticalAnchor="start" style={{ fontSize: '24px' }}>
            {this.state.exampleText}
          </Text>
        </svg>

        <h2>Styled (fontSize em)</h2>
        <svg width={this.state.resizeSvg ? this.state.width : 300} style={styles.svg}>
          <Text x={0} width={this.state.width} verticalAnchor="start" style={{ fontSize: '1.5em' }}>
            {this.state.exampleText}
          </Text>
        </svg>

        <h2>Styled (fontSize rem)</h2>
        <svg width={this.state.resizeSvg ? this.state.width : 300} style={styles.svg}>
          <Text x={0} width={this.state.width} verticalAnchor="start" style={{ fontSize: '1.5rem' }}>
            {this.state.exampleText}
          </Text>
        </svg>

        <h2>Styled (fontSize %)</h2>
        <svg width={this.state.resizeSvg ? this.state.width : 300} style={styles.svg}>
          <Text x={0} width={this.state.width} verticalAnchor="start" style={{ fontSize: '150%' }}>
            {this.state.exampleText}
          </Text>
        </svg>

        <h2>Fit</h2>
        <svg width={this.state.resizeSvg ? this.state.width : 300} style={styles.svg}>
          <Text width={this.state.width} verticalAnchor="start" scaleToFit>
            {this.state.exampleText}
          </Text>
        </svg>

        <h2>dx && dy</h2>
        <svg width={this.state.resizeSvg ? this.state.width : 300} style={styles.svg}>
          <Text x={50} y={50} dx={10} dy={-10}  width={this.state.width} verticalAnchor="start">
            {this.state.exampleText}
          </Text>
        </svg>

        <h2>Event Handler</h2>
        <svg width={this.state.resizeSvg ? this.state.width : 300} style={styles.svg}>
          { /* eslint-disable no-alert */}
          <Text x={0} width={this.state.width} verticalAnchor="start" onClick={() => window.alert('You clicked a Text Element')}>
            Click me!
          </Text>
          { /* eslint-enable no-alert */}
        </svg>

      </div>
    );
  }
}

export default TextDemo;
