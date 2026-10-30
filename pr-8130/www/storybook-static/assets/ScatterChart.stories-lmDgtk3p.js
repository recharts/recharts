import{R as t}from"./iframe-BmKqhsPF.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-tvygZBtN.js";import{R as g}from"./zIndexSlice-CBQM2Gyg.js";import{X as S}from"./XAxis-B1Y97cNG.js";import{Y as h}from"./YAxis-Bib3dbnh.js";import{S as A}from"./Scatter-DKu9bQqE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CdEiQwLq.js";import"./resolveDefaultProps-BDqp1YKl.js";import"./get-cF5BDHN6.js";import"./axisSelectors-De-QIQw0.js";import"./throttle-DFLwZbH7.js";import"./index-3u8XkdeO.js";import"./index-BGZm-V5p.js";import"./polarAxisSelectors-3J3j4TTi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-66RSqjvR.js";import"./index-B3BeYDVW.js";import"./index-BlCA3-m5.js";import"./renderedTicksSlice-1_lrB1iK.js";import"./index-CBz7nTI3.js";import"./fillDefinitions-miIei5Ak.js";import"./CartesianChart-DwN6Hmpg.js";import"./ZIndexPortal-DFoHfC3q.js";import"./CategoricalChart-DDmHhC4k.js";import"./CartesianAxis-Ch4CXp2q.js";import"./Layer-DFK8Q48P.js";import"./Text-CrMJTYNw.js";import"./DOMUtils-DtycWmz8.js";import"./ZIndexLayer-E2zC26PS.js";import"./Label-DJuyIpr6.js";import"./types-8TEdLcfT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-Cw7YYHKY.js";import"./activeStyles-B9WkYOlU.js";import"./useAnimationId-Cw8-NrKa.js";import"./dataEntryStyles-BYeCTEXf.js";import"./Curve--g8UutGF.js";import"./step-DxyJMaY2.js";import"./path-DyVhHtw_.js";import"./tooltipContext-qd_vPvGB.js";import"./Symbols-C1ZJFDve.js";import"./symbol-Cwivg1At.js";import"./ActiveShapeUtils-CmFmkU6o.js";import"./ErrorBarContext-DjFDtKDe.js";import"./SetGraphicalItem-DaR9Vkxk.js";import"./useEffectiveDataKey-etJHmmHX.js";const St={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},ht=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
