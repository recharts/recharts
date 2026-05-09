import{e}from"./iframe-DCkCb3cL.js";import{C as n}from"./ChartSizeDimensions-3SLqT2DF.js";import{R as i}from"./arrayEqualityCheck-Cyv8hSdj.js";import{C as m}from"./ComposedChart-DNMO5eaz.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as p}from"./Line-DajRYZAP.js";import{X as c}from"./XAxis-DjeZloTX.js";import{Y as l}from"./YAxis-sTotZWFY.js";import{L as g}from"./Legend-D5Bb8au3.js";const C={docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},r={render:s=>e.createElement(i,{...s},e.createElement(m,{data:d},e.createElement(n,null),e.createElement(p,{dataKey:"pv"}),e.createElement(c,{dataKey:"name"}),e.createElement(l,null),e.createElement(g,null))),args:{width:"100%",height:400}};var t,a,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
