import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{J as r,Vn as i,t as a,u as o}from"./iframe-BqVvK_R4.js";import{t as s,w as c}from"./data-J2vpPkF6.js";var l,u,d,f,p,m,h;e((()=>{l=t(n()),a(),s(),u={title:`Examples/cartesian/Area/Customised Label`},[d,f]=[600,300],p=e=>{let{index:t,x:n,y:r}=e;return l.createElement(`text`,{key:t,x:n,y:r,className:`customized-label`},`${n}, ${r}`)},m={render:()=>l.createElement(i,{width:`100%`,height:f},l.createElement(o,{width:d,height:f,margin:{top:20,right:20,bottom:20,left:20},data:c},l.createElement(r,{dataKey:`y`,isAnimationActive:!1,label:p})))},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`CustomizedLabel`]}))();export{m as CustomizedLabel,h as __namedExportsOrder,u as default};