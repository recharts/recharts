import{e}from"./iframe-DvdxI6dC.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DXUAObl0.js";import{B as p}from"./BarChart-DjZxjjVi.js";import{X as l}from"./XAxis-DJowtDGC.js";import{Y as h}from"./YAxis-Qq9BKQtQ.js";import{B as c}from"./Brush-D2p9Q6cJ.js";import{B as x}from"./Bar-Bmal_jX4.js";import{R as u}from"./RechartsHookInspector-B_PrFdYH.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DH7aS_Cz.js";import"./PolarUtils-BY4iZmOi.js";import"./RechartsWrapper-BLfZDcOn.js";import"./hooks-DrOmiLx6.js";import"./axisSelectors-4CKM8Xol.js";import"./zIndexSlice-JVJMXPV9.js";import"./CartesianChart-CVXjEBNC.js";import"./chartDataContext-D9T_3Pfc.js";import"./CategoricalChart-Cx_ZKXH4.js";import"./CartesianAxis-CptW6PK3.js";import"./Layer-QQplstvs.js";import"./Text-DcBx6qw-.js";import"./DOMUtils-XQErKiOi.js";import"./Label-zPyZ6EuZ.js";import"./ZIndexLayer-Cnm_-Zvz.js";import"./types-8AXfgSIv.js";import"./tooltipContext-D7aHeXgA.js";import"./ReactUtils-DqWjpCBi.js";import"./ActiveShapeUtils-CgduogxH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CeQtanoQ.js";import"./useAnimationId-Dy3gyKDZ.js";import"./Trapezoid-BNKT4KGX.js";import"./Sector-DWkTEbbM.js";import"./Symbols-BZsKNNtj.js";import"./Curve-BRTvsj-M.js";import"./RegisterGraphicalItemId-C1Pco6VZ.js";import"./ErrorBarContext-CaA_0bex.js";import"./GraphicalItemClipPath-DNpqs3F2.js";import"./SetGraphicalItem-B3AbHWGd.js";import"./getZIndexFromUnknown-qk4iiuYL.js";import"./graphicalItemSelectors-MIUeB4Ih.js";import"./index-CwHutVPN.js";import"./ChartSizeDimensions-Dk78WGJs.js";import"./OffsetShower-BP3lO1NK.js";import"./PlotAreaShower-DiTB-vHo.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const se=["WithBrushAndOnDragEnd"];export{t as WithBrushAndOnDragEnd,se as __namedExportsOrder,me as default};
