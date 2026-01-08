import{e}from"./iframe-D9q7UUmi.js";import{C as n}from"./ChartSizeDimensions-CGOPgU1Q.js";import{R as i}from"./arrayEqualityCheck-CJJXJ9Rv.js";import{C as m}from"./ComposedChart-BrSXjugh.js";import{L as d}from"./Line-BGi21o2A.js";import{X as p}from"./XAxis-Dxn9Zo0N.js";import{Y as c}from"./YAxis-Ds2QNT8w.js";import{L as l}from"./Legend-D31ymzRq.js";import{p as g}from"./Page-DPte-9pC.js";const C={docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},r={render:s=>e.createElement(i,{...s},e.createElement(m,{data:g},e.createElement(n,null),e.createElement(d,{dataKey:"pv"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null),e.createElement(l,null))),args:{width:"100%",height:400}};var t,a,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
