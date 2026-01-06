import{e}from"./iframe-I1Pz45Ny.js";import{R as i}from"./arrayEqualityCheck-BssfPt5l.js";import{C as a}from"./ComposedChart-C6b_M18r.js";import{C as p}from"./CartesianGrid-C73f4GUu.js";import{X as n}from"./XAxis-C686G_Ng.js";import{Y as s}from"./YAxis-yT2DhUCy.js";import{L as c}from"./Line-BNPFyFtr.js";import{R as d}from"./ReferenceLine-TUgKjRhC.js";import{R as g}from"./RechartsHookInspector-CR238VhK.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bq-o5tNM.js";import"./PolarUtils-DcZ6GJsX.js";import"./RechartsWrapper-DCDr6Jqb.js";import"./hooks-B674bzAM.js";import"./axisSelectors-BE-GMhoq.js";import"./zIndexSlice-BV16LNaQ.js";import"./CartesianChart-DRbFdOf0.js";import"./chartDataContext-CiPGF6pl.js";import"./CategoricalChart-Cv93x4E-.js";import"./CartesianAxis-BfHa-zKL.js";import"./Layer-DQZYEAka.js";import"./Text-DswTa9RV.js";import"./DOMUtils--5RVCy_u.js";import"./Label-BgdagQ_F.js";import"./ZIndexLayer-BcHuHMGr.js";import"./types-CrbLuNpc.js";import"./ReactUtils-_pBy8ldc.js";import"./ActivePoints-dh-kFKvq.js";import"./Dot-CUoJxuAW.js";import"./RegisterGraphicalItemId-S1t7FnBd.js";import"./ErrorBarContext-CapFOLPB.js";import"./GraphicalItemClipPath-CYavBbht.js";import"./SetGraphicalItem-B3UzWK5E.js";import"./useAnimationId-SAHxkggc.js";import"./getRadiusAndStrokeWidthFromDot-CMO9CrvP.js";import"./ActiveShapeUtils-BdkX4Sau.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-JQHiIfjv.js";import"./Trapezoid-DAueh7ih.js";import"./Sector-B4M-Rhc-.js";import"./Symbols-BVua8K5W.js";import"./Curve-CHlRnf3G.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DMBIHBp8.js";import"./ChartSizeDimensions-rQb-Z9Di.js";import"./OffsetShower-DqiW8ZGm.js";import"./PlotAreaShower-DtXJ5a61.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
