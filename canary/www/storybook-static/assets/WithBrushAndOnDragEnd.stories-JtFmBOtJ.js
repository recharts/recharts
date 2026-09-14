import{R as t}from"./iframe-IEvG1YpM.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Cihis5J4.js";import{B as p}from"./BarChart-BXIF1zo6.js";import{X as l}from"./XAxis-DtybEOgK.js";import{Y as h}from"./YAxis-Ci6Vvz28.js";import{B as x}from"./Brush-CBcuJACs.js";import{B as c}from"./Bar-B423ect3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-By8-YJwd.js";import"./index-POEf-RyB.js";import"./index-CK_MpSkX.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-bAVDGQbe.js";import"./isWellBehavedNumber-tc8VJoOF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CcfL5xRi.js";import"./axisSelectors-Df8E9bUD.js";import"./d3-scale-TRidtPn4.js";import"./index-BBOVdE4u.js";import"./index-DwR3lO_P.js";import"./renderedTicksSlice-CllAnVPd.js";import"./index-DdsMrJb_.js";import"./CartesianChart-DCzoDDQF.js";import"./chartDataContext-xd-wjTQ9.js";import"./CategoricalChart-DdwxNdAm.js";import"./CartesianAxis-CPXu2kHS.js";import"./Layer-BKPgTeR2.js";import"./Text-Dae-pI4X.js";import"./DOMUtils-DCB2CSvd.js";import"./useId-CcNvwQMQ.js";import"./useBackwardsCompatibleTheme-BUS5d1Jo.js";import"./Label-CuRdPt5D.js";import"./ZIndexLayer-DyfcVau_.js";import"./types-CuB5x_0O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-UW_5IIXp.js";import"./useAnimationId-qJZeznSq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BjOMJxA-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BSvyuOAY.js";import"./tooltipContext-CqsFsWw8.js";import"./RegisterGraphicalItemId-CAU5eRLw.js";import"./ErrorBarContext-BWjTRxXS.js";import"./GraphicalItemClipPath-BuVEsdiO.js";import"./SetGraphicalItem-Du-9XCGr.js";import"./getZIndexFromUnknown-obQyIC67.js";import"./useGraphicalItemIdentity-BKM5eyt0.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
