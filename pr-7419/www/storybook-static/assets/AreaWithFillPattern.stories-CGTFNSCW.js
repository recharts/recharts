import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-Dy7ciYWo.js";import{n as a,t as o}from"./Area-DAKsflsV.js";import{n as s,t as c}from"./ComposedChart-BSnkeRRU.js";import{n as l,r as u}from"./Coordinate-BM6Q61mz.js";var d,f,p,m,h,g;function _(){return(_=t((()=>{d=e(n()),s(),a(),i(),u(),f={title:`Examples/cartesian/Area/With Fill Pattern`},[p,m]=[600,300],h={render:()=>d.createElement(r,{width:`100%`,height:m},d.createElement(c,{width:p,height:m,margin:{top:20,right:20,bottom:20,left:20},data:l},d.createElement(`defs`,null,d.createElement(`pattern`,{id:`left`,width:`12`,height:`4`,patternUnits:`userSpaceOnUse`},d.createElement(`rect`,{width:`4`,height:`4`,fill:`#8884d8`})),d.createElement(`pattern`,{id:`right`,width:`8`,height:`4`,patternUnits:`userSpaceOnUse`,patternTransform:`rotate(45)`},d.createElement(`rect`,{width:`4`,height:`4`,fill:`#82ca9d`}))),d.createElement(o,{type:`monotone`,dataKey:`x`,stroke:`#8884d8`,fillOpacity:1,fill:`url(#left)`}),d.createElement(o,{type:`monotone`,dataKey:`y`,stroke:`#82ca9d`,fillOpacity:1,fill:`url(#right)`})))},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`FillPattern`]})))()}_();export{h as FillPattern,g as __namedExportsOrder,f as default};