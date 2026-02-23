import{e}from"./iframe-Cg8afp3P.js";import{R as i}from"./arrayEqualityCheck-CdnxX3zW.js";import{C as p}from"./ComposedChart-Dw1ue8mx.js";import{C as a}from"./CartesianGrid-Dufe2PKF.js";import{X as n}from"./XAxis-CcHOaWFK.js";import{Y as s}from"./YAxis-B5L1n3Hm.js";import{L as c}from"./Line-ix8re_Gh.js";import{R as d}from"./ReferenceLine-CHwuaox5.js";import{R as g}from"./RechartsHookInspector-DBmCwbx2.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-3HltEOEu.js";import"./immer-496O7mbU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Jn537Djk.js";import"./index-BTReDVD1.js";import"./hooks-CbbXi_l7.js";import"./axisSelectors-C693hjfU.js";import"./d3-scale-Cj67Rjiy.js";import"./zIndexSlice-BhrWtTkt.js";import"./renderedTicksSlice-DkvAPKlQ.js";import"./CartesianChart-DjSIFQx_.js";import"./chartDataContext-GXm2JMjL.js";import"./CategoricalChart-Cr-8QZnp.js";import"./CartesianAxis-BH2_JJNm.js";import"./Layer-YebNzFxt.js";import"./Text-CShVWkSN.js";import"./DOMUtils-DjmgTp4l.js";import"./Label-DvKY9pNQ.js";import"./ZIndexLayer-8TBIBWl0.js";import"./types-CMLysTZx.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Bs6wbtV4.js";import"./ActivePoints--aP-WW0G.js";import"./Dot-BEaF242C.js";import"./RegisterGraphicalItemId-mvTxW8NP.js";import"./ErrorBarContext-CYmUoBhN.js";import"./GraphicalItemClipPath-CcY9VH0G.js";import"./SetGraphicalItem-mVKFfj-o.js";import"./useAnimationId-KzNTUIqt.js";import"./getRadiusAndStrokeWidthFromDot-TA9Ey7Di.js";import"./ActiveShapeUtils-C8ehvzet.js";import"./isPlainObject-exJkdHtC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-m1zl6eyw.js";import"./Trapezoid-CNmEBD2U.js";import"./Sector-DyLH-ktt.js";import"./Symbols-BOLBqJCz.js";import"./symbol-BNzksSxl.js";import"./step-CqAkm0lp.js";import"./Curve-kDork6Kh.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DRXexYxK.js";import"./ChartSizeDimensions-DccCBOyY.js";import"./OffsetShower-7vNsmCvs.js";import"./PlotAreaShower-C7II51Mo.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
