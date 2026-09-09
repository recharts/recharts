import{R as t}from"./iframe-CUWBn4q2.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CXDrS8ji.js";import{B as p}from"./BarChart-CSYdrMtt.js";import{X as l}from"./XAxis-BLeODyW3.js";import{Y as h}from"./YAxis-DznKUGT9.js";import{B as x}from"./Brush-754sFl5c.js";import{B as c}from"./Bar-DrwgWZnE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D674SENT.js";import"./index-CLYmkFIA.js";import"./index-9Wsbece1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D0umfLoR.js";import"./isWellBehavedNumber-C7RzZnbq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D0kr3yQ2.js";import"./axisSelectors-BtjPkbxT.js";import"./d3-scale-CSrhJk_u.js";import"./index-C3m0kF0l.js";import"./index-BRlPI1a6.js";import"./renderedTicksSlice-x_-J1N5G.js";import"./index-B1_r5ctg.js";import"./CartesianChart-DasXIysH.js";import"./chartDataContext-CWpZ_4LY.js";import"./CategoricalChart-C2VzdUWy.js";import"./CartesianAxis-B28nXVtL.js";import"./Layer-B2jZ5e2I.js";import"./Text-DyTjweFw.js";import"./DOMUtils-DIgt7RHT.js";import"./useId-D5YR5LZL.js";import"./useBackwardsCompatibleTheme-D6xiuF9M.js";import"./Label-kwBf54iY.js";import"./ZIndexLayer-D2yQ2Oeh.js";import"./types-Cm8He0RL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DFCeZ6-M.js";import"./useAnimationId-75oMmLO2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CkXPWe3J.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BbASsAoV.js";import"./tooltipContext-Dqre0BOE.js";import"./RegisterGraphicalItemId-xVBFXNgo.js";import"./ErrorBarContext-BKxRmBr1.js";import"./GraphicalItemClipPath-g7UOCVV4.js";import"./SetGraphicalItem-DiC6WCa5.js";import"./getZIndexFromUnknown-y4PX2ahG.js";import"./useGraphicalItemIdentity-B8tF-TLM.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
