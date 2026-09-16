import{R as e}from"./iframe-BCNgueVp.js";import{R as i}from"./zIndexSlice-CCtmziB1.js";import{C as n}from"./ComposedChart-BZSfKAao.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Ba6XQPo3.js";import{X as s}from"./XAxis-LOCckWX5.js";import{Y as c}from"./YAxis-FgW2NdaC.js";import{L as d}from"./Line-HqO7F7wl.js";import{R as g}from"./ReferenceLine-2jx_RZAH.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-NhPjNryy.js";import"./index-DknrhM99.js";import"./index-C90YdW0D.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BtKNVX8w.js";import"./isWellBehavedNumber-DQrQxdGi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbCJx0GW.js";import"./axisSelectors-D-nEX4IG.js";import"./d3-scale-buoP3Yb_.js";import"./index-WR8kAZrp.js";import"./index-D7hqs4ef.js";import"./renderedTicksSlice-mO9WeRkh.js";import"./index-DhCnaeYc.js";import"./CartesianChart-zbkVSw3C.js";import"./chartDataContext-Di3BbchU.js";import"./CategoricalChart-DQPW05OG.js";import"./CartesianAxis-cRNPmBWR.js";import"./Layer-DVqtOL17.js";import"./Text-DAXsYFxH.js";import"./DOMUtils-C7-Ag6_9.js";import"./useId-Ckkf-sDd.js";import"./useBackwardsCompatibleTheme-CFJvwoVT.js";import"./Label-B2ReDrEH.js";import"./ZIndexLayer-Ccrtcbr9.js";import"./types-Dv8LLmcq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-NDvVIG-e.js";import"./step-CsaqBRl_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DV3N7EYj.js";import"./useAnimationId-CBbWVRap.js";import"./ActivePoints-CUqn1Bgc.js";import"./Dot-D59YTPJi.js";import"./RegisterGraphicalItemId-D_OLUlPr.js";import"./ErrorBarContext-Bgs6nhLR.js";import"./GraphicalItemClipPath-DQ0b-CJJ.js";import"./SetGraphicalItem-CDaxvQAk.js";import"./getRadiusAndStrokeWidthFromDot-Cb21_3vS.js";import"./ActiveShapeUtils-Cz6FzTvm.js";import"./useGraphicalItemIdentity-CyGmZ9Hw.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
