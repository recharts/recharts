import{R as t}from"./iframe-C_uZmGJ0.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DLwc6L6K.js";import{B as p}from"./BarChart-C-cGJ6C_.js";import{X as l}from"./XAxis-YZBSNmPV.js";import{Y as h}from"./YAxis-CCpz6f2F.js";import{B as x}from"./Brush-CluM7Hlg.js";import{B as c}from"./Bar-Df0K6-nv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ssm5i5NQ.js";import"./index-BPNGFjKX.js";import"./index-C_Xrr1JY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-qk1iWAfg.js";import"./isWellBehavedNumber-bflz4OY5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CXap3oDx.js";import"./axisSelectors-Bynx2pvt.js";import"./d3-scale-qCFWvZmx.js";import"./index-i5xBuxs4.js";import"./index-D4BdbP-V.js";import"./renderedTicksSlice-DdBaQZqr.js";import"./index-DmhH5Xz3.js";import"./CartesianChart-RcuLD4DP.js";import"./chartDataContext-DAujoSs5.js";import"./CategoricalChart-BSnQBJZ3.js";import"./CartesianAxis-Dw4Yg42W.js";import"./Layer-FqzZic0p.js";import"./Text-gzTYclIX.js";import"./DOMUtils-D581TnDq.js";import"./useId-CAahTF3z.js";import"./useBackwardsCompatibleTheme-Dcj-aUF4.js";import"./Label-fJXJ83zZ.js";import"./ZIndexLayer-WWept0wS.js";import"./types-mc5h_EFw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Bdmry8Nm.js";import"./useAnimationId-DVpik13A.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-H3ZsFvAX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DegrRRKp.js";import"./tooltipContext-DF8jhdSm.js";import"./RegisterGraphicalItemId-BuMk-4uG.js";import"./ErrorBarContext-CukgZUAO.js";import"./GraphicalItemClipPath-CZ-MeeIA.js";import"./SetGraphicalItem-CizKrbKK.js";import"./getZIndexFromUnknown-DI5RnXYK.js";import"./useGraphicalItemIdentity-BVAmN--h.js";import"./dataEntryStyles-DgsaIY_H.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
