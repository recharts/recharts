import{R as t}from"./iframe-l1Y42C0u.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-CjKNiIOQ.js";import{R as g}from"./zIndexSlice-B33nqsCb.js";import{X as S}from"./XAxis-B9K8Q1Xb.js";import{Y as h}from"./YAxis-MT51XlEY.js";import{S as A}from"./Scatter-CkAUMiGh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DOuMjlQh.js";import"./resolveDefaultProps-1jZi99P0.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D7HUEi6M.js";import"./throttle-DAyvkz9h.js";import"./index-DIs184pY.js";import"./index-Cqq6zn6Z.js";import"./polarAxisSelectors-BQIs9A7o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B5Y8SIz5.js";import"./index-Bn03Joy2.js";import"./index-BwfxQem6.js";import"./renderedTicksSlice-D6aSCZ50.js";import"./index-BL-lBVJK.js";import"./CartesianChart-DP0lCfag.js";import"./ZIndexPortal-DmDlsnpL.js";import"./CategoricalChart-CsG2T3-z.js";import"./CartesianAxis-tpqsI94N.js";import"./Layer-euAv7Vlw.js";import"./Text-B6K4_AwF.js";import"./DOMUtils-D4PcHABk.js";import"./ZIndexLayer-DxyEEQXG.js";import"./Label-sWz5CiLk.js";import"./types-CrZHDfLN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-CqnzZffr.js";import"./activeStyles-De0IjX-U.js";import"./useAnimationId-Df3Y-xS6.js";import"./dataEntryStyles-D_KE_N47.js";import"./fillDefinitions-AHxQevDT.js";import"./themeFill-DQcF-Fqd.js";import"./Curve-B3MncDoj.js";import"./step-Be4HSYh6.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BSj91y9Q.js";import"./Symbols-CQXeMdB_.js";import"./symbol-K2q-awoK.js";import"./ActiveShapeUtils-CSx2HuI1.js";import"./ErrorBarContext-xxN9WryY.js";import"./SetGraphicalItem-Do2v7-d1.js";import"./useEffectiveDataKey-Dv99CamK.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
