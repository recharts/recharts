import{e}from"./iframe-VZdOSrkq.js";import{C as n}from"./ChartSizeDimensions-D3Cff-Ry.js";import{R as i}from"./arrayEqualityCheck-Ba8aNuDT.js";import{C as m}from"./ComposedChart-BhKILeAz.js";import{L as d}from"./Line-BUVcTQnC.js";import{X as p}from"./XAxis-CUPjg_0f.js";import{Y as c}from"./YAxis-BxbT09X2.js";import{L as l}from"./Legend-hM_Y2pNk.js";import{p as g}from"./Page-DPte-9pC.js";const C={docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},r={render:s=>e.createElement(i,{...s},e.createElement(m,{data:g},e.createElement(n,null),e.createElement(d,{dataKey:"pv"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null),e.createElement(l,null))),args:{width:"100%",height:400}};var t,a,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
