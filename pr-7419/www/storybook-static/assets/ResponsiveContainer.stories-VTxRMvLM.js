import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-B6tGW3fj.js";import{G as i,K as a}from"./zIndexSlice-Dy7ciYWo.js";import{n as o,t as s}from"./Tooltip-tAkHHdqP.js";import{n as c,t as l}from"./CartesianGrid-DXJ2CyMi.js";import{n as u,t as d}from"./Area-DAKsflsV.js";import{n as f,t as p}from"./XAxis-B3WODRl4.js";import{n as m,t as h}from"./YAxis-CZypjyHs.js";import{n as g,t as _}from"./AreaChart-CKbF59GU.js";import{r as v,t as y}from"./Page-DUsfWi7y.js";var b=n({API:()=>C,__namedExportsOrder:()=>w,default:()=>S}),x,S,C,w;function T(){return(T=t((()=>{x=e(r()),u(),g(),c(),a(),o(),f(),m(),y(),S={component:i,docs:{autodocs:!1}},C={render:e=>x.createElement(`div`,{style:{display:`flex`,flexDirection:`column`,width:`100%`,flexGrow:1}},x.createElement(`h6`,null,`Flexbox sibling`),x.createElement(`div`,{style:{flexGrow:1}},x.createElement(i,e,x.createElement(_,{width:500,height:400,data:v,margin:{top:10,right:30,left:0,bottom:0}},x.createElement(l,{strokeDasharray:`3 3`}),x.createElement(p,{dataKey:`name`}),x.createElement(h,null),x.createElement(d,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`,fill:`#8884d8`}),x.createElement(s,null))))),args:{width:`80%`,height:`80%`}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  // https://github.com/recharts/recharts/issues/172
  render: (args: Args) => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      flexGrow: 1
    }}>
        <h6>Flexbox sibling</h6>
        <div style={{
        flexGrow: 1
      }}>
          <ResponsiveContainer {...args}>
            <AreaChart width={500} height={400} data={pageData} margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>;
  },
  args: {
    width: '80%',
    height: '80%'
  }
}`,...C.parameters?.docs?.source}}},w=[`API`]})))()}export{b as n,T as r,C as t};