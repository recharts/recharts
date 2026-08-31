import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-Dy7ciYWo.js";import{n as a,t as o}from"./Bar-CML54h_E.js";import{n as s,t as c}from"./ComposedChart-BSnkeRRU.js";import{r as l,t as u}from"./Page-DUsfWi7y.js";var d,f,p,m;function h(){return(h=t((()=>{d=e(n()),s(),a(),i(),u(),f={title:`Examples/cartesian/Bar/Fill with Gradient or Pattern`},p={render:()=>{let[e,t]=[600,300];return d.createElement(r,{width:`100%`,height:t},d.createElement(c,{width:e,height:t,margin:{top:20,right:20,bottom:20,left:20},data:l},d.createElement(`defs`,null,d.createElement(`linearGradient`,{id:`colorUv`,x1:`0`,y1:`0`,x2:`0`,y2:`1`},d.createElement(`stop`,{offset:`5%`,stopColor:`#8884d8`,stopOpacity:.8}),d.createElement(`stop`,{offset:`95%`,stopColor:`#8884d8`,stopOpacity:0})),d.createElement(`pattern`,{id:`star`,width:`10`,height:`10`,patternUnits:`userSpaceOnUse`},d.createElement(`polygon`,{points:`0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2`})),d.createElement(`pattern`,{id:`stripe`,width:`4`,height:`4`,patternUnits:`userSpaceOnUse`,patternTransform:`rotate(45)`},d.createElement(`rect`,{width:`2`,height:`4`,fill:`red`}))),d.createElement(o,{dataKey:`uv`,stroke:`#8884d8`,fillOpacity:1,fill:`url(#colorUv)`}),d.createElement(o,{dataKey:`pv`,stroke:`#82ca9d`,fillOpacity:1,fill:`url(#stripe)`}),d.createElement(o,{dataKey:`amt`,stroke:`#8884d8`,fillOpacity:1,fill:`url(#star)`})))}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <pattern id="star" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
            </pattern>
            <pattern id="stripe" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2" height="4" fill="red" />
            </pattern>
          </defs>
          <Bar dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Bar dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#stripe)" />
          <Bar dataKey="amt" stroke="#8884d8" fillOpacity={1} fill="url(#star)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...p.parameters?.docs?.source}}},m=[`Fill`]})))()}h();export{p as Fill,m as __namedExportsOrder,f as default};