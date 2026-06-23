import{R as t}from"./iframe-CMVn_SNm.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-BUkcezhR.js";import{R as g}from"./zIndexSlice-5bfS2JCG.js";import{X as S}from"./XAxis-BK_m78bZ.js";import{Y as h}from"./YAxis-8PetJcY4.js";import{S as A}from"./Scatter-uTr8a8jK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DcTKM8HZ.js";import"./index-DgABY5rS.js";import"./index-o3wTHYCY.js";import"./index-BHUmbQo-.js";import"./index-BNNprLMB.js";import"./immer-BrNA81ld.js";import"./get-CIPBGhdg.js";import"./renderedTicksSlice-B8N2zN9Q.js";import"./axisSelectors-Dk5pLmzI.js";import"./d3-scale-p_vnFVNW.js";import"./resolveDefaultProps-CRaaAotp.js";import"./isWellBehavedNumber-C4Dcoy8i.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bhmmmn5c.js";import"./chartDataContext-Dg2f8fbZ.js";import"./CategoricalChart-DUjGX6JP.js";import"./CartesianAxis-HAFu0ua0.js";import"./Layer-NKsa_8yv.js";import"./Text-DjHHlwuG.js";import"./DOMUtils-DEDVnuPv.js";import"./Label-DCWSGF-w.js";import"./ZIndexLayer-qzvYtv-n.js";import"./types-DXSGjGm9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-i8neEi91.js";import"./useAnimationId-DARzAta0.js";import"./Curve-Bldv1TQU.js";import"./step-BXHdJ1Cz.js";import"./path-DyVhHtw_.js";import"./tooltipContext-E9qytSTD.js";import"./Symbols-C8L8AvrN.js";import"./symbol-BJC98dA9.js";import"./ActiveShapeUtils-DbnUcZo7.js";import"./RegisterGraphicalItemId-B5nu-pPZ.js";import"./ErrorBarContext-B0E3DilN.js";import"./GraphicalItemClipPath-CTln66En.js";import"./SetGraphicalItem-rX6NUfmr.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
