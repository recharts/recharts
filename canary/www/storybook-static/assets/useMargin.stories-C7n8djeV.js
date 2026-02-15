import{e}from"./iframe-NOjYqVDf.js";import{S as n}from"./ChartSizeDimensions-CVj6kL6N.js";import{N as g,i as h,h as l,R as c}from"./arrayEqualityCheck-CKPvr2Sv.js";import{C as d}from"./ComposedChart-DP1DcGpI.js";import{L as p}from"./Line-1TE9oZ2s.js";import{X as u}from"./XAxis-gQef3nNh.js";import{Y as f}from"./YAxis-R69UNor-.js";import{L as b}from"./Legend-AKmFhtK1.js";import{p as M}from"./Page-Cj8EiXz7.js";function C(){const t=g(),a=h(),o=l();return t==null||o==null||a==null?null:e.createElement(e.Fragment,null,e.createElement(n,{width:t.left,height:a,labels:{background:"Left",horizontal:"useMargin.left"}}),e.createElement(n,{width:t.right,x:o-t.right,height:a,labels:{background:"Right",horizontal:"useMargin.right"}}),e.createElement(n,{width:o,height:t.top,labels:{background:"Top",vertical:"useMargin.top"}}),e.createElement(n,{width:o,height:t.bottom,y:a-t.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const E={title:"API/hooks/useMargin",component:g,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},r={name:"useMargin",render:t=>e.createElement(c,{width:t.width,height:t.height},e.createElement(d,{data:M,margin:t.margin},e.createElement(p,{dataKey:"pv"}),e.createElement(u,{dataKey:"name"}),e.createElement(f,null),e.createElement(b,null),e.createElement(C,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const w=["UseMargin"],K=Object.freeze(Object.defineProperty({__proto__:null,UseMargin:r,__namedExportsOrder:w,default:E},Symbol.toStringTag,{value:"Module"}));export{K as C};
