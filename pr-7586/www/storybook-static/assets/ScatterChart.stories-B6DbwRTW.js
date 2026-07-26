import{R as t}from"./iframe-Bj-yQnc2.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-BYY70ot6.js";import{R as g}from"./zIndexSlice-DO4y32gA.js";import{X as S}from"./XAxis-XI4N_gb4.js";import{Y as h}from"./YAxis-Bs6EndY5.js";import{S as A}from"./Scatter-DvVub2ID.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BjwBN1rR.js";import"./index-npMcpUBc.js";import"./index-CUdhCrp9.js";import"./index-CXIrlcaX.js";import"./index-C2KJTwEF.js";import"./throttle-CZQMCJbJ.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CagdShEY.js";import"./axisSelectors-DPyctkFQ.js";import"./resolveDefaultProps-7WXWf9aL.js";import"./isWellBehavedNumber-A843S5PG.js";import"./d3-scale-rY2RSZRS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-lhfYoKGZ.js";import"./chartDataContext-CFjDBvvT.js";import"./CategoricalChart-CavyJHAU.js";import"./CartesianAxis-Dfz3FhFq.js";import"./Layer-BLp5IiBu.js";import"./Text-RzD6k6DF.js";import"./DOMUtils-DVhKp59x.js";import"./Label-Cm9vMlt2.js";import"./ZIndexLayer-CZNNIEzh.js";import"./types-YXwkeCBT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-DUyUCCX0.js";import"./useAnimationId-Yo_b-bos.js";import"./Curve-CeWd9qmA.js";import"./step-C2Z_nim4.js";import"./path-DyVhHtw_.js";import"./tooltipContext-5h72lmDe.js";import"./Symbols--a3ZeWIs.js";import"./symbol-p1Xv4L39.js";import"./ActiveShapeUtils-BoActjfk.js";import"./RegisterGraphicalItemId-DueteZ3j.js";import"./ErrorBarContext-ft-NJLsc.js";import"./GraphicalItemClipPath-B-sHbKa-.js";import"./SetGraphicalItem-DWNEhJuv.js";const ct={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
