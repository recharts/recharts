import{R as e}from"./iframe-CDv_hnlf.js";import{C as s}from"./ChartSizeDimensions-CHHzlQxs.js";import{R as i}from"./zIndexSlice-8EbRQ5DZ.js";import{C as m}from"./ComposedChart-I6fWeSu7.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as p}from"./Line-PKJWXDbr.js";import{X as c}from"./XAxis-Cn9K5n4J.js";import{Y as l}from"./YAxis-Dphgoyab.js";import{L as g}from"./Legend-Bim0FPrU.js";const C={docs:{autodocs:!1},parameters:{docs:{source:{type:"code"}}}},r={render:o=>e.createElement(i,{...o},e.createElement(m,{data:d},e.createElement(s,null),e.createElement(p,{dataKey:"pv"}),e.createElement(c,{dataKey:"name"}),e.createElement(l,null),e.createElement(g,null))),args:{width:"100%",height:400}},u=["WithAxesAndLegendAndResponsive"];var t,n,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
