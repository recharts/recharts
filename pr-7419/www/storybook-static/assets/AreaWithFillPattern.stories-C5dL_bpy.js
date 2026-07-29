import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{J as r,Vn as i,t as a,u as o}from"./iframe-BqVvK_R4.js";import{t as s,w as c}from"./data-J2vpPkF6.js";var l,u,d,f,p,m;e((()=>{l=t(n()),a(),s(),u={title:`Examples/cartesian/Area/With Fill Pattern`},[d,f]=[600,300],p={render:()=>l.createElement(i,{width:`100%`,height:f},l.createElement(o,{width:d,height:f,margin:{top:20,right:20,bottom:20,left:20},data:c},l.createElement(`defs`,null,l.createElement(`pattern`,{id:`left`,width:`12`,height:`4`,patternUnits:`userSpaceOnUse`},l.createElement(`rect`,{width:`4`,height:`4`,fill:`#8884d8`})),l.createElement(`pattern`,{id:`right`,width:`8`,height:`4`,patternUnits:`userSpaceOnUse`,patternTransform:`rotate(45)`},l.createElement(`rect`,{width:`4`,height:`4`,fill:`#82ca9d`}))),l.createElement(r,{type:`monotone`,dataKey:`x`,stroke:`#8884d8`,fillOpacity:1,fill:`url(#left)`}),l.createElement(r,{type:`monotone`,dataKey:`y`,stroke:`#82ca9d`,fillOpacity:1,fill:`url(#right)`})))},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...p.parameters?.docs?.source}}},m=[`FillPattern`]}))();export{p as FillPattern,m as __namedExportsOrder,u as default};