import{R as r}from"./iframe-CxHJIaxn.js";import{q as a,R as n}from"./zIndexSlice-B4J4SBJt.js";import{C as p}from"./ComposedChart-ZJvCku8z.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as g}from"./Line-BGusFgF3.js";import{X as d}from"./XAxis-BtFfwAik.js";import{Y as h}from"./YAxis-CePtpgW3.js";import{L as c}from"./Legend-DXxa1Zdn.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-VB2vAzvZ.js";import"./get-CjriyByo.js";import"./throttle-zrHO1Lk3.js";import"./index-CTXNW52Q.js";import"./index-CCCil_M9.js";import"./RechartsWrapper-lHGqaVDW.js";import"./axisSelectors-DToVA1z_.js";import"./polarAxisSelectors-Cypa3mep.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-AJjDHMaN.js";import"./index-DATl4CJn.js";import"./index-CNK9YebA.js";import"./renderedTicksSlice-BLYVCU7c.js";import"./index-WkAKiv7J.js";import"./fillDefinitions-DRREg7Kz.js";import"./CartesianChart-BVZvuLTX.js";import"./chartDataContext-DfmCl9OG.js";import"./CategoricalChart-DlLRA4vO.js";import"./getRadiusAndStrokeWidthFromDot-D_HaNWL6.js";import"./Layer-CkJdGJLp.js";import"./Curve-D6sUhEtt.js";import"./types-BGw9U51_.js";import"./step-DotuH85W.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DnDN_vpi.js";import"./Label-M_CthLgf.js";import"./Text-BkIUM7GL.js";import"./ZIndexLayer-B_7zdP5R.js";import"./ActivePoints-R1_oETV-.js";import"./Dot-Dme7I_-s.js";import"./activeStyles-BwCU-iTy.js";import"./useAnimationId-D_Yg6oAr.js";import"./Symbols-IHTx3wL0.js";import"./symbol-C32Av6Of.js";import"./ErrorBarContext-BUUfXJQl.js";import"./SetGraphicalItem-Cp9BSKiw.js";import"./ActiveShapeUtils-BHoE966L.js";import"./useEffectiveDataKey-BI2pOOYW.js";import"./CartesianAxis-DtD-UOrB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-D0XE9GLh.js";import"./uniqBy-Xde66OV6.js";import"./iteratee-BBskpsD7.js";import"./isArguments-yB-y1yaH.js";const lr={title:"API/hooks/useMargin",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},t={name:"useMargin",render:o=>r.createElement(n,{width:o.width,height:o.height},r.createElement(p,{data:s,margin:o.margin},r.createElement(g,{dataKey:"pv"}),r.createElement(d,{dataKey:"name"}),r.createElement(h,null),r.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}},ur=["UseMargin"];var e,i,m;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{t as UseMargin,ur as __namedExportsOrder,lr as default};
