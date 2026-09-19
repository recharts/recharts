import{R as t}from"./iframe-RJgsiaPL.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-BmHcnwZh.js";import{R as g}from"./zIndexSlice-CaPb3BS1.js";import{X as S}from"./XAxis-D1NHLWzc.js";import{Y as h}from"./YAxis-BC94qFyI.js";import{S as A}from"./Scatter-Dg6sffLh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-rp6dEN_z.js";import"./resolveDefaultProps-B7TAC97Z.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BvLTD4U6.js";import"./throttle-2XjV57Y3.js";import"./index-CUt9-oqi.js";import"./index-CYBMXNtj.js";import"./isWellBehavedNumber-BCdm_Taf.js";import"./d3-scale-a8xW28JY.js";import"./index-DvWZFtCS.js";import"./index-Bde12l31.js";import"./renderedTicksSlice-AZZMQyv9.js";import"./index-CETpxp5N.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DJVuJ2_B.js";import"./chartDataContext-DMrvaJTD.js";import"./CategoricalChart-BIS8XmXt.js";import"./CartesianAxis-BXFp-lIC.js";import"./Layer-CDx7YXT6.js";import"./Text-DZ5ZEdji.js";import"./DOMUtils-BwBerndY.js";import"./useId-D3absDYU.js";import"./useBackwardsCompatibleTheme-DcNVN6Kh.js";import"./Label-DPnPk4i3.js";import"./ZIndexLayer-BoWVhfOi.js";import"./types-C_mapbFf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Ct76uSB6.js";import"./useAnimationId-DsRwG-rm.js";import"./Curve-CFCl1kCW.js";import"./step-K1SJUhGX.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BpkFELpS.js";import"./Symbols-BfkRpYNl.js";import"./symbol-bC4XhbYr.js";import"./ActiveShapeUtils-BQ-YCn0D.js";import"./RegisterGraphicalItemId-CnzhIxcb.js";import"./ErrorBarContext-CV0SzBCK.js";import"./GraphicalItemClipPath-BmrXFZmB.js";import"./SetGraphicalItem-D4Kx71sv.js";import"./useGraphicalItemIdentity-BL8Yfc_I.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
