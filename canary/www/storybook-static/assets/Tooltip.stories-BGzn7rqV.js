import{e}from"./iframe-DkFnKmz6.js";import{g}from"./utils-ePvtT4un.js";import{T as i}from"./TooltipArgTypes-eZrzO4mT.js";import{T as n}from"./Tooltip-twZ63P-G.js";import{R as c}from"./arrayEqualityCheck-B_Ane2tr.js";import{L as h}from"./LineChart-CAI-sfIP.js";import{L as l}from"./Line-YzvdPVhD.js";import{R as d}from"./RechartsHookInspector-B3tFzt2u.js";import{p as f}from"./Page-Cj8EiXz7.js";const u={argTypes:i,component:n},r={render:p=>{const[m,t]=[600,300];return e.createElement(c,{width:"100%",height:t},e.createElement(h,{width:m,height:t,margin:{top:20,right:20,bottom:20,left:20},data:f},e.createElement(l,{dataKey:"uv"}),e.createElement(n,{...p}),e.createElement(d,null)))},args:{...g(i),trigger:"hover",shared:!1,useTranslate3d:!1}};var o,a,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
