import{R as t}from"./iframe-DloB-Tup.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-7F6AzB7A.js";import{R as g}from"./zIndexSlice-DkoSoypq.js";import{X as S}from"./XAxis-85tJ7DjB.js";import{Y as h}from"./YAxis-C2kKnKD5.js";import{S as A}from"./Scatter-BRONzA7H.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C7KZ4AFC.js";import"./resolveDefaultProps-DXiVg1qQ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-5JufQAoG.js";import"./throttle-DHxiFtgA.js";import"./index-DV-zLmFt.js";import"./index-Bjn59J1w.js";import"./polarAxisSelectors-BA-2pRlP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Cp_uhw02.js";import"./index-sAdADp0M.js";import"./index-BpHVs9OQ.js";import"./renderedTicksSlice-QBBzvaXk.js";import"./index-BpFDYg8A.js";import"./CartesianChart-juZJjY88.js";import"./ZIndexPortal-B99ywjs0.js";import"./CategoricalChart-BfiBF3Vo.js";import"./CartesianAxis-3ybsRmFq.js";import"./Layer-S6G7_nQD.js";import"./Text-BM9EdhAp.js";import"./pageBackground-uaKlEO31.js";import"./ZIndexLayer-bWANmXVo.js";import"./Label-BCZcSJT3.js";import"./dataEntryStyles-DO0_QeZe.js";import"./types-BVm9IbXw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-B_3Vas12.js";import"./activeStyles-B8TQJkxp.js";import"./useAnimationId-B4JCM27x.js";import"./Curve-Dw8-x6-u.js";import"./step-CNEatR3g.js";import"./path-DyVhHtw_.js";import"./tooltipContext-FzzNO4aG.js";import"./Symbols-OqBqpZTo.js";import"./symbol-D_Qfgjrw.js";import"./ActiveShapeUtils-O1dlG29g.js";import"./RegisterGraphicalItemId-BdcH7fWn.js";import"./ErrorBarContext-CBYSVt7N.js";import"./SetGraphicalItem-lsA-IuJf.js";import"./useEffectiveDataKey-B7m-hO1Q.js";const St={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},ht=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(e=r.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};export{r as API,ht as __namedExportsOrder,St as default};
