import{R as e}from"./iframe-OqKJbU5N.js";import{R as i}from"./zIndexSlice-SR00o6sl.js";import{C as n}from"./ComposedChart-DbKCzyO4.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BiyHkmur.js";import{X as s}from"./XAxis-BOpO9kNQ.js";import{Y as c}from"./YAxis-BvbToLwB.js";import{L as d}from"./Line-D87hppUw.js";import{R as g}from"./ReferenceLine-Dvyf4r1k.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CJu8DiNV.js";import"./throttle-Dd4NMqKN.js";import"./index-Dpjuq2Lp.js";import"./index-DZqDb_nm.js";import"./RechartsWrapper-DR91apNy.js";import"./axisSelectors-DgBSWf8B.js";import"./polarAxisSelectors-Ds9uThXq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BY5IvaL3.js";import"./index-D0vXz4xA.js";import"./index-D-gzGN7z.js";import"./renderedTicksSlice-DNR3Nm-M.js";import"./index-DYD5HM8H.js";import"./CartesianChart-CtxmU-X6.js";import"./ZIndexPortal-SXFY_RF7.js";import"./CategoricalChart-CphpP2QN.js";import"./CartesianAxis-pqwy63jz.js";import"./Layer-Cr-Iv08I.js";import"./Text-BBVNpawX.js";import"./pageBackground-Cszwy4wg.js";import"./ZIndexLayer-UUbhXFJu.js";import"./Label-Du8bKZih.js";import"./types-9svgO-k7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-61gTtyRO.js";import"./step-BRtTreeO.js";import"./path-DyVhHtw_.js";import"./LabelList-s2IEt-iE.js";import"./ActivePoints-DniM9AXi.js";import"./Dot-C7hW2lTf.js";import"./activeStyles-DnmgD4rl.js";import"./useAnimationId-DvBUlVSU.js";import"./dataEntryStyles-KId877_8.js";import"./Symbols-ayOQu3YZ.js";import"./symbol-DNYfeltN.js";import"./ErrorBarContext-DPjF7BBQ.js";import"./SetGraphicalItem-CvB1j4dG.js";import"./getRadiusAndStrokeWidthFromDot-BDb9Uw_H.js";import"./ActiveShapeUtils-DR5Jktsx.js";import"./useEffectiveDataKey-CV_AhX-p.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
