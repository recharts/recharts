import{R as e}from"./iframe-Bj-yQnc2.js";import{R as i}from"./zIndexSlice-DO4y32gA.js";import{C as a}from"./ComposedChart-BMfVAHVi.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-GSqP8gjh.js";import{X as s}from"./XAxis-XI4N_gb4.js";import{Y as c}from"./YAxis-Bs6EndY5.js";import{L as d}from"./Line-DVqKkASG.js";import{R as g}from"./ReferenceLine-CesV-bRR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CZQMCJbJ.js";import"./index-CXIrlcaX.js";import"./index-C2KJTwEF.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-7WXWf9aL.js";import"./isWellBehavedNumber-A843S5PG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjwBN1rR.js";import"./index-npMcpUBc.js";import"./index-CUdhCrp9.js";import"./renderedTicksSlice-CagdShEY.js";import"./axisSelectors-DPyctkFQ.js";import"./d3-scale-rY2RSZRS.js";import"./CartesianChart-lhfYoKGZ.js";import"./chartDataContext-CFjDBvvT.js";import"./CategoricalChart-CavyJHAU.js";import"./CartesianAxis-Dfz3FhFq.js";import"./Layer-BLp5IiBu.js";import"./Text-RzD6k6DF.js";import"./DOMUtils-DVhKp59x.js";import"./Label-Cm9vMlt2.js";import"./ZIndexLayer-CZNNIEzh.js";import"./types-YXwkeCBT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-CeWd9qmA.js";import"./step-C2Z_nim4.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DUyUCCX0.js";import"./useAnimationId-Yo_b-bos.js";import"./ActivePoints-BIrCi9Or.js";import"./Dot-B130eiz7.js";import"./RegisterGraphicalItemId-DueteZ3j.js";import"./ErrorBarContext-ft-NJLsc.js";import"./GraphicalItemClipPath-B-sHbKa-.js";import"./SetGraphicalItem-DWNEhJuv.js";import"./getRadiusAndStrokeWidthFromDot-BwxuSyAu.js";import"./ActiveShapeUtils-BoActjfk.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
