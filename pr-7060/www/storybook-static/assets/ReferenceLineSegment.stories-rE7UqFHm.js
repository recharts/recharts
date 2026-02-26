import{e}from"./iframe-Ch2H383w.js";import{R as i}from"./arrayEqualityCheck-CcoXvTIe.js";import{C as p}from"./ComposedChart-IGKBWSvp.js";import{C as a}from"./CartesianGrid-CTinLeGK.js";import{X as n}from"./XAxis-CNQurGdF.js";import{Y as s}from"./YAxis-DxTWoH9V.js";import{L as c}from"./Line-h7uGauY1.js";import{R as d}from"./ReferenceLine-CBvsdpzw.js";import{R as g}from"./RechartsHookInspector-BJIWLpAN.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Ce5Vf20-.js";import"./immer-CuzWzTfz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B4us9W1h.js";import"./index-B83dRs4n.js";import"./hooks-CSqGm2Vh.js";import"./axisSelectors-D5kbvOqb.js";import"./d3-scale--P9_UiJN.js";import"./zIndexSlice-D0Km72rD.js";import"./renderedTicksSlice-Cpaoi516.js";import"./CartesianChart-Bsy01o0m.js";import"./chartDataContext-Dkm8eTMR.js";import"./CategoricalChart-DRsF6Hco.js";import"./CartesianAxis-DOQRlkLH.js";import"./Layer-yB3Q88eR.js";import"./Text-CMCGaMex.js";import"./DOMUtils-DvEd-B07.js";import"./Label-h8Lj8ZpR.js";import"./ZIndexLayer-Bo-lDWay.js";import"./types-yO-TS24R.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BnK3eejK.js";import"./ActivePoints-DcrHd6tF.js";import"./Dot-CviiMKw7.js";import"./RegisterGraphicalItemId-DrnJwnvQ.js";import"./ErrorBarContext-BZSQmULr.js";import"./GraphicalItemClipPath-rQxmGc46.js";import"./SetGraphicalItem-BZ3_hlL3.js";import"./useAnimationId-dRwxXRVb.js";import"./getRadiusAndStrokeWidthFromDot-D-cthvwF.js";import"./ActiveShapeUtils-BKBe1trq.js";import"./isPlainObject-Bve2BbtD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BKDxLQJC.js";import"./Trapezoid-DPpAMK_h.js";import"./Sector-HOrLF-jD.js";import"./Symbols-DbTFPMcv.js";import"./symbol-BWpDFnQE.js";import"./step-BoAzBu0R.js";import"./Curve-BBxbYyGH.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DtZkbyPi.js";import"./ChartSizeDimensions-7l9XUt5L.js";import"./OffsetShower-DDeP8nwr.js";import"./PlotAreaShower-CC7ji8nO.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
