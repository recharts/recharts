import{e}from"./iframe-CFR-gaGN.js";import{R as i}from"./arrayEqualityCheck-B4mATf9c.js";import{C as p}from"./ComposedChart-D9gmYwEq.js";import{C as a}from"./CartesianGrid-BOeOMLnY.js";import{X as n}from"./XAxis-DQlERQHB.js";import{Y as s}from"./YAxis-Bo04wnJz.js";import{L as c}from"./Line-ChBLpYB3.js";import{R as d}from"./ReferenceLine-DtHafxEd.js";import{R as g}from"./RechartsHookInspector-DAIAGGPn.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DjGpqQPT.js";import"./immer-Bk-xXHBC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DeWitytO.js";import"./index-CSJLk245.js";import"./hooks-JwuHHdAq.js";import"./axisSelectors-D5HRTRW9.js";import"./d3-scale-BgOEq5Xh.js";import"./zIndexSlice-Boi-P9QX.js";import"./renderedTicksSlice-Br16TDM7.js";import"./CartesianChart-ueo_-gP0.js";import"./chartDataContext-BElgqktZ.js";import"./CategoricalChart-BnFLIcrr.js";import"./CartesianAxis-ClI6MqAO.js";import"./Layer-BHVJ1AiA.js";import"./Text-mFmQrBQg.js";import"./DOMUtils-yKB-qwZ7.js";import"./Label-DP_LAI-Y.js";import"./ZIndexLayer-C3JqUkkH.js";import"./types-DncqRVvk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-C9SxeRDL.js";import"./ActivePoints-DyWoik7C.js";import"./Dot-B3-OWSbc.js";import"./RegisterGraphicalItemId-BEFkKq7O.js";import"./ErrorBarContext-GzoTlhrP.js";import"./GraphicalItemClipPath-Plh3ZetI.js";import"./SetGraphicalItem-DT4VFHn2.js";import"./useAnimationId-VCCfkRDK.js";import"./getRadiusAndStrokeWidthFromDot-BDVDZ-9_.js";import"./ActiveShapeUtils-DrwV2_Fx.js";import"./isPlainObject-D5r1oj15.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-1LUHF-ab.js";import"./Trapezoid-C6_wzf5N.js";import"./Sector-DhcqTi-n.js";import"./Symbols-tvatlAm7.js";import"./symbol-DyWKZjmK.js";import"./step-BuQilum9.js";import"./Curve-xncZGYH6.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BlXLNwUK.js";import"./ChartSizeDimensions-D3nOZoYf.js";import"./OffsetShower-CvuXOJnC.js";import"./PlotAreaShower-BMOctqSh.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
