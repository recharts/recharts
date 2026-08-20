import{R as e}from"./iframe-O6BbDbFD.js";import{R as i}from"./zIndexSlice-ufl9shMa.js";import{C as a}from"./ComposedChart-BrGWNJAt.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-id1gFFMS.js";import{X as s}from"./XAxis-DBoP-lnN.js";import{Y as c}from"./YAxis-D4M42lWl.js";import{L as d}from"./Line-CvuXmhQn.js";import{R as g}from"./ReferenceLine-BvpP8LOk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C3IkSeoT.js";import"./index-BpSs36Jm.js";import"./index-C0YTM7Q0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Tk25gN9F.js";import"./isWellBehavedNumber-CZqzhzTI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CoeUwGvc.js";import"./index-CnIZ7xjW.js";import"./index-BUePfml7.js";import"./axisSelectors-B4uTofMj.js";import"./d3-scale-C59jQ7wQ.js";import"./renderedTicksSlice-B4DLXLOp.js";import"./CartesianChart-B9Asj-o-.js";import"./chartDataContext-CMEfpaNZ.js";import"./CategoricalChart-aiOnciBW.js";import"./CartesianAxis-B8nYUrro.js";import"./Layer-BCiB-dL4.js";import"./Text-ti8Fj8zJ.js";import"./DOMUtils-BG1uuH7H.js";import"./useId-Cennb_xj.js";import"./useBackwardsCompatibleTheme-DlXi3557.js";import"./Label-SH09pAJC.js";import"./ZIndexLayer-Bt9vBpxW.js";import"./types-o_WouL0J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-r6vAjm_u.js";import"./step-rmFojxwR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BmR1pSA0.js";import"./useAnimationId-DHIHugsV.js";import"./ActivePoints-BgZirJxM.js";import"./Dot-D6BD33aP.js";import"./RegisterGraphicalItemId-DqjeB-Ir.js";import"./ErrorBarContext-CsR2u1pe.js";import"./GraphicalItemClipPath-DQtsyL-k.js";import"./SetGraphicalItem-BTWaHo9u.js";import"./getRadiusAndStrokeWidthFromDot-DUN_awyu.js";import"./ActiveShapeUtils-CApqjo8g.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
