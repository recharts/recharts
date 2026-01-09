import{e}from"./iframe-DCqI0XZE.js";import{g as c}from"./utils-ePvtT4un.js";import{L as i}from"./LabelListProps-Dr1jjSR5.js";import{L as n}from"./ReactUtils-B_rBW96b.js";import{R as g}from"./arrayEqualityCheck-HYppUqbL.js";import{L as h}from"./LineChart-DX2lzeAm.js";import{L as l}from"./Line-BIfiJ6dH.js";import{R as d}from"./RechartsHookInspector-fFyRgJJZ.js";import{p as u}from"./Page-DPte-9pC.js";const f={argTypes:i,component:n},t={render:p=>{const[m,r]=[600,300];return e.createElement(g,{width:"100%",height:r},e.createElement(h,{width:m,height:r,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(l,{dataKey:"uv"},e.createElement(n,{...p})),e.createElement(d,null)))},args:{...c(i),dataKey:"uv",position:"top"}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
