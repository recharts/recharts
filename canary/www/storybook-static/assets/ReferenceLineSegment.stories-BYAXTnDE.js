import{e}from"./iframe-O9ArEVIv.js";import{R as i}from"./arrayEqualityCheck-C-MTCypy.js";import{C as p}from"./ComposedChart-DUOXRuR9.js";import{C as a}from"./CartesianGrid-DxswWlbo.js";import{X as n}from"./XAxis-Cej5L1H9.js";import{Y as s}from"./YAxis-Br5uA6sX.js";import{L as c}from"./Line-D___p7Tz.js";import{R as d}from"./ReferenceLine-CFzo-63l.js";import{R as g}from"./RechartsHookInspector-16YUtyRB.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cjflm227.js";import"./immer-BFzhs2u-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DOYlziR8.js";import"./index-a21uXOx0.js";import"./hooks-CqiKktT9.js";import"./axisSelectors-CwHYpHLU.js";import"./d3-scale-CJB90U0O.js";import"./zIndexSlice-Sxdp-diY.js";import"./renderedTicksSlice-BvOqc92I.js";import"./CartesianChart-z72RSBTa.js";import"./chartDataContext-B4Ztt00m.js";import"./CategoricalChart-C-oRlLv7.js";import"./CartesianAxis-Ds14BfSb.js";import"./Layer-Bs1IQ35S.js";import"./Text-DQdIz477.js";import"./DOMUtils-dyLmYPqX.js";import"./Label-CEXSNWpb.js";import"./ZIndexLayer-gMxYNdgc.js";import"./types-CsxGUr-v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BfiyyF4-.js";import"./ActivePoints-B-r9b2zj.js";import"./Dot-DQnHVWph.js";import"./RegisterGraphicalItemId-CLKZixP7.js";import"./ErrorBarContext-Caa3uBDH.js";import"./GraphicalItemClipPath-FlIwAJHm.js";import"./SetGraphicalItem-Cl8ON75H.js";import"./useAnimationId-DFOXeF_s.js";import"./getRadiusAndStrokeWidthFromDot-B3pdC8wU.js";import"./ActiveShapeUtils-Cu-_wtkP.js";import"./isPlainObject-BMtTHHOe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DTyUjMdM.js";import"./Trapezoid-BgYcRPYD.js";import"./Sector-CeOtRqWC.js";import"./Symbols-BsW0CkYV.js";import"./symbol-D8ksNROS.js";import"./step-CooRIyZW.js";import"./Curve-BaetafJM.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CKq64LI9.js";import"./ChartSizeDimensions-BSf1VGM1.js";import"./OffsetShower-DBynPTQJ.js";import"./PlotAreaShower-DzB7vB8a.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
