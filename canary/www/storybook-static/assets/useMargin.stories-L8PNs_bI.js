import{e}from"./iframe-BeTvSsnM.js";import{S as n}from"./ChartSizeDimensions-8siL2NNx.js";import{P as g,f as l,e as h,R as c}from"./arrayEqualityCheck-D3IRE7yY.js";import{C as d}from"./ComposedChart-BO-NFwBX.js";import{L as p}from"./Line-bp10Wzax.js";import{X as u}from"./XAxis-CikzDxWn.js";import{Y as f}from"./YAxis-htB2Xdvz.js";import{L as b}from"./Legend-DHkaMzVY.js";import{p as M}from"./Page-DPte-9pC.js";function C(){const t=g(),a=l(),o=h();return t==null||o==null||a==null?null:e.createElement(e.Fragment,null,e.createElement(n,{width:t.left,height:a,labels:{background:"Left",horizontal:"useMargin.left"}}),e.createElement(n,{width:t.right,x:o-t.right,height:a,labels:{background:"Right",horizontal:"useMargin.right"}}),e.createElement(n,{width:o,height:t.top,labels:{background:"Top",vertical:"useMargin.top"}}),e.createElement(n,{width:o,height:t.bottom,y:a-t.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const E={title:"API/hooks/useMargin",component:g,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},r={name:"useMargin",render:t=>e.createElement(c,{width:t.width,height:t.height},e.createElement(d,{data:M,margin:t.margin},e.createElement(p,{dataKey:"pv"}),e.createElement(u,{dataKey:"name"}),e.createElement(f,null),e.createElement(b,null),e.createElement(C,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'useMargin',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <MarginShower />
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
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const w=["UseMargin"],K=Object.freeze(Object.defineProperty({__proto__:null,UseMargin:r,__namedExportsOrder:w,default:E},Symbol.toStringTag,{value:"Module"}));export{K as C,r as U};
