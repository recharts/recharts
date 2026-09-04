import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-CfT4cgn7.js";import{n as ee,t as a}from"./Tooltip-YHivrOZa.js";import{n as te,t as o}from"./PolarGrid-DMtKlK5C.js";import{n as s,t as c}from"./PolarRadiusAxis-CHzBJKXB.js";import{n as l,t as u}from"./PolarAngleAxis-BkWUnbsr.js";import{i as ne,n as re,r as ie,t as ae}from"./PieChart-z1CxVkYv.js";import{n as oe,t as se}from"./Radar-CNbB0c0g.js";import{n as ce,t as le}from"./RadialBar-CWcwI7km.js";import{n as d,t as f}from"./Brush-BT3Khapq.js";import{n as p,t as m}from"./CartesianGrid-C0BAtXH9.js";import{n as h,t as g}from"./Line---TR8N4V.js";import{n as _,t as v}from"./Area-CqYIOjBK.js";import{n as y,t as b}from"./Bar-CQB3-sR3.js";import{n as ue,t as x}from"./XAxis-BC2eC402.js";import{n as de,t as S}from"./YAxis-Ch1VfSce.js";import{n as fe,t as C}from"./LineChart-DFJO6Y-4.js";import{n as w,t as T}from"./BarChart-CpIQPN2H.js";import{n as E,t as D}from"./RadarChart-C_Y50zug.js";import{n as O,t as k}from"./AreaChart-en3j8Hu5.js";import{n as A,t as j}from"./RadialBarChart-BLfl7Ppx.js";import{n as M,t as N}from"./_data-PEEDfUt6.js";function P(e,t){return[...e.slice(t),...e.slice(0,t)]}var F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{F=e(n()),_(),O(),y(),w(),d(),p(),h(),fe(),ne(),re(),l(),te(),s(),oe(),E(),ce(),A(),i(),ee(),ue(),de(),M(),I={syncId:{control:`text`},syncMethod:{control:{type:`radio`},options:[`index`,`value`,`custom`],mapping:{custom:function(e,t){return(t.activeTooltipIndex+1)%e.length}}}},L={argTypes:I,component:C,decorators:[]},R=N,z=P(R,1),B=P(R,2),V=P(R,3),H=P(R,4),U=P(R,5),W=`#82ca9d`,G=`#8884d8`,K=`#2c5097`,q=`#d71e1e`,J=`#ff7300`,Y=`#dd4a98`,X={render:e=>F.createElement(F.Fragment,null,F.createElement(r,{width:`100%`,height:200},F.createElement(k,{width:500,height:200,data:R,...e,margin:{top:10,right:30,left:0,bottom:0}},F.createElement(m,{strokeDasharray:`3 3`}),F.createElement(x,{dataKey:`name`}),F.createElement(S,null),F.createElement(v,{type:`monotone`,dataKey:`uv`,stroke:W,fill:W}),F.createElement(f,null),F.createElement(a,null))),F.createElement(r,{width:`100%`,height:200},F.createElement(T,{width:500,height:200,data:z,...e,margin:{top:10,right:30,left:0,bottom:0}},F.createElement(m,{strokeDasharray:`3 3`}),F.createElement(x,{dataKey:`name`}),F.createElement(S,null),F.createElement(a,null),F.createElement(b,{dataKey:`pv`,stroke:G,fill:G}),F.createElement(f,null))),F.createElement(`p`,null,`Maybe some other content`),F.createElement(r,{width:`100%`,height:200},F.createElement(C,{width:500,height:200,data:B,...e,margin:{top:10,right:30,left:0,bottom:0}},F.createElement(m,{strokeDasharray:`3 3`}),F.createElement(x,{dataKey:`name`}),F.createElement(S,null),F.createElement(g,{type:`monotone`,dataKey:`uv`,stroke:K,fill:K}),F.createElement(f,null),F.createElement(a,null))),F.createElement(r,{width:`100%`,height:200},F.createElement(ae,{width:500,height:200,...e,margin:{top:10,right:30,left:0,bottom:0}},F.createElement(ie,{data:V,dataKey:`pv`,fill:q}),F.createElement(a,null))),F.createElement(r,{width:`100%`,height:200},F.createElement(D,{width:500,height:200,data:H,...e,margin:{top:10,right:30,left:0,bottom:0}},F.createElement(o,{strokeDasharray:`3 3`}),F.createElement(c,{dataKey:`uv`,type:`number`}),F.createElement(u,{dataKey:`name`,type:`category`}),F.createElement(se,{dataKey:`uv`,stroke:J,fill:J}),F.createElement(a,null))),F.createElement(r,{width:`100%`,height:200},F.createElement(j,{width:500,height:200,data:U,...e,margin:{top:10,right:30,left:0,bottom:0}},F.createElement(o,{strokeDasharray:`3 3`}),F.createElement(c,{dataKey:`name`,type:`category`}),F.createElement(u,{dataKey:`pv`,type:`number`}),F.createElement(le,{dataKey:`pv`,stroke:Y,fill:Y}),F.createElement(a,null)))),args:{syncMethod:`index`,syncId:`my-sync-id`}},Z={render:e=>{let t=[{name:`Series 1`,data:[{x:0,y:0},{x:1,y:1},{x:2,y:2}]}],n=[{name:`Series 1`,data:[{x:1,y:0},{x:2,y:1},{x:3,y:2}]}];return F.createElement(F.Fragment,null,F.createElement(C,{...e,width:500,height:300},F.createElement(x,{dataKey:`x`,type:`number`,domain:[0,3]}),F.createElement(S,{dataKey:`y`}),F.createElement(a,{cursor:{stroke:`red`}}),t.map(e=>F.createElement(g,{dataKey:`y`,data:e.data,name:e.name,key:e.name}))),F.createElement(C,{...e,width:500,height:300},F.createElement(x,{dataKey:`x`,type:`number`,domain:[0,3]}),F.createElement(S,{dataKey:`y`}),F.createElement(a,{cursor:{stroke:`red`,strokeWidth:`5px`}}),n.map(e=>F.createElement(g,{dataKey:`y`,data:e.data,name:e.name,key:e.name})),F.createElement(f,null)))},args:{syncMethod:`index`,syncId:`my-sync-id`}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart width={500} height={200} data={data1} {...args} margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Area type="monotone" dataKey="uv" stroke={green} fill={green} />
            <Brush />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <BarChart width={500} height={200} data={data2} {...args} margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pv" stroke={purple} fill={purple} />
            <Brush />
          </BarChart>
        </ResponsiveContainer>
        <p>Maybe some other content</p>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart width={500} height={200} data={data3} {...args} margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Line type="monotone" dataKey="uv" stroke={blue} fill={blue} />
            <Brush />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <PieChart width={500} height={200} {...args} margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}>
            <Pie data={data4} dataKey="pv" fill={red} />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <RadarChart width={500} height={200} data={data5} {...args} margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}>
            <PolarGrid strokeDasharray="3 3" />
            <PolarRadiusAxis dataKey="uv" type="number" />
            <PolarAngleAxis dataKey="name" type="category" />
            <Radar dataKey="uv" stroke={orange} fill={orange} />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <RadialBarChart width={500} height={200} data={data6} {...args} margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}>
            <PolarGrid strokeDasharray="3 3" />
            <PolarRadiusAxis dataKey="name" type="category" />
            <PolarAngleAxis dataKey="pv" type="number" />
            <RadialBar dataKey="pv" stroke={pink} fill={pink} />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>
      </>;
  },
  args: {
    syncMethod: 'index',
    syncId: 'my-sync-id'
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const series = [{
      name: 'Series 1',
      data: [{
        x: 0,
        y: 0
      }, {
        x: 1,
        y: 1
      }, {
        x: 2,
        y: 2
      }]
    }];
    const series2 = [{
      name: 'Series 1',
      data: [{
        x: 1,
        y: 0
      }, {
        x: 2,
        y: 1
      }, {
        x: 3,
        y: 2
      }]
    }];
    return <>
        <LineChart {...args} width={500} height={300}>
          <XAxis dataKey="x" type="number" domain={[0, 3]} />
          <YAxis dataKey="y" />
          <Tooltip cursor={{
          stroke: 'red'
        }} />
          {series.map(s => <Line dataKey="y" data={s.data} name={s.name} key={s.name} />)}
        </LineChart>
        <LineChart {...args} width={500} height={300}>
          <XAxis dataKey="x" type="number" domain={[0, 3]} />
          <YAxis dataKey="y" />
          <Tooltip cursor={{
          stroke: 'red',
          strokeWidth: '5px'
        }} />
          {series2.map(s => <Line dataKey="y" data={s.data} name={s.name} key={s.name} />)}
          <Brush />
        </LineChart>
      </>;
  },
  args: {
    syncMethod: 'index',
    syncId: 'my-sync-id'
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Synchronised`,`SynchronisedWithDataOnItem`]})))()}$();export{X as Synchronised,Z as SynchronisedWithDataOnItem,Q as __namedExportsOrder,L as default};