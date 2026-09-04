import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-CfT4cgn7.js";import{n as a,t as o}from"./Legend-XcO656Mc.js";import{n as s,t as c}from"./Tooltip-YHivrOZa.js";import{n as l,t as u}from"./CartesianGrid-C0BAtXH9.js";import{n as d,t as f}from"./Line---TR8N4V.js";import{n as p,t as m}from"./XAxis-BC2eC402.js";import{n as h,t as g}from"./YAxis-Ch1VfSce.js";import{n as _,t as v}from"./LineChart-DFJO6Y-4.js";import{r as y,t as b}from"./Page-DUsfWi7y.js";var x,S,C,w;function T(){return(T=t((()=>{x=e(n()),b(),l(),a(),d(),_(),i(),s(),p(),h(),S={component:v,docs:{autodocs:!1}},C={render:()=>{let[e,t]=(0,x.useState)(`pv`);return x.createElement(x.Fragment,null,x.createElement(`button`,{type:`button`,onClick:()=>{t(e===`pv`?`uv`:`pv`)}},`Change Data Key`),x.createElement(r,{width:`100%`,height:`100%`},x.createElement(v,{width:500,height:400,data:y},x.createElement(u,{strokeDasharray:`3 3`}),x.createElement(m,{dataKey:`name`}),x.createElement(g,null),x.createElement(o,null),x.createElement(f,{type:`monotone`,dataKey:e,stroke:`#8884d8`,activeDot:{r:8}}),x.createElement(c,null))))}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`ToggleBetweenDataKeys`]})))()}T();export{C as ToggleBetweenDataKeys,w as __namedExportsOrder,S as default};