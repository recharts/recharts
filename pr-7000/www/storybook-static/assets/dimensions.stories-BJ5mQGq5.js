import{e}from"./iframe-ByhUx3i5.js";import{C as n}from"./ChartSizeDimensions-DxQjWf1j.js";import{R as i}from"./arrayEqualityCheck-Dc2-6IGJ.js";import{C as m}from"./ComposedChart-BqdUV1Sk.js";import{L as d}from"./Line-DQI5jB5X.js";import{X as p}from"./XAxis-BI5mxokc.js";import{Y as c}from"./YAxis-D42CMzIK.js";import{L as l}from"./Legend-BBRdLGFw.js";import{p as g}from"./Page-Cj8EiXz7.js";const C={docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},r={render:s=>e.createElement(i,{...s},e.createElement(m,{data:g},e.createElement(n,null),e.createElement(d,{dataKey:"pv"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null),e.createElement(l,null))),args:{width:"100%",height:400}};var t,a,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
