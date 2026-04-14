import{e}from"./iframe-B26tvh8M.js";import{R as i}from"./arrayEqualityCheck-MuT8Gq0B.js";import{C as p}from"./ComposedChart-DX9vJdu2.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Tv00TRpG.js";import{X as s}from"./XAxis-DIWBB6UA.js";import{Y as c}from"./YAxis-BtVkQLRb.js";import{L as d}from"./Line-CTwc6FHC.js";import{R as g}from"./ReferenceLine--BmpqMQK.js";import{R as f}from"./RechartsHookInspector-hyCg-8qC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DWRHZiFf.js";import"./immer-CXuxt10J.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DCeLN1YR.js";import"./index-Bz4UcQS6.js";import"./hooks-CFGRd7FZ.js";import"./axisSelectors-znnp0ZTC.js";import"./d3-scale-D8gDHM7P.js";import"./zIndexSlice-9WIqVBWy.js";import"./renderedTicksSlice-BdibsHeH.js";import"./CartesianChart-Cyzcm2Bf.js";import"./chartDataContext-DgpnTfq-.js";import"./CategoricalChart-ClHT_DQk.js";import"./CartesianAxis-wEW14JHd.js";import"./Layer-BLXteb37.js";import"./Text-B7apQSTa.js";import"./DOMUtils-Cbj4CypK.js";import"./Label-CKyHcssN.js";import"./ZIndexLayer-2hV_wyzX.js";import"./types-gN1P51X3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-EalmbCaR.js";import"./ActivePoints-DDMO3vxb.js";import"./Dot-DJ6U_l3e.js";import"./RegisterGraphicalItemId-z3-LYLAM.js";import"./ErrorBarContext-BV9_6zF2.js";import"./GraphicalItemClipPath-tnHq66M5.js";import"./SetGraphicalItem-D6N-Tuye.js";import"./useAnimationId-C40xd6Et.js";import"./getRadiusAndStrokeWidthFromDot-CX1KMj8W.js";import"./ActiveShapeUtils-C5QwOCv6.js";import"./isPlainObject-DAsoG4ko.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7IYda03.js";import"./Trapezoid-Dj9VILyv.js";import"./Sector-s0RSAPuc.js";import"./Symbols-B7tb4BlZ.js";import"./symbol-M8-_4T55.js";import"./step-DSlKLIZT.js";import"./Curve-CeBurhsE.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-qKcyhpYV.js";import"./ChartSizeDimensions-D4w-gUjQ.js";import"./OffsetShower-m7V4Yrzs.js";import"./PlotAreaShower-CWNEjbya.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
