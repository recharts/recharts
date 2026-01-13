import{e}from"./iframe-1i9HA9RQ.js";import{R as i}from"./arrayEqualityCheck-BwjFPiUr.js";import{C as a}from"./ComposedChart-9-Rooa_k.js";import{C as p}from"./CartesianGrid-Do5nFotN.js";import{X as n}from"./XAxis-0WAwRzrH.js";import{Y as s}from"./YAxis-D6A0s1aE.js";import{L as c}from"./Line-D2VioKUJ.js";import{R as d}from"./ReferenceLine-C7i8YQP7.js";import{R as g}from"./RechartsHookInspector-CcKov_mq.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CuqYJHcO.js";import"./PolarUtils-B3zJ31hA.js";import"./RechartsWrapper-Ca6atg1S.js";import"./hooks-y-J71LZD.js";import"./axisSelectors-B-ey3vYH.js";import"./zIndexSlice-kDjHMkcM.js";import"./CartesianChart-gPb3Ow7G.js";import"./chartDataContext-Cq6PbOHK.js";import"./CategoricalChart-fTOtoFif.js";import"./CartesianAxis-DT5pZ6h2.js";import"./Layer-TtoeX7Dg.js";import"./Text-CkIqO9jR.js";import"./DOMUtils-BvTgwRu6.js";import"./Label-B5L7e25b.js";import"./ZIndexLayer-CX343y-L.js";import"./types-BWGBotoG.js";import"./ReactUtils-CesYLNMs.js";import"./ActivePoints-D2uAfPbW.js";import"./Dot-BEc3ne5l.js";import"./RegisterGraphicalItemId-C0szZiML.js";import"./ErrorBarContext-B9-hedxb.js";import"./GraphicalItemClipPath-C-3gRK47.js";import"./SetGraphicalItem-DlpP7DnH.js";import"./useAnimationId-CKk3JzZu.js";import"./getRadiusAndStrokeWidthFromDot-BzmVXP46.js";import"./ActiveShapeUtils-CgjTEdkh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BaWdx0SZ.js";import"./Trapezoid-GbRA1Hs7.js";import"./Sector-C3B07LHk.js";import"./Symbols-Bn7dqeJu.js";import"./Curve-DYisYGAN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BAAFpx__.js";import"./ChartSizeDimensions-BQPJaKjV.js";import"./OffsetShower-Bxqw5x-b.js";import"./PlotAreaShower-BqU9kqmb.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
