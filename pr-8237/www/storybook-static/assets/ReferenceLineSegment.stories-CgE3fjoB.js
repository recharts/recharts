import{R as e}from"./iframe-C75BlFXB.js";import{R as i}from"./zIndexSlice-4GxCw66H.js";import{C as n}from"./ComposedChart-Bw6iA5fE.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BLhPxh__.js";import{X as s}from"./XAxis-bu4t9p5Z.js";import{Y as c}from"./YAxis-CM0RKDPz.js";import{L as d}from"./Line-BTHOdtzg.js";import{R as g}from"./ReferenceLine-CccmS6Ur.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CF3TLSY4.js";import"./throttle-BrgJpY2A.js";import"./index-Ce13AGyB.js";import"./index-CWJaW9bb.js";import"./RechartsWrapper-Di9_KxKG.js";import"./axisSelectors-DvLkyA4P.js";import"./polarAxisSelectors-Dz-eHC-D.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-PhqlfAou.js";import"./index-BoIFErVW.js";import"./index-EzgMka2g.js";import"./renderedTicksSlice-Culw3tiU.js";import"./index-aBb4My7l.js";import"./fillDefinitions-Bn6BAHMd.js";import"./CartesianChart-DnnmNz3w.js";import"./chartDataContext-BTXdmqoO.js";import"./CategoricalChart-FqiOzffn.js";import"./CartesianAxis-Cq0K36Zo.js";import"./Layer-9txovic7.js";import"./Text-CFNdT-9W.js";import"./ZIndexLayer-SbUjc4VB.js";import"./Label-D2Ecv790.js";import"./types-B1z8Z6Cy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BlWbOZj8.js";import"./step--aXjfd4u.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-D_1EIJ1_.js";import"./ActivePoints-CHWcM_kG.js";import"./Dot-DNLFUQdl.js";import"./activeStyles-DZYHYdm_.js";import"./useAnimationId-BsyXEGTp.js";import"./Symbols-DWw2Hw6G.js";import"./symbol-BbI-T7nn.js";import"./ErrorBarContext-C2oPAhQ2.js";import"./SetGraphicalItem-CZU_HqN4.js";import"./getRadiusAndStrokeWidthFromDot-DHebNLcs.js";import"./ActiveShapeUtils-5rtEYr00.js";import"./useEffectiveDataKey-8cfDXulc.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
