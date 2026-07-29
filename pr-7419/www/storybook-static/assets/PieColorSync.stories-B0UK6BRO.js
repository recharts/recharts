import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{E as r,Rt as i,Vn as a,kn as o,t as s,vt as c,yn as l}from"./iframe-BqVvK_R4.js";var u,d,f,p,m,h;e((()=>{u=t(n()),s(),d=[{name:`Group A`,value:400,fill:`#0088FE`},{name:`Group B`,value:300,fill:`#00C49F`},{name:`Group C`,value:300,fill:`#FFBB28`},{name:`Group D`,value:200,fill:`#FF8042`}],f=({payload:e,...t})=>u.createElement(l,{...t,fill:e.fill}),p={component:c},m={render:e=>u.createElement(a,{width:`100%`,height:500},u.createElement(r,{width:400,height:400},u.createElement(c,{data:d,dataKey:`value`,nameKey:`name`,...e,shape:f}),u.createElement(o,null),u.createElement(i,null))),args:{cx:`50%`,cy:`50%`,fill:`#8884d8`,innerRadius:60,outerRadius:80}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value" nameKey="name" {...args} shape={renderSectorWithCustomShapeColor} />
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>;
  },
  args: {
    cx: '50%',
    cy: '50%',
    fill: '#8884d8',
    innerRadius: 60,
    outerRadius: 80
  }
}`,...m.parameters?.docs?.source}}},h=[`PieColorSync`]}))();export{m as PieColorSync,h as __namedExportsOrder,p as default};