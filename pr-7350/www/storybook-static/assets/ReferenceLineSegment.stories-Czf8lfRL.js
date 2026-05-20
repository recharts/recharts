import{e}from"./iframe-B524E5yX.js";import{g as i}from"./arrayEqualityCheck-DWzVcokC.js";import{C as p}from"./ComposedChart-DDHEMHRT.js";import{p as a}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-DNfbJVP3.js";import{X as s}from"./XAxis-DoED6gJL.js";import{Y as c}from"./YAxis-Doi3vP5C.js";import{L as d}from"./Line-D2-iGJbn.js";import{R as g}from"./ReferenceLine-BCrcRHiz.js";import{R as f}from"./RechartsHookInspector-BHkEwc51.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-erGoKRoU.js";import"./immer-DblGCQ6f.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kVOVOGBx.js";import"./index-Cxa1JxZ8.js";import"./hooks-C4xKpp4Q.js";import"./axisSelectors-DIkxL-UY.js";import"./d3-scale-1dd7ZUuT.js";import"./zIndexSlice-6cosYb1s.js";import"./renderedTicksSlice-BCQv1ELk.js";import"./CartesianChart-DygjFtzj.js";import"./chartDataContext-BHiuOcfW.js";import"./CategoricalChart-DT5wuxyP.js";import"./CartesianAxis-C4FbkudN.js";import"./Layer-a-5--1A5.js";import"./Text-DAjJQcIE.js";import"./DOMUtils-Cs0OrDMQ.js";import"./Label-LjLfzFR2.js";import"./ZIndexLayer-kw2kBg7s.js";import"./types-D278CuUF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-rdzq-Cpq.js";import"./ActivePoints-B6T2Yi3F.js";import"./Dot-iLaPa2xv.js";import"./RegisterGraphicalItemId-D0FVAtQu.js";import"./ErrorBarContext-LOKpn0lF.js";import"./GraphicalItemClipPath-Day9CREm.js";import"./SetGraphicalItem-Cuswj8oR.js";import"./useAnimationId-B8WApGhr.js";import"./getRadiusAndStrokeWidthFromDot-Bz_39jGS.js";import"./ActiveShapeUtils-Be6-XL7t.js";import"./isPlainObject-Q96JMfqI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CnF6718M.js";import"./Trapezoid-JGHb5kPs.js";import"./Sector-DHhMbTkM.js";import"./Symbols-DVHiTs4H.js";import"./symbol-FWxgSMGi.js";import"./step-e5eeyF96.js";import"./Curve-CP7expTy.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BXZ80ZzE.js";import"./ChartSizeDimensions-B4ZLNDb6.js";import"./OffsetShower-CeXcOY0B.js";import"./PlotAreaShower-CsAAvQPX.js";const ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const Ee=["Segment"];export{t as Segment,Ee as __namedExportsOrder,ye as default};
