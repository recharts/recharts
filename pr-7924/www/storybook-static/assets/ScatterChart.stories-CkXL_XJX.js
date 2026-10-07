import{R as t}from"./iframe-ZTC5pSfT.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-D4DHwQP1.js";import{R as g}from"./zIndexSlice-CiW62Ghg.js";import{X as S}from"./XAxis-Oh1yCkiB.js";import{Y as h}from"./YAxis-bg8Qjeqd.js";import{S as A}from"./Scatter-44XOrljM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-mhohCDVl.js";import"./resolveDefaultProps-BUix77YN.js";import"./get-C2VjdU0L.js";import"./axisSelectors-K6KGYDFF.js";import"./throttle-KrxK4z_U.js";import"./index-CzSCaBER.js";import"./index-B4ZumRW0.js";import"./isWellBehavedNumber-6xDPwo21.js";import"./d3-scale-Cpr3RseV.js";import"./index-CIre6itI.js";import"./index-C6jgkA61.js";import"./renderedTicksSlice-2JPEuPfq.js";import"./index-BMMDR1qW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BkfStbLb.js";import"./chartDataContext-CsGZnfHI.js";import"./CategoricalChart-Cp6s7k2U.js";import"./CartesianAxis-CC0XJ4Ez.js";import"./Layer-jaIUArAZ.js";import"./Text-DaoB-dFq.js";import"./DOMUtils-DpY81Anq.js";import"./useId-PK-UNRth.js";import"./useBackwardsCompatibleTheme-DAjVS6k9.js";import"./Label-CMugnJA-.js";import"./ZIndexLayer-ilP_ZZPQ.js";import"./types-C79EZ9QB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-sBBBQ_aJ.js";import"./useAnimationId-BB_b0zsq.js";import"./Curve-DbdnYDgr.js";import"./step-Q9TOfcF_.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CfS-ziab.js";import"./Symbols-BfiJXW0k.js";import"./symbol-BwSyypnn.js";import"./ActiveShapeUtils-D8W511PY.js";import"./RegisterGraphicalItemId-9ha_OJ2S.js";import"./ErrorBarContext-C3dRgdy-.js";import"./GraphicalItemClipPath-aJ1mq8DH.js";import"./SetGraphicalItem-C-6wJbAO.js";import"./useGraphicalItemIdentity-CBZHm2cX.js";import"./dataEntryStyles-BwIZ5osO.js";const At={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},ft=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(e=r.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};export{r as API,ft as __namedExportsOrder,At as default};
