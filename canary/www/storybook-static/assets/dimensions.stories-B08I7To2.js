import{R as e}from"./iframe-DzO9JHZD.js";import{C as s}from"./ChartSizeDimensions-B4fkkMOB.js";import{R as i}from"./zIndexSlice-wXMOrHSA.js";import{C as m}from"./ComposedChart-nRRh8kX9.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as p}from"./Line-CKPli7Hi.js";import{X as c}from"./XAxis-s5CUDx62.js";import{Y as l}from"./YAxis-DLr6Fu7l.js";import{L as g}from"./Legend-BPeDG3Zi.js";const C={docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},r={render:o=>e.createElement(i,{...o},e.createElement(m,{data:d},e.createElement(s,null),e.createElement(p,{dataKey:"pv"}),e.createElement(c,{dataKey:"name"}),e.createElement(l,null),e.createElement(g,null))),args:{width:"100%",height:400}},u=["WithAxesAndLegendAndResponsive"];var t,n,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
