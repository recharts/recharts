import{e as t}from"./iframe-B5OZyTLO.js";import{P as a}from"./PlotAreaShower-Bz0iMrs_.js";import{c as p}from"./hooks-BezBw8uS.js";import{R as s}from"./arrayEqualityCheck-CWhdwSDm.js";import{C as n}from"./ComposedChart-DpUDvMYQ.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-4w5j44YG.js";import{X as h}from"./XAxis-zb4VUPh6.js";import{Y as c}from"./YAxis-Dux7TOCI.js";import{L as g}from"./Legend-D4s-p13t.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-UHLg_21n.js";import"./immer-TWt97Mx7.js";import"./axisSelectors-ABOgVma3.js";import"./d3-scale-CN5ZQXr4.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CAPxLZ6Q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CQQb0kbC.js";import"./index-hV-3VpKL.js";import"./zIndexSlice-BhJZ8kMU.js";import"./renderedTicksSlice-D_AhA4OM.js";import"./CartesianChart-FhsaLguc.js";import"./chartDataContext-B484Lq8t.js";import"./CategoricalChart-zasF99ZZ.js";import"./Layer-DY3DBIYw.js";import"./ReactUtils-50LnJO-z.js";import"./Label-DrAV5Ysg.js";import"./Text-CpciUZWD.js";import"./DOMUtils-CaAH8jO5.js";import"./ZIndexLayer--mzOMN2C.js";import"./ActivePoints-BCl6lkYq.js";import"./Dot-DW8dVVMQ.js";import"./types-CBKdJqtE.js";import"./RegisterGraphicalItemId-DI_yJ9XE.js";import"./ErrorBarContext-Cy-UI2HL.js";import"./GraphicalItemClipPath-DqNQMvK4.js";import"./SetGraphicalItem-DtNxMT9p.js";import"./useAnimationId-C8kgPVjG.js";import"./getRadiusAndStrokeWidthFromDot-BwBEHiBz.js";import"./ActiveShapeUtils-wCZ0vcum.js";import"./isPlainObject-dgzqLzJz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CluG0cnR.js";import"./Trapezoid-DfDBBk_X.js";import"./Sector-DWNWDgn6.js";import"./Symbols-CYtIKOUS.js";import"./symbol-OBCxgJUM.js";import"./step--d94ZHvF.js";import"./Curve-CZezSHJu.js";import"./CartesianAxis-DF2T2i1R.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CMyZblD5.js";import"./uniqBy-Bjy84KJm.js";import"./iteratee-DcHlFybE.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
