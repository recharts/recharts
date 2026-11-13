import{R as t}from"./iframe-B8oHBE2B.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-B9poBA23.js";import{R as g}from"./zIndexSlice-CY69X-_e.js";import{X as S}from"./XAxis-ZjtmoAYX.js";import{Y as h}from"./YAxis-xlwnxq94.js";import{S as A}from"./Scatter-B9N9XuEU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DFBUYq9O.js";import"./resolveDefaultProps-CgUiyAYX.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Ds5h7JK9.js";import"./throttle-CUYrrG0C.js";import"./index-DmSsi07Q.js";import"./index-cJCZbnBh.js";import"./polarAxisSelectors-D2FYbhjQ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CbMuV4Xw.js";import"./index-DMrvH4_y.js";import"./index-DGZRfgJf.js";import"./renderedTicksSlice-a5-uxQKT.js";import"./index-BO756sza.js";import"./fillDefinitions-DKQEn6JZ.js";import"./CartesianChart-Cx94wGq6.js";import"./chartDataContext-DF9RfUto.js";import"./CategoricalChart-B_DdruJc.js";import"./CartesianAxis-DLXM_Mrp.js";import"./Layer-d-LKmDNk.js";import"./Text-CvT3zU9x.js";import"./ZIndexLayer-ctGMKsDO.js";import"./Label-Do0pS3hb.js";import"./types-pqA8tR2L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BdZkCN9m.js";import"./activeStyles-B9e3PXPC.js";import"./useAnimationId-DstXvFRQ.js";import"./Curve-DGAKYDzB.js";import"./step-BZkNkw_J.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BqMPDS13.js";import"./Symbols-DlTVDDFq.js";import"./symbol-DwKqx-k1.js";import"./ActiveShapeUtils-DvU5i_JD.js";import"./ErrorBarContext-FVg_hFB1.js";import"./SetGraphicalItem-CNXf_JK1.js";import"./useEffectiveDataKey-R28HVoPp.js";const dt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}},gt=["API"];var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
