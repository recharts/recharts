import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-B0Kxc9j6.js";import{n as a,t as o}from"./Area-DNB2SvJR.js";import{n as s,t as c}from"./ComposedChart-BMuDWuTx.js";import{n as l,r as u}from"./Coordinate-BM6Q61mz.js";var d,f,p,m,h,g,_;function v(){return(v=t((()=>{d=e(n()),a(),s(),i(),u(),f={title:`Examples/cartesian/Area/Customised Dot`},[p,m]=[600,300],h=e=>{let{cx:t,cy:n}=e;return t==null||n==null?null:d.createElement(`svg`,{x:t-10,y:n-10,width:20,height:20,fill:`green`,viewBox:`0 0 1024 1024`},d.createElement(`path`,{d:`M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z`}))},g={id:`test`,render:()=>d.createElement(r,{width:`100%`,height:m},d.createElement(c,{width:p,height:m,margin:{top:20,right:20,bottom:20,left:20},data:l},d.createElement(o,{dataKey:`y`,isAnimationActive:!1,dot:h})))},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  id: 'test',
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} dot={renderDot} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...g.parameters?.docs?.source}}},_=[`CustomizedDot`]})))()}v();export{g as CustomizedDot,_ as __namedExportsOrder,f as default};