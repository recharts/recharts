import{R as t}from"./iframe-y6pZoBOe.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-QdcTaX9y.js";import{R as g}from"./zIndexSlice-BAPHOf-A.js";import{X as S}from"./XAxis-B75EARC_.js";import{Y as h}from"./YAxis-BDc8eAjx.js";import{S as A}from"./Scatter-rN6x2ib7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bd4_Y8lY.js";import"./resolveDefaultProps-DK41N9kV.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BmcHsTRr.js";import"./throttle-sUHqZCtQ.js";import"./index-DViwT0RC.js";import"./index-vL-3KTyV.js";import"./isWellBehavedNumber-Cb3oTnMu.js";import"./d3-scale-DRlyCOFP.js";import"./index-B6N9MB9B.js";import"./index-0bNzEg3t.js";import"./renderedTicksSlice-CTLbpy90.js";import"./index-CSbalAtk.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bvg5MZxQ.js";import"./chartDataContext-Dpe-QKhv.js";import"./CategoricalChart-aAiDUiAX.js";import"./CartesianAxis-CoHDQG06.js";import"./Layer-34ncCtUV.js";import"./Text-DdGQmpzq.js";import"./DOMUtils-Co8gRLU9.js";import"./useId-DiCeZzyc.js";import"./useBackwardsCompatibleTheme-DpzVFbqN.js";import"./Label-9NqXhRk3.js";import"./ZIndexLayer-C7BuriGU.js";import"./types-DtUXsqBa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DIgNuRUa.js";import"./useAnimationId-9X7pomqp.js";import"./Curve-fod9LGdb.js";import"./step-CafFQeb3.js";import"./path-DyVhHtw_.js";import"./tooltipContext-xkClZfdt.js";import"./Symbols-BvJQgg8W.js";import"./symbol-Bpchgci6.js";import"./ActiveShapeUtils-CrA6HvN5.js";import"./RegisterGraphicalItemId-DljjsDCZ.js";import"./ErrorBarContext-TnpfkRXW.js";import"./GraphicalItemClipPath-6O7hO6A5.js";import"./SetGraphicalItem-BmPIFAsA.js";import"./useGraphicalItemIdentity-CXZPeRzX.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
