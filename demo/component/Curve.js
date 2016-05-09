import React from 'react';
import { Surface, Curve, Layer } from 'recharts';
import { curveBundle, curveCardinal, curveCardinalClosed, curveCardinalOpen  } from 'd3-shape';

export default React.createClass({
  render () {
    let points = [
      { x: 10, y: 40 },
      { x: 50, y: 150 },
      { x: 90, y: 60 },
      { x: 130, y: 180 },
      { x: 170, y: 50 }
    ];

    return (
      <Surface width={400} height={400}>
        <Layer>
          <text x={10} y={20}>curveCardinalClosed</text>
          <Curve stroke="#000" fill="none" type={curveCardinalClosed.tension(0)} points={points} />
          <Curve stroke="#000" fill="none" type={curveCardinalClosed.tension(0.25)} points={points} />
          <Curve stroke="#000" fill="none" type={curveCardinalClosed.tension(0.5)} points={points} />
          <Curve stroke="#000" fill="none" type={curveCardinalClosed.tension(0.75)} points={points} />
          <Curve stroke="#000" fill="none" type={curveCardinalClosed.tension(1)} points={points} />
          {
            points.map((entry, index) => (
              <circle cx={entry.x} cy={entry.y} r={4} key={`circle-${index}`}/>
            ))
          }
        </Layer>
      </Surface>
    );
  }
});


