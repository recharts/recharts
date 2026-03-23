import{e as t}from"./iframe-Ct0PK1iZ.js";import{P as a}from"./PlotAreaShower-CxG6J2wp.js";import{c as p}from"./hooks-B5ECIQG0.js";import{R as s}from"./arrayEqualityCheck-cSrg192z.js";import{C as n}from"./ComposedChart-Dkf6chnc.js";import{L as l}from"./Line-4WhNdwJc.js";import{X as d}from"./XAxis-ZfaBuFta.js";import{Y as h}from"./YAxis-CMvF26TK.js";import{L as c}from"./Legend-DKQdARkQ.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-Blj7cX2O.js";import"./immer-C_0hot5p.js";import"./axisSelectors-DfI31pZt.js";import"./d3-scale-BIuiM5G6.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CkDZ6rk0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-JBNrYn90.js";import"./index-e5TdOq0j.js";import"./zIndexSlice-C0pIss81.js";import"./renderedTicksSlice-Xed-5Uzt.js";import"./CartesianChart-F11oHMFT.js";import"./chartDataContext-Be_hCN-X.js";import"./CategoricalChart-DBM3lb6I.js";import"./Layer-BFqbkghr.js";import"./ReactUtils-C9XhBs7w.js";import"./Label-kZgIL_LG.js";import"./Text-D7gtJPhg.js";import"./DOMUtils-DZtY6UXL.js";import"./ZIndexLayer-CPK1fMG2.js";import"./ActivePoints-Bv-BLGDJ.js";import"./Dot-B3FhOR5M.js";import"./types-B_QiL_OE.js";import"./RegisterGraphicalItemId-DG67JJW9.js";import"./ErrorBarContext-C_IVi_zE.js";import"./GraphicalItemClipPath-DIAe0jt7.js";import"./SetGraphicalItem-BiB1viSJ.js";import"./useAnimationId-DhoQEmEH.js";import"./getRadiusAndStrokeWidthFromDot-BJC5mRjp.js";import"./ActiveShapeUtils-UwLXsB-I.js";import"./isPlainObject-B12Z6ZLF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bk1l59Or.js";import"./Trapezoid-BzWb9o7I.js";import"./Sector-6TbuA5HM.js";import"./Symbols-Cz5Eatoq.js";import"./symbol-ORh8C_38.js";import"./step-CfNjb2F4.js";import"./Curve-BtTKqNeq.js";import"./CartesianAxis-DpFipx6Q.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Dd86n5z-.js";import"./uniqBy-B6CTRDCo.js";import"./iteratee-qHNQkKgM.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
