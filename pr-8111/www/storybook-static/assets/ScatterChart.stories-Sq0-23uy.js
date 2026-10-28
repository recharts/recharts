import{R as t}from"./iframe-BGCZ_YYu.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-BhxgQl8u.js";import{R as g}from"./zIndexSlice-cBJ2sUns.js";import{X as S}from"./XAxis-CnHX8rYU.js";import{Y as h}from"./YAxis-QzbIIYXn.js";import{S as A}from"./Scatter-EzwdbJOc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DzjZykj4.js";import"./resolveDefaultProps-RfjxFv_h.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BgHWKfZW.js";import"./throttle-Dnn9iNkE.js";import"./index-CJpeiM5R.js";import"./index-DRH8hgtI.js";import"./polarAxisSelectors-9JDQkQFq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-WNvBVnHd.js";import"./index-BoRJhsa5.js";import"./index-DsAYZFOJ.js";import"./renderedTicksSlice-0yL2Eztm.js";import"./index-CnE4B9N1.js";import"./CartesianChart-chY_bHfR.js";import"./ZIndexPortal-UfnKJ6nq.js";import"./CategoricalChart-rRn_svVP.js";import"./CartesianAxis-D7nh9FWg.js";import"./Layer-FBjFYiDN.js";import"./Text-Cf8nBYte.js";import"./pageBackground--uJKRUbH.js";import"./ZIndexLayer-DBU2Ux2U.js";import"./Label-CG8eDc0p.js";import"./types-BvE9AUsn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-D60Hhpwl.js";import"./activeStyles-CJOfqay0.js";import"./useAnimationId-D-9kXAza.js";import"./dataEntryStyles--27SN7qD.js";import"./Curve-BoHAwgnl.js";import"./step-QoITrG4U.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bb3r7G0b.js";import"./Symbols-Caix5zUY.js";import"./symbol-1qTipyom.js";import"./ActiveShapeUtils-CbZu-UwN.js";import"./ErrorBarContext-B946Wqqn.js";import"./SetGraphicalItem-Cbavgyyx.js";import"./useEffectiveDataKey-B32bFSWN.js";const gt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}},St=["API"];var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(e=r.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};export{r as API,St as __namedExportsOrder,gt as default};
