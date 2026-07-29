import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{J as r,Vn as i,t as a,u as o}from"./iframe-BqVvK_R4.js";import{t as s,w as c}from"./data-J2vpPkF6.js";var l,u,d,f,p,m,h;e((()=>{l=t(n()),a(),s(),u={title:`Examples/cartesian/Area/Customised Dot`},[d,f]=[600,300],p=e=>{let{cx:t,cy:n}=e;return t==null||n==null?null:l.createElement(`svg`,{x:t-10,y:n-10,width:20,height:20,fill:`green`,viewBox:`0 0 1024 1024`},l.createElement(`path`,{d:`M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z`}))},m={id:`test`,render:()=>l.createElement(i,{width:`100%`,height:f},l.createElement(o,{width:d,height:f,margin:{top:20,right:20,bottom:20,left:20},data:c},l.createElement(r,{dataKey:`y`,isAnimationActive:!1,dot:p})))},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`CustomizedDot`]}))();export{m as CustomizedDot,h as __namedExportsOrder,u as default};