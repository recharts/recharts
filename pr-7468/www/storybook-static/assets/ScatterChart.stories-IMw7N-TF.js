import{R as t}from"./iframe-Cgvurs-_.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-CC4rSILm.js";import{R as g}from"./zIndexSlice-B_EZWJad.js";import{X as S}from"./XAxis-CfwTV-KQ.js";import{Y as h}from"./YAxis-BXqkMu3a.js";import{S as A}from"./Scatter-DWw1XyN1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dz-OqOgD.js";import"./index-BumewqgT.js";import"./index-COSZGJYp.js";import"./index-qEaPtvJ4.js";import"./index-DUeZpKgX.js";import"./immer-BqIPbCUY.js";import"./get-DKeAvde6.js";import"./renderedTicksSlice-CFCAMk-H.js";import"./axisSelectors-Qbk3cIqD.js";import"./d3-scale-C6AR89xW.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CKD-pks7.js";import"./isWellBehavedNumber-wdbvvMft.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-F9cdjQs_.js";import"./chartDataContext-D5SqleTT.js";import"./CategoricalChart-vxMjiHHj.js";import"./CartesianAxis-BZbrDelp.js";import"./Layer-BfP1S3qE.js";import"./Text-BoAtXQm_.js";import"./DOMUtils-DYR9owTl.js";import"./Label-CsnYNS62.js";import"./ZIndexLayer-CAbZgrje.js";import"./types-bZuMx1t8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DU8uToRY.js";import"./useAnimationId-DTgCoSkV.js";import"./Curve-fHqvHXD4.js";import"./step-BqWVDUYB.js";import"./path-DyVhHtw_.js";import"./tooltipContext-d2crV3t8.js";import"./Symbols-Dm791b9Q.js";import"./symbol-DNYQHQcv.js";import"./ActiveShapeUtils-mXcowNCt.js";import"./RegisterGraphicalItemId-Dza9jiXm.js";import"./ErrorBarContext-h79zKdGg.js";import"./GraphicalItemClipPath-BYm3GjGL.js";import"./SetGraphicalItem-B22TqrnA.js";const ct={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(e=r.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const dt=["API"];export{r as API,dt as __namedExportsOrder,ct as default};
