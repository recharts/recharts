import{R as t}from"./iframe-N2_k56Bi.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-DEoNksf0.js";import{R as g}from"./zIndexSlice-C2n8MH5C.js";import{X as S}from"./XAxis-BMzjraU8.js";import{Y as h}from"./YAxis-BWNeCe4E.js";import{S as A}from"./Scatter-Bb9J-KmK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dp1Mzfqy.js";import"./resolveDefaultProps-DqwpxfQ6.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CAEFlKfw.js";import"./throttle-wqOW3oZ2.js";import"./index-DW0bz290.js";import"./index-CE3twcP3.js";import"./polarAxisSelectors-BJLn-yPG.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BXPoqAuA.js";import"./index-BDOvrbcw.js";import"./index-C9ctZ6JT.js";import"./renderedTicksSlice-tTdjxG_s.js";import"./index-ByH8O9KC.js";import"./fillDefinitions-dJCuHQYF.js";import"./CartesianChart-CoYa15-4.js";import"./ZIndexPortal-C8tnP8Pm.js";import"./CategoricalChart-CrnXV7kh.js";import"./CartesianAxis-DPQ0rx3G.js";import"./Layer-CJpZrgpd.js";import"./Text-CtPksR9D.js";import"./DOMUtils-DcUCUVaa.js";import"./ZIndexLayer-C9mVRhjd.js";import"./Label-BtTjy9h1.js";import"./types-DGUdIwXy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-CpgHxPqB.js";import"./activeStyles-CM4N_FMo.js";import"./useAnimationId-LBywhlWd.js";import"./dataEntryStyles-C-YlvJRH.js";import"./Curve-DgWUxnsC.js";import"./step-DyI48c2G.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CmP3xgFk.js";import"./Symbols-jQ5nGruQ.js";import"./symbol-tKDu3Sq7.js";import"./ActiveShapeUtils-CdIqoiTp.js";import"./ErrorBarContext-BEo9CD_X.js";import"./SetGraphicalItem-CsZSO0ag.js";import"./useEffectiveDataKey-D760KGHv.js";const St={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},ht=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
