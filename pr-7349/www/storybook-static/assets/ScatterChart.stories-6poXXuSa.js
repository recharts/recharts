import{e as t}from"./iframe-8-kjzB7M.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DWgqGcPH.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-Bq13kskQ.js";import{g as d}from"./arrayEqualityCheck-BFH1E3k_.js";import{X as h}from"./XAxis-D2S2cmnw.js";import{Y as S}from"./YAxis-DaRq7QHm.js";import{S as l}from"./Scatter-CeQ7PVKt.js";import{R as f}from"./RechartsHookInspector-CM7h1fuc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B7ei5y6q.js";import"./index-B7HOuyLw.js";import"./immer-DyK63VIN.js";import"./hooks-D7HTiiCO.js";import"./axisSelectors-BNYuZguV.js";import"./d3-scale-CQtZ6VlM.js";import"./zIndexSlice-RoK7gDNz.js";import"./renderedTicksSlice-B1hkz5RK.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DIcUCgdK.js";import"./chartDataContext-B5w2WfFE.js";import"./CategoricalChart-BSYInFMU.js";import"./resolveDefaultProps-DEBbAbU8.js";import"./CartesianAxis-CXWQlOps.js";import"./Layer-CzqQGym9.js";import"./Text-CoxxW3ZN.js";import"./DOMUtils-DlGm6rgl.js";import"./Label-DM3VCT7K.js";import"./ZIndexLayer-BFtzmC6W.js";import"./types-BtLx_F1t.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CewVIgMM.js";import"./Curve-D8ZMrIKx.js";import"./step-BPajIDVN.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DATQSPWz.js";import"./Symbols-7Fs_OGmI.js";import"./symbol-Dvj3tO81.js";import"./ActiveShapeUtils-B64sWmQr.js";import"./isPlainObject-Dd1Ki_ZE.js";import"./isPlainObject-BSutPv-K.js";import"./RegisterGraphicalItemId-CmJN5Y2e.js";import"./ErrorBarContext-DcV-oeSm.js";import"./GraphicalItemClipPath-CVE49Uj3.js";import"./SetGraphicalItem-DKHyStui.js";import"./useAnimationId-R2tEawoj.js";import"./index-DmSQVuHS.js";import"./ChartSizeDimensions-C53bqH85.js";import"./OffsetShower-Ba6R23wJ.js";import"./PlotAreaShower-mh0ASj0Y.js";const lt={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(h,{dataKey:"x"}),t.createElement(S,{dataKey:"y"}),t.createElement(l,{data:s}),t.createElement(f,null)))},args:{...c(a),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(m=(e=r.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};const ft=["API"];export{r as API,ft as __namedExportsOrder,lt as default};
