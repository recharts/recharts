import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-B0Kxc9j6.js";import{$ as a,Z as o}from"./RechartsWrapper-5-8xGTIW.js";import{n as s,t as c}from"./Legend-CMMduui2.js";import{n as l,t as u}from"./Tooltip-1joug3q7.js";import{i as d,n as f}from"./d3-scale-CwU-vVnw.js";import{n as p,t as m}from"./ReferenceDot-BBG9PJ2P.js";import{n as h,t as g}from"./CartesianGrid-D3Nuobx9.js";import{n as _,t as v}from"./Line-CGcNDODy.js";import{n as y,t as b}from"./XAxis-DaKmDvZB.js";import{n as x,t as S}from"./YAxis-DFF_vhTk.js";import{n as C,t as w}from"./LineChart-TpeFf1Zc.js";function T({dataKey:e,fill:t}){let n=a(),r=n===null?null:R(F,Number(n),e);return r==null||r[e]==null?null:E.createElement(m,{x:r.x,y:r[e],r:6,fill:t,stroke:`white`})}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=t((()=>{E=e(n()),f(),h(),s(),_(),C(),p(),i(),l(),y(),x(),o(),D={component:w,docs:{autodocs:!1}},O=[{x:`2022-12-22`,y:19.4},{x:`2023-01-02`,y:28.1},{x:`2023-01-10`,y:27.3},{x:`2023-01-16`,y:30.5},{x:`2023-01-23`,y:28},{x:`2023-01-31`,y:29.3},{x:`2023-02-08`,y:33.2},{x:`2023-02-13`,y:37.3},{x:`2023-02-21`,y:38.3},{x:`2023-03-10`,y:40}],k=[{x:`2023-01-05`,y:22},{x:`2023-01-10`,y:24.9},{x:`2023-01-18`,y:27.8},{x:`2023-01-24`,y:31.9},{x:`2023-02-03`,y:32.2},{x:`2023-02-07`,y:31.6},{x:`2023-02-09`,y:36.6},{x:`2023-02-17`,y:33.8},{x:`2023-02-24`,y:37.3},{x:`2023-03-06`,y:45},{x:`2023-03-13`,y:45.6},{x:`2023-03-16`,y:44.5}],A=e=>new Date(e).getTime(),j=(e,t)=>{let n=new Map;return e.forEach(e=>{let t=A(e.x).valueOf();n.has(t)||n.set(t,{x:t}),n.get(t).y1=e.y}),t.forEach(e=>{let t=A(e.x).valueOf();n.has(t)||n.set(t,{x:t}),n.get(t).y2=e.y}),Array.from(n.values()).sort((e,t)=>e.x-t.x)},M=e=>new Date(e).toLocaleString(`en-US`,{month:`short`}),N=e=>new Date(e).getTime(),P=e=>{if(!e.length)return{};let t=e.map(N),n=Math.max(...t),r=Math.min(...t),i=d().domain([r,n]).nice(),a=i.ticks(5).map(e=>e.valueOf());return{domain:i.domain().map(e=>e.valueOf()),scale:i,type:`number`,ticks:a,tickFormatter:M}},F=j(O,k),I=new Set([...O.map(e=>`${e.x}T00:00:00.000Z`),...k.map(e=>`${e.x}T00:00:00.000Z`)]),L=Array.from(I),R=(e,t,n)=>{let r=null,i=1/0;return e.forEach(e=>{if(e[n]!==void 0){let n=Math.abs(e.x-t);n<i&&(i=n,r=e)}}),r},z={render:()=>E.createElement(r,{width:`100%`,height:400},E.createElement(w,{width:500,height:300,data:F,margin:{top:20,right:30,left:20,bottom:20}},E.createElement(g,{strokeDasharray:`2 5`}),E.createElement(b,{axisLine:!1,stroke:`#333`,dataKey:`x`,fontSize:12,dy:10,tickLine:!1,...P(L)}),E.createElement(S,null),E.createElement(c,null),E.createElement(v,{type:`monotone`,dataKey:`y1`,stroke:`red`,dot:!0,name:`Series 1`,connectNulls:!0,activeDot:!1}),E.createElement(v,{type:`monotone`,dataKey:`y2`,stroke:`blue`,name:`Series 2`,connectNulls:!0,activeDot:!1,dot:!0}),E.createElement(T,{dataKey:`y1`,fill:`red`}),E.createElement(T,{dataKey:`y2`,fill:`blue`}),E.createElement(u,null)))},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={400}>
        <LineChart width={500} height={300} data={mergedGraphData} margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <CartesianGrid strokeDasharray="2 5" />
          <XAxis axisLine={false} stroke="#333" dataKey="x" fontSize={12} dy={10} tickLine={false} {...getXAxisArgsForTimeBasedGraph(allDates)} />
          <YAxis />
          <Legend />
          {/* Main line for Series 1 */}
          <Line type="monotone" dataKey="y1" stroke="red" dot name="Series 1" connectNulls activeDot={false} />
          {/* Main line for Series 2 */}
          <Line type="monotone" dataKey="y2" stroke="blue" name="Series 2" connectNulls activeDot={false} dot />
          {/* Draw extra active dot for Series 1 */}
          <JointActiveDot dataKey="y1" fill="red" />
          {/* Draw extra active dot for Series 2 */}
          <JointActiveDot dataKey="y2" fill="blue" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...z.parameters?.docs?.source}}},B=[`DualLineChart`]})))()}V();export{z as DualLineChart,B as __namedExportsOrder,D as default};