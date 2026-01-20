import{e as t}from"./iframe-BJE3gYiz.js";import{g as p}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as m}from"./ScatterChart-uW5Uuqav.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{R as g}from"./arrayEqualityCheck-DOpOKb7k.js";import{X as l}from"./XAxis-CiUlidyy.js";import{Y as S}from"./YAxis-DFb5sVBj.js";import{S as h}from"./Scatter-CKEMHsdC.js";import{R as f}from"./RechartsHookInspector-CmJjyPOL.js";const A={argTypes:s,component:m},e={name:"Simple",render:n=>{const{data:i,...c}=n;return t.createElement(g,{width:"100%",height:400},t.createElement(m,{...c},t.createElement(l,{dataKey:"x"}),t.createElement(S,{dataKey:"y"}),t.createElement(h,{data:i}),t.createElement(f,null)))},args:{...p(s),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const {
      data,
      ...rest
    } = args;
    return <ResponsiveContainer width="100%" height={400}>
        <ScatterChart {...rest}>
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Scatter data={data} />
          <RechartsHookInspector />
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ScatterChartArgs),
    data: coordinateData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const y=["API"],I=Object.freeze(Object.defineProperty({__proto__:null,API:e,__namedExportsOrder:y,default:A},Symbol.toStringTag,{value:"Module"}));export{e as A,I as C};
