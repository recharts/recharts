import{R as e}from"./iframe-DNbvw14a.js";import{R as i}from"./zIndexSlice-BHD22v5p.js";import{C as n}from"./ComposedChart-x_AAjUrD.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-SPB17rX4.js";import{X as s}from"./XAxis-DKCor6Yv.js";import{Y as c}from"./YAxis-BGn7xsJM.js";import{L as d}from"./Line-9wgA81hF.js";import{R as g}from"./ReferenceLine-D9-W5oec.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-TrQ-NrIz.js";import"./index-ChGtG0Z1.js";import"./index-mPJfSQ4a.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dv9OS7x0.js";import"./isWellBehavedNumber-B4X7Ovgo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-vWLTzty1.js";import"./axisSelectors-B6LUaqOe.js";import"./d3-scale-DdoY8Kw0.js";import"./index-CiQ39v7Z.js";import"./index-CqQ_TYAw.js";import"./renderedTicksSlice-DnMPpzr7.js";import"./index-BcAi-B8x.js";import"./CartesianChart-D_zqHIPC.js";import"./chartDataContext-mj0-05pU.js";import"./CategoricalChart-DTINRHZI.js";import"./CartesianAxis-CQJhlqIf.js";import"./Layer-Ca0bY5rb.js";import"./Text-BgAYGcmu.js";import"./DOMUtils-gpe3mW7P.js";import"./useId-BIiTcBjO.js";import"./useBackwardsCompatibleTheme-CUWrJJ-Y.js";import"./Label-B7KQBAEU.js";import"./ZIndexLayer-aQMxqOVX.js";import"./types-BqFGOrry.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DfXzeARC.js";import"./step-DhjEjZzQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-wgqiGiqn.js";import"./useAnimationId-DYgsmh0H.js";import"./ActivePoints-DVti48Uk.js";import"./Dot-DUpVpfPG.js";import"./RegisterGraphicalItemId-C8sRnX7V.js";import"./ErrorBarContext-BdE1Cthk.js";import"./GraphicalItemClipPath-CB7JJ2kx.js";import"./SetGraphicalItem-nJGBA7YQ.js";import"./getRadiusAndStrokeWidthFromDot-DuDTJHD_.js";import"./ActiveShapeUtils-Bvp6wNuu.js";import"./useGraphicalItemIdentity-CCeSwNH2.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
