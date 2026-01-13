import{e}from"./iframe-Cwpfa-aU.js";import{g}from"./utils-ePvtT4un.js";import{T as i}from"./TooltipArgTypes-Di9QB1Pb.js";import{T as n}from"./Tooltip-i_abJ7x2.js";import{R as c}from"./arrayEqualityCheck-4s7O9CHw.js";import{L as h}from"./LineChart-B2dAIwYL.js";import{L as l}from"./Line-BcB5oLqM.js";import{R as d}from"./RechartsHookInspector-RngvJaov.js";import{p as f}from"./Page-DPte-9pC.js";const u={argTypes:i,component:n},r={render:p=>{const[m,t]=[600,300];return e.createElement(c,{width:"100%",height:t},e.createElement(h,{width:m,height:t,margin:{top:20,right:20,bottom:20,left:20},data:f},e.createElement(l,{dataKey:"uv"}),e.createElement(n,{...p}),e.createElement(d,null)))},args:{...g(i),trigger:"hover",shared:!1,useTranslate3d:!1}};var o,a,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
    // This API story should have explicit values for all props
    ...getStoryArgsFromArgsTypesObject(TooltipArgTypes),
    trigger: 'hover',
    shared: false,
    useTranslate3d: false
  }
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const T=["API"],H=Object.freeze(Object.defineProperty({__proto__:null,API:r,__namedExportsOrder:T,default:u},Symbol.toStringTag,{value:"Module"}));export{r as A,H as C};
