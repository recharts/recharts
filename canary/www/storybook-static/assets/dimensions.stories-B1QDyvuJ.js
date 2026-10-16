import{R as e}from"./iframe-D9OaE0-D.js";import{C as s}from"./ChartSizeDimensions-3hsdk98x.js";import{R as i}from"./zIndexSlice-C6kYgFGy.js";import{C as m}from"./ComposedChart-7wLgVQR2.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as p}from"./Line-6OD2KhpA.js";import{X as c}from"./XAxis-jEEi2ah-.js";import{Y as l}from"./YAxis-B27MwDT8.js";import{L as g}from"./Legend-DkqrCmau.js";const C={docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},r={render:o=>e.createElement(i,{...o},e.createElement(m,{data:d},e.createElement(s,null),e.createElement(p,{dataKey:"pv"}),e.createElement(c,{dataKey:"name"}),e.createElement(l,null),e.createElement(g,null))),args:{width:"100%",height:400}},u=["WithAxesAndLegendAndResponsive"];var t,n,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const _=Object.freeze(Object.defineProperty({__proto__:null,WithAxesAndLegendAndResponsive:r,__namedExportsOrder:u,default:C},Symbol.toStringTag,{value:"Module"}));export{_ as C,r as W};
