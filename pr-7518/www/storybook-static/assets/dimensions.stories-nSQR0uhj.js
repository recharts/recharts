import{R as e}from"./iframe-BNNSts13.js";import{C as n}from"./ChartSizeDimensions-jfsM_0wT.js";import{R as i}from"./zIndexSlice-B_0Vu2Ew.js";import{C as m}from"./ComposedChart-DHvLsOhm.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as p}from"./Line-DHXYmqa3.js";import{X as c}from"./XAxis-CQLk361J.js";import{Y as l}from"./YAxis-BE5H5SGl.js";import{L as g}from"./Legend-CeXv6FuD.js";const C={docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},r={render:s=>e.createElement(i,{...s},e.createElement(m,{data:d},e.createElement(n,null),e.createElement(p,{dataKey:"pv"}),e.createElement(c,{dataKey:"name"}),e.createElement(l,null),e.createElement(g,null))),args:{width:"100%",height:400}};var t,a,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const u=["WithAxesAndLegendAndResponsive"],_=Object.freeze(Object.defineProperty({__proto__:null,WithAxesAndLegendAndResponsive:r,__namedExportsOrder:u,default:C},Symbol.toStringTag,{value:"Module"}));export{_ as C,r as W};
