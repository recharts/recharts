import{R as e}from"./iframe-CwjnBdPJ.js";import{C as s}from"./ChartSizeDimensions-CLr8VgfV.js";import{R as i}from"./zIndexSlice-DCK0oMjs.js";import{C as m}from"./ComposedChart-DEjJaHPL.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as p}from"./Line-BtP8MguI.js";import{X as c}from"./XAxis-DGiS1jyS.js";import{Y as l}from"./YAxis-BJPBUcLn.js";import{L as g}from"./Legend-hOsISys7.js";const C={docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},r={render:o=>e.createElement(i,{...o},e.createElement(m,{data:d},e.createElement(s,null),e.createElement(p,{dataKey:"pv"}),e.createElement(c,{dataKey:"name"}),e.createElement(l,null),e.createElement(g,null))),args:{width:"100%",height:400}},u=["WithAxesAndLegendAndResponsive"];var t,n,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
