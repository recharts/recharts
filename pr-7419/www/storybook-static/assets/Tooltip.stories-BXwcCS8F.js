import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-B0Kxc9j6.js";import{n as a,t as o}from"./Tooltip-1joug3q7.js";import{n as s,t as c}from"./Line-CGcNDODy.js";import{n as l,t as u}from"./LineChart-TpeFf1Zc.js";import{r as d,t as f}from"./Page-DUsfWi7y.js";import{n as p,t as m}from"./utils-vqcWnakT.js";import{n as h,t as g}from"./TooltipArgs-DgRIUHOb.js";var _,v,y,b;function x(){return(x=t((()=>{_=e(n()),s(),l(),i(),a(),f(),p(),h(),v={argTypes:g,component:o},y={render:e=>{let[t,n]=[600,300];return _.createElement(r,{width:`100%`,height:n},_.createElement(u,{width:t,height:n,margin:{top:20,right:20,bottom:20,left:20},data:d},_.createElement(c,{dataKey:`uv`}),_.createElement(o,e)))},args:{...m(g),trigger:`hover`,shared:!1,useTranslate3d:!1}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <LineChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <Line dataKey="uv" />
          {/* The target component */}
          <Tooltip {...args} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    trigger: 'hover',
    shared: false,
    useTranslate3d: false
  }
}`,...y.parameters?.docs?.source}}},b=[`API`]})))()}x();export{y as API,b as __namedExportsOrder,v as default};