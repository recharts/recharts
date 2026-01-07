import{e}from"./iframe-2t9JIeSz.js";import{g as c}from"./utils-ePvtT4un.js";import{L as i}from"./LabelListProps-Dr1jjSR5.js";import{L as n}from"./ReactUtils-3f6_sZO7.js";import{R as g}from"./arrayEqualityCheck-Ne24Ckb0.js";import{L as h}from"./LineChart-B-BuLFrY.js";import{L as l}from"./Line-BuJmFTie.js";import{R as d}from"./RechartsHookInspector-l9P1RfFo.js";import{p as u}from"./Page-DPte-9pC.js";const f={argTypes:i,component:n},t={render:p=>{const[m,r]=[600,300];return e.createElement(g,{width:"100%",height:r},e.createElement(h,{width:m,height:r,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(l,{dataKey:"uv"},e.createElement(n,{...p})),e.createElement(d,null)))},args:{...c(i),dataKey:"uv",position:"top"}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <LineChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          {/* The target component */}
          <Line dataKey="uv">
            <LabelList {...args} />
          </Line>
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListProps),
    // This API story should have explicit values for all props
    dataKey: 'uv',
    position: 'top'
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const L=["API"],P=Object.freeze(Object.defineProperty({__proto__:null,API:t,__namedExportsOrder:L,default:f},Symbol.toStringTag,{value:"Module"}));export{t as A,P as C};
