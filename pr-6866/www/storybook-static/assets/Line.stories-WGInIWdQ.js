import{e}from"./iframe-tCRQIxYB.js";import{E as h}from"./EventHandlers-JVOOzquU.js";import{A as n,a as u}from"./AnimationProps-CWko-cer.js";import{l as f}from"./Legend-DSGZ0VYy.js";import{L as p}from"./Styles-DUJrLFeA.js";import{g as r}from"./utils-ePvtT4un.js";import{a as y,G as l}from"./CartesianComponentShared-BGjrRDZW.js";import{R as m}from"./Tooltip-D-SRS64h.js";import{L as c}from"./Line-BVHIm-vM.js";import{R as A}from"./arrayEqualityCheck-DFgE1twh.js";import{C as v}from"./ComposedChart-B_kjiHsD.js";import{L as b}from"./Legend-CKbr3K0E.js";import{X as T}from"./XAxis-o_gppMSb.js";import{Y as k}from"./YAxis-C5YEwPYl.js";import{T as S}from"./Tooltip-CFzd-RiE.js";import{R as C}from"./RechartsHookInspector-bM2S9Z_N.js";import{p as L}from"./Page-DPte-9pC.js";const E={argTypes:{...h,animateNewValues:u,...n,legendType:f,...l,data:y,...m,...p,stroke:{control:{type:"color"},table:{category:"Style"},defaultValue:"#3182bd"},dangerouslySetInnerHTML:{table:{category:"Deprecated"},hide:!0,disable:!0}},component:c},t={render:d=>{const[g,o]=[600,300];return e.createElement(A,{width:"100%",height:o},e.createElement(v,{width:g,height:o,margin:{top:20,right:20,bottom:20,left:20},data:L},e.createElement(b,null),e.createElement(T,{dataKey:"name"}),e.createElement(k,{width:"auto"}),e.createElement(c,{dataKey:"uv",...d}),e.createElement(S,null),e.createElement(C,null)))},args:{...r(l),...r(p),...r(m),...r(n),type:"linear",connectNulls:!0,stroke:"red",fill:"teal",strokeDasharray:"4 1",label:{fill:"red",fontSize:20},dot:{stroke:"green",strokeWidth:2},isAnimationActive:!0,activeDot:{stroke:"green",strokeWidth:2},tooltipType:"responsive",dataKey:"uv",unit:" Visitors"}};var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          {/* All components are added to show the interaction with the Line properties */}
          <Legend />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          {/* The target component */}
          <Line dataKey="uv" {...args} />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    // This API story should have explicit values for all props
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    ...getStoryArgsFromArgsTypesObject(LineStyle),
    ...getStoryArgsFromArgsTypesObject(ResponsiveProps),
    ...getStoryArgsFromArgsTypesObject(AnimationProps),
    type: 'linear',
    connectNulls: true,
    stroke: 'red',
    fill: 'teal',
    strokeDasharray: '4 1',
    label: {
      fill: 'red',
      fontSize: 20
    },
    dot: {
      stroke: 'green',
      strokeWidth: 2
    },
    isAnimationActive: true,
    activeDot: {
      stroke: 'green',
      strokeWidth: 2
    },
    tooltipType: 'responsive',
    dataKey: 'uv',
    unit: ' Visitors'
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const R=["API"],Y=Object.freeze(Object.defineProperty({__proto__:null,API:t,__namedExportsOrder:R,default:E},Symbol.toStringTag,{value:"Module"}));export{t as A,Y as C};
