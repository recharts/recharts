import{e}from"./iframe-DKGTY5BH.js";import{R as i}from"./arrayEqualityCheck-a5J2QiQR.js";import{C as a}from"./ComposedChart-ByBlCzet.js";import{C as p}from"./CartesianGrid-B2IA90L2.js";import{X as n}from"./XAxis-vvYkOBCU.js";import{Y as s}from"./YAxis-DfYPGWBI.js";import{L as c}from"./Line-5sxi2sgU.js";import{R as d}from"./ReferenceLine-CDvkFh6s.js";import{R as g}from"./RechartsHookInspector-ltFkNW4M.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CYnJQ9Tz.js";import"./PolarUtils-BgS5trn7.js";import"./RechartsWrapper-C4nUVXRx.js";import"./hooks-l5gEcxv4.js";import"./axisSelectors-BRnicQ57.js";import"./zIndexSlice-BN50EdKr.js";import"./CartesianChart-DZl_tmIf.js";import"./chartDataContext-D-E7lauC.js";import"./CategoricalChart-Q4yJ_XVO.js";import"./CartesianAxis-C0xV_R2I.js";import"./Layer-BMyAm0Vh.js";import"./Text-DzT2f_9r.js";import"./DOMUtils-DUCvdtk_.js";import"./Label-8CsqNV_S.js";import"./ZIndexLayer-ChxBgnpv.js";import"./types-BBKXijxu.js";import"./ReactUtils-_yo6pVT0.js";import"./ActivePoints-bLONFCl1.js";import"./Dot-B8GCPTtM.js";import"./RegisterGraphicalItemId-M1wxD3TO.js";import"./ErrorBarContext-l5-2cdDP.js";import"./GraphicalItemClipPath-C08gEDH6.js";import"./SetGraphicalItem-BCvWrM_W.js";import"./useAnimationId-Br5iK6pF.js";import"./getRadiusAndStrokeWidthFromDot-1QeMtlLN.js";import"./ActiveShapeUtils-BwLCOH5f.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BiI1dnIo.js";import"./Trapezoid-ClVeJ0sq.js";import"./Sector-wwquBaDN.js";import"./Symbols-Bske3hMz.js";import"./Curve-B8K-f9lF.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DpSNf8hh.js";import"./ChartSizeDimensions-CHWSVwWw.js";import"./OffsetShower-fEjtwpJv.js";import"./PlotAreaShower-TADFRiun.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
