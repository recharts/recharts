import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{A as r,B as i,E as a,J as o,O as s,Q as c,R as l,Rt as u,St as d,Vn as f,W as p,X as m,bt as h,ct as g,f as _,ft as v,m as y,t as b,ut as x,v as S,vt as C,wt as w}from"./iframe-BiMB5Acc.js";import{n as T,t as E}from"./_data-o-PbaCPp.js";function D(e,t){return[...e.slice(t),...e.slice(0,t)]}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;e((()=>{O=t(n()),b(),T(),k={syncId:{control:`text`},syncMethod:{control:{type:`radio`},options:[`index`,`value`,`custom`],mapping:{custom:function(e,t){return(t.activeTooltipIndex+1)%e.length}}}},A={argTypes:k,component:r,decorators:[]},j=E,M=D(j,1),N=D(j,2),P=D(j,3),F=D(j,4),I=D(j,5),L=`#82ca9d`,R=`#8884d8`,z=`#2c5097`,B=`#d71e1e`,V=`#ff7300`,H=`#dd4a98`,U={render:e=>O.createElement(O.Fragment,null,O.createElement(f,{width:`100%`,height:200},O.createElement(y,{width:500,height:200,data:j,...e,margin:{top:10,right:30,left:0,bottom:0}},O.createElement(c,{strokeDasharray:`3 3`}),O.createElement(i,{dataKey:`name`}),O.createElement(l,null),O.createElement(o,{type:`monotone`,dataKey:`uv`,stroke:L,fill:L}),O.createElement(g,null),O.createElement(u,null))),O.createElement(f,{width:`100%`,height:200},O.createElement(s,{width:500,height:200,data:M,...e,margin:{top:10,right:30,left:0,bottom:0}},O.createElement(c,{strokeDasharray:`3 3`}),O.createElement(i,{dataKey:`name`}),O.createElement(l,null),O.createElement(u,null),O.createElement(p,{dataKey:`pv`,stroke:R,fill:R}),O.createElement(g,null))),O.createElement(`p`,null,`Maybe some other content`),O.createElement(f,{width:`100%`,height:200},O.createElement(r,{width:500,height:200,data:N,...e,margin:{top:10,right:30,left:0,bottom:0}},O.createElement(c,{strokeDasharray:`3 3`}),O.createElement(i,{dataKey:`name`}),O.createElement(l,null),O.createElement(m,{type:`monotone`,dataKey:`uv`,stroke:z,fill:z}),O.createElement(g,null),O.createElement(u,null))),O.createElement(f,{width:`100%`,height:200},O.createElement(a,{width:500,height:200,...e,margin:{top:10,right:30,left:0,bottom:0}},O.createElement(C,{data:P,dataKey:`pv`,fill:B}),O.createElement(u,null))),O.createElement(f,{width:`100%`,height:200},O.createElement(S,{width:500,height:200,data:F,...e,margin:{top:10,right:30,left:0,bottom:0}},O.createElement(w,{strokeDasharray:`3 3`}),O.createElement(d,{dataKey:`uv`,type:`number`}),O.createElement(h,{dataKey:`name`,type:`category`}),O.createElement(v,{dataKey:`uv`,stroke:V,fill:V}),O.createElement(u,null))),O.createElement(f,{width:`100%`,height:200},O.createElement(_,{width:500,height:200,data:I,...e,margin:{top:10,right:30,left:0,bottom:0}},O.createElement(w,{strokeDasharray:`3 3`}),O.createElement(d,{dataKey:`name`,type:`category`}),O.createElement(h,{dataKey:`pv`,type:`number`}),O.createElement(x,{dataKey:`pv`,stroke:H,fill:H}),O.createElement(u,null)))),args:{syncMethod:`index`,syncId:`my-sync-id`}},W={render:e=>{let t=[{name:`Series 1`,data:[{x:0,y:0},{x:1,y:1},{x:2,y:2}]}],n=[{name:`Series 1`,data:[{x:1,y:0},{x:2,y:1},{x:3,y:2}]}];return O.createElement(O.Fragment,null,O.createElement(r,{...e,width:500,height:300},O.createElement(i,{dataKey:`x`,type:`number`,domain:[0,3]}),O.createElement(l,{dataKey:`y`}),O.createElement(u,{cursor:{stroke:`red`}}),t.map(e=>O.createElement(m,{dataKey:`y`,data:e.data,name:e.name,key:e.name}))),O.createElement(r,{...e,width:500,height:300},O.createElement(i,{dataKey:`x`,type:`number`,domain:[0,3]}),O.createElement(l,{dataKey:`y`}),O.createElement(u,{cursor:{stroke:`red`,strokeWidth:`5px`}}),n.map(e=>O.createElement(m,{dataKey:`y`,data:e.data,name:e.name,key:e.name})),O.createElement(g,null)))},args:{syncMethod:`index`,syncId:`my-sync-id`}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G=[`Synchronised`,`SynchronisedWithDataOnItem`]}))();export{U as Synchronised,W as SynchronisedWithDataOnItem,G as __namedExportsOrder,A as default};