import{R as t}from"./iframe-DuosGyDB.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-PGhqliLN.js";import{R as g}from"./zIndexSlice-Da09UpSD.js";import{X as S}from"./XAxis-C-4m1UDl.js";import{Y as h}from"./YAxis-0dGXX3NL.js";import{S as A}from"./Scatter-BW1157KM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DqMyJeth.js";import"./resolveDefaultProps-CFaFAnLx.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BhFgqUpp.js";import"./throttle-BFe2F0jb.js";import"./index-BIKpN8wQ.js";import"./index-CkmA4MDq.js";import"./isWellBehavedNumber-BR0iKwBs.js";import"./d3-scale-BcfysILW.js";import"./index-Bx3uuCHN.js";import"./index-DB6X8Jkp.js";import"./renderedTicksSlice-Bhnw81l8.js";import"./index-C8gr5WFK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BF7NkNru.js";import"./chartDataContext-Fsi0dBi5.js";import"./CategoricalChart-CnszpMMB.js";import"./CartesianAxis-BQQINrGM.js";import"./Layer-kSYl9qai.js";import"./Text-ws-7QaY4.js";import"./pageBackground-BOChA0aI.js";import"./useId-5tXA_KMi.js";import"./useBackwardsCompatibleTheme-EzUoSKUQ.js";import"./Label-CD5z-ltE.js";import"./ZIndexLayer-B7YuRzj4.js";import"./types-DpRgdAcC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-Cx6m_4O3.js";import"./useAnimationId-DZvkGEgW.js";import"./dataEntryStyles-BoHQtdtS.js";import"./Curve-BLnV7n0Y.js";import"./step-BE4SoRR0.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CDP0qc2I.js";import"./Symbols-BB8GDQjJ.js";import"./symbol-2BGeghEi.js";import"./ActiveShapeUtils-HElctZzh.js";import"./ErrorBarContext-BL5frxgR.js";import"./GraphicalItemClipPath-Bpu4eZkp.js";import"./SetGraphicalItem-Cbz0EDFc.js";import"./useEffectiveDataKey-BuRZ7bwL.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
