import{R as e}from"./iframe-BYFAmtTx.js";import{R as i}from"./zIndexSlice-Cpa1SLkC.js";import{C as n}from"./ComposedChart-Dn3fezmm.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CE-xemtw.js";import{X as s}from"./XAxis-CrRUVNvL.js";import{Y as c}from"./YAxis-D2uzSmxi.js";import{L as d}from"./Line-BJx91oUE.js";import{R as g}from"./ReferenceLine-EZSkA2wg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BncnDTze.js";import"./index-y_H2sp7r.js";import"./index-BfUFBuzY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BRjUIPxP.js";import"./isWellBehavedNumber-DghiGM0-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-gz3ID__y.js";import"./axisSelectors-Fcxl1qih.js";import"./d3-scale-BWLi0PrL.js";import"./index-2r1iX6kD.js";import"./index-BnUV9qdG.js";import"./renderedTicksSlice-B5lYG2UO.js";import"./index-bDOV_Sp5.js";import"./CartesianChart-CyzDI5B8.js";import"./chartDataContext-Dh2caTLe.js";import"./CategoricalChart-C6KS2LQO.js";import"./CartesianAxis-Berywq5j.js";import"./Layer-CpiNCVXM.js";import"./Text-BflMB0k7.js";import"./DOMUtils-C-XY0CD-.js";import"./useId-DFIORHHp.js";import"./useBackwardsCompatibleTheme-Bwairpph.js";import"./Label-DbWQNQho.js";import"./ZIndexLayer-So4aUaj6.js";import"./types-CaHoHJJ-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BqZh414E.js";import"./step-B_GvmUZd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BVLC3LcC.js";import"./useAnimationId-CVJf-EC8.js";import"./ActivePoints-DY3ts7CW.js";import"./Dot-DmxTFD8v.js";import"./RegisterGraphicalItemId-CmRCopob.js";import"./ErrorBarContext-D5SoE2yk.js";import"./GraphicalItemClipPath-xNgZEk9E.js";import"./SetGraphicalItem-DY3wRuGw.js";import"./getRadiusAndStrokeWidthFromDot-cXRduqqB.js";import"./ActiveShapeUtils-Cm0ONgWE.js";import"./useGraphicalItemIdentity-azVLbNjG.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
