import React, { Component } from 'react';
import { Surface, Curve, Layer, CurveProps } from 'recharts';
import {
  curveBundle,
  curveCardinal,
  curveCardinalClosed,
  curveCardinalOpen,
  curveCatmullRomOpen,
  CurveFactory,
} from 'victory-vendor/d3-shape';
import { scaleOrdinal } from 'victory-vendor/d3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

export default class Demo extends Component {
  static displayName = 'CurveDemo';

  render() {
    const points = [
      { x: 10, y: 40 },
      { x: 50, y: 150 },
      { x: 90, y: 60 },
      { x: 130, y: 180 },
      { x: 170, y: 50 },
    ];
    const scale = scaleOrdinal(schemeCategory10);
    const ticks = [0, 0.25, 0.5, 0.75, 1];

    return (
      <Surface width={600} height={800}>
        <Layer>
          <text x={10} y={20}>
            curveCardinalClosed
          </text>
          {ticks.map((entry: any, index: number) => (
            <Layer key={`curve-${index}`}>
              <Curve
                stroke={scale(entry) as string}
                fill="none"
                type={curveCardinalClosed.tension(entry)}
                points={points}
              />
              <text x={200} y={40 + index * 30} fill={scale(entry) as string}>
                {`curveCardinalClosed.tension(${entry})`}
              </text>
            </Layer>
          ))}

          {points.map((entry, index) => (
            <circle cx={entry.x} cy={entry.y} r={4} key={`circle-${index}`} />
          ))}
        </Layer>

        <Layer transform="translate(0, 200)">
          <text x={10} y={20}>
            curveCatmullRomOpen
          </text>
          {ticks.map((entry: any, index: number) => (
            <Layer key={`curve-${index}`}>
              <Curve
                stroke={scale(entry) as string}
                fill="none"
                type={curveCatmullRomOpen.alpha(entry)}
                points={points}
              />
              <text x={200} y={40 + index * 30} fill={scale(entry) as string}>
                {`curveCatmullRomOpen.alpha(${entry})`}
              </text>
            </Layer>
          ))}

          {points.map((entry, index) => (
            <circle cx={entry.x} cy={entry.y} r={4} key={`circle-${index}`} />
          ))}
        </Layer>

        {/* <Layer transform="translate(0, 400)">
          <text x={10} y={20}>curveBundle</text>
          {
            ticks.map((entry: any, index: number) => (
              <Layer key={`curve-${index}`}>
                <Curve
                  stroke={scale(entry) as string}
                  fill="none"
                  type={curveBundle.beta(entry)}
                  points={points}
                />
                <text x={200} y={40 + index * 30} fill={scale(entry) as string}>
                  {`curveBundle.beta(${entry})`}
                </text>
              </Layer>
            ))
          }

          {
            points.map((entry, index) => (
              <circle cx={entry.x} cy={entry.y} r={4} key={`circle-${index}`}/>
            ))
          }
        </Layer> */}
      </Surface>
    );
  }
}
