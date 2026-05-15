import{e as t}from"./iframe-BhgNWdm2.js";import{P as a}from"./PlotAreaShower-CDcLHpUT.js";import{c as p}from"./hooks-jOaINvHQ.js";import{R as s}from"./arrayEqualityCheck-BPYeEWp9.js";import{C as n}from"./ComposedChart-ByWdqqEr.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-1_aSh1us.js";import{X as h}from"./XAxis-B0Y5mjm9.js";import{Y as c}from"./YAxis-DimmepAM.js";import{L as g}from"./Legend-D0RS8kqE.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-J0Tmkxsz.js";import"./immer-B8rRfUkI.js";import"./axisSelectors-CZf8mr5P.js";import"./d3-scale-D8GbsE5m.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D43Wpvex.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D_AVgKr-.js";import"./index-CqC_U7ug.js";import"./zIndexSlice-Lcr8coq9.js";import"./renderedTicksSlice-D9cY7pVC.js";import"./CartesianChart-D0cl_oJT.js";import"./chartDataContext-Cguc2YyF.js";import"./CategoricalChart-DQs5NoOs.js";import"./Layer-BkasUZxz.js";import"./ReactUtils-BDMzm1YE.js";import"./Label-BRyOnYfu.js";import"./Text-2yWCgbKe.js";import"./DOMUtils-Cxmm0Icy.js";import"./ZIndexLayer-Do4fofgT.js";import"./ActivePoints-tcDNwRIU.js";import"./Dot-CYDciASH.js";import"./types-Bn2_ZBIB.js";import"./RegisterGraphicalItemId-Db3TPLUh.js";import"./ErrorBarContext-CdlIyLD3.js";import"./GraphicalItemClipPath-BH2oacZ_.js";import"./SetGraphicalItem-C_WqfzHK.js";import"./useAnimationId-Bo7L-9bR.js";import"./getRadiusAndStrokeWidthFromDot-DorA-DYi.js";import"./ActiveShapeUtils-C2ogWYAN.js";import"./isPlainObject-B6h9wQ2y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-jY469onx.js";import"./Trapezoid-DpB5l6Kj.js";import"./Sector-DfYOmxzx.js";import"./Symbols-CuqnOXh1.js";import"./symbol-CDKmn_1O.js";import"./step-CB53NYyG.js";import"./Curve-CxXqlxgs.js";import"./CartesianAxis-BduEHTva.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BHpwKCLe.js";import"./uniqBy-CGarLzH6.js";import"./iteratee-dQXRLNjz.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
