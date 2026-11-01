import{R as t}from"./iframe-0ard7KC3.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-DEq1IDov.js";import{R as g}from"./zIndexSlice-D6_sdm0t.js";import{X as S}from"./XAxis-BVBrGZek.js";import{Y as h}from"./YAxis-DAk7UonM.js";import{S as A}from"./Scatter-CiqK3_QV.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BOxuYrqk.js";import"./resolveDefaultProps-BPB9Gu5f.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Cr_3x7-m.js";import"./throttle-1OYicAaw.js";import"./index-BOEtp96n.js";import"./index-JVAEaqaY.js";import"./polarAxisSelectors-3HyfX2K5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CLPwnwVf.js";import"./index-9PVjWb0J.js";import"./index-CsSqo8aU.js";import"./renderedTicksSlice-D50-krNg.js";import"./index-ByhU0DDr.js";import"./CartesianChart-CQQLqvcY.js";import"./ZIndexPortal-Cak7rTbR.js";import"./CategoricalChart-DbqXM1OT.js";import"./CartesianAxis-CO2WQovg.js";import"./Layer-C0FwdD0E.js";import"./Text-BVN9ck4W.js";import"./DOMUtils-DPHrecH2.js";import"./pageBackground-C8Mqnqon.js";import"./ZIndexLayer-Xk93xkJ7.js";import"./Label-Bzl5TsqO.js";import"./types-DiLmbnVu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-fTXqNJ75.js";import"./activeStyles-7ntMjbeG.js";import"./useAnimationId-DI_YvP-u.js";import"./dataEntryStyles-BOdZqKVH.js";import"./fillDefinitions-CarsCIb_.js";import"./Curve-N3TADMlP.js";import"./step-Qo2aOxrQ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Z31KWbAp.js";import"./Symbols-lsHxNSE5.js";import"./symbol-BoiiS6VD.js";import"./ActiveShapeUtils-Uo1E3VyC.js";import"./ErrorBarContext-Dy4MR2nb.js";import"./SetGraphicalItem-CY1fZPiL.js";import"./useEffectiveDataKey-BiPIBSbw.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
