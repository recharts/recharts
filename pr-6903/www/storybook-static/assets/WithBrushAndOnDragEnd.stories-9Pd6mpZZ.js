import{e}from"./iframe-oKMzB0d-.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Caoo2I2E.js";import{B as p}from"./BarChart-uKUt4LEQ.js";import{X as l}from"./XAxis-DlRmKJ01.js";import{Y as h}from"./YAxis-DLym79d9.js";import{B as c}from"./Brush-xQIQAtju.js";import{B as x}from"./Bar-DXRs6EGK.js";import{R as u}from"./RechartsHookInspector-BzEUDXeW.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BTiWYe8E.js";import"./PolarUtils-BvDSiGX_.js";import"./RechartsWrapper-CTDVW_mD.js";import"./hooks-CriE4jYz.js";import"./axisSelectors-igA0S6xv.js";import"./zIndexSlice-BjyYTZgT.js";import"./CartesianChart-CEC_RciI.js";import"./chartDataContext-CTkSsRq2.js";import"./CategoricalChart-CKuwRZ5o.js";import"./CartesianAxis-D9OPLMCI.js";import"./Layer-Drq4I3c8.js";import"./Text-BAYt6EI9.js";import"./DOMUtils-xOASrBrw.js";import"./Label-CUg786Ba.js";import"./ZIndexLayer-pfpD2pdJ.js";import"./types-Bjx9mdsH.js";import"./tooltipContext-CIiVfwCR.js";import"./ReactUtils-BHQlFXLR.js";import"./ActiveShapeUtils-r0uOmI_9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CfUKIL1Q.js";import"./useAnimationId-D0v972Sk.js";import"./Trapezoid-D0zfblCG.js";import"./Sector-DAIlPrp3.js";import"./Symbols-mKBUz55k.js";import"./Curve-C8ob2FQq.js";import"./RegisterGraphicalItemId-Bt6_4oI2.js";import"./ErrorBarContext-DSBHo_om.js";import"./GraphicalItemClipPath-AaekTZGq.js";import"./SetGraphicalItem-BmLbSZv4.js";import"./getZIndexFromUnknown-CRgOvNxX.js";import"./graphicalItemSelectors-5UOTYK6r.js";import"./index-Bw063qfE.js";import"./ChartSizeDimensions-BmK2dJEG.js";import"./OffsetShower-B2D8CtyY.js";import"./PlotAreaShower-DVDhbnca.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
