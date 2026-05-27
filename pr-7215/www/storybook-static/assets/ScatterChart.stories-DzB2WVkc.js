import{e as t}from"./iframe-FqQriuOU.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DVckGNEz.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-DboLQK5C.js";import{g as d}from"./arrayEqualityCheck-D81yCQ_E.js";import{X as h}from"./XAxis-rE-0ziVR.js";import{Y as S}from"./YAxis-Bx3kycjW.js";import{S as l}from"./Scatter-CPgkHChP.js";import{R as f}from"./RechartsHookInspector-Bzl8PNqn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CApzUvyj.js";import"./index-B7L9uR1Y.js";import"./immer-majn-qZf.js";import"./hooks-B_UbI8Xu.js";import"./axisSelectors-_fK9ZDWF.js";import"./d3-scale-i74XhqWc.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-f7paLzdj.js";import"./renderedTicksSlice-C4IzMNte.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DL9N19jV.js";import"./chartDataContext-8vaUd_eG.js";import"./CategoricalChart-D0upkKoq.js";import"./resolveDefaultProps-CH-QvTob.js";import"./CartesianAxis-BeuIWSvD.js";import"./Layer-dRSSbr5y.js";import"./Text-DPCTz-gd.js";import"./DOMUtils-BuFom25w.js";import"./Label-CKdOaAhH.js";import"./ZIndexLayer-C869JS3k.js";import"./types-CfmOzYIG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./AnimatedItems-BOrN0e6v.js";import"./useAnimationId-CwJGQlGj.js";import"./Curve-bxiY4w-f.js";import"./step-DRejhJRi.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BWLcIPAX.js";import"./Symbols-DAX_okS0.js";import"./symbol-B9MBbnrG.js";import"./ActiveShapeUtils-DpMDeTgr.js";import"./RegisterGraphicalItemId-W17uiJWi.js";import"./ErrorBarContext-BDkPCebh.js";import"./GraphicalItemClipPath-BYvnIWBH.js";import"./SetGraphicalItem-w0uUjr7L.js";import"./index-FNdgkUyx.js";import"./ChartSizeDimensions-BmkjlCCd.js";import"./OffsetShower-6wrSmmyT.js";import"./PlotAreaShower-MAtCIzZg.js";const St={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(h,{dataKey:"x"}),t.createElement(S,{dataKey:"y"}),t.createElement(l,{data:s}),t.createElement(f,null)))},args:{...c(a),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(e=r.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};const lt=["API"];export{r as API,lt as __namedExportsOrder,St as default};
