import{e}from"./iframe-ZLLTs1L2.js";import{O as n}from"./OffsetShower-DgUH6KPA.js";import{d as i}from"./hooks-hqrrPiBI.js";import{R as m}from"./arrayEqualityCheck-DulyWTfD.js";import{C as f}from"./ComposedChart-I5bjg5En.js";import{L as p}from"./Line-BN6F4eoo.js";import{X as d}from"./XAxis-CHTCY5Jh.js";import{Y as h}from"./YAxis-BCMoz5bl.js";import{L as g}from"./Legend-Dqil_PZE.js";import{p as c}from"./Page-DPte-9pC.js";const l={title:"API/hooks/useOffset",component:i,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},t={name:"useOffset",render:r=>e.createElement(m,{width:r.width,height:r.height},e.createElement(f,{data:c,margin:r.margin},e.createElement(p,{dataKey:"pv"}),e.createElement(d,{dataKey:"name"}),e.createElement(h,null),e.createElement(g,null),e.createElement(n,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <OffsetShower />
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
    }
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const u=["UseOffset"],S=Object.freeze(Object.defineProperty({__proto__:null,UseOffset:t,__namedExportsOrder:u,default:l},Symbol.toStringTag,{value:"Module"}));export{S as C,t as U};
