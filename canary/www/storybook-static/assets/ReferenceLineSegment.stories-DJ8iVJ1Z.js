import{R as e}from"./iframe-BCd41l8E.js";import{R as i}from"./zIndexSlice-vwglsLr7.js";import{C as a}from"./ComposedChart-Ca4-q80H.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CjqtIjwN.js";import{X as s}from"./XAxis-B6fLtz1T.js";import{Y as c}from"./YAxis-HwtSiSZk.js";import{L as d}from"./Line-Bu3kEO38.js";import{R as g}from"./ReferenceLine-Df-2uLwz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-COzcAqD2.js";import"./index-DqhoEKLL.js";import"./index-DbWv8bq-.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CfjrcH5k.js";import"./isWellBehavedNumber-By99v6ya.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAuP6JTc.js";import"./index-B6Q7w6aQ.js";import"./index-BUl2VpQi.js";import"./renderedTicksSlice-DGgd7qJG.js";import"./axisSelectors-BWK81-bk.js";import"./d3-scale-BUxy_yCJ.js";import"./CartesianChart-C3_p9XVE.js";import"./chartDataContext-Drys5Aq2.js";import"./CategoricalChart-D4f6D4jQ.js";import"./CartesianAxis-B_R0lNNU.js";import"./Layer-BlOdZtAq.js";import"./Text-rlFfv_Ik.js";import"./DOMUtils--ioWONbC.js";import"./Label-BGS-IakE.js";import"./ZIndexLayer-C4KPetXp.js";import"./types-CEIkXXH7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BUnkOlSA.js";import"./isBuffer-BG75eWKN.js";import"./Curve-5IbJhmxY.js";import"./step-B-Fp4nlk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dw69Yp-8.js";import"./useAnimationId-CGoXgsW2.js";import"./ActivePoints-Ca9ELXuu.js";import"./Dot-k24tsyTI.js";import"./RegisterGraphicalItemId-BNOR99Vc.js";import"./ErrorBarContext-ChbGQHV7.js";import"./GraphicalItemClipPath-mTO3f3R8.js";import"./SetGraphicalItem-C-GN70LS.js";import"./getRadiusAndStrokeWidthFromDot-Cs1a3Mwu.js";import"./ActiveShapeUtils-B7pKCaaA.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
