import{R as t}from"./iframe-F7LhK7Eo.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B_tReVy-.js";import{B as p}from"./BarChart-C5xktvUf.js";import{X as l}from"./XAxis-BKvY-R-H.js";import{Y as h}from"./YAxis-CJvKQyTT.js";import{B as x}from"./Brush-b2xq4HC5.js";import{B as c}from"./Bar-CVGfn7Ez.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C_DYoZtt.js";import"./index-BHnugEqK.js";import"./index-D2U0SDM0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BWBKDxpl.js";import"./isWellBehavedNumber-DjIyZMF-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ay4Rio5L.js";import"./axisSelectors-u93D5o3N.js";import"./d3-scale-Cx-l4XO1.js";import"./index-C3Rm0W8c.js";import"./index-DQvCajjI.js";import"./renderedTicksSlice-B1tuu0tD.js";import"./index-BWf5kuaX.js";import"./CartesianChart-B3D6zv8Y.js";import"./chartDataContext-DhRxggLS.js";import"./CategoricalChart-D6bN-RZ3.js";import"./CartesianAxis-lENxpg_y.js";import"./Layer-DYdC0UVh.js";import"./Text-DW85mx3b.js";import"./DOMUtils-BT8dLI2y.js";import"./useId-DyKnYw8e.js";import"./useBackwardsCompatibleTheme-IFXQGVV2.js";import"./Label-Cunaqz8i.js";import"./ZIndexLayer-BeZh5IO9.js";import"./types-Cc5FeE6i.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-9NyDgZfV.js";import"./useAnimationId-1tb1AqGd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CxCtZOg2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B1DBYTAd.js";import"./tooltipContext-1hNJk_yk.js";import"./RegisterGraphicalItemId-G1rEfZcP.js";import"./ErrorBarContext-Cwt6Jtd7.js";import"./GraphicalItemClipPath-DGCCZDh5.js";import"./SetGraphicalItem-DG_xI-Un.js";import"./getZIndexFromUnknown-DBM0JNqH.js";import"./useGraphicalItemIdentity-CZAMumnN.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
