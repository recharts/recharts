import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-B0Kxc9j6.js";import{n as a,t as o}from"./Tooltip-1joug3q7.js";import{n as s,t as c}from"./CartesianGrid-D3Nuobx9.js";import{n as l,t as u}from"./Line-CGcNDODy.js";import{n as d,t as f}from"./Area-DNB2SvJR.js";import{n as p,t as m}from"./XAxis-DaKmDvZB.js";import{n as h,t as g}from"./YAxis-DFF_vhTk.js";import{n as _,t as v}from"./LineChart-TpeFf1Zc.js";import{n as y,t as b}from"./AreaChart-Bw9lQbvL.js";import{r as x,t as S}from"./Page-DUsfWi7y.js";var C,w,T,E,D;function O(){return(O=t((()=>{C=e(n()),d(),y(),s(),l(),_(),i(),a(),p(),h(),S(),w={component:b},T={render:()=>C.createElement(C.Fragment,null,C.createElement(`p`,null,`Resize the window to test ResponsiveContainer`),C.createElement(`div`,{className:`flex-parent`},C.createElement(r,{width:`100%`,className:`flex-child`},C.createElement(b,{data:x,margin:{top:10,right:30,left:0,bottom:0}},C.createElement(c,{strokeDasharray:`3 3`}),C.createElement(m,{dataKey:`name`}),C.createElement(g,null),C.createElement(f,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`,fill:`#8884d8`}),C.createElement(o,null))),C.createElement(r,{className:`flex-child`},C.createElement(v,{data:x,margin:{top:10,right:30,left:0,bottom:0}},C.createElement(c,{strokeDasharray:`3 3`}),C.createElement(m,{dataKey:`name`}),C.createElement(g,null),C.createElement(u,{type:`monotone`,dataKey:`amt`,stroke:`orange`}),C.createElement(o,null))))),args:{}},E={render:()=>{let e=[{name:`Page A`,uv:4e3,pv:2400,amt:2400},{name:`Page B`,uv:3e3,pv:1398,amt:2210},{name:`Page C`,uv:2e3,pv:9800,amt:2290},{name:`Page D`,uv:2780,pv:3908,amt:2e3},{name:`Page E`,uv:1890,pv:4800,amt:2181},{name:`Page F`,uv:2390,pv:3800,amt:2500},{name:`Page G`,uv:3490,pv:4300,amt:2100}];return C.createElement(`div`,{style:{height:`100%`,width:`100%`,margin:0}},C.createElement(`div`,{style:{display:`flex`,flexDirection:`row`,height:`200px`}},C.createElement(`div`,{style:{flex:1}},C.createElement(r,null,C.createElement(b,{data:e,margin:{top:10,right:30,left:0,bottom:0}},C.createElement(m,{dataKey:`name`}),C.createElement(g,null),C.createElement(c,{strokeDasharray:`3 3`}),C.createElement(f,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`,fill:`#8884d8`}),C.createElement(o,null)))),C.createElement(`div`,{style:{flex:1}},C.createElement(r,null,C.createElement(b,{data:e,margin:{top:10,right:30,left:0,bottom:0}},C.createElement(m,{dataKey:`name`}),C.createElement(g,null),C.createElement(c,{strokeDasharray:`3 3`}),C.createElement(f,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`,fill:`#8884d8`}),C.createElement(o,null))))))}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <p>Resize the window to test ResponsiveContainer</p>
        <div className="flex-parent">
          <ResponsiveContainer width="100%" className="flex-child">
            <AreaChart data={pageData} margin={{
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
          <ResponsiveContainer className="flex-child">
            <LineChart data={pageData} margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Line type="monotone" dataKey="amt" stroke="orange" />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </>;
  },
  args: {}
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = [{
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    }, {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    }, {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    }, {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000
    }, {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    }, {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    }, {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }];
    return <div style={{
      height: '100%',
      width: '100%',
      margin: 0
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'row',
        height: '200px'
      }}>
          <div style={{
          flex: 1
        }}>
            <ResponsiveContainer>
              <AreaChart data={data} margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div style={{
          flex: 1
        }}>
            <ResponsiveContainer>
              <AreaChart data={data} margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D=[`MultiChartFlexbox`,`ResponsiveContainerWithFlexbox`]})))()}O();export{T as MultiChartFlexbox,E as ResponsiveContainerWithFlexbox,D as __namedExportsOrder,w as default};