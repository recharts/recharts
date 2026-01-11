import{e}from"./iframe-D2G3HIAp.js";import{C as n}from"./ChartSizeDimensions-C1G0XugS.js";import{R as i}from"./arrayEqualityCheck-D7f_pFRZ.js";import{C as m}from"./ComposedChart-B3gygK9L.js";import{L as d}from"./Line-CnFjL8nQ.js";import{X as p}from"./XAxis-Cv05-S4d.js";import{Y as c}from"./YAxis-C4SLmRp0.js";import{L as l}from"./Legend-PqwLEj3K.js";import{p as g}from"./Page-DPte-9pC.js";const C={docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},r={render:s=>e.createElement(i,{...s},e.createElement(m,{data:g},e.createElement(n,null),e.createElement(d,{dataKey:"pv"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null),e.createElement(l,null))),args:{width:"100%",height:400}};var t,a,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
