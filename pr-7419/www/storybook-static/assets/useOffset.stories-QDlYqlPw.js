import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,R as i,Vn as a,X as o,gt as s,kn as c,t as l,u}from"./iframe-BiMB5Acc.js";import{t as d}from"./data-J2vpPkF6.js";import{r as f}from"./Page-C0w_0_Yr.js";var p,m,h,g;e((()=>{p=t(n()),l(),d(),m={title:`API/hooks/useOffset`,component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},h={name:`useOffset`,render:e=>p.createElement(a,{width:e.width,height:e.height},p.createElement(u,{data:f,margin:e.margin},p.createElement(o,{dataKey:`pv`}),p.createElement(r,{dataKey:`name`}),p.createElement(i,null),p.createElement(c,null))),args:{width:`100%`,height:400,margin:{top:30,right:170,bottom:30,left:120}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
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
}`,...h.parameters?.docs?.source}}},g=[`UseOffset`]}))();export{h as UseOffset,g as __namedExportsOrder,m as default};