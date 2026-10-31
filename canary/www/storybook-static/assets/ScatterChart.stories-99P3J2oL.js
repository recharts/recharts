import{R as t}from"./iframe-DrMLBoK_.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-BiyQPoWn.js";import{R as g}from"./zIndexSlice-BAbfq_sX.js";import{X as S}from"./XAxis-Cwv8s30V.js";import{Y as h}from"./YAxis-T-2mqgRO.js";import{S as A}from"./Scatter-rCmqm0oz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CXZPsywz.js";import"./resolveDefaultProps-C_WQkFbi.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CrOsHKKG.js";import"./throttle-2Z3dikKo.js";import"./index-CTLiCJTk.js";import"./index-IA7JdDoU.js";import"./polarAxisSelectors-D2k-junf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BHx6I7KL.js";import"./index-BsgdmWE6.js";import"./index-DwcArmuD.js";import"./renderedTicksSlice-DjVfoptE.js";import"./index-pQjQ56sZ.js";import"./CartesianChart-Dzyi-du7.js";import"./ZIndexPortal-Cic8j-2O.js";import"./CategoricalChart-CZtxZv4h.js";import"./CartesianAxis-CAiEG9fo.js";import"./Layer-DCQ6NbAd.js";import"./Text-CCAk-006.js";import"./DOMUtils-BZ5XTJuP.js";import"./ZIndexLayer-FCgsPrev.js";import"./Label-CJPkFebi.js";import"./types-CTebeEOM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-UL5cxJwa.js";import"./activeStyles-CN6y9IyH.js";import"./useAnimationId-C1T3lckw.js";import"./dataEntryStyles-DS33QVkf.js";import"./themeFill-BkM1x4hA.js";import"./Curve-CDb7Uz9B.js";import"./step-LAZCFOYn.js";import"./path-DyVhHtw_.js";import"./tooltipContext-D2cAZChc.js";import"./Symbols-BVUslZbl.js";import"./symbol-DCFwQ7z8.js";import"./ActiveShapeUtils-BLsOucL8.js";import"./ErrorBarContext-BbnyXFhx.js";import"./SetGraphicalItem-u5R4LaUm.js";import"./useEffectiveDataKey-Cmfpsn2Q.js";const St={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},ht=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
