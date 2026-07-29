import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{A as r,B as i,Jn as a,Q as o,R as s,Rt as c,Tn as l,Vn as u,X as d,Yn as f,kn as p,t as m}from"./iframe-BqVvK_R4.js";import{t as h}from"./data-J2vpPkF6.js";import{r as g}from"./Page-C0w_0_Yr.js";import{n as _,t as v}from"./utils-4uF5A2JM.js";import{n as y,t as b}from"./LineChartArgs-f-9wms1F.js";var x,S,C,w,T;e((()=>{x=t(n()),m(),h(),a(),y(),_(),S={component:r,argTypes:b,docs:{autodocs:!1}},C=e=>{let{tick:t,tickInterval:n=30,...r}=e,{points:i}=r,a=[];if(i)for(let e=1,r=i.length;e<r;++e){let r=0,o=i[e-1],s=i[e];if(f(o.x)&&f(o.y)&&f(s.x)&&f(s.y)){let i=Math.abs(o.x-s.x),c=(s.x-o.x)/i,l=(s.y-o.y)/i,u=Math.atan2(l,c)*180/Math.PI,d=Math.abs(Math.floor(i/n-1)),f=i/d,p=n/2,{x:m,y:h}=o;for(;i-p>0;)i-=p,m+=c*p,h+=l*p,a.push(x.createElement(`g`,{key:`${e}-${++r}`,transform:`translate(${m} ${h}) rotate(${u})`},t)),p=f}}return x.createElement(`g`,{style:{color:r.stroke}},x.createElement(l,r),a)},w={render:e=>x.createElement(u,{width:`100%`,height:`100%`},x.createElement(r,e,x.createElement(o,{strokeDasharray:`3 3`}),x.createElement(i,{dataKey:`name`}),x.createElement(s,null),x.createElement(p,null),x.createElement(c,{cursor:{stroke:`gold`,strokeWidth:2},defaultIndex:3}),x.createElement(d,{type:`linear`,dataKey:`pv`,stroke:`#8884d8`,activeDot:{r:8},shape:e=>x.createElement(C,{...e,tick:x.createElement(`circle`,{r:5,fill:`currentColor`})})}),x.createElement(d,{type:`linear`,dataKey:`uv`,stroke:`#82ca9d`,shape:e=>x.createElement(C,{...e,tick:x.createElement(`rect`,{x:-5,y:-5,width:10,height:10,fill:`currentColor`})})}))),args:{...v(b),width:500,height:300,data:g,margin:{top:5,right:30,left:20,bottom:5}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`CustomLineShapeChart`]}))();export{w as CustomLineShapeChart,T as __namedExportsOrder,S as default};