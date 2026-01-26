import{e}from"./iframe-BtSIgQK6.js";import{R as i}from"./arrayEqualityCheck-DE2iBB4w.js";import{C as a}from"./ComposedChart-D2t4vYg_.js";import{C as p}from"./CartesianGrid-D4eJIbAF.js";import{X as n}from"./XAxis-Duh47LNW.js";import{Y as s}from"./YAxis-Dja6peqA.js";import{L as c}from"./Line-DK5zDU5f.js";import{R as d}from"./ReferenceLine-oNHtJXTh.js";import{R as g}from"./RechartsHookInspector-CTyYdRny.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-tnH-YOXI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-y4jP1OLx.js";import"./hooks-3j04d5vi.js";import"./axisSelectors-CGAxpLYE.js";import"./zIndexSlice-BxfsWazG.js";import"./CartesianChart-CbG0k6t0.js";import"./chartDataContext-DyC7E7bB.js";import"./CategoricalChart-CKsWezcf.js";import"./CartesianAxis-B7nPrlAA.js";import"./Layer-C0Jzn9sV.js";import"./Text-B5GBCwiW.js";import"./DOMUtils-1anFrXHc.js";import"./Label-CWG_XmjD.js";import"./ZIndexLayer-GjRfBXiF.js";import"./types-CCc-_PPP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CkWZzFSr.js";import"./ActivePoints-DmeZ1ufV.js";import"./Dot-B1qpgIfY.js";import"./RegisterGraphicalItemId-B0VNE0Pd.js";import"./ErrorBarContext-COBKZW6S.js";import"./GraphicalItemClipPath-MWrfhZxI.js";import"./SetGraphicalItem-C03tHeu5.js";import"./useAnimationId-B8iQHdnT.js";import"./getRadiusAndStrokeWidthFromDot-BqZRZ_5P.js";import"./ActiveShapeUtils-8qEwWVM1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BdN80mGv.js";import"./Trapezoid-CtEgnRI2.js";import"./Sector-BRe1-FfM.js";import"./Symbols-DbTQ7A03.js";import"./Curve-CPkDoGPV.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D1fEpgHD.js";import"./ChartSizeDimensions-k7v_FXVx.js";import"./OffsetShower-4wP9Bq0X.js";import"./PlotAreaShower-FD68gciE.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
