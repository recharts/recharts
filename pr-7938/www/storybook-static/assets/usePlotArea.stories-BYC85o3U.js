import{R as t}from"./iframe-DuKrJ0zn.js";import{j as a}from"./RechartsWrapper-BEffPtCf.js";import{R as p}from"./zIndexSlice-CLjLalaX.js";import{C as n}from"./ComposedChart-1NZsUFmO.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-foXAM9pQ.js";import{X as l}from"./XAxis-DcN8Db4p.js";import{Y as h}from"./YAxis-DQojOnyt.js";import{L as c}from"./Legend-DNaZwaSw.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-teTym_le.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C-iDc9ZD.js";import"./throttle-DtzmWgqu.js";import"./index-UXVF2SDl.js";import"./index--f_yOVNJ.js";import"./isWellBehavedNumber-C1SokatK.js";import"./d3-scale-DZyfBumm.js";import"./index-Bw0d1gq_.js";import"./index-CQPSgdXH.js";import"./renderedTicksSlice-DC-eZxTj.js";import"./index-BP-prfso.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dmo_0Xna.js";import"./chartDataContext-UIg6E7lh.js";import"./CategoricalChart-C3GMMeRH.js";import"./Layer-DzPACqXk.js";import"./Curve-C7E_1QuT.js";import"./types-C0puMKP8.js";import"./step-CGQ88gSo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-UVqcjqe1.js";import"./Label-T3-RQcya.js";import"./Text-BsbcFYx2.js";import"./DOMUtils-Bn1l__ER.js";import"./useId-DlXJwOUw.js";import"./useBackwardsCompatibleTheme-BxDCx_m8.js";import"./ZIndexLayer-F_xMErBH.js";import"./useAnimationId-BEtuyajc.js";import"./ActivePoints-DZ7JKpsC.js";import"./Dot-CnU97eIy.js";import"./dataEntryStyles-CQWLZIwm.js";import"./ErrorBarContext-DC_DRovh.js";import"./GraphicalItemClipPath-BH1_5J3a.js";import"./SetGraphicalItem-DHruVb1s.js";import"./getRadiusAndStrokeWidthFromDot-Dp-k2N1-.js";import"./ActiveShapeUtils-Ng0jEWa8.js";import"./useGraphicalItemIdentity-zknNX3FR.js";import"./CartesianAxis-KhOJh8Ny.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-MbuRQEw2.js";import"./symbol-CYfzeges.js";import"./useElementOffset-Be-W7NB-.js";import"./uniqBy-DyfRyEMq.js";import"./iteratee-CBPmjXP9.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
