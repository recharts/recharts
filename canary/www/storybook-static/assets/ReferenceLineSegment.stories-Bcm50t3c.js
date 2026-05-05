import{e}from"./iframe-BhOFeZiC.js";import{R as i}from"./arrayEqualityCheck-DnvBp98Z.js";import{C as p}from"./ComposedChart-DQaFL75h.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DEsVfCy8.js";import{X as s}from"./XAxis-Bdc5EFss.js";import{Y as c}from"./YAxis-CAGFb4CC.js";import{L as d}from"./Line-ysQCp6na.js";import{R as g}from"./ReferenceLine-DiCEZwby.js";import{R as f}from"./RechartsHookInspector-BUgi4_6U.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-QzqnHqMr.js";import"./immer-CgFMCYn2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B9h8BFJy.js";import"./index-DtMnymxT.js";import"./hooks-D-j4Szqs.js";import"./axisSelectors-CkFx7k9g.js";import"./d3-scale-Dh-KDDIZ.js";import"./zIndexSlice-BPm2fRWC.js";import"./renderedTicksSlice-DhC-KTlH.js";import"./CartesianChart-YCYGQjvu.js";import"./chartDataContext-CSdXrl--.js";import"./CategoricalChart-DeUfUCDU.js";import"./CartesianAxis-gh9udAnp.js";import"./Layer-CMEMyNSg.js";import"./Text-mT-Pe3g2.js";import"./DOMUtils-BSLjJ3Qm.js";import"./Label-kJRxw-hj.js";import"./ZIndexLayer-Cr55r242.js";import"./types-DHxgD5nd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CZC3rgVy.js";import"./ActivePoints-DA0H3fmM.js";import"./Dot-DRGbQH9d.js";import"./RegisterGraphicalItemId-C5HnpdYL.js";import"./ErrorBarContext-BThRMRD3.js";import"./GraphicalItemClipPath-Ci2rGtFq.js";import"./SetGraphicalItem-BTap-zvv.js";import"./useAnimationId-DV7aFVna.js";import"./getRadiusAndStrokeWidthFromDot-DpXds6k7.js";import"./ActiveShapeUtils-Lq8saTGY.js";import"./isPlainObject-2eWmtn-Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-S45eHrUs.js";import"./Trapezoid-ChHuSzRR.js";import"./Sector-ChjLZ5O9.js";import"./Symbols-CbytFAxU.js";import"./symbol-2PJyUenY.js";import"./step-BCxE2ASN.js";import"./Curve-DWnWSqjG.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BzoU3jW7.js";import"./ChartSizeDimensions-BS96mFbZ.js";import"./OffsetShower-CLGJSkef.js";import"./PlotAreaShower-s_c5Y178.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
