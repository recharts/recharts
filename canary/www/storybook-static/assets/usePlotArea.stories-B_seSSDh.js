import{e as t}from"./iframe-h5CV-Rcn.js";import{P as a}from"./PlotAreaShower-DoB2hHNO.js";import{c as p}from"./hooks-Cj5zxCap.js";import{R as s}from"./arrayEqualityCheck-ANgy1i9u.js";import{C as n}from"./ComposedChart-C7ZoWsGW.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-rAk3lmPT.js";import{X as h}from"./XAxis-DJ5PnZv1.js";import{Y as c}from"./YAxis-C2a8cqyi.js";import{L as g}from"./Legend-CLAUAMTQ.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BotkTU91.js";import"./immer-CtltHNiU.js";import"./axisSelectors-CS0Gz9QT.js";import"./d3-scale-ezQ-I_PQ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B2Z0u3RB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DDGX7JTv.js";import"./index-DX1weHGw.js";import"./zIndexSlice-Ca__6ThW.js";import"./renderedTicksSlice-D6PrsZnk.js";import"./CartesianChart-D92F_vnb.js";import"./chartDataContext-DblKe8Ss.js";import"./CategoricalChart-CjLLFuSG.js";import"./Layer-wxMTYWnZ.js";import"./ReactUtils-BBFoxYe1.js";import"./Label-CVl-fQEc.js";import"./Text-guYC2Xjr.js";import"./DOMUtils-DWY4ljAG.js";import"./ZIndexLayer-Ca4oOtQE.js";import"./ActivePoints-f1PDkhjz.js";import"./Dot-D_8FhM7J.js";import"./types-BA97OiOO.js";import"./RegisterGraphicalItemId-DtcV1RZB.js";import"./ErrorBarContext-BMIPJTH3.js";import"./GraphicalItemClipPath-cwCUl8BP.js";import"./SetGraphicalItem-CaZ4MYuw.js";import"./useAnimationId-DviPtx6L.js";import"./getRadiusAndStrokeWidthFromDot-ztMYcDbs.js";import"./ActiveShapeUtils-7Gb1tHPG.js";import"./isPlainObject-ByvTdsK-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BxYiR-g6.js";import"./Trapezoid-CeuEkWeu.js";import"./Sector-sEDjKq2Y.js";import"./Symbols-BjDCCe4r.js";import"./symbol-BfwBQG5X.js";import"./step-oPLXy2cm.js";import"./Curve-Br2Il0bq.js";import"./CartesianAxis-Xrizv51e.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-nJlWFN_f.js";import"./uniqBy-BwJC88rW.js";import"./iteratee-KuDzFuBm.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
