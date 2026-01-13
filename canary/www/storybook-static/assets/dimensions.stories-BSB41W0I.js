import{e}from"./iframe-BqhCRw8_.js";import{C as n}from"./ChartSizeDimensions-DGTJjry1.js";import{R as i}from"./arrayEqualityCheck-C0e5XGku.js";import{C as m}from"./ComposedChart-XGDLsI_Y.js";import{L as d}from"./Line-oXXYYyzH.js";import{X as p}from"./XAxis-B6heQTMm.js";import{Y as c}from"./YAxis--q0qF4k-.js";import{L as l}from"./Legend-CKVoaOnK.js";import{p as g}from"./Page-Cj8EiXz7.js";const C={docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},r={render:s=>e.createElement(i,{...s},e.createElement(m,{data:g},e.createElement(n,null),e.createElement(d,{dataKey:"pv"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null),e.createElement(l,null))),args:{width:"100%",height:400}};var t,a,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer {...args}>
        <ComposedChart data={pageData}>
          <ChartSizeDimensions />
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400
  }
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const u=["WithAxesAndLegendAndResponsive"],R=Object.freeze(Object.defineProperty({__proto__:null,WithAxesAndLegendAndResponsive:r,__namedExportsOrder:u,default:C},Symbol.toStringTag,{value:"Module"}));export{R as C,r as W};
