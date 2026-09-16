import{R as t}from"./iframe-yFYT_zN7.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-zULRegGr.js";import{R as g}from"./zIndexSlice-D0SqWiCA.js";import{X as S}from"./XAxis-CLVPgrfg.js";import{Y as h}from"./YAxis-BT6AeQik.js";import{S as A}from"./Scatter-CTomONb0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BK2Nqghc.js";import"./resolveDefaultProps-CTg3N4RV.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cz3aPbz8.js";import"./throttle-B6GNdBpm.js";import"./index-CuJJm_Tn.js";import"./index-Du7yNjke.js";import"./isWellBehavedNumber-CbA6SpN0.js";import"./d3-scale--DHWqn1j.js";import"./index-DMtch-zH.js";import"./index-DrQda-y9.js";import"./renderedTicksSlice-DwWtQ1Di.js";import"./index-DI6gPrhu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ck9zKM_U.js";import"./chartDataContext-CrNdyu-C.js";import"./CategoricalChart-DBil3fX0.js";import"./CartesianAxis-DGDqWvXT.js";import"./Layer-Dy_GX6yW.js";import"./Text-CYbp4Bob.js";import"./DOMUtils-6VQmbUCR.js";import"./useId-CBpR1fpo.js";import"./useBackwardsCompatibleTheme-BN2mwgRc.js";import"./Label-99DUDCMD.js";import"./ZIndexLayer-CHhs3r11.js";import"./types-B35KvzC0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Ck-1wErl.js";import"./useAnimationId-DeDzp5yx.js";import"./Curve-BBFKRsTK.js";import"./step-Dfa3kdsE.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BQlTy0XF.js";import"./Symbols-BWDQbWo5.js";import"./symbol-CNs_eA0A.js";import"./ActiveShapeUtils-liUtTmHf.js";import"./RegisterGraphicalItemId-CaKRVAB3.js";import"./ErrorBarContext-BZhrM93k.js";import"./GraphicalItemClipPath-StVjduOg.js";import"./SetGraphicalItem-DwYip7WF.js";import"./useGraphicalItemIdentity-CrfN38Fv.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
