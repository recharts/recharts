import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{A as r,B as i,Q as a,R as o,Rt as s,Vn as c,X as l,kn as u,t as d}from"./iframe-BqVvK_R4.js";import{t as f}from"./data-J2vpPkF6.js";import{r as p}from"./Page-C0w_0_Yr.js";var m,h,g,_;e((()=>{m=t(n()),f(),d(),h={component:r,docs:{autodocs:!1}},g={render:()=>{let[e,t]=(0,m.useState)(`pv`);return m.createElement(m.Fragment,null,m.createElement(`button`,{type:`button`,onClick:()=>{t(e===`pv`?`uv`:`pv`)}},`Change Data Key`),m.createElement(c,{width:`100%`,height:`100%`},m.createElement(r,{width:500,height:400,data:p},m.createElement(a,{strokeDasharray:`3 3`}),m.createElement(i,{dataKey:`name`}),m.createElement(o,null),m.createElement(u,null),m.createElement(l,{type:`monotone`,dataKey:e,stroke:`#8884d8`,activeDot:{r:8}}),m.createElement(s,null))))}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dataKey, setDataKey] = useState('pv');
    return <>
        <button type="button" onClick={() => {
        if (dataKey === 'pv') {
          setDataKey('uv');
        } else {
          setDataKey('pv');
        }
      }}>
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...g.parameters?.docs?.source}}},_=[`ToggleBetweenDataKeys`]}))();export{g as ToggleBetweenDataKeys,_ as __namedExportsOrder,h as default};