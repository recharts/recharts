import{R as t}from"./iframe-BNNSts13.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-CG1EExE3.js";import{R as g}from"./zIndexSlice-B_0Vu2Ew.js";import{X as S}from"./XAxis-CQLk361J.js";import{Y as h}from"./YAxis-BE5H5SGl.js";import{S as A}from"./Scatter-DyPFajd-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CxhgYL0g.js";import"./index-D3L22MUx.js";import"./index-DZAGR4_4.js";import"./index-DRHlmdrn.js";import"./index-CJSHvi6L.js";import"./throttle-CBpSFV7b.js";import"./get-C9gxS0ZW.js";import"./renderedTicksSlice-mOWj0GHU.js";import"./axisSelectors-CDUBaBt4.js";import"./d3-scale-0CyMSTZz.js";import"./resolveDefaultProps-BmCbt7JO.js";import"./isWellBehavedNumber-Cd8BT25E.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CCTvUou3.js";import"./chartDataContext-bOV91Uvd.js";import"./CategoricalChart-KYW8s8_3.js";import"./CartesianAxis-Bo6M1fU4.js";import"./Layer-BUN3jU8m.js";import"./Text-BAbJXX-B.js";import"./DOMUtils-BpYC5T-M.js";import"./Label-B9RstaAA.js";import"./ZIndexLayer-i45Mn5Qx.js";import"./types-CMjaNGyL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-u006QBg6.js";import"./useAnimationId-CPqzTwnW.js";import"./Curve-ByI9xGCG.js";import"./step-Brv0yDTW.js";import"./path-DyVhHtw_.js";import"./tooltipContext-20KYJakf.js";import"./Symbols-DzjVk4t8.js";import"./symbol-CA3p36J7.js";import"./ActiveShapeUtils-CnkeP5Du.js";import"./RegisterGraphicalItemId-8U08pWsl.js";import"./ErrorBarContext-Dsbm5JOc.js";import"./GraphicalItemClipPath-DvAXcUk3.js";import"./SetGraphicalItem-BRpvB0vT.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(e=r.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const ct=["API"];export{r as API,ct as __namedExportsOrder,nt as default};
