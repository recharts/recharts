import{R as t}from"./iframe-c2lRejlG.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-DQ7HH9sc.js";import{R as g}from"./zIndexSlice-CxBOtYNT.js";import{X as S}from"./XAxis-CTi1ijiA.js";import{Y as h}from"./YAxis-A4qX3MrX.js";import{S as A}from"./Scatter-C3XpzL4T.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-7WfVgUuu.js";import"./resolveDefaultProps-Cd-PQ1DC.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Deq2x5E-.js";import"./throttle-CLdsKjkB.js";import"./index-BPGiATtt.js";import"./index-IRYG05jg.js";import"./polarAxisSelectors-CqGqTVQP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-FKe385CS.js";import"./index-flaxi9nt.js";import"./index-DiQunSZN.js";import"./renderedTicksSlice-CI_7c3pA.js";import"./index-DtkFulOp.js";import"./fillDefinitions-BJlWg_X2.js";import"./CartesianChart-B9TZHz33.js";import"./chartDataContext-D2dajo_O.js";import"./CategoricalChart-Da60SI3f.js";import"./CartesianAxis-OWNbVRjL.js";import"./Layer-3thD2J8o.js";import"./Text-DUu108CD.js";import"./ZIndexLayer-wT8ty6aL.js";import"./Label-CYzJLkW1.js";import"./types-DUYg5b1u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CPzad5xB.js";import"./activeStyles-71nScM55.js";import"./useAnimationId-DpyYZ0R1.js";import"./Curve-C61f5jar.js";import"./step-k_HQUKGn.js";import"./path-DyVhHtw_.js";import"./tooltipContext-KliIvhpK.js";import"./Symbols-ZMuAovUW.js";import"./symbol-BTyzRL6J.js";import"./ActiveShapeUtils-CM6VEkzu.js";import"./ErrorBarContext-DkK2QSGk.js";import"./SetGraphicalItem-BqZrsCyw.js";import"./useEffectiveDataKey-Dakyyayq.js";const dt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}},gt=["API"];var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(e=r.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};export{r as API,gt as __namedExportsOrder,dt as default};
