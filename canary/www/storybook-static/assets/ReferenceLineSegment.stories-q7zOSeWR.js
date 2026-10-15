import{R as e}from"./iframe-CcyN1ZV1.js";import{R as i}from"./zIndexSlice-DWTF0hX9.js";import{C as n}from"./ComposedChart-BIM71YL9.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-GAu3hH5z.js";import{X as s}from"./XAxis-6LjH0TsS.js";import{Y as c}from"./YAxis-DQC0nPlg.js";import{L as d}from"./Line-BuaXrB5L.js";import{R as g}from"./ReferenceLine-CLm9nU7f.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B9Dwf27c.js";import"./index-Dyila60U.js";import"./index-AJQJO5x9.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CTY6OgJi.js";import"./isWellBehavedNumber-CnBZkqHG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-9S0sCc.js";import"./axisSelectors-B4ReTl4S.js";import"./d3-scale-BxouAPuB.js";import"./index-B2XcMOi-.js";import"./index-BVkJtaEu.js";import"./renderedTicksSlice-Bjh8Fjbe.js";import"./index-_YIGzYhu.js";import"./CartesianChart-B3SfFTfT.js";import"./chartDataContext-BSpB3ZZP.js";import"./CategoricalChart-CXFsQjCx.js";import"./CartesianAxis-DnpMFCoE.js";import"./Layer-cvLVo1Gu.js";import"./Text-GXnWYGAc.js";import"./pageBackground-D_UkCcJZ.js";import"./useId-C9u3rAWe.js";import"./useBackwardsCompatibleTheme-BdBaTXYz.js";import"./Label-DeeiGPOy.js";import"./ZIndexLayer-CpLPcSfq.js";import"./types-U4cAvHsY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Cj1AfJKq.js";import"./step-CVWEfu7h.js";import"./path-DyVhHtw_.js";import"./activeStyles-CeU8zAVc.js";import"./useAnimationId-J9w0IkU1.js";import"./dataEntryStyles-VGeW2eAl.js";import"./ActivePoints-BB9nBPw6.js";import"./Dot-CXSypbME.js";import"./ErrorBarContext-1RRlDzY7.js";import"./GraphicalItemClipPath-BRUG8_Yr.js";import"./SetGraphicalItem-CtBWbyZo.js";import"./getRadiusAndStrokeWidthFromDot-DQBrP5M-.js";import"./ActiveShapeUtils-D6VvEytF.js";import"./useEffectiveDataKey-D_8eHxuE.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
