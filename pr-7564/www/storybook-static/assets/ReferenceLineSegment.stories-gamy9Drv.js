import{R as e}from"./iframe-B-yW787s.js";import{R as i}from"./zIndexSlice-CKRpx7FD.js";import{C as a}from"./ComposedChart-D5w8STA3.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DMiq5X00.js";import{X as s}from"./XAxis-D0UXMK3L.js";import{Y as c}from"./YAxis-DGNSSBsi.js";import{L as d}from"./Line-CK0bz55t.js";import{R as g}from"./ReferenceLine-25p5pGz1.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B8_9WF3N.js";import"./index-B8s4lwM0.js";import"./index-BLtMs8ww.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-D6vuKH4c.js";import"./isWellBehavedNumber-C_1nd4jU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DSpl9lP_.js";import"./index-TzX_ldyC.js";import"./index-Dh8eUehn.js";import"./renderedTicksSlice-EV44ZZNX.js";import"./axisSelectors-d9CW9W7w.js";import"./d3-scale-8a4kRHFN.js";import"./CartesianChart-B08PHStc.js";import"./chartDataContext-DOok0Cd4.js";import"./CategoricalChart-XTSjkgZQ.js";import"./CartesianAxis-BlaAel8_.js";import"./Layer-DVSBdCcq.js";import"./Text-DK2M6QxL.js";import"./DOMUtils-B0UrcgO-.js";import"./Label-BkxmYsWW.js";import"./ZIndexLayer-CdG-cca2.js";import"./types-DcTCoXGC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DCdfY6Kv.js";import"./step-BYmVMSZy.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CYFqV_Nm.js";import"./useAnimationId-o-X37ase.js";import"./ActivePoints-DpVBVyJ4.js";import"./Dot-rGFeGUQm.js";import"./RegisterGraphicalItemId-DeFh6f0i.js";import"./ErrorBarContext-D17CdNj4.js";import"./GraphicalItemClipPath-_Ex-IG4N.js";import"./SetGraphicalItem-NvPtwEe2.js";import"./getRadiusAndStrokeWidthFromDot-DVenAMua.js";import"./ActiveShapeUtils-Dzsbq5DH.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};
