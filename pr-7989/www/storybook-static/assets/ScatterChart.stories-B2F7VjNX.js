import{R as t}from"./iframe-VT8pQoe7.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-Ns10B4fB.js";import{R as g}from"./zIndexSlice-DEK4NARd.js";import{X as S}from"./XAxis-D4USI7eu.js";import{Y as h}from"./YAxis-BZdmkbLY.js";import{S as A}from"./Scatter-BNrG5dhj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C5t5FA9b.js";import"./resolveDefaultProps-aXzZoAdw.js";import"./get-C2VjdU0L.js";import"./axisSelectors-rzVbGAjY.js";import"./throttle-DAkHgZkc.js";import"./index-dScKVoLs.js";import"./index-CiAsw9yg.js";import"./isWellBehavedNumber-CWd9TGG5.js";import"./d3-scale-CNl0eHX-.js";import"./index-DaTNpRtK.js";import"./index-B3obxpbN.js";import"./renderedTicksSlice-BV0dqoNF.js";import"./index-BZU6X58j.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D86ig2Qu.js";import"./chartDataContext-C-2DcCuQ.js";import"./CategoricalChart-xbuH4iHs.js";import"./CartesianAxis-32TBg9e_.js";import"./Layer-C1VwbLrz.js";import"./Text-5GPWLOFl.js";import"./pageBackground-biSlCu9n.js";import"./useId-CUgdtS7Q.js";import"./useBackwardsCompatibleTheme-BVkaGEGO.js";import"./Label-CntNwugN.js";import"./ZIndexLayer-BK4Sn8Ml.js";import"./types-7pH1IAPS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-XDL1Xm2T.js";import"./useAnimationId-D_S6bHPT.js";import"./dataEntryStyles-D0zUo3h2.js";import"./Curve-BDSThsVb.js";import"./step-BpcsguCq.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CM47aKfH.js";import"./Symbols-C4ZstIRX.js";import"./symbol-DLpqvKl5.js";import"./ActiveShapeUtils-C3QPXajl.js";import"./ErrorBarContext-BYw6WEd3.js";import"./GraphicalItemClipPath-TTQOfMqQ.js";import"./SetGraphicalItem-B3Fmseum.js";import"./useEffectiveDataKey-DiTGjvML.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
