import{e}from"./iframe-D2xkh5VA.js";import{C as n}from"./ChartSizeDimensions-1DNJC0TT.js";import{g as i}from"./arrayEqualityCheck-BcvopYI_.js";import{C as m}from"./ComposedChart-oF9YiWjC.js";import{p as d}from"./Page-DPte-9pC.js";import{L as p}from"./Line-C-3S5d4g.js";import{X as c}from"./XAxis-8irwFxlw.js";import{Y as l}from"./YAxis-Bb2589BF.js";import{L as g}from"./Legend-CaA0bXtZ.js";const C={docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},r={render:s=>e.createElement(i,{...s},e.createElement(m,{data:d},e.createElement(n,null),e.createElement(p,{dataKey:"pv"}),e.createElement(c,{dataKey:"name"}),e.createElement(l,null),e.createElement(g,null))),args:{width:"100%",height:400}};var t,a,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const u=["WithAxesAndLegendAndResponsive"],S=Object.freeze(Object.defineProperty({__proto__:null,WithAxesAndLegendAndResponsive:r,__namedExportsOrder:u,default:C},Symbol.toStringTag,{value:"Module"}));export{S as C,r as W};
