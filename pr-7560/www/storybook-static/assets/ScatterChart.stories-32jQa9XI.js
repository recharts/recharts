import{R as t}from"./iframe-CkvJyCps.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-BWBQmk0E.js";import{R as g}from"./zIndexSlice-Ui89VFRT.js";import{X as S}from"./XAxis-Cs2owod8.js";import{Y as h}from"./YAxis-DiR5kzGo.js";import{S as A}from"./Scatter-C650rUJW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CjY8J2vT.js";import"./index-Cjf8FZO7.js";import"./index-D8Jo1LfZ.js";import"./index-BX-3EqNW.js";import"./index-BsiD65Ad.js";import"./throttle-DgDNnF1i.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BMi6DZwf.js";import"./axisSelectors-CC2H0zuo.js";import"./resolveDefaultProps-DCKyJEY4.js";import"./isWellBehavedNumber-DqH8GE3H.js";import"./d3-scale-Crqr5kEu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DFWFnz0T.js";import"./chartDataContext-BT6jQe_1.js";import"./CategoricalChart-E0pKYNLO.js";import"./CartesianAxis-mgc-X0Bi.js";import"./Layer-C4byj5K8.js";import"./Text-R9sJDfcz.js";import"./DOMUtils-CxWIP_C8.js";import"./Label-BMESeQSE.js";import"./ZIndexLayer-t0g3b6Ty.js";import"./types-CzkLD6k1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CNADXJdo.js";import"./useAnimationId-jBCdM9CL.js";import"./Curve-OKr52WO3.js";import"./step-KO3U5RtM.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CE2l0mBM.js";import"./Symbols-BWAxmpkp.js";import"./symbol-C7v9Wwia.js";import"./ActiveShapeUtils-DlrbS-G4.js";import"./RegisterGraphicalItemId-p5LXpBOx.js";import"./ErrorBarContext-CbXX-ZBj.js";import"./GraphicalItemClipPath-Ci1KSEKS.js";import"./SetGraphicalItem-BSfhP0b_.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
