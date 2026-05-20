import{e}from"./iframe-8-kjzB7M.js";import{C as n}from"./ChartSizeDimensions-C53bqH85.js";import{g as i}from"./arrayEqualityCheck-BFH1E3k_.js";import{C as m}from"./ComposedChart-Dr0nJPxm.js";import{p as d}from"./Page-DPte-9pC.js";import{L as p}from"./Line-CGldzIuh.js";import{X as c}from"./XAxis-D2S2cmnw.js";import{Y as l}from"./YAxis-DaRq7QHm.js";import{L as g}from"./Legend-C7Cn7Hy2.js";const C={docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},r={render:s=>e.createElement(i,{...s},e.createElement(m,{data:d},e.createElement(n,null),e.createElement(p,{dataKey:"pv"}),e.createElement(c,{dataKey:"name"}),e.createElement(l,null),e.createElement(g,null))),args:{width:"100%",height:400}};var t,a,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
