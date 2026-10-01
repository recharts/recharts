import{R as e}from"./iframe-B07BHG7b.js";import{R as i}from"./zIndexSlice-DMtdtU0H.js";import{C as n}from"./ComposedChart-VKrjcxhK.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DZQPKEY_.js";import{X as s}from"./XAxis-CkRNVIdA.js";import{Y as c}from"./YAxis-9CqKZvPs.js";import{L as d}from"./Line-Coltmmom.js";import{R as g}from"./ReferenceLine-DBzrGKxA.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DTIoaHkO.js";import"./index-C_4gdDDP.js";import"./index-OowKJhbY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BRBRD9Wj.js";import"./isWellBehavedNumber-BwS8-SkC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CbwTx7DF.js";import"./axisSelectors-Nr5xjaNb.js";import"./d3-scale-C1HygQvU.js";import"./index-CnnKafP5.js";import"./index-Ch334nIE.js";import"./renderedTicksSlice-D6Y0A1v8.js";import"./index-Cay4G1Oz.js";import"./CartesianChart-DjafEMNG.js";import"./chartDataContext-L5OvEFVH.js";import"./CategoricalChart-Dsa2Qc1B.js";import"./CartesianAxis-Bwpf-6f1.js";import"./Layer-DGsDthuj.js";import"./Text-CNYJT0YU.js";import"./DOMUtils-BYXyET0J.js";import"./useId-DpSDwQO_.js";import"./useBackwardsCompatibleTheme-BSstlxbW.js";import"./Label-DT0SDRud.js";import"./ZIndexLayer-BWiNey_Z.js";import"./types-BfpKaUoc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Co_OugcN.js";import"./step-EbjsK9_B.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BPQiX0OY.js";import"./useAnimationId-D8wc_hUQ.js";import"./ActivePoints-qVEGkbRi.js";import"./Dot-D5b4Rj0p.js";import"./RegisterGraphicalItemId-r8grTaJr.js";import"./ErrorBarContext-CkRF2jvy.js";import"./GraphicalItemClipPath-CDDJymit.js";import"./SetGraphicalItem-CN2Fj3zB.js";import"./getRadiusAndStrokeWidthFromDot-CWtkFiVw.js";import"./ActiveShapeUtils-DunyI-30.js";import"./useGraphicalItemIdentity-BewjVzSI.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
