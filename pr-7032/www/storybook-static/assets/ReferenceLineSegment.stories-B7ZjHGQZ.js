import{e}from"./iframe-BFxtY9dI.js";import{R as i}from"./arrayEqualityCheck-BQbZm714.js";import{C as p}from"./ComposedChart-Pvg-RSkd.js";import{C as a}from"./CartesianGrid-rH53Dzit.js";import{X as n}from"./XAxis-D3JpuhiV.js";import{Y as s}from"./YAxis-CPuMzTzv.js";import{L as c}from"./Line-UEiO7S8k.js";import{R as d}from"./ReferenceLine-BUhBbsTv.js";import{R as g}from"./RechartsHookInspector-gudRCKH0.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bso679kC.js";import"./immer-CUcePk58.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DLTyrBtL.js";import"./index-DIi_90kL.js";import"./hooks-BNRFjHsC.js";import"./axisSelectors-Ceb__LH1.js";import"./d3-scale-KUDmBWZW.js";import"./zIndexSlice-ZRc_7mLu.js";import"./renderedTicksSlice-BzWN-VH9.js";import"./CartesianChart-CabJwrb4.js";import"./chartDataContext-DVsTe71B.js";import"./CategoricalChart-DKEDTrV-.js";import"./CartesianAxis-BYeXOVyG.js";import"./Layer-YgumUWTD.js";import"./Text-C_nqvwwO.js";import"./DOMUtils-D2wt1W4C.js";import"./Label-BcnS9G2E.js";import"./ZIndexLayer-DBC69qog.js";import"./types-DnPXbBrB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DAjtS1FD.js";import"./ActivePoints-YDyzEBL0.js";import"./Dot-BvOkHPQI.js";import"./RegisterGraphicalItemId-Dp1MHSbj.js";import"./ErrorBarContext-BKgH9nv9.js";import"./GraphicalItemClipPath-DRveIpF0.js";import"./SetGraphicalItem-BHv-MNOM.js";import"./useAnimationId-BSFVs4aF.js";import"./getRadiusAndStrokeWidthFromDot-BTjYZIUU.js";import"./ActiveShapeUtils-C6MZRufc.js";import"./isPlainObject-BfhtbKPL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpImsBEM.js";import"./Trapezoid-DlEtqDsP.js";import"./Sector-CtJlOyZO.js";import"./Symbols-CK_J3ycL.js";import"./symbol-CT0Qon51.js";import"./step-Ckw-k6uH.js";import"./Curve-CuVRTfs_.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Df7eFGry.js";import"./ChartSizeDimensions-Rd73rJcG.js";import"./OffsetShower-C5x-sRSJ.js";import"./PlotAreaShower-BaqJ4sLy.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
