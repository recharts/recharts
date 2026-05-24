import{e as t}from"./iframe-HklBE7vu.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DWgqGcPH.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-EHz5OqeQ.js";import{g as d}from"./arrayEqualityCheck-CG9NM7M7.js";import{X as h}from"./XAxis-BeXZR1BO.js";import{Y as S}from"./YAxis-D8onK4in.js";import{S as l}from"./Scatter-BAGsBxIg.js";import{R as f}from"./RechartsHookInspector-CROecA9e.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BYIG_iFP.js";import"./index-QkgaeSYl.js";import"./immer-B5bJcxrJ.js";import"./hooks-CnW7pryE.js";import"./axisSelectors-DQ1WchLm.js";import"./d3-scale-ByKoA0zW.js";import"./zIndexSlice-CVyG9qRx.js";import"./renderedTicksSlice--_3RJj48.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DtRgi5pX.js";import"./chartDataContext-I9Ggk7nE.js";import"./CategoricalChart-BN63kSx-.js";import"./resolveDefaultProps-CmkmsSRd.js";import"./CartesianAxis-C0qWYU4C.js";import"./Layer-D8ZS5vyC.js";import"./Text-Dt3ARXcw.js";import"./DOMUtils-BwtPQYwq.js";import"./Label-ClB5KqOQ.js";import"./ZIndexLayer-BPeCIwGs.js";import"./types-D0dCN7Ox.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-mFr3j9RO.js";import"./Curve-CrXnBsHg.js";import"./step-BUDT2jIN.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CD1UQP6_.js";import"./Symbols-B00rQK0H.js";import"./symbol-DGMnJi_X.js";import"./ActiveShapeUtils-CKRCWn6k.js";import"./RegisterGraphicalItemId-BaLxd7fn.js";import"./ErrorBarContext-C1pX8SkM.js";import"./GraphicalItemClipPath-Xc6uO7Vp.js";import"./SetGraphicalItem-CjWW7GpL.js";import"./useAnimationId-Yfa74zNK.js";import"./index-DO5d7GKD.js";import"./ChartSizeDimensions-GhqI97PU.js";import"./OffsetShower-CEG4HECi.js";import"./PlotAreaShower-utUcCZ-k.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(h,{dataKey:"x"}),t.createElement(S,{dataKey:"y"}),t.createElement(l,{data:s}),t.createElement(f,null)))},args:{...c(a),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
