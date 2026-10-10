import{R as t}from"./iframe-CMIMGlWj.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-wuzXiITR.js";import{B as p}from"./BarChart-OrPmzBDp.js";import{X as l}from"./XAxis-D-eD-ZKH.js";import{Y as h}from"./YAxis-QT5bDNHN.js";import{B as x}from"./Brush-CkbAqllm.js";import{B as c}from"./Bar-dXJHjyuv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BCA5qR4E.js";import"./index-DwSr_A0C.js";import"./index-CWAjLZC8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BjTUlmaN.js";import"./isWellBehavedNumber-BbJa2uqW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BgfG_ZAZ.js";import"./axisSelectors-Bmc6RJCp.js";import"./d3-scale-CuGTTQPB.js";import"./index-FLl3VRzC.js";import"./index-CywZrMsp.js";import"./renderedTicksSlice-C4raIVaG.js";import"./index-C3fJL_AW.js";import"./CartesianChart-DIp5NX_F.js";import"./chartDataContext-D68hLw7p.js";import"./CategoricalChart-DZk0PJqR.js";import"./CartesianAxis-Dlpx8iT-.js";import"./Layer-DEZqQRHO.js";import"./Text-BN1TaMnw.js";import"./pageBackground-DO_pzhaN.js";import"./useId-DTR3y050.js";import"./useBackwardsCompatibleTheme-MBdvqbhw.js";import"./Label-BNdyp9o_.js";import"./ZIndexLayer-D_EAZsge.js";import"./types-DSyx3F07.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BjpwlZ4G.js";import"./useAnimationId-x76x2OiL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZX9uaas.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-1w8yv5Vh.js";import"./tooltipContext-A6E9dtvS.js";import"./dataEntryStyles-TQ5R--o5.js";import"./ErrorBarContext-qJfLExSm.js";import"./GraphicalItemClipPath-BGm7g6KG.js";import"./SetGraphicalItem-DP6zOJ07.js";import"./getZIndexFromUnknown-RtAjFLaY.js";import"./useGraphicalItemIdentity-9tRqDWZI.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
