import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-B0Kxc9j6.js";import{n as a,t as o}from"./Area-DNB2SvJR.js";import{n as s,t as c}from"./ComposedChart-BMuDWuTx.js";import{n as l,r as u}from"./Coordinate-BM6Q61mz.js";var d,f,p,m,h,g,_;function v(){return(v=t((()=>{d=e(n()),s(),a(),i(),u(),f={title:`Examples/cartesian/Area/Customised Label`},[p,m]=[600,300],h=e=>{let{index:t,x:n,y:r}=e;return d.createElement(`text`,{key:t,x:n,y:r,className:`customized-label`},`${n}, ${r}`)},g={render:()=>d.createElement(r,{width:`100%`,height:m},d.createElement(c,{width:p,height:m,margin:{top:20,right:20,bottom:20,left:20},data:l},d.createElement(o,{dataKey:`y`,isAnimationActive:!1,label:h})))},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...g.parameters?.docs?.source}}},_=[`CustomizedLabel`]})))()}v();export{g as CustomizedLabel,_ as __namedExportsOrder,f as default};