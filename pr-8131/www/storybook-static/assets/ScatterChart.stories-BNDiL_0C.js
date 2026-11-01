import{R as t}from"./iframe-Dt9aG847.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-CGhqHh5e.js";import{R as g}from"./zIndexSlice-C3sOwbsK.js";import{X as S}from"./XAxis-ChVo-6Tw.js";import{Y as h}from"./YAxis-AwRjL7js.js";import{S as A}from"./Scatter-CpzkBSMW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CgsNUza7.js";import"./resolveDefaultProps-Cnn2TL20.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Bm-O_fE3.js";import"./throttle-DjDKvtka.js";import"./index-Ckb0wJr8.js";import"./index-ZaO1fpAq.js";import"./polarAxisSelectors-BE-JLCIi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DLGbz4xh.js";import"./index-DaFKSt3L.js";import"./index-C7FBrTyJ.js";import"./renderedTicksSlice-CiUiD4jz.js";import"./index-Cy9hP7c-.js";import"./fillDefinitions-Cturf6E_.js";import"./CartesianChart-ZS3wTvyi.js";import"./ZIndexPortal-C6GfDihg.js";import"./CategoricalChart-CcRrPC5A.js";import"./CartesianAxis-DnXkFBgJ.js";import"./Layer-Z8zmzF48.js";import"./Text-6YRDeSKh.js";import"./DOMUtils-DacRhvVS.js";import"./ZIndexLayer-D4w_arr1.js";import"./Label-0OpL57DR.js";import"./types-CAYyOejn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-Dmjy57ut.js";import"./activeStyles-D2EMNXIV.js";import"./useAnimationId-CJa-E4MR.js";import"./dataEntryStyles-V0ugCGFO.js";import"./Curve-BqouQalk.js";import"./step-J3DdjOPx.js";import"./path-DyVhHtw_.js";import"./tooltipContext-UvrNDSbW.js";import"./Symbols-VXtPO39-.js";import"./symbol-6_lKArhi.js";import"./ActiveShapeUtils-BCHVEK9a.js";import"./ErrorBarContext-BlC639ix.js";import"./SetGraphicalItem-KzVnPo4P.js";import"./useEffectiveDataKey-DvT2OXI-.js";const St={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},ht=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
