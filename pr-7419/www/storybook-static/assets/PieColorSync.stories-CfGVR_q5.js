import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-Dy7ciYWo.js";import{n as a,t as o}from"./Legend-DiG0OfkN.js";import{n as s,t as c}from"./Tooltip-tAkHHdqP.js";import{n as l,t as u}from"./Sector-BQTbrNsB.js";import{i as d,n as f,r as p,t as m}from"./PieChart-BjXr2j_9.js";var h,g,_,v,y,b;function x(){return(x=t((()=>{h=e(n()),a(),d(),f(),i(),l(),s(),g=[{name:`Group A`,value:400,fill:`#0088FE`},{name:`Group B`,value:300,fill:`#00C49F`},{name:`Group C`,value:300,fill:`#FFBB28`},{name:`Group D`,value:200,fill:`#FF8042`}],_=({payload:e,...t})=>h.createElement(u,{...t,fill:e.fill}),v={component:p},y={render:e=>h.createElement(r,{width:`100%`,height:500},h.createElement(m,{width:400,height:400},h.createElement(p,{data:g,dataKey:`value`,nameKey:`name`,...e,shape:_}),h.createElement(o,null),h.createElement(c,null))),args:{cx:`50%`,cy:`50%`,fill:`#8884d8`,innerRadius:60,outerRadius:80}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`PieColorSync`]})))()}x();export{y as PieColorSync,b as __namedExportsOrder,v as default};