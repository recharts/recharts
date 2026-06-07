import{R as t}from"./iframe-UrDM9Xq3.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-ByG8njt8.js";import{B as p}from"./BarChart-CAK7rexA.js";import{X as l}from"./XAxis-DnTKDl6t.js";import{Y as h}from"./YAxis-B_QpZZ2v.js";import{B as x}from"./Brush-Du59qFN5.js";import{B as c}from"./Bar-BOsKiamZ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CN88OGp3.js";import"./index-DNiwhT54.js";import"./index-Cn_MLy2m.js";import"./get-DL-gpN5o.js";import"./resolveDefaultProps-PeQIR1GL.js";import"./isWellBehavedNumber-CLVIVmGZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dm1mVgCK.js";import"./index-B2ZS3Yz1.js";import"./index-4YA6lX68.js";import"./renderedTicksSlice-SpzHxRDt.js";import"./axisSelectors-BJCtqUC9.js";import"./d3-scale-DVQsPwxD.js";import"./string-B6fdYHAA.js";import"./CartesianChart-H9EcaXcZ.js";import"./chartDataContext-K_upA5vN.js";import"./CategoricalChart-CUBoZ8Vx.js";import"./CartesianAxis-DMp3qHuF.js";import"./Layer-CegbOy6-.js";import"./Text-Z9b8Q3If.js";import"./DOMUtils-B87CjqTu.js";import"./Label-KmMVZ1kh.js";import"./ZIndexLayer-DAEesPn0.js";import"./types-DWkwwyEz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-Dgrt9PpW.js";import"./AnimatedItems-BNMmNPct.js";import"./useAnimationId-cQnLIEvC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CvnkFbTC.js";import"./ActiveShapeUtils-BKflvOdY.js";import"./RegisterGraphicalItemId-cO8s0yof.js";import"./ErrorBarContext-DmZiqBUr.js";import"./GraphicalItemClipPath-1r6w1RAv.js";import"./SetGraphicalItem-BPavUJGK.js";import"./getZIndexFromUnknown-C57GEJc7.js";import"./graphicalItemSelectors-C80CPUyS.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};
