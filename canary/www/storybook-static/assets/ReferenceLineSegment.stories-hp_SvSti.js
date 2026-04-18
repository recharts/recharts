import{e}from"./iframe-h5CV-Rcn.js";import{R as i}from"./arrayEqualityCheck-ANgy1i9u.js";import{C as p}from"./ComposedChart-C7ZoWsGW.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Ce31yJWO.js";import{X as s}from"./XAxis-DJ5PnZv1.js";import{Y as c}from"./YAxis-C2a8cqyi.js";import{L as d}from"./Line-rAk3lmPT.js";import{R as g}from"./ReferenceLine-CIw35Syh.js";import{R as f}from"./RechartsHookInspector-aIveFv2Z.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B2Z0u3RB.js";import"./immer-CtltHNiU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DDGX7JTv.js";import"./index-DX1weHGw.js";import"./hooks-Cj5zxCap.js";import"./axisSelectors-CS0Gz9QT.js";import"./d3-scale-ezQ-I_PQ.js";import"./zIndexSlice-Ca__6ThW.js";import"./renderedTicksSlice-D6PrsZnk.js";import"./CartesianChart-D92F_vnb.js";import"./chartDataContext-DblKe8Ss.js";import"./CategoricalChart-CjLLFuSG.js";import"./CartesianAxis-Xrizv51e.js";import"./Layer-wxMTYWnZ.js";import"./Text-guYC2Xjr.js";import"./DOMUtils-DWY4ljAG.js";import"./Label-CVl-fQEc.js";import"./ZIndexLayer-Ca4oOtQE.js";import"./types-BA97OiOO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BBFoxYe1.js";import"./ActivePoints-f1PDkhjz.js";import"./Dot-D_8FhM7J.js";import"./RegisterGraphicalItemId-DtcV1RZB.js";import"./ErrorBarContext-BMIPJTH3.js";import"./GraphicalItemClipPath-cwCUl8BP.js";import"./SetGraphicalItem-CaZ4MYuw.js";import"./useAnimationId-DviPtx6L.js";import"./getRadiusAndStrokeWidthFromDot-ztMYcDbs.js";import"./ActiveShapeUtils-7Gb1tHPG.js";import"./isPlainObject-ByvTdsK-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BxYiR-g6.js";import"./Trapezoid-CeuEkWeu.js";import"./Sector-sEDjKq2Y.js";import"./Symbols-BjDCCe4r.js";import"./symbol-BfwBQG5X.js";import"./step-oPLXy2cm.js";import"./Curve-Br2Il0bq.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D_mIMI9F.js";import"./ChartSizeDimensions-BotkTU91.js";import"./OffsetShower-BoyHPNkq.js";import"./PlotAreaShower-DoB2hHNO.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
