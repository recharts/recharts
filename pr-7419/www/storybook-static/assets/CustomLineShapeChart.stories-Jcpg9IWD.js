import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{r}from"./isWellBehavedNumber-Dv8NthpO.js";import{G as i,K as a}from"./zIndexSlice-Dy7ciYWo.js";import{n as o,t as s}from"./Legend-DiG0OfkN.js";import{n as c,t as l}from"./Tooltip-tAkHHdqP.js";import{n as u,t as d}from"./Curve-BDWIL6jd.js";import{n as f,t as p}from"./CartesianGrid-DXJ2CyMi.js";import{n as m,t as h}from"./Line-CCKkHve0.js";import{n as g,t as _}from"./XAxis-B3WODRl4.js";import{n as v,t as y}from"./YAxis-CZypjyHs.js";import{n as b,t as x}from"./LineChart-BRH708ee.js";import{r as S,t as C}from"./Page-DUsfWi7y.js";import{n as w,t as T}from"./utils-vqcWnakT.js";import{n as E,t as D}from"./LineChartArgs-BTSdCahn.js";var O,k,A,j,M;function N(){return(N=t((()=>{O=e(n()),f(),u(),o(),m(),b(),a(),c(),g(),v(),C(),E(),w(),k={component:x,argTypes:D,docs:{autodocs:!1}},A=e=>{let{tick:t,tickInterval:n=30,...i}=e,{points:a}=i,o=[];if(a)for(let e=1,i=a.length;e<i;++e){let i=0,s=a[e-1],c=a[e];if(r(s.x)&&r(s.y)&&r(c.x)&&r(c.y)){let r=Math.abs(s.x-c.x),a=(c.x-s.x)/r,l=(c.y-s.y)/r,u=Math.atan2(l,a)*180/Math.PI,d=Math.abs(Math.floor(r/n-1)),f=r/d,p=n/2,{x:m,y:h}=s;for(;r-p>0;)r-=p,m+=a*p,h+=l*p,o.push(O.createElement(`g`,{key:`${e}-${++i}`,transform:`translate(${m} ${h}) rotate(${u})`},t)),p=f}}return O.createElement(`g`,{style:{color:i.stroke}},O.createElement(d,i),o)},j={render:e=>O.createElement(i,{width:`100%`,height:`100%`},O.createElement(x,e,O.createElement(p,{strokeDasharray:`3 3`}),O.createElement(_,{dataKey:`name`}),O.createElement(y,null),O.createElement(s,null),O.createElement(l,{cursor:{stroke:`gold`,strokeWidth:2},defaultIndex:3}),O.createElement(h,{type:`linear`,dataKey:`pv`,stroke:`#8884d8`,activeDot:{r:8},shape:e=>O.createElement(A,{...e,tick:O.createElement(`circle`,{r:5,fill:`currentColor`})})}),O.createElement(h,{type:`linear`,dataKey:`uv`,stroke:`#82ca9d`,shape:e=>O.createElement(A,{...e,tick:O.createElement(`rect`,{x:-5,y:-5,width:10,height:10,fill:`currentColor`})})}))),args:{...T(D),width:500,height:300,data:S,margin:{top:5,right:30,left:20,bottom:5}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...j.parameters?.docs?.source}}},M=[`CustomLineShapeChart`]})))()}N();export{j as CustomLineShapeChart,M as __namedExportsOrder,k as default};