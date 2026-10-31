import{R as t}from"./iframe-BV4BJT-m.js";import{z as a}from"./RechartsWrapper-BCKkTVf1.js";import{R as p}from"./zIndexSlice-B-lthx1D.js";import{C as n}from"./ComposedChart-CPNwWKj6.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CIJrCJ5v.js";import{X as l}from"./XAxis-Dddiy3kS.js";import{Y as h}from"./YAxis-DrgVb9Ay.js";import{L as c}from"./Legend-D02jVJyb.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-cT9z_f7M.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DnTNEhev.js";import"./throttle-2G-03cGC.js";import"./index-BWsZwQHL.js";import"./index-BMMrxHO4.js";import"./polarAxisSelectors-CB1xu3bt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-9I0ClQu9.js";import"./index-Cwzrr77V.js";import"./index-CwDo1ygF.js";import"./renderedTicksSlice-un3BJh88.js";import"./index-BO-EQm5K.js";import"./fillDefinitions-CsvVa8gn.js";import"./CartesianChart-D730y8QU.js";import"./ZIndexPortal-DvrYxin1.js";import"./CategoricalChart-BPH2EWzV.js";import"./Layer-C4zlYTAs.js";import"./Curve-BxOKje4W.js";import"./types-CgGLncla.js";import"./step-CflYfM9D.js";import"./path-DyVhHtw_.js";import"./LabelList-B3uF9y0j.js";import"./Label-xll97smN.js";import"./Text-CO85_-F3.js";import"./DOMUtils-CzRokdgO.js";import"./ZIndexLayer-B03KVd1Z.js";import"./ActivePoints-CpdWeHKB.js";import"./Dot-ChrRm5q7.js";import"./activeStyles-DPABJUlt.js";import"./useAnimationId-BaOUwCNw.js";import"./dataEntryStyles-Bs_-V5Jc.js";import"./Symbols-D8__1CQa.js";import"./symbol-CNlre4TP.js";import"./ErrorBarContext-CgppqQDQ.js";import"./SetGraphicalItem-BojvnrYu.js";import"./getRadiusAndStrokeWidthFromDot-nytBruEY.js";import"./ActiveShapeUtils-DdIRCGmC.js";import"./useEffectiveDataKey-ydzJPEOM.js";import"./CartesianAxis-D1XYtW-z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DOPUcnVK.js";import"./uniqBy-D2Xk11H0.js";import"./iteratee-BIIV1qIF.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
