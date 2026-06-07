import{R as t}from"./iframe-BB3m-jQ-.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-CmMTaHlg.js";import{R as g}from"./zIndexSlice-FQKZcMr3.js";import{X as S}from"./XAxis-pxNAoOYF.js";import{Y as h}from"./YAxis-DFvGwgRl.js";import{S as A}from"./Scatter-CYh0zA2I.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BeVmqhAg.js";import"./index-AMNPHvWI.js";import"./index-CDnCFTh2.js";import"./index-iRCZcjtj.js";import"./index-B5zT9Os4.js";import"./immer-Bb2hNnOx.js";import"./get-Bu83WliH.js";import"./renderedTicksSlice-eHBrq3FU.js";import"./axisSelectors-D1VEbPH5.js";import"./d3-scale-m2Sr9nLg.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-D0AMNGzs.js";import"./isWellBehavedNumber-CFV6UIHi.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CVsCYNZX.js";import"./chartDataContext-DDcaXf9b.js";import"./CategoricalChart-5b78-xMl.js";import"./CartesianAxis-DNzSt2Ud.js";import"./Layer-Bqk0isqQ.js";import"./Text-CQr6lPUD.js";import"./DOMUtils-v0Nl75wH.js";import"./Label-DntCvjB2.js";import"./ZIndexLayer-BGBP_zx3.js";import"./types-DSXkzfdz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CAeOjIy6.js";import"./useAnimationId-D5BtmEUA.js";import"./Curve-DSs4mNcf.js";import"./step-BVafN2Sf.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CnuDDGAi.js";import"./Symbols-DrzCmBWa.js";import"./symbol-BOqiXccp.js";import"./ActiveShapeUtils-DMvn0j27.js";import"./RegisterGraphicalItemId-Co_tAnFn.js";import"./ErrorBarContext-BC4Vqnor.js";import"./GraphicalItemClipPath-Bd5aR1hb.js";import"./SetGraphicalItem-QprqGCl_.js";const ct={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
