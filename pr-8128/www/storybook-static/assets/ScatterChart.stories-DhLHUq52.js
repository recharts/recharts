import{R as t}from"./iframe-CqZM7-m_.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-B0CLXgTe.js";import{R as g}from"./zIndexSlice-C2bhYwAU.js";import{X as S}from"./XAxis-KlRKQHwy.js";import{Y as h}from"./YAxis-ae7SlnFd.js";import{S as A}from"./Scatter-C_96aWDj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C-tKczMb.js";import"./resolveDefaultProps-DIo2Sl-P.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CU7asiQ5.js";import"./throttle-BMiHfZwg.js";import"./index-C-aUkLsy.js";import"./index-DpXM8lGR.js";import"./polarAxisSelectors-DaUnHX5G.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CaJTA9nk.js";import"./index-CztSWwc1.js";import"./index-NyV8lhCm.js";import"./renderedTicksSlice-D_esDvci.js";import"./index-DtqG7I3W.js";import"./CartesianChart-g7znHwgk.js";import"./ZIndexPortal-xTgrkJOp.js";import"./CategoricalChart-CjJTDTQz.js";import"./CartesianAxis-F_8zYdOn.js";import"./Layer--KWigSyO.js";import"./Text-D-XPvK3p.js";import"./DOMUtils-xk6ID9X9.js";import"./pageBackground-Bhwi_Yxq.js";import"./ZIndexLayer-CcqTqnO7.js";import"./Label-CFulNYa4.js";import"./types-vIB-y3qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DhQNMiPW.js";import"./activeStyles-cNHowlQL.js";import"./useAnimationId-Bff8cv61.js";import"./dataEntryStyles-Df1iMIlW.js";import"./fillDefinitions-1X04y-fM.js";import"./themeFill-CUygaBJV.js";import"./Curve-Drzcx3Ud.js";import"./step-v_r5NIvy.js";import"./path-DyVhHtw_.js";import"./tooltipContext-C3dWHiK2.js";import"./Symbols-DzjBnU_i.js";import"./symbol-B1C_m7FV.js";import"./ActiveShapeUtils-Dat3aOlo.js";import"./ErrorBarContext-CF_mHvca.js";import"./SetGraphicalItem-BGa3ruh5.js";import"./useEffectiveDataKey-B0QeK97Q.js";const At={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},ft=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(e=r.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};export{r as API,ft as __namedExportsOrder,At as default};
