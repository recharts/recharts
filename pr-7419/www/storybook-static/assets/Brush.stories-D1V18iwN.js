import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-B0Kxc9j6.js";import{n as a,t as o}from"./Legend-CMMduui2.js";import{n as s,t as c}from"./Tooltip-1joug3q7.js";import{n as l,t as u}from"./Brush-CwCQ7MWG.js";import{n as d,t as f}from"./ReferenceLine-CPZnbrex.js";import{n as p,t as m}from"./CartesianGrid-D3Nuobx9.js";import{n as h,t as g}from"./Line-CGcNDODy.js";import{n as _,t as v}from"./XAxis-DaKmDvZB.js";import{n as y,t as b}from"./YAxis-DFF_vhTk.js";import{n as x,t as S}from"./LineChart-TpeFf1Zc.js";import{n as C,t as w}from"./ComposedChart-BMuDWuTx.js";import{r as T,t as E}from"./Page-DUsfWi7y.js";var D,O,k,A,j,M;function N(){return(N=t((()=>{D=e(n()),C(),i(),h(),l(),p(),a(),x(),d(),s(),_(),y(),E(),O={component:u},k={render:e=>{let[t,n]=(0,D.useState)(2),[i,a]=(0,D.useState)(5);return D.createElement(D.Fragment,null,D.createElement(r,{width:`100%`,height:400},D.createElement(w,{data:T},D.createElement(g,{dataKey:`uv`,isAnimationActive:!1}),D.createElement(u,{startIndex:t,endIndex:i,onChange:e=>{a(e.endIndex),n(e.startIndex)},alwaysShowText:!0}))),D.createElement(`input`,{type:`number`,"aria-label":`startIndex`,value:t,onChange:e=>{let t=Number(e.target.value);Number.isInteger(t)&&n(t)}}),D.createElement(`input`,{"aria-label":`endIndex`,value:i,onChange:e=>{let t=Number(e.target.value);Number.isInteger(t)&&a(t)}}))}},A={render:e=>D.createElement(w,{width:600,height:300,data:T,margin:{top:0,right:0,left:0,bottom:0}},D.createElement(v,{dataKey:`name`}),D.createElement(b,null),D.createElement(m,{strokeDasharray:`3 3`}),D.createElement(o,null),D.createElement(g,{type:`monotone`,dataKey:`pv`,stroke:`#8884d8`,activeDot:{r:8}}),D.createElement(g,{type:`monotone`,dataKey:`uv`,stroke:`#82ca9d`}),D.createElement(f,{stroke:`red`,strokeOpacity:`red`,strokeWidth:3,strokeLinecap:`round`,y:1e3}),D.createElement(u,{dataKey:`name`},D.createElement(S,null,D.createElement(f,{key:`test`,stroke:`red`,strokeOpacity:`red`,strokeWidth:3,strokeLinecap:`round`,y:1e3}),D.createElement(m,{strokeDasharray:`1 1`,verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),D.createElement(g,{type:`monotone`,dataKey:`pv`,stroke:`#8884d8`,activeDot:{r:8}}),D.createElement(g,{type:`monotone`,dataKey:`uv`,stroke:`#82ca9d`}))),D.createElement(c,null))},j={render:e=>D.createElement(w,{width:600,height:300,data:T},D.createElement(u,null,D.createElement(S,null,D.createElement(f,{key:`test`,stroke:`red`,strokeOpacity:`red`,strokeWidth:3,strokeLinecap:`round`,y:1e3}),D.createElement(m,{strokeDasharray:`1 1`,verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),D.createElement(g,{type:`monotone`,dataKey:`pv`,stroke:`#8884d8`,activeDot:{r:8}}),D.createElement(g,{type:`monotone`,dataKey:`uv`,stroke:`#82ca9d`}))))},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: (_args: Args) => {
    const [startIndex, setStartIndex] = useState<number | undefined>(2);
    const [endIndex, setEndIndex] = useState<number | undefined>(5);
    return <>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={pageData}>
            <Line dataKey="uv" isAnimationActive={false} />

            <Brush startIndex={startIndex} endIndex={endIndex} onChange={e => {
            setEndIndex(e.endIndex);
            setStartIndex(e.startIndex);
          }} alwaysShowText />
          </ComposedChart>
        </ResponsiveContainer>
        <input type="number" aria-label="startIndex" value={startIndex} onChange={evt => {
        const num = Number(evt.target.value);
        if (Number.isInteger(num)) setStartIndex(num);
      }} />
        <input aria-label="endIndex" value={endIndex} onChange={evt => {
        const num = Number(evt.target.value);
        if (Number.isInteger(num)) setEndIndex(num);
      }} />
      </>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: (_args: Args) => {
    return <ComposedChart width={600} height={300} data={pageData} margin={{
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
        r: 8
      }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <ReferenceLine stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
        <Brush dataKey="name">
          <LineChart>
            <ReferenceLine key="test" stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
            <CartesianGrid strokeDasharray="1 1" verticalPoints={[10, 20, 30]} horizontalPoints={[10, 20, 30]} />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Brush>
        <Tooltip />
      </ComposedChart>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: (_args: Args) => {
    return <ComposedChart width={600} height={300} data={pageData}>
        <Brush>
          <LineChart>
            <ReferenceLine key="test" stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
            <CartesianGrid strokeDasharray="1 1" verticalPoints={[10, 20, 30]} horizontalPoints={[10, 20, 30]} />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Brush>
      </ComposedChart>;
  }
}`,...j.parameters?.docs?.source}}},M=[`ControlledBrush`,`PanoramicBrush`,`NoChartBrush`]})))()}N();export{k as ControlledBrush,j as NoChartBrush,A as PanoramicBrush,M as __namedExportsOrder,O as default};