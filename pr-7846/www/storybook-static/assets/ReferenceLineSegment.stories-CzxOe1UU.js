import{R as e}from"./iframe-C63NoaDu.js";import{R as i}from"./zIndexSlice-BcMwSK9m.js";import{C as n}from"./ComposedChart-DM4H6PYa.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CMbIS0Ex.js";import{X as s}from"./XAxis-C5OImGrG.js";import{Y as c}from"./YAxis-DmSu88f8.js";import{L as d}from"./Line-CkUNS1k-.js";import{R as g}from"./ReferenceLine-BSkQcEcb.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-dl1YLV6q.js";import"./index-C9CjOEex.js";import"./index-8uJ0bE2o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DjxgFVah.js";import"./isWellBehavedNumber-BfhF-72O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CTWFoE3n.js";import"./axisSelectors-LGmM4kiC.js";import"./d3-scale-CcYn43Vo.js";import"./index-DKS0oalo.js";import"./index-DO3tFlOP.js";import"./renderedTicksSlice-DIKEWQne.js";import"./index-CqricD4t.js";import"./CartesianChart-ENzs0KXc.js";import"./chartDataContext-CfPmzzSW.js";import"./CategoricalChart-DHxPQS0Z.js";import"./CartesianAxis-BRA6gGeC.js";import"./Layer-Ckr3gw9l.js";import"./Text-D_RBmkbp.js";import"./DOMUtils-DA0ZRZ5p.js";import"./useId-BncxSM4U.js";import"./useBackwardsCompatibleTheme-DEjA-f8D.js";import"./Label-1Vc72EU1.js";import"./ZIndexLayer-Cc9mNp0T.js";import"./types-DUwSb1pu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DkWZvTAe.js";import"./step-C-IAzoA3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DHS6gEFX.js";import"./useAnimationId-DcWGIqWl.js";import"./ActivePoints-oZErJUce.js";import"./Dot-DkFiM3ON.js";import"./RegisterGraphicalItemId-CrhgcGtn.js";import"./ErrorBarContext-DjLWgwQU.js";import"./GraphicalItemClipPath-DNBzuX5X.js";import"./SetGraphicalItem-CsljS9zr.js";import"./getRadiusAndStrokeWidthFromDot-DGM-tqki.js";import"./ActiveShapeUtils-DIOp6OW3.js";import"./useGraphicalItemIdentity-WzLoYH7A.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
