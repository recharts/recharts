import{e}from"./iframe-BfbK0YnM.js";import{R as i}from"./arrayEqualityCheck-DNFpTLKx.js";import{C as a}from"./ComposedChart-CxQMJJ37.js";import{C as p}from"./CartesianGrid-DByKPwMu.js";import{X as n}from"./XAxis-C98xK6t1.js";import{Y as s}from"./YAxis-BIVxSChd.js";import{L as c}from"./Line-DzpsIfMt.js";import{R as d}from"./ReferenceLine-D6fjqSES.js";import{R as g}from"./RechartsHookInspector-hJ2wORVM.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-1x2577Vl.js";import"./PolarUtils-D7VIOQ5-.js";import"./RechartsWrapper-CneYaVm0.js";import"./hooks-C3PasfZ_.js";import"./axisSelectors-B0fcML92.js";import"./zIndexSlice-C2nD2lty.js";import"./CartesianChart-DvEdRfkB.js";import"./chartDataContext-BgZQ9X9l.js";import"./CategoricalChart-bjsre3s0.js";import"./CartesianAxis-BYWnjPPG.js";import"./Layer-CgE-ub3Y.js";import"./Text-CnAgZ5uJ.js";import"./DOMUtils-ed8aeX9h.js";import"./Label-DahQkxIF.js";import"./ZIndexLayer-aH4ZpYgD.js";import"./types-Bmf6Pun4.js";import"./ReactUtils-CcajNckk.js";import"./ActivePoints-DV5Nx3pw.js";import"./Dot-Dpbc4XUr.js";import"./RegisterGraphicalItemId-CqePIzFp.js";import"./ErrorBarContext-CY5jd0h0.js";import"./GraphicalItemClipPath-MsgVJj5Y.js";import"./SetGraphicalItem-C-oQkIvQ.js";import"./useAnimationId-D-pFcM5J.js";import"./getRadiusAndStrokeWidthFromDot-BH3TeMiB.js";import"./ActiveShapeUtils-C7AgwxsO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BHHp3Xwt.js";import"./Trapezoid-CzxVEg4f.js";import"./Sector-BlKZ7V0w.js";import"./Symbols-sbw_CJaX.js";import"./Curve-DDb4cbsk.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DXUjyqxC.js";import"./ChartSizeDimensions-Cp6ZFz8t.js";import"./OffsetShower-C9W4p0Nm.js";import"./PlotAreaShower-Bs9OF-cp.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
