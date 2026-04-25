import{e}from"./iframe-BtT0SffI.js";import{R as i}from"./arrayEqualityCheck-CUZpg3gX.js";import{C as p}from"./ComposedChart-Bz4spIYG.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-7S18xPm2.js";import{X as s}from"./XAxis-DXJhdPvR.js";import{Y as c}from"./YAxis-CB6KhlLv.js";import{L as d}from"./Line-CancUYtT.js";import{R as g}from"./ReferenceLine-BBLcve0o.js";import{R as f}from"./RechartsHookInspector-CB7j-2_m.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D8J53oj2.js";import"./immer-BbVrPebv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D-UxfXd4.js";import"./index-yehPfNJx.js";import"./hooks-DumFRXGT.js";import"./axisSelectors-BJ3ETvYB.js";import"./d3-scale-Crn8UFeD.js";import"./zIndexSlice-EIyEPPia.js";import"./renderedTicksSlice-DR61tOdZ.js";import"./CartesianChart-CmyYYHYF.js";import"./chartDataContext-D50adY5q.js";import"./CategoricalChart-CFyceSYG.js";import"./CartesianAxis-By19jgIb.js";import"./Layer-C7tDoNBc.js";import"./Text-CjXZVbw2.js";import"./DOMUtils-C0x823nG.js";import"./Label-DMCJfrwq.js";import"./ZIndexLayer-Dsmg3QGj.js";import"./types-mmIvaWnd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BK_CWQIO.js";import"./ActivePoints-cSdEfonb.js";import"./Dot-4SrqtSKy.js";import"./RegisterGraphicalItemId-DOATocTa.js";import"./ErrorBarContext-ClxAS9vu.js";import"./GraphicalItemClipPath-CKGxUURQ.js";import"./SetGraphicalItem-y832ODij.js";import"./useAnimationId-Dq1v2kj_.js";import"./getRadiusAndStrokeWidthFromDot-SP98bMI8.js";import"./ActiveShapeUtils-qAI1kzWp.js";import"./isPlainObject-DlgbpHVk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DihoywZ_.js";import"./Trapezoid-CtXqEzYB.js";import"./Sector-BupA_fFM.js";import"./Symbols-Bh8GvTwl.js";import"./symbol-BNo9YZcN.js";import"./step-B__dH_Lt.js";import"./Curve-BjgRzFMd.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Da5q_Tsr.js";import"./ChartSizeDimensions-77XN8iRa.js";import"./OffsetShower-DzUOYmPE.js";import"./PlotAreaShower-CT5v2Ou7.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
