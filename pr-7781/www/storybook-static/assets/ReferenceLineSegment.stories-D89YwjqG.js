import{R as e}from"./iframe-CS_l3HPs.js";import{R as i}from"./zIndexSlice-DOZPSD3i.js";import{C as n}from"./ComposedChart-DD8VJnt8.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CrAmDQR5.js";import{X as s}from"./XAxis-VVNKgX_Z.js";import{Y as c}from"./YAxis-CfLQ1gwS.js";import{L as d}from"./Line-BrnJb__0.js";import{R as g}from"./ReferenceLine-B5cf6CZy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BXJlRBBH.js";import"./index-BYA5dZMw.js";import"./index-Ao7KBTFd.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CgtyltQG.js";import"./isWellBehavedNumber-BSl6HisW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CLBKD2Mb.js";import"./axisSelectors-wY7xrwqz.js";import"./d3-scale-DavGDXTG.js";import"./index-DjQwq7Uw.js";import"./index-7kMAhgqw.js";import"./renderedTicksSlice-Bg0DMs51.js";import"./index-P2WiDCym.js";import"./CartesianChart-CDuUV78h.js";import"./chartDataContext-Ud-Nnz0C.js";import"./CategoricalChart-DOE0boxd.js";import"./CartesianAxis-DcHbl7Yp.js";import"./Layer-ClmpeZAQ.js";import"./Text-Cft38Vb6.js";import"./DOMUtils-Ufje3btQ.js";import"./useId-DZgN2ji4.js";import"./useBackwardsCompatibleTheme-D2bkWM8o.js";import"./Label-CLB3gtSD.js";import"./ZIndexLayer-DIN_R5pI.js";import"./types-Bij1NlAO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Bkeet_Vy.js";import"./step-D4hiIBbL.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CucVzI_L.js";import"./useAnimationId-BcraNq1p.js";import"./ActivePoints-BQR6yZd5.js";import"./Dot-uq10K0-V.js";import"./RegisterGraphicalItemId-Cqgmus52.js";import"./ErrorBarContext-CU42u084.js";import"./GraphicalItemClipPath-CdBhe4zV.js";import"./SetGraphicalItem-HfAHgXq7.js";import"./getRadiusAndStrokeWidthFromDot-CGFjgpgY.js";import"./ActiveShapeUtils-Bf2foGWX.js";import"./useGraphicalItemIdentity-CWB4Q7Cn.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
