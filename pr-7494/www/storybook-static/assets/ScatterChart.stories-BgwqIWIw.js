import{R as t}from"./iframe-BeltcMgq.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-Do8o8Fsp.js";import{R as g}from"./zIndexSlice-ChbQV9za.js";import{X as S}from"./XAxis-DT2umrlt.js";import{Y as h}from"./YAxis-Dm0u982e.js";import{S as A}from"./Scatter-BqlXUOV2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-afo15-1c.js";import"./index-DN-_Sx45.js";import"./index-BWKSKuqG.js";import"./index-DdbLs963.js";import"./index-D1BJqAdU.js";import"./immer-BYDh_fcZ.js";import"./get-Blzhyn8O.js";import"./renderedTicksSlice-BWzIqvlP.js";import"./axisSelectors-DoBuhKXQ.js";import"./d3-scale-D9qfoPRi.js";import"./resolveDefaultProps-Bi5xr7q4.js";import"./isWellBehavedNumber-Ho-XzrAB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DU3tYN-2.js";import"./chartDataContext-BTBnexhV.js";import"./CategoricalChart-CYbFsyR9.js";import"./CartesianAxis-SUuO_eM5.js";import"./Layer-CtUZ3qxP.js";import"./Text-zWkWuZ8O.js";import"./DOMUtils-BiPI68kE.js";import"./Label-CRfC-ZbS.js";import"./ZIndexLayer-CXY-gIuZ.js";import"./types-BjpCNPaQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-Dkw2Nvms.js";import"./useAnimationId-CnyBiRCJ.js";import"./Curve-CGP8Kyx3.js";import"./step-BCv6lKfH.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DYDElE1r.js";import"./Symbols-Db0C4PWO.js";import"./symbol-DG8eC_6U.js";import"./ActiveShapeUtils-BaRNo4pA.js";import"./RegisterGraphicalItemId-B1kcHgmx.js";import"./ErrorBarContext-DUSNqADu.js";import"./GraphicalItemClipPath-CSrYVdhv.js";import"./SetGraphicalItem-D8n7ZbTI.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
