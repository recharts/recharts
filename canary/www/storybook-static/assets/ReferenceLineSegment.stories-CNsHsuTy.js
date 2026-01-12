import{e}from"./iframe-DS-q9W3A.js";import{R as i}from"./arrayEqualityCheck-uWyKn9kd.js";import{C as a}from"./ComposedChart-yx9oYSVL.js";import{C as p}from"./CartesianGrid-uZbhVA3R.js";import{X as n}from"./XAxis-B6LMs64M.js";import{Y as s}from"./YAxis-Dl_2Ddpc.js";import{L as c}from"./Line-CZlEDQOa.js";import{R as d}from"./ReferenceLine-D2AhqSwT.js";import{R as g}from"./RechartsHookInspector-BZrvl649.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DgJToWvf.js";import"./PolarUtils-COCiu7Zk.js";import"./RechartsWrapper-DIeOkYNI.js";import"./hooks-CZGKc29x.js";import"./axisSelectors-CEsznBop.js";import"./zIndexSlice-B8xvBtUi.js";import"./CartesianChart-BrZvalbT.js";import"./chartDataContext-CBbbKlpZ.js";import"./CategoricalChart-KA7oDakA.js";import"./CartesianAxis-X7LfxDL5.js";import"./Layer-DiJfTFFC.js";import"./Text-BKgeGCuD.js";import"./DOMUtils-BrAhpHFL.js";import"./Label-C1I_KKaa.js";import"./ZIndexLayer-DOFsbkoZ.js";import"./types-COe7SjWu.js";import"./ReactUtils-W1w-s9kx.js";import"./ActivePoints-BgvnRHn_.js";import"./Dot-Bw_DwRx9.js";import"./RegisterGraphicalItemId-taQunXs-.js";import"./ErrorBarContext-BpDrXqd4.js";import"./GraphicalItemClipPath-gv1wFvhy.js";import"./SetGraphicalItem-nVnJshTd.js";import"./useAnimationId-T15aFfwj.js";import"./getRadiusAndStrokeWidthFromDot-dgaMSbQl.js";import"./ActiveShapeUtils-BebX3teJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DbmbV7wJ.js";import"./Trapezoid-Durh076j.js";import"./Sector-Dl9Lnkss.js";import"./Symbols-CinIOzBd.js";import"./Curve-MfRfs5dU.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BR8_Xxtj.js";import"./ChartSizeDimensions-DRXNeAaP.js";import"./OffsetShower-CYsEpPZo.js";import"./PlotAreaShower-Dt6Ccckl.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
