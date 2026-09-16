import{R as t}from"./iframe-CUlWXK_q.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DM6pr2-S.js";import{B as p}from"./BarChart-FEZeS9DL.js";import{X as l}from"./XAxis-Djxn7jPm.js";import{Y as h}from"./YAxis-noEkR1dh.js";import{B as x}from"./Brush-DaOHmXW6.js";import{B as c}from"./Bar-CBMZttDC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C_r5ITnz.js";import"./index-DeLCoNGq.js";import"./index-DkyNoZPG.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D0jJQ7td.js";import"./isWellBehavedNumber-dgjlUMt0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5F4JVOA.js";import"./axisSelectors-BD41NxQw.js";import"./d3-scale-hq__MZkp.js";import"./index-B7A70wTi.js";import"./index-BLklzkKd.js";import"./renderedTicksSlice-BdBFpUvH.js";import"./index-BBeD-IIB.js";import"./CartesianChart-CRlJjBxC.js";import"./chartDataContext-NP5kWzmf.js";import"./CategoricalChart-BnjqCNZT.js";import"./CartesianAxis-CvaDBGbl.js";import"./Layer-DTo8-sn1.js";import"./Text-Dwcbogye.js";import"./DOMUtils-C2wyshXr.js";import"./useId-xdSBMbRU.js";import"./useBackwardsCompatibleTheme-DPUtEB0l.js";import"./Label-CHddXrDn.js";import"./ZIndexLayer-CBqpLv67.js";import"./types-C9dSmSxn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DODKpEkU.js";import"./useAnimationId-JJOW80s5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCmoInZ0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BTWGbocf.js";import"./tooltipContext-Dv4BvnFb.js";import"./RegisterGraphicalItemId-CjUENZzL.js";import"./ErrorBarContext-Ff5dUprW.js";import"./GraphicalItemClipPath-gLO2Kyz_.js";import"./SetGraphicalItem-CLwyvQ_z.js";import"./getZIndexFromUnknown-t73Hq9dl.js";import"./useGraphicalItemIdentity-B9Lyw3Fg.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
