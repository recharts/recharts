import{e as t}from"./iframe-BoXIVKpi.js";import{P as a}from"./PlotAreaShower-KIGO44Wy.js";import{c as p}from"./hooks-CmrSpg0T.js";import{R as s}from"./arrayEqualityCheck-dnQrzM2E.js";import{C as n}from"./ComposedChart-7O89xTAc.js";import{L as l}from"./Line-BGsVM20O.js";import{X as d}from"./XAxis-CkW7_vH7.js";import{Y as h}from"./YAxis-DHIy0H30.js";import{L as c}from"./Legend-CJ-Vpl5s.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-xw94xbD8.js";import"./immer-DZ-IpPxl.js";import"./axisSelectors-C3NEPGA0.js";import"./d3-scale-4wy_PNKp.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DSYkeoEk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-NZG2vnSc.js";import"./index-B4sUR4aF.js";import"./zIndexSlice-DRRC13cr.js";import"./renderedTicksSlice-CJehQ3Y6.js";import"./CartesianChart-CVmBhOHu.js";import"./chartDataContext-BotxQRqQ.js";import"./CategoricalChart-CtSiGPzF.js";import"./Layer-LLMs1spv.js";import"./ReactUtils-D25zr5OD.js";import"./Label-DIzgOATL.js";import"./Text-JI5xSkLa.js";import"./DOMUtils-CzHd8SEJ.js";import"./ZIndexLayer-BiamzHbt.js";import"./ActivePoints-B5Pf1vbB.js";import"./Dot-COyDptKo.js";import"./types-DGUHAYWi.js";import"./RegisterGraphicalItemId-DGJkdjw1.js";import"./ErrorBarContext-Da-s-Drd.js";import"./GraphicalItemClipPath-DEQZQieX.js";import"./SetGraphicalItem-b1pitorJ.js";import"./useAnimationId-CJqD-IcR.js";import"./getRadiusAndStrokeWidthFromDot-CvXSO0LX.js";import"./ActiveShapeUtils-yJwPYRY8.js";import"./isPlainObject-CJV2F3VY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CrG49jLS.js";import"./Trapezoid-HO8pmOVA.js";import"./Sector-ROnt6JN1.js";import"./Symbols-BdNjnJgs.js";import"./symbol-DuFkHlHY.js";import"./step-Dpvc6cK-.js";import"./Curve-4bfNPt84.js";import"./CartesianAxis-UrQstO-Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DhFcytpm.js";import"./uniqBy-Btz25j0W.js";import"./iteratee-br3ttoz_.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
