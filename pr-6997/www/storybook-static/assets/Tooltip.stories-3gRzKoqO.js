import{e}from"./iframe-D4XW71qE.js";import{g}from"./utils-ePvtT4un.js";import{T as i}from"./TooltipArgs-CESW39bv.js";import{T as n}from"./Tooltip-Du8Gdhpt.js";import{R as c}from"./arrayEqualityCheck-Ct0H2J7-.js";import{L as h}from"./LineChart-BpNlDtJ2.js";import{L as l}from"./Line-Ds1mFxVO.js";import{R as d}from"./RechartsHookInspector-9aXKf5pi.js";import{p as f}from"./Page-Cj8EiXz7.js";const u={argTypes:i,component:n},t={render:m=>{const[p,r]=[600,300];return e.createElement(c,{width:"100%",height:r},e.createElement(h,{width:p,height:r,margin:{top:20,right:20,bottom:20,left:20},data:f},e.createElement(l,{dataKey:"uv"}),e.createElement(n,{...m}),e.createElement(d,null)))},args:{...g(i),trigger:"hover",shared:!1,useTranslate3d:!1}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    trigger: 'hover',
    shared: false,
    useTranslate3d: false
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const T=["API"],H=Object.freeze(Object.defineProperty({__proto__:null,API:t,__namedExportsOrder:T,default:u},Symbol.toStringTag,{value:"Module"}));export{t as A,H as C};
