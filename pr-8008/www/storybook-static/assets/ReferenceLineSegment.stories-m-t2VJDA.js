import{R as e}from"./iframe-Dw3JnrOz.js";import{R as i}from"./zIndexSlice-DzgPoe88.js";import{C as n}from"./ComposedChart-Dn-ywIPu.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BEVezCDw.js";import{X as s}from"./XAxis-CeCu2pnu.js";import{Y as c}from"./YAxis-D8Dw7kMb.js";import{L as d}from"./Line-DnOr9vmN.js";import{R as g}from"./ReferenceLine-BqbJRrnA.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-KuOt2oEs.js";import"./index-AkdZgKxJ.js";import"./index-Df7xC6ih.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DK31nY-V.js";import"./isWellBehavedNumber-OYIp1mp-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DgRfQaZT.js";import"./axisSelectors-BViTer26.js";import"./d3-scale-DtTNlvys.js";import"./index-NzzUdmM6.js";import"./index-eNZ0M5_3.js";import"./renderedTicksSlice-CkYrDZg9.js";import"./index-6yBVDhmv.js";import"./CartesianChart-jDDHmd1k.js";import"./chartDataContext-DUv1rr29.js";import"./CategoricalChart-CiCkCm9Q.js";import"./CartesianAxis-ChIBsRH5.js";import"./Layer-L7RVOPKy.js";import"./Text-DV8khfZM.js";import"./pageBackground-tLsrP4n_.js";import"./useId-BKsEmLHH.js";import"./useBackwardsCompatibleTheme-C2fZnq5O.js";import"./Label-Cbir5i7I.js";import"./ZIndexLayer-BbE4uISJ.js";import"./types-B5MEMPd3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CzvKCniC.js";import"./step-D848BMKt.js";import"./path-DyVhHtw_.js";import"./activeStyles-D2NfbCgD.js";import"./useAnimationId-w1IecijC.js";import"./dataEntryStyles-BN9XKvZb.js";import"./ActivePoints-BwSbWjwk.js";import"./Dot-BIHGbHYm.js";import"./ErrorBarContext-BDhr-5sg.js";import"./GraphicalItemClipPath-CB4KxVAO.js";import"./SetGraphicalItem-DfUVqQ_3.js";import"./getRadiusAndStrokeWidthFromDot-5uL5_6G5.js";import"./ActiveShapeUtils-BJ0fejl7.js";import"./useEffectiveDataKey-CnfRoJ-A.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
