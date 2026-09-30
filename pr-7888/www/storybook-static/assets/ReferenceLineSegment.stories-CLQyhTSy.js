import{R as e}from"./iframe-CQ0Lljz5.js";import{R as i}from"./zIndexSlice-DEHrA3Rr.js";import{C as n}from"./ComposedChart-CDVvV506.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DAHH3aHX.js";import{X as s}from"./XAxis-DOKTQQJO.js";import{Y as c}from"./YAxis-BU1cXErq.js";import{L as d}from"./Line-BU-Fmcg-.js";import{R as g}from"./ReferenceLine-BQsZk-cj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D0Qp2wbd.js";import"./index-CgKUH7Pt.js";import"./index-DJBjlh9k.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BJD_NHtt.js";import"./isWellBehavedNumber-B5oWMPg-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dx4TkxXI.js";import"./axisSelectors-CIePYxzF.js";import"./d3-scale-bZdbqgmB.js";import"./index--XZnrZ3Q.js";import"./index-_-Q-FGj6.js";import"./renderedTicksSlice-BkkJdu7D.js";import"./index-BGyIiFfh.js";import"./CartesianChart-MQW7TOME.js";import"./chartDataContext-DkzXheoo.js";import"./CategoricalChart-DFae7qCs.js";import"./CartesianAxis-K2XDXRUA.js";import"./Layer-DFHm6cg2.js";import"./Text-CnTJRORA.js";import"./DOMUtils-DMu9BuDW.js";import"./useId-aq3DvHIK.js";import"./useBackwardsCompatibleTheme-CNmncO23.js";import"./Label-D63u7ve3.js";import"./ZIndexLayer-Bj3SLdvY.js";import"./types-BxcasGOq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-PlZhcAcE.js";import"./step-Bxet3luG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bf5nKgQj.js";import"./useAnimationId-CcXfV18V.js";import"./ActivePoints-BmyDUMzQ.js";import"./Dot-DF8MgqBD.js";import"./RegisterGraphicalItemId-q_Z5CO-E.js";import"./ErrorBarContext-BLRPtsGK.js";import"./GraphicalItemClipPath-CgRak6Te.js";import"./SetGraphicalItem-u3emxpjK.js";import"./getRadiusAndStrokeWidthFromDot-BWi-x41h.js";import"./ActiveShapeUtils-C1gkAgLd.js";import"./useGraphicalItemIdentity-DI-yqd9-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
