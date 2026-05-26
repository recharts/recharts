import{e as t}from"./iframe-D8sYifa2.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-Cz8gm-NV.js";import{c as d}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-C0H95pVf.js";import{d as g}from"./arrayEqualityCheck-y2Q9GogF.js";import{X as h}from"./XAxis-9biS9qcH.js";import{Y as S}from"./YAxis-BUVq_Z24.js";import{S as l}from"./Scatter-BzKSQA5o.js";import{R as f}from"./RechartsHookInspector-DH476wIm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DkonLtU6.js";import"./index-DUx68t71.js";import"./immer-DGWVQIGE.js";import"./hooks-BU-t5LUJ.js";import"./axisSelectors-BhhfO0Ag.js";import"./d3-scale-Cclz1I6I.js";import"./svgPropertiesAndEvents-DLjmXQI2.js";import"./zIndexSlice-_08NoE64.js";import"./renderedTicksSlice-4e9Z0x6u.js";import"./index-CMJrcCvs.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DyRJBMNu.js";import"./chartDataContext-RIukKWW8.js";import"./CategoricalChart-Cy6OSvk9.js";import"./CartesianAxis-k72kWN9A.js";import"./Layer-D0lgb40K.js";import"./Text-CGRq25Ok.js";import"./DOMUtils-DEL1f2E9.js";import"./Label-DJUogzP7.js";import"./ZIndexLayer-BoxbsGwS.js";import"./types-C-x3ql1e.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./graphicalItemTheme-BorrGmPK.js";import"./Curve-D7_AU4BE.js";import"./step-Cv8kCHVT.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Cf_INVZ7.js";import"./Symbols-Iph-WCB-.js";import"./symbol-B2tLKIcI.js";import"./ActiveShapeUtils-gpKwZwuV.js";import"./RegisterGraphicalItemId-qsbqe2qd.js";import"./ErrorBarContext-CMRjTkut.js";import"./GraphicalItemClipPath-BvTSVrR_.js";import"./SetGraphicalItem-y2OPpJ7-.js";import"./useAnimationId-W_naYXH9.js";import"./index-DmeQCr0O.js";import"./ChartSizeDimensions-HlWxaGyg.js";import"./OffsetShower-BZMcKLdA.js";import"./PlotAreaShower-DYk3IhVP.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(h,{dataKey:"x"}),t.createElement(S,{dataKey:"y"}),t.createElement(l,{data:s}),t.createElement(f,null)))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(e=r.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};const St=["API"];export{r as API,St as __namedExportsOrder,ht as default};
