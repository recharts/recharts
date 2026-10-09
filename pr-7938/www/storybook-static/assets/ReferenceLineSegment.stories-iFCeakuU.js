import{R as e}from"./iframe-DyRGY0m8.js";import{R as i}from"./zIndexSlice-C8Goqaoo.js";import{C as n}from"./ComposedChart-DeUFnq4z.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BKYufXor.js";import{X as s}from"./XAxis-ClyuyVSJ.js";import{Y as c}from"./YAxis-CiOcUDSR.js";import{L as d}from"./Line-DHDl2yuC.js";import{R as g}from"./ReferenceLine-Boy6Wy3c.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D2TCso2q.js";import"./index-Cv8tkEHt.js";import"./index-DxURkMdl.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CwBj0Vjn.js";import"./isWellBehavedNumber-JGpa1dK4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-eOw39y0P.js";import"./axisSelectors-DJKcPqvS.js";import"./d3-scale-sk2wIxSM.js";import"./index-CzwSuytx.js";import"./index-DSQh__sX.js";import"./renderedTicksSlice-DM2Uh_-7.js";import"./index-BZwbzPta.js";import"./CartesianChart-B9Ziwbgu.js";import"./chartDataContext-DdROdGCg.js";import"./CategoricalChart-CS-kA2nE.js";import"./CartesianAxis-C3YZMA4b.js";import"./Layer-Cn0quWvc.js";import"./Text-BK2IfBRh.js";import"./pageBackground-BnJW5YJX.js";import"./useId-DkHD0fqt.js";import"./useBackwardsCompatibleTheme-B8R5ZMSD.js";import"./Label-DmSSoRs6.js";import"./ZIndexLayer-CELDjLLn.js";import"./types-vbUeFItv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BnhnBI5K.js";import"./step-Dnl3MITN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B4s4aHQH.js";import"./useAnimationId-DVRsp9Ga.js";import"./ActivePoints-DdFDoJtX.js";import"./Dot-DOIcUge1.js";import"./dataEntryStyles-BSCSOZbL.js";import"./ErrorBarContext-CkmAHEEl.js";import"./GraphicalItemClipPath-CzHoeJLu.js";import"./SetGraphicalItem-C2wvR06e.js";import"./getRadiusAndStrokeWidthFromDot-BB4xIvng.js";import"./ActiveShapeUtils-DW6rbsEP.js";import"./useGraphicalItemIdentity-CI8fdYZe.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
