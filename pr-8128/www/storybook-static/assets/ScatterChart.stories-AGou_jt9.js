import{R as t}from"./iframe-BwLZw-_M.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-D6Ps-X_g.js";import{R as g}from"./zIndexSlice-ChI0kTlF.js";import{X as S}from"./XAxis-D6rGR5iH.js";import{Y as h}from"./YAxis-CM5oOvq7.js";import{S as A}from"./Scatter-CLgxqoBH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C2SzhBqG.js";import"./resolveDefaultProps-BegzgTjS.js";import"./get-cF5BDHN6.js";import"./axisSelectors-kUTEWjAI.js";import"./throttle-DvL4FsEQ.js";import"./index-C9AtYHBZ.js";import"./index-qoVf35OJ.js";import"./polarAxisSelectors-Bhh2eZQc.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DGzUJoIU.js";import"./index-BfwFhJuC.js";import"./index-o3dNuH8W.js";import"./renderedTicksSlice-BYZX0jcd.js";import"./index-B0i9H4tX.js";import"./CartesianChart-DhrEBdyK.js";import"./ZIndexPortal-CPgp6_q6.js";import"./CategoricalChart-DWgt9BZJ.js";import"./CartesianAxis-CE8eP4oM.js";import"./Layer-DuW_QRN1.js";import"./Text-CBZN8k_S.js";import"./DOMUtils-i6fMpPJ-.js";import"./pageBackground-BK1aOTMM.js";import"./ZIndexLayer-Bvlb4wTY.js";import"./Label-U4vkciLv.js";import"./types-tzWyPHwG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-6PzejVVq.js";import"./activeStyles-lGmv_AYe.js";import"./useAnimationId-yjvP5B3D.js";import"./dataEntryStyles-B1tUzdyv.js";import"./fillDefinitions-B6DD0NTj.js";import"./themeFill-sw4Y96Vm.js";import"./Curve-CzfoK2T3.js";import"./step-QqIlLDuW.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dso09ku8.js";import"./Symbols-D0k11amF.js";import"./symbol-CxJ4nrsQ.js";import"./ActiveShapeUtils-BCNnGPme.js";import"./ErrorBarContext-B9C041Rd.js";import"./SetGraphicalItem-CZMv7iCK.js";import"./useEffectiveDataKey-C-YUm0jF.js";const At={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},ft=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
