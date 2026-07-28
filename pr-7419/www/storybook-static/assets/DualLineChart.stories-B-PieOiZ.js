import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{A as r,B as i,Gt as a,Jt as o,Q as s,R as c,Rt as l,Vn as u,X as d,ht as f,it as p,kn as m,t as h}from"./iframe-BiMB5Acc.js";function g({dataKey:e,fill:t}){let n=f(),r=n===null?null:k(E,Number(n),e);return r==null||r[e]==null?null:_.createElement(p,{x:r.x,y:r[e],r:6,fill:t,stroke:`white`})}var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{_=t(n()),a(),h(),v={component:r,docs:{autodocs:!1}},y=[{x:`2022-12-22`,y:19.4},{x:`2023-01-02`,y:28.1},{x:`2023-01-10`,y:27.3},{x:`2023-01-16`,y:30.5},{x:`2023-01-23`,y:28},{x:`2023-01-31`,y:29.3},{x:`2023-02-08`,y:33.2},{x:`2023-02-13`,y:37.3},{x:`2023-02-21`,y:38.3},{x:`2023-03-10`,y:40}],b=[{x:`2023-01-05`,y:22},{x:`2023-01-10`,y:24.9},{x:`2023-01-18`,y:27.8},{x:`2023-01-24`,y:31.9},{x:`2023-02-03`,y:32.2},{x:`2023-02-07`,y:31.6},{x:`2023-02-09`,y:36.6},{x:`2023-02-17`,y:33.8},{x:`2023-02-24`,y:37.3},{x:`2023-03-06`,y:45},{x:`2023-03-13`,y:45.6},{x:`2023-03-16`,y:44.5}],x=e=>new Date(e).getTime(),S=(e,t)=>{let n=new Map;return e.forEach(e=>{let t=x(e.x).valueOf();n.has(t)||n.set(t,{x:t}),n.get(t).y1=e.y}),t.forEach(e=>{let t=x(e.x).valueOf();n.has(t)||n.set(t,{x:t}),n.get(t).y2=e.y}),Array.from(n.values()).sort((e,t)=>e.x-t.x)},C=e=>new Date(e).toLocaleString(`en-US`,{month:`short`}),w=e=>new Date(e).getTime(),T=e=>{if(!e.length)return{};let t=e.map(w),n=Math.max(...t),r=Math.min(...t),i=o().domain([r,n]).nice(),a=i.ticks(5).map(e=>e.valueOf());return{domain:i.domain().map(e=>e.valueOf()),scale:i,type:`number`,ticks:a,tickFormatter:C}},E=S(y,b),D=new Set([...y.map(e=>`${e.x}T00:00:00.000Z`),...b.map(e=>`${e.x}T00:00:00.000Z`)]),O=Array.from(D),k=(e,t,n)=>{let r=null,i=1/0;return e.forEach(e=>{if(e[n]!==void 0){let n=Math.abs(e.x-t);n<i&&(i=n,r=e)}}),r},A={render:()=>_.createElement(u,{width:`100%`,height:400},_.createElement(r,{width:500,height:300,data:E,margin:{top:20,right:30,left:20,bottom:20}},_.createElement(s,{strokeDasharray:`2 5`}),_.createElement(i,{axisLine:!1,stroke:`#333`,dataKey:`x`,fontSize:12,dy:10,tickLine:!1,...T(O)}),_.createElement(c,null),_.createElement(m,null),_.createElement(d,{type:`monotone`,dataKey:`y1`,stroke:`red`,dot:!0,name:`Series 1`,connectNulls:!0,activeDot:!1}),_.createElement(d,{type:`monotone`,dataKey:`y2`,stroke:`blue`,name:`Series 2`,connectNulls:!0,activeDot:!1,dot:!0}),_.createElement(g,{dataKey:`y1`,fill:`red`}),_.createElement(g,{dataKey:`y2`,fill:`blue`}),_.createElement(l,null)))},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`DualLineChart`]}))();export{A as DualLineChart,j as __namedExportsOrder,v as default};