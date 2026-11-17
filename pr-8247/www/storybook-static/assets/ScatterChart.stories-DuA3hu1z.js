import{R as t}from"./iframe-CcEsDsPt.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-CMamlSVf.js";import{R as g}from"./zIndexSlice-B6RUMmkk.js";import{X as S}from"./XAxis-BYDL1VAX.js";import{Y as h}from"./YAxis-ioZsuscH.js";import{S as A}from"./Scatter-CsAuZBWG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Clhdkuph.js";import"./resolveDefaultProps-CG7EywaD.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CKb6nzHd.js";import"./throttle-DZ4rLUZb.js";import"./index-BtX-QQGe.js";import"./index-BVtuMGKw.js";import"./polarAxisSelectors-DR_PitVn.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CJ6MxznC.js";import"./index-SbP6Yowi.js";import"./index--ncHqsRr.js";import"./renderedTicksSlice-ModyArOC.js";import"./index-Cos4qCXe.js";import"./fillDefinitions-C6z_LMZM.js";import"./CartesianChart-C019ixZ1.js";import"./chartDataContext-DMXCxnSO.js";import"./CategoricalChart-BMAmMdOt.js";import"./CartesianAxis-BUPldUtv.js";import"./Layer-fXDLQXYt.js";import"./Text-wPKGoZhq.js";import"./ZIndexLayer-DOqZSl62.js";import"./Label-CMmdEaqf.js";import"./types-DELOeU-O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-frn6yaTB.js";import"./activeStyles-CiUshd_8.js";import"./useAnimationId-qpAzE9JI.js";import"./Curve-D2q8IfYm.js";import"./step-BQxy8stc.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CGOWsEmb.js";import"./Symbols-CB4LXAVB.js";import"./symbol-CBgh6xJV.js";import"./ActiveShapeUtils-CMoHIOd4.js";import"./ErrorBarContext-CPIS3FDy.js";import"./SetGraphicalItem-CHwZeAHG.js";import"./useEffectiveDataKey-B9tlhySB.js";const dt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}},gt=["API"];var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
