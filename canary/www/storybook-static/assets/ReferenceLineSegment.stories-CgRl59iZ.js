import{R as e}from"./iframe-Bsj5zL9n.js";import{R as i}from"./zIndexSlice-Cq8HAqW-.js";import{C as n}from"./ComposedChart-CUT9nv0s.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Cs0CKkTD.js";import{X as s}from"./XAxis-BgzuwsrB.js";import{Y as c}from"./YAxis-CbZ6bfr6.js";import{L as d}from"./Line-CEJpYTqK.js";import{R as g}from"./ReferenceLine-CzJzhaMi.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CrEblMxD.js";import"./index-BnI-_qMA.js";import"./index-DrTVWANE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Uluvm9qq.js";import"./isWellBehavedNumber-DfaPS7hR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CfIRZAky.js";import"./axisSelectors-mMRcbn7f.js";import"./d3-scale-CbB2Llqp.js";import"./index-DOYtr8yv.js";import"./index-g6-HhHC-.js";import"./renderedTicksSlice-BMu61fLT.js";import"./index-Kh3nyu4O.js";import"./CartesianChart-CeBBXviU.js";import"./chartDataContext-TTvcivZZ.js";import"./CategoricalChart-CEEokRev.js";import"./CartesianAxis-BFozoP5y.js";import"./Layer-yetTMzBX.js";import"./Text-EdZq5d5T.js";import"./pageBackground-B9aaE2P3.js";import"./useId-oX3CQwQj.js";import"./useBackwardsCompatibleTheme-CCerMO7Q.js";import"./Label-Dh346ivy.js";import"./ZIndexLayer-BdEpN6P8.js";import"./types-Bb-qVITL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DfVRmOpg.js";import"./step-DdZLdhts.js";import"./path-DyVhHtw_.js";import"./activeStyles-C6E3VGh0.js";import"./useAnimationId-HXoQj9d3.js";import"./dataEntryStyles-5zRGCxG2.js";import"./ActivePoints-DaFpowFA.js";import"./Dot-Cf3V7dyP.js";import"./ErrorBarContext-HZLs1nsG.js";import"./GraphicalItemClipPath-BHCzBPU9.js";import"./SetGraphicalItem-CgedTelm.js";import"./getRadiusAndStrokeWidthFromDot-CxwIFweR.js";import"./ActiveShapeUtils-Ca0VK3Nb.js";import"./useGraphicalItemIdentity-BJYihGV1.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
