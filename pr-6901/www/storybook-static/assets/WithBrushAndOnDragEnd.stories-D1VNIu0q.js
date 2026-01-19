import{e}from"./iframe-CYxrfzzg.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DP0kYLs9.js";import{B as p}from"./BarChart-C0zdLmjy.js";import{X as l}from"./XAxis-Dmnl9BhD.js";import{Y as h}from"./YAxis-BTS_JFed.js";import{B as c}from"./Brush-j7cbx1cN.js";import{B as x}from"./Bar-C9RrmFY_.js";import{R as u}from"./RechartsHookInspector-CKj7z6NA.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKLgGEJu.js";import"./PolarUtils-DvrgzDo3.js";import"./RechartsWrapper-BZIHJFZl.js";import"./hooks-D7sBhVDC.js";import"./axisSelectors-tnzCSBUQ.js";import"./zIndexSlice-BSioTKNu.js";import"./CartesianChart-IXi_xLkG.js";import"./chartDataContext-CfwPSU5Z.js";import"./CategoricalChart-SSUATRMB.js";import"./CartesianAxis-nwRWnCEW.js";import"./Layer-2CuCTQZP.js";import"./Text-DTTsbVV0.js";import"./DOMUtils-DHZkznbd.js";import"./Label-CODmrKP6.js";import"./ZIndexLayer-C2lFhuDH.js";import"./types-VzENM0tL.js";import"./tooltipContext-Ir0EVXeq.js";import"./ReactUtils-BBB3MvZm.js";import"./ActiveShapeUtils-DyLP3gGN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D_ysU7C8.js";import"./useAnimationId-CUiISCsF.js";import"./Trapezoid-B1yeBwPe.js";import"./Sector-BlYN7QdB.js";import"./Symbols-BD1jJmy1.js";import"./Curve-BNAJs-1X.js";import"./RegisterGraphicalItemId-C3n7rMAE.js";import"./ErrorBarContext-fxacjPOS.js";import"./GraphicalItemClipPath-CBtigOwz.js";import"./SetGraphicalItem-DBWDI1yN.js";import"./getZIndexFromUnknown-BPWz5uXR.js";import"./graphicalItemSelectors-CMyoVC1C.js";import"./index-DoBieDfB.js";import"./ChartSizeDimensions-HwMCl-rE.js";import"./OffsetShower-B_S1QpU_.js";import"./PlotAreaShower-CbgSdBZD.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
