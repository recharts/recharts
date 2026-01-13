import{e}from"./iframe-CoPAm7V1.js";import{R as i}from"./arrayEqualityCheck-b4a3wn0-.js";import{C as a}from"./ComposedChart--N9Ah0Mu.js";import{C as p}from"./CartesianGrid-CiDPw85C.js";import{X as n}from"./XAxis-DI-YRLnX.js";import{Y as s}from"./YAxis-BQlirb_K.js";import{L as c}from"./Line-D0HoGufp.js";import{R as d}from"./ReferenceLine-DqpK0-Jl.js";import{R as g}from"./RechartsHookInspector-CfbHdkme.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-OnP709yn.js";import"./PolarUtils-DGkU6n7f.js";import"./RechartsWrapper-DeO9xugK.js";import"./hooks-BDoK-oN_.js";import"./axisSelectors-Cdwi4Gmi.js";import"./zIndexSlice-CV1CLEn_.js";import"./CartesianChart-DHc8LGBh.js";import"./chartDataContext-482lKGc9.js";import"./CategoricalChart-L_hDSvwE.js";import"./CartesianAxis-ksOJ1Son.js";import"./Layer-BHClijQk.js";import"./Text-D8eyFLL7.js";import"./DOMUtils-B7UiVnHW.js";import"./Label-BN0l3Vc3.js";import"./ZIndexLayer-DI7Wag2n.js";import"./types-BF6A7chk.js";import"./ReactUtils-B2MREsDE.js";import"./ActivePoints-BGzQPzt_.js";import"./Dot-Cyp9zk51.js";import"./RegisterGraphicalItemId-Cz_MWvVU.js";import"./ErrorBarContext-BY_hX5kq.js";import"./GraphicalItemClipPath-VLyW1X2z.js";import"./SetGraphicalItem-D7kJJVje.js";import"./useAnimationId-BwvCPaTs.js";import"./getRadiusAndStrokeWidthFromDot-BOOk7ozS.js";import"./ActiveShapeUtils-fJZGBnKb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CvvJIb6J.js";import"./Trapezoid-f55pqUw3.js";import"./Sector-CfHQ2k9y.js";import"./Symbols-oRqZ57VZ.js";import"./Curve-DDvcpmM9.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-gyMa1MpJ.js";import"./ChartSizeDimensions-BPsfgCbk.js";import"./OffsetShower-CKApfiLz.js";import"./PlotAreaShower-DYf9p6xN.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
