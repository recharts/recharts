import{e}from"./iframe-CsUpRRwn.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Df4uzLw-.js";import{B as p}from"./BarChart-DHeG9m1m.js";import{X as l}from"./XAxis-DUx64kuA.js";import{Y as h}from"./YAxis-FNiiJ-AQ.js";import{B as c}from"./Brush-O5J_YZhm.js";import{B as x}from"./Bar-CuAM-qQ6.js";import{R as u}from"./RechartsHookInspector-D2kAWSRM.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ZLsJ9Xuo.js";import"./PolarUtils-B4KHlE6s.js";import"./RechartsWrapper-zi21JKPF.js";import"./hooks-DRsri2Tq.js";import"./axisSelectors-DgM-VaIw.js";import"./zIndexSlice-Cey6hWeC.js";import"./CartesianChart-k_KAObT0.js";import"./chartDataContext-DdVHUCw_.js";import"./CategoricalChart-dx0iu6Gx.js";import"./CartesianAxis-BncnjfCs.js";import"./Layer-DS1Wp5Ew.js";import"./Text-5TnWPMA2.js";import"./DOMUtils-CimXgsHI.js";import"./Label-B_KIKWwL.js";import"./ZIndexLayer-VR9NNsxL.js";import"./types-B0LA1FfJ.js";import"./tooltipContext-CLzHhvJj.js";import"./ReactUtils-BcCnPuvu.js";import"./ActiveShapeUtils-BaTMfdg_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BbT4XfPo.js";import"./useAnimationId-LktXmMrZ.js";import"./Trapezoid-BXYnhgSX.js";import"./Sector-B6CpJ8fc.js";import"./Symbols-DiPp8IeL.js";import"./Curve-qa4VelFY.js";import"./RegisterGraphicalItemId-CxpIkg19.js";import"./ErrorBarContext-DPfvolDE.js";import"./GraphicalItemClipPath-CasRTjDB.js";import"./SetGraphicalItem-6nFc_yGt.js";import"./getZIndexFromUnknown-DqeuVMHk.js";import"./graphicalItemSelectors-BuV3JL75.js";import"./index-DOefsbVi.js";import"./ChartSizeDimensions-DjP1Vw_U.js";import"./OffsetShower-C5pOpIAI.js";import"./PlotAreaShower-wVtzUP4L.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
