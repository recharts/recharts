import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-B0Kxc9j6.js";import{i as a,n as o,r as s,t as c}from"./PieChart-CJKiHe9W.js";var l,u,d,f,p;function m(){return(m=t((()=>{l=e(n()),a(),o(),i(),u=[{value:`Luck`,percent:10,customRadius:140},{value:`Skill`,percent:20,customRadius:160},{value:`Concentrated power of will`,percent:15,customRadius:150},{value:`Pleasure`,percent:50,customRadius:190},{value:`Pain`,percent:50,customRadius:190},{value:`Reason to remember the name`,percent:100,customRadius:220}],d={component:s},f={render:e=>l.createElement(r,{width:`100%`,height:500},l.createElement(c,{width:400,height:400},l.createElement(s,{dataKey:`percent`,...e}))),args:{cx:`50%`,cy:`50%`,data:u,dataKey:`percent`,nameKey:`value`,fill:`#8884d8`,label:!0,outerRadius:e=>e.customRadius}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <PieChart width={400} height={400}>
          <Pie dataKey="percent" {...args} />
        </PieChart>
      </ResponsiveContainer>;
  },
  args: {
    cx: '50%',
    cy: '50%',
    data,
    dataKey: 'percent',
    nameKey: 'value',
    fill: '#8884d8',
    label: true,
    outerRadius: (element: any) => {
      return element.customRadius;
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`PieWithStep`]})))()}m();export{f as PieWithStep,p as __namedExportsOrder,d as default};