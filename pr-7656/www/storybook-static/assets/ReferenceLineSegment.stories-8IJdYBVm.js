import{R as e}from"./iframe-r_02-Jx1.js";import{R as i}from"./zIndexSlice-DicCmdef.js";import{C as a}from"./ComposedChart-RzNAfe4m.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DvK7iabw.js";import{X as s}from"./XAxis-CVgPbfXC.js";import{Y as c}from"./YAxis-Bi1VNLZO.js";import{L as d}from"./Line-gVyrED1g.js";import{R as g}from"./ReferenceLine-CuooPot6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BdAdSRQA.js";import"./index-1kThdQ6e.js";import"./index-wzqytK4Q.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DyxRtFzB.js";import"./isWellBehavedNumber-CBLlozNg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQFxUNUu.js";import"./index-N0rIL4Gt.js";import"./index-3jrDyBev.js";import"./axisSelectors-Dk3JE-i1.js";import"./d3-scale-ZwXuuq5P.js";import"./renderedTicksSlice-DFasVLMR.js";import"./CartesianChart-BGJHdGBf.js";import"./chartDataContext-BdayT2-p.js";import"./CategoricalChart-BXr2d9-i.js";import"./CartesianAxis-D3LO-u6r.js";import"./Layer-dybzDHm9.js";import"./Text-DCZHyyNe.js";import"./DOMUtils-BlgfTScp.js";import"./useBackwardsCompatibleTheme-WaqTwaFy.js";import"./Label-CNQryUt-.js";import"./ZIndexLayer-DmaqXjfN.js";import"./types-DPBZ02ip.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BS9D-rBh.js";import"./step-CkxDYVc4.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CW8FYpXu.js";import"./useAnimationId-R3ZNERdL.js";import"./ActivePoints-B4uNP6Ql.js";import"./Dot-CPXaMvXV.js";import"./RegisterGraphicalItemId-BP1XikYq.js";import"./ErrorBarContext-DmfoTXVm.js";import"./GraphicalItemClipPath-D_fliYIp.js";import"./SetGraphicalItem-ByUdxl3U.js";import"./getRadiusAndStrokeWidthFromDot-CrfZ4miq.js";import"./ActiveShapeUtils-BgiK615A.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ce={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const de=["Segment"];export{t as Segment,de as __namedExportsOrder,ce as default};
