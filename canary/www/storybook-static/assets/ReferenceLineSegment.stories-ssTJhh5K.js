import{R as e}from"./iframe-E8y1LHOl.js";import{R as i}from"./zIndexSlice-CP2K5fjd.js";import{C as n}from"./ComposedChart-LbzptMCb.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CfUCRFt7.js";import{X as s}from"./XAxis-CQma6gAW.js";import{Y as c}from"./YAxis-DUr2r86j.js";import{L as d}from"./Line-DkSRoaUJ.js";import{R as g}from"./ReferenceLine-L20xnieC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BI-R_Jee.js";import"./index-B9tVeqRW.js";import"./index-DPYTKeUs.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dp5H_7QD.js";import"./isWellBehavedNumber-CRMuJk7d.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C8PWTH_z.js";import"./axisSelectors-Bx3EdZdn.js";import"./d3-scale-DaRSGBEX.js";import"./index-uIxCQJLq.js";import"./index-BIh6D11j.js";import"./renderedTicksSlice-C2dkiWvM.js";import"./index-ozGQLW8c.js";import"./CartesianChart-BBRLk3sY.js";import"./chartDataContext-BjS41WHN.js";import"./CategoricalChart-ZbKNQGxB.js";import"./CartesianAxis-Cha6t-QP.js";import"./Layer-Bg2OEiKj.js";import"./Text-BdpTntNA.js";import"./DOMUtils-8lkeZOFq.js";import"./useId-BmVi-H88.js";import"./useBackwardsCompatibleTheme-vYz6naZ1.js";import"./Label-DN0LsbYZ.js";import"./ZIndexLayer-m7llBpH3.js";import"./types-Din7IpfN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CzvWk0Dg.js";import"./step-uXGSGbmf.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-c6sC2Ph5.js";import"./useAnimationId-MpB0cIEG.js";import"./ActivePoints-wk2Fpufe.js";import"./Dot-C5og9dHv.js";import"./RegisterGraphicalItemId-zHC8jjTe.js";import"./ErrorBarContext-Bj9hGQm8.js";import"./GraphicalItemClipPath-B1o9CCBQ.js";import"./SetGraphicalItem-BwH3S5eX.js";import"./getRadiusAndStrokeWidthFromDot-xNb8nybi.js";import"./ActiveShapeUtils-CpmlaViF.js";import"./useGraphicalItemIdentity-C1Aa_3nu.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
