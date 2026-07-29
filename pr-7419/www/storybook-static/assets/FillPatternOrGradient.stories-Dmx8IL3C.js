import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{Vn as r,W as i,t as a,u as o}from"./iframe-BqVvK_R4.js";import{t as s}from"./data-J2vpPkF6.js";import{r as c}from"./Page-C0w_0_Yr.js";var l,u,d,f;e((()=>{l=t(n()),a(),s(),u={title:`Examples/cartesian/Bar/Fill with Gradient or Pattern`},d={render:()=>{let[e,t]=[600,300];return l.createElement(r,{width:`100%`,height:t},l.createElement(o,{width:e,height:t,margin:{top:20,right:20,bottom:20,left:20},data:c},l.createElement(`defs`,null,l.createElement(`linearGradient`,{id:`colorUv`,x1:`0`,y1:`0`,x2:`0`,y2:`1`},l.createElement(`stop`,{offset:`5%`,stopColor:`#8884d8`,stopOpacity:.8}),l.createElement(`stop`,{offset:`95%`,stopColor:`#8884d8`,stopOpacity:0})),l.createElement(`pattern`,{id:`star`,width:`10`,height:`10`,patternUnits:`userSpaceOnUse`},l.createElement(`polygon`,{points:`0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2`})),l.createElement(`pattern`,{id:`stripe`,width:`4`,height:`4`,patternUnits:`userSpaceOnUse`,patternTransform:`rotate(45)`},l.createElement(`rect`,{width:`2`,height:`4`,fill:`red`}))),l.createElement(i,{dataKey:`uv`,stroke:`#8884d8`,fillOpacity:1,fill:`url(#colorUv)`}),l.createElement(i,{dataKey:`pv`,stroke:`#82ca9d`,fillOpacity:1,fill:`url(#stripe)`}),l.createElement(i,{dataKey:`amt`,stroke:`#8884d8`,fillOpacity:1,fill:`url(#star)`})))}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Fill`]}))();export{d as Fill,f as __namedExportsOrder,u as default};