import{e}from"./iframe-CNlB-yu6.js";import{C as n}from"./ChartSizeDimensions-CofMKbAb.js";import{g as i}from"./arrayEqualityCheck-lQwJ1fam.js";import{C as m}from"./ComposedChart-CFG01hB_.js";import{p as d}from"./Page-DPte-9pC.js";import{L as p}from"./Line-CD6wlHNc.js";import{X as c}from"./XAxis-BuwdDhSN.js";import{Y as l}from"./YAxis-BWbQlW4z.js";import{L as g}from"./Legend-CJ8D0E-I.js";const C={docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},r={render:s=>e.createElement(i,{...s},e.createElement(m,{data:d},e.createElement(n,null),e.createElement(p,{dataKey:"pv"}),e.createElement(c,{dataKey:"name"}),e.createElement(l,null),e.createElement(g,null))),args:{width:"100%",height:400}};var t,a,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const u=["WithAxesAndLegendAndResponsive"],S=Object.freeze(Object.defineProperty({__proto__:null,WithAxesAndLegendAndResponsive:r,__namedExportsOrder:u,default:C},Symbol.toStringTag,{value:"Module"}));export{S as C,r as W};
