import{e}from"./iframe-C8rrCX6B.js";import{C as n}from"./ChartSizeDimensions-CE_McqMG.js";import{R as i}from"./arrayEqualityCheck-B6s-2qWd.js";import{C as m}from"./ComposedChart-C-53OFl9.js";import{L as d}from"./Line-DM-WQoT-.js";import{X as p}from"./XAxis-B3LhdJHC.js";import{Y as c}from"./YAxis-DOVMeyYT.js";import{L as l}from"./Legend-BVcRJZn_.js";import{p as g}from"./Page-Cj8EiXz7.js";const C={docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},r={render:s=>e.createElement(i,{...s},e.createElement(m,{data:g},e.createElement(n,null),e.createElement(d,{dataKey:"pv"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null),e.createElement(l,null))),args:{width:"100%",height:400}};var t,a,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
