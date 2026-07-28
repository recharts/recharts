import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{A as r,B as i,J as a,Q as o,R as s,Rt as c,Vn as l,X as u,m as d,t as f}from"./iframe-BiMB5Acc.js";import{t as p}from"./data-J2vpPkF6.js";import{r as m}from"./Page-C0w_0_Yr.js";var h=e((()=>{})),g,_,v,y,b;e((()=>{g=t(n()),f(),p(),h(),_={component:d},v={render:()=>g.createElement(g.Fragment,null,g.createElement(`p`,null,`Resize the window to test ResponsiveContainer`),g.createElement(`div`,{className:`flex-parent`},g.createElement(l,{width:`100%`,className:`flex-child`},g.createElement(d,{data:m,margin:{top:10,right:30,left:0,bottom:0}},g.createElement(o,{strokeDasharray:`3 3`}),g.createElement(i,{dataKey:`name`}),g.createElement(s,null),g.createElement(a,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`,fill:`#8884d8`}),g.createElement(c,null))),g.createElement(l,{className:`flex-child`},g.createElement(r,{data:m,margin:{top:10,right:30,left:0,bottom:0}},g.createElement(o,{strokeDasharray:`3 3`}),g.createElement(i,{dataKey:`name`}),g.createElement(s,null),g.createElement(u,{type:`monotone`,dataKey:`amt`,stroke:`orange`}),g.createElement(c,null))))),args:{}},y={render:()=>{let e=[{name:`Page A`,uv:4e3,pv:2400,amt:2400},{name:`Page B`,uv:3e3,pv:1398,amt:2210},{name:`Page C`,uv:2e3,pv:9800,amt:2290},{name:`Page D`,uv:2780,pv:3908,amt:2e3},{name:`Page E`,uv:1890,pv:4800,amt:2181},{name:`Page F`,uv:2390,pv:3800,amt:2500},{name:`Page G`,uv:3490,pv:4300,amt:2100}];return g.createElement(`div`,{style:{height:`100%`,width:`100%`,margin:0}},g.createElement(`div`,{style:{display:`flex`,flexDirection:`row`,height:`200px`}},g.createElement(`div`,{style:{flex:1}},g.createElement(l,null,g.createElement(d,{data:e,margin:{top:10,right:30,left:0,bottom:0}},g.createElement(i,{dataKey:`name`}),g.createElement(s,null),g.createElement(o,{strokeDasharray:`3 3`}),g.createElement(a,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`,fill:`#8884d8`}),g.createElement(c,null)))),g.createElement(`div`,{style:{flex:1}},g.createElement(l,null,g.createElement(d,{data:e,margin:{top:10,right:30,left:0,bottom:0}},g.createElement(i,{dataKey:`name`}),g.createElement(s,null),g.createElement(o,{strokeDasharray:`3 3`}),g.createElement(a,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`,fill:`#8884d8`}),g.createElement(c,null))))))}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`MultiChartFlexbox`,`ResponsiveContainerWithFlexbox`]}))();export{v as MultiChartFlexbox,y as ResponsiveContainerWithFlexbox,b as __namedExportsOrder,_ as default};