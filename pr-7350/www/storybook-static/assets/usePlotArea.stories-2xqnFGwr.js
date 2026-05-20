import{e as t}from"./iframe-B524E5yX.js";import{P as a}from"./PlotAreaShower-CsAAvQPX.js";import{Y as p}from"./hooks-C4xKpp4Q.js";import{g as s}from"./arrayEqualityCheck-DWzVcokC.js";import{C as n}from"./ComposedChart-DDHEMHRT.js";import{p as l}from"./Page-DPte-9pC.js";import{L as d}from"./Line-D2-iGJbn.js";import{X as h}from"./XAxis-DoED6gJL.js";import{Y as c}from"./YAxis-Doi3vP5C.js";import{L as g}from"./Legend-Ptum4Oqq.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-B4ZLNDb6.js";import"./immer-DblGCQ6f.js";import"./axisSelectors-DIkxL-UY.js";import"./d3-scale-1dd7ZUuT.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-erGoKRoU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kVOVOGBx.js";import"./index-Cxa1JxZ8.js";import"./zIndexSlice-6cosYb1s.js";import"./renderedTicksSlice-BCQv1ELk.js";import"./CartesianChart-DygjFtzj.js";import"./chartDataContext-BHiuOcfW.js";import"./CategoricalChart-DT5wuxyP.js";import"./Layer-a-5--1A5.js";import"./ReactUtils-rdzq-Cpq.js";import"./Label-LjLfzFR2.js";import"./Text-DAjJQcIE.js";import"./DOMUtils-Cs0OrDMQ.js";import"./ZIndexLayer-kw2kBg7s.js";import"./ActivePoints-B6T2Yi3F.js";import"./Dot-iLaPa2xv.js";import"./types-D278CuUF.js";import"./RegisterGraphicalItemId-D0FVAtQu.js";import"./ErrorBarContext-LOKpn0lF.js";import"./GraphicalItemClipPath-Day9CREm.js";import"./SetGraphicalItem-Cuswj8oR.js";import"./useAnimationId-B8WApGhr.js";import"./getRadiusAndStrokeWidthFromDot-Bz_39jGS.js";import"./ActiveShapeUtils-Be6-XL7t.js";import"./isPlainObject-Q96JMfqI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CnF6718M.js";import"./Trapezoid-JGHb5kPs.js";import"./Sector-DHhMbTkM.js";import"./Symbols-DVHiTs4H.js";import"./symbol-FWxgSMGi.js";import"./step-e5eeyF96.js";import"./Curve-CP7expTy.js";import"./CartesianAxis-C4FbkudN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DsvyH8An.js";import"./uniqBy-D00Q8yAE.js";import"./iteratee-Dm8Ri951.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
