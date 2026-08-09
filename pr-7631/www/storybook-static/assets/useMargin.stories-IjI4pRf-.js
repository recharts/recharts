import{R as r}from"./iframe-D8LGzSZk.js";import{G as a,R as p}from"./zIndexSlice-D4In7Qwm.js";import{C as s}from"./ComposedChart-DvTjgPom.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as g}from"./Line-ZoXFLPkA.js";import{X as d}from"./XAxis-C_x0Pf4s.js";import{Y as h}from"./YAxis-D48rI8id.js";import{L as c}from"./Legend-DK3nJZyc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DBP8ZUoh.js";import"./index-NWBmwsqT.js";import"./index-BaqTm3t4.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BeJ0S4OV.js";import"./isWellBehavedNumber-D4yK7wtr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZZbYxLA.js";import"./index-fhqam811.js";import"./index-DA6ZImtD.js";import"./axisSelectors-BOb7-s4k.js";import"./d3-scale-MiqNvyLk.js";import"./renderedTicksSlice-CA4Xyl-r.js";import"./CartesianChart-D_d2iI6W.js";import"./chartDataContext-Cw__b2Gb.js";import"./CategoricalChart-CdB0xgvp.js";import"./Layer-BAr2SIyH.js";import"./Curve-DT0m8y-G.js";import"./types-DdZOgyMd.js";import"./step-DqFmeUpS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CHvu2d7x.js";import"./Label-Bqhs0VHz.js";import"./Text-Ck4AHDur.js";import"./DOMUtils-wR-VJIN5.js";import"./ZIndexLayer-DHXeXlB8.js";import"./useAnimationId-BUbByZru.js";import"./ActivePoints-OrQGZuXb.js";import"./Dot-Cpsl4ohG.js";import"./RegisterGraphicalItemId-Co71u55H.js";import"./ErrorBarContext-CERdVHDL.js";import"./graphicalItemIdentity-Cj_WIcRj.js";import"./SetGraphicalItem-CcV_dEEg.js";import"./getRadiusAndStrokeWidthFromDot-Cc17-_w5.js";import"./ActiveShapeUtils-325OC07p.js";import"./RechartsThemeContext-CPh4O7nx.js";import"./CartesianAxis-B5BkrXXa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-hPRj1Yr-.js";import"./symbol-Ds5VUmm2.js";import"./useElementOffset-_N-y_9xm.js";import"./uniqBy-BhmhM53_.js";import"./iteratee-BE8kvPGN.js";const cr={title:"API/hooks/useMargin",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},t={name:"useMargin",render:o=>r.createElement(p,{width:o.width,height:o.height},r.createElement(s,{data:n,margin:o.margin},r.createElement(g,{dataKey:"pv"}),r.createElement(d,{dataKey:"name"}),r.createElement(h,null),r.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var e,i,m;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: 'useMargin',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
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
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const lr=["UseMargin"];export{t as UseMargin,lr as __namedExportsOrder,cr as default};
