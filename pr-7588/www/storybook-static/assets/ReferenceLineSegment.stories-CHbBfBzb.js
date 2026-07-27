import{R as e}from"./iframe-AVXfkv0w.js";import{R as i}from"./zIndexSlice-Cpy73fEL.js";import{C as a}from"./ComposedChart-T6jMjzBh.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-B41Wa7H4.js";import{X as s}from"./XAxis-Ccg3sENg.js";import{Y as c}from"./YAxis-IC2DAOXe.js";import{L as d}from"./Line-Cq09MVYd.js";import{R as g}from"./ReferenceLine-BqmkzDeT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CElZ_OGC.js";import"./index-DVRYbkUW.js";import"./index-CAfC1Ith.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dkqh2Ws0.js";import"./isWellBehavedNumber-C_0WrTwr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bri81Hil.js";import"./index-CFZrGIxH.js";import"./index-Dd93-if2.js";import"./renderedTicksSlice-BWAQroks.js";import"./axisSelectors-D5sH7YSt.js";import"./d3-scale-BOPObWse.js";import"./CartesianChart-DosAg0hI.js";import"./chartDataContext-bVF6MeRR.js";import"./CategoricalChart-B23xHRz2.js";import"./CartesianAxis-CUHI9zvN.js";import"./Layer-ht4prXr-.js";import"./Text-Cc6gSuDY.js";import"./DOMUtils-BVwM3Jdl.js";import"./Label-Bn0N3T-p.js";import"./ZIndexLayer-B0wR3MRM.js";import"./types-3aWcalA-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-B8QEUj55.js";import"./step-0iQNMmmi.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-XdBOicHp.js";import"./useAnimationId-DI1PqqVk.js";import"./ActivePoints-Bwfb1T53.js";import"./Dot-B1Np5YQX.js";import"./RegisterGraphicalItemId-Ba7mqd93.js";import"./ErrorBarContext-DhRbE3HA.js";import"./GraphicalItemClipPath-CZYMuLkO.js";import"./SetGraphicalItem-BnjtQKWx.js";import"./getRadiusAndStrokeWidthFromDot-DI-Ci7Ho.js";import"./ActiveShapeUtils-CFy0QQ1U.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
