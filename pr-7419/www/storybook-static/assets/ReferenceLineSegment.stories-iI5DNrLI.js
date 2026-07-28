import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{B as r,Q as i,R as a,Vn as o,X as s,ot as c,t as l,u}from"./iframe-BiMB5Acc.js";import{t as d}from"./data-J2vpPkF6.js";import{r as f}from"./Page-C0w_0_Yr.js";var p,m,h,g;e((()=>{p=t(n()),l(),d(),m={title:`Examples/cartesian/ReferenceLine/ReferenceLineSegment`},h={render:()=>p.createElement(o,{width:`100%`,height:500},p.createElement(u,{data:f,margin:{top:5,right:30,left:20,bottom:5}},p.createElement(i,{strokeDasharray:`3 3`}),p.createElement(r,{dataKey:`name`}),p.createElement(a,{type:`number`}),p.createElement(s,{dataKey:`uv`}),p.createElement(c,{segment:[{x:`Page A`,y:0},{x:`Page E`,y:1500}]})))},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...h.parameters?.docs?.source}}},g=[`Segment`]}))();export{h as Segment,g as __namedExportsOrder,m as default};