import{R as t}from"./iframe-D1t-DMDX.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-vDPsKiVo.js";import{R as g}from"./zIndexSlice-D3y7WbGu.js";import{X as S}from"./XAxis-D2W5e4ho.js";import{Y as h}from"./YAxis-DA6hAinn.js";import{S as A}from"./Scatter-C0hCwkou.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BZjYCuuq.js";import"./resolveDefaultProps-CslUsmpl.js";import"./get-C2VjdU0L.js";import"./axisSelectors-j0uMY4D2.js";import"./throttle-6Gvu17mH.js";import"./index-DN4Hf2vp.js";import"./index-DXAWsi2y.js";import"./isWellBehavedNumber-CUXK_wKy.js";import"./d3-scale-BUFFZJWe.js";import"./index-BVgOAcLw.js";import"./index-DBKl6Uwy.js";import"./renderedTicksSlice-BDhtYcVT.js";import"./index-DVZyTUvl.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CkbIBTi3.js";import"./chartDataContext-Cv-ECou4.js";import"./CategoricalChart-CSw7HOxG.js";import"./CartesianAxis-zM23PuK9.js";import"./Layer-C3v8UF0F.js";import"./Text-DAi50bHG.js";import"./DOMUtils-B6_ZXa7e.js";import"./useId-DDzIZyqo.js";import"./useBackwardsCompatibleTheme-BSefrMjh.js";import"./Label-l8kFpP-D.js";import"./ZIndexLayer-DAI4vBfR.js";import"./types-CakNgFJg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C6KHS5pS.js";import"./useAnimationId-CHualwmZ.js";import"./Curve-DkVKde3C.js";import"./step-2p0USgF7.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DgDH-WhQ.js";import"./Symbols-B523Ziwf.js";import"./symbol-DHiI_cX5.js";import"./ActiveShapeUtils-DPvI5kC4.js";import"./RegisterGraphicalItemId-6E8BE8Ka.js";import"./ErrorBarContext-aZAJKe3w.js";import"./GraphicalItemClipPath-CTjco7rb.js";import"./SetGraphicalItem-B3rvHIl-.js";import"./useGraphicalItemIdentity-Y17Z1Bub.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(e=r.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};export{r as API,At as __namedExportsOrder,ht as default};
