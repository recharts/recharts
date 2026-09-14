import{R as e}from"./iframe-DKDUQR4e.js";import{R as i}from"./zIndexSlice-aRYQG5Yn.js";import{C as n}from"./ComposedChart-CCmbfoN3.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-B2f0UAQ8.js";import{X as s}from"./XAxis-CjF_jX-F.js";import{Y as c}from"./YAxis-CBJKZQVh.js";import{L as d}from"./Line-BsvL8Xz1.js";import{R as g}from"./ReferenceLine-CEurAMcU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CZQWytra.js";import"./index-aMLVbRVP.js";import"./index-DFSigqQi.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CoYFUk2l.js";import"./isWellBehavedNumber-CmolPL3d.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CFbHWja9.js";import"./axisSelectors-CByMsFVX.js";import"./d3-scale-D08aSlXl.js";import"./index-DYLqyLpB.js";import"./index-DKbxb5pM.js";import"./renderedTicksSlice-C672n-_-.js";import"./index-gqnOst7j.js";import"./CartesianChart-C3BMrTr-.js";import"./chartDataContext-BTH-lGko.js";import"./CategoricalChart-DNyG6Cdr.js";import"./CartesianAxis-8Yu2eTD6.js";import"./Layer-4AR486QQ.js";import"./Text-BiZmy8Q_.js";import"./DOMUtils-DdCdIfAV.js";import"./useId-CIh7gguH.js";import"./useBackwardsCompatibleTheme-CrqKBooM.js";import"./Label-CIwsUObl.js";import"./ZIndexLayer-Cdmw8GXd.js";import"./types-D2xbrN5O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CN5kBDOi.js";import"./step-C6ZJXuGC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BsWKOVBJ.js";import"./useAnimationId-DdSCrHov.js";import"./ActivePoints-CCt2MIZg.js";import"./Dot-D2dES3Mc.js";import"./RegisterGraphicalItemId-DuhR9Fep.js";import"./ErrorBarContext-BEPlSBFO.js";import"./GraphicalItemClipPath-BZD6-JFP.js";import"./SetGraphicalItem-BnsQpP5e.js";import"./getRadiusAndStrokeWidthFromDot-RqSgqbxV.js";import"./ActiveShapeUtils-DNb4gSFX.js";import"./useGraphicalItemIdentity-Dy2kZYij.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
