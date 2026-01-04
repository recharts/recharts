import{e as t}from"./iframe-CCMJ-7V4.js";import{a as n}from"./ChartProps-h4DKB0dX.js";import{g as p}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChart-7ebjJS2a.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{R as g}from"./arrayEqualityCheck-EU51TFpx.js";import{X as l}from"./XAxis-R7Vv75w5.js";import{Y as S}from"./YAxis-BsjRKKqi.js";import{S as h}from"./Scatter-D6CakDHL.js";import{R as f}from"./RechartsHookInspector-CT184sGb.js";const y={argTypes:n,component:s},r={render:m=>{const{data:i,...c}=m;return t.createElement(g,{width:"100%",height:400},t.createElement(s,{...c},t.createElement(l,{dataKey:"x"}),t.createElement(S,{dataKey:"y"}),t.createElement(h,{data:i}),t.createElement(f,null)))},args:{...p(n),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var e,a,o;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: coordinateData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const C=["Simple"],K=Object.freeze(Object.defineProperty({__proto__:null,Simple:r,__namedExportsOrder:C,default:y},Symbol.toStringTag,{value:"Module"}));export{K as S,r as a};
