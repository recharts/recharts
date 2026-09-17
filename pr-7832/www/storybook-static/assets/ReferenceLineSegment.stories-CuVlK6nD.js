import{R as e}from"./iframe-DmaTyynO.js";import{R as i}from"./zIndexSlice-C61SZGFC.js";import{C as n}from"./ComposedChart-DrMn_Pg_.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BGx6CIJQ.js";import{X as s}from"./XAxis-Nv8Uh7AY.js";import{Y as c}from"./YAxis-DzMB2LoA.js";import{L as d}from"./Line-DxjJsn0p.js";import{R as g}from"./ReferenceLine-Cb8XJuTD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DMA9KLNR.js";import"./index-OHCUWRAn.js";import"./index-V9EvyoG7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CtyyIUUO.js";import"./isWellBehavedNumber-BK90QDph.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BGC7v2QA.js";import"./axisSelectors-BM_a9F6K.js";import"./d3-scale-DI5fHYPy.js";import"./index-HETsTNte.js";import"./index-COAu8Zax.js";import"./renderedTicksSlice-DqtLTQXs.js";import"./index-C4wr6Lq-.js";import"./CartesianChart-BKxlRmtn.js";import"./chartDataContext-DAmq05uD.js";import"./CategoricalChart-BUSfmukV.js";import"./CartesianAxis-CUMWkMKo.js";import"./Layer-CKq6pjpc.js";import"./Text-2AUGODc6.js";import"./DOMUtils-BpsSUmre.js";import"./useId-3sGAzHtm.js";import"./useBackwardsCompatibleTheme-DqjXKSq9.js";import"./Label-CMdX73k3.js";import"./ZIndexLayer-Cc-SqaEZ.js";import"./types-DmC6Y3U4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Bgge_Gh-.js";import"./step-D7AfTI4H.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BAF8K0tv.js";import"./useAnimationId-DxNsV_0m.js";import"./ActivePoints-CNIiMQe1.js";import"./Dot-CR2DCP22.js";import"./RegisterGraphicalItemId-CDWIwrm3.js";import"./ErrorBarContext-uI5M5418.js";import"./GraphicalItemClipPath-DsQ7p0LM.js";import"./SetGraphicalItem-D6LEIG6h.js";import"./getRadiusAndStrokeWidthFromDot-DfMtRmCC.js";import"./ActiveShapeUtils-BIrsW6YR.js";import"./useGraphicalItemIdentity-Cz-Bal4G.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
