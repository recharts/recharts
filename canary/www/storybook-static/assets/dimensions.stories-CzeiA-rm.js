import{e}from"./iframe-C2m-yPM5.js";import{C as n}from"./ChartSizeDimensions-DjDyxBi1.js";import{R as i}from"./arrayEqualityCheck-TbGkdOW0.js";import{C as m}from"./ComposedChart-CnOpfs4O.js";import{L as d}from"./Line-DQZ-cp1P.js";import{X as p}from"./XAxis-pwIeR2Z_.js";import{Y as c}from"./YAxis-UtKchpqB.js";import{L as l}from"./Legend-Bl5gozJt.js";import{p as g}from"./Page-DPte-9pC.js";const C={docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},r={render:s=>e.createElement(i,{...s},e.createElement(m,{data:g},e.createElement(n,null),e.createElement(d,{dataKey:"pv"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null),e.createElement(l,null))),args:{width:"100%",height:400}};var t,a,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
