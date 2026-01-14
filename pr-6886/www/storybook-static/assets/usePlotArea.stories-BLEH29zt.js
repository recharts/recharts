import{e}from"./iframe-B8YYEd9G.js";import{P as n}from"./PlotAreaShower-Br2_XSTr.js";import{c as i}from"./hooks-CoDkm5OR.js";import{R as m}from"./arrayEqualityCheck-BJSPs_LU.js";import{C as l}from"./ComposedChart-4Q9duxf0.js";import{L as p}from"./Line-y7KrniF9.js";import{X as d}from"./XAxis-Dznlbswx.js";import{Y as c}from"./YAxis-Bx5APNu1.js";import{L as h}from"./Legend-CAEOCuo_.js";import{p as g}from"./Page-Cj8EiXz7.js";const u={title:"API/hooks/usePlotArea",component:i,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},t={name:"usePlotAreaExample",render:r=>e.createElement(m,{width:r.width,height:r.height},e.createElement(l,{data:g,margin:r.margin,style:r.style},e.createElement(p,{dataKey:"pv"}),e.createElement(d,{dataKey:"name"}),e.createElement(c,null),e.createElement(h,null),e.createElement(n,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const f=["UsePlotArea"],L=Object.freeze(Object.defineProperty({__proto__:null,UsePlotArea:t,__namedExportsOrder:f,default:u},Symbol.toStringTag,{value:"Module"}));export{L as C};
