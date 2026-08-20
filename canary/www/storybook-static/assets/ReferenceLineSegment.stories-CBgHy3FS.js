import{R as e}from"./iframe-Bw423yT3.js";import{R as i}from"./zIndexSlice-C0Ur0qQv.js";import{C as a}from"./ComposedChart-Cz46LnAr.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DPKrYQGM.js";import{X as s}from"./XAxis-DoB4s5YX.js";import{Y as c}from"./YAxis-OVaFJ7CI.js";import{L as d}from"./Line-BMKWlib2.js";import{R as g}from"./ReferenceLine-BMM-RdZ_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DoQ6jmeU.js";import"./index-CSmn3lR3.js";import"./index-Cmb77t22.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DecYMRDs.js";import"./isWellBehavedNumber-Bhsok9Kl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bq4pCedS.js";import"./index-DY-6WoYl.js";import"./index-Dzxogdh4.js";import"./axisSelectors-DvFF09lq.js";import"./d3-scale-B6w1DC_B.js";import"./renderedTicksSlice-C7gnJRFb.js";import"./CartesianChart-KYAmso8l.js";import"./chartDataContext-ChmL2TgJ.js";import"./CategoricalChart-BFEAf3EH.js";import"./CartesianAxis-Crdg7aw6.js";import"./Layer-D4oXIaGo.js";import"./Text-C_UyMP2R.js";import"./DOMUtils-B-o7bCMD.js";import"./useId-DVN36WJe.js";import"./useBackwardsCompatibleTheme-BiX6i8Ds.js";import"./Label-CDuT1dKE.js";import"./ZIndexLayer-BMLxUbw3.js";import"./types-Ds-DwS6F.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-ROVFdQ-G.js";import"./step-BJpmgVSO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-hYYLyghD.js";import"./useAnimationId-Ys0eqrlL.js";import"./ActivePoints-Di-vyWVm.js";import"./Dot-BzofvkeI.js";import"./RegisterGraphicalItemId-C_cjgYuq.js";import"./ErrorBarContext-BUSWNFOb.js";import"./GraphicalItemClipPath-C6OEajox.js";import"./SetGraphicalItem-OiZoorhv.js";import"./getRadiusAndStrokeWidthFromDot-BZS_5G6a.js";import"./ActiveShapeUtils-DXmjz54Y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
