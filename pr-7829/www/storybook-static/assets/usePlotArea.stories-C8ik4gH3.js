import{R as t}from"./iframe-130qk4m_.js";import{j as a}from"./RechartsWrapper-Bo40Do7U.js";import{R as p}from"./zIndexSlice-DRUK-Dg-.js";import{C as n}from"./ComposedChart-CjFOZhuN.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DXExiGSR.js";import{X as l}from"./XAxis-CZ9F9O5a.js";import{Y as h}from"./YAxis-COXka6w4.js";import{L as c}from"./Legend-CWU4XwfA.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CYRr0Ie5.js";import"./get-C2VjdU0L.js";import"./axisSelectors-X5KptGXH.js";import"./throttle-kCNuVuJ-.js";import"./index-CsWcnfda.js";import"./index-BcLoK3PR.js";import"./isWellBehavedNumber-DjBeGij7.js";import"./d3-scale-Dk5HPyUF.js";import"./index-CrvbTTow.js";import"./index-Bjllb2VH.js";import"./renderedTicksSlice-Cmod0XxC.js";import"./index-DEOEohuH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BIfw6B_y.js";import"./chartDataContext-DcIZimMl.js";import"./CategoricalChart-BUcyv7Rs.js";import"./Layer-Cyv1dWj2.js";import"./Curve-zMO2mb05.js";import"./types-Da5i9wCB.js";import"./step-CzM1y9Rf.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CnmA861Y.js";import"./Label-BTScYLJC.js";import"./Text-BSQyPF-I.js";import"./DOMUtils-nn98Njua.js";import"./useId-DN63oQqC.js";import"./useBackwardsCompatibleTheme-BFLDUGtw.js";import"./ZIndexLayer-BCmai4o5.js";import"./useAnimationId-NcjSJtDX.js";import"./ActivePoints-B9QqV80c.js";import"./Dot-DMc1VAH7.js";import"./RegisterGraphicalItemId-Cj8G_tD9.js";import"./ErrorBarContext-Cce-eGB1.js";import"./GraphicalItemClipPath-CEUDXBSP.js";import"./SetGraphicalItem-fFkzzaD8.js";import"./getRadiusAndStrokeWidthFromDot-CJ_8wi76.js";import"./ActiveShapeUtils-CM6xxOZA.js";import"./useGraphicalItemIdentity-UHVfOAjT.js";import"./CartesianAxis-C5WMjY4c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Bvuju7KU.js";import"./symbol-kYWcfVOX.js";import"./useElementOffset-COi3Obl9.js";import"./uniqBy-BlyxtPBE.js";import"./iteratee-P4nCtj53.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
