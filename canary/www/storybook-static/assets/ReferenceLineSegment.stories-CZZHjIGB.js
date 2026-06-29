import{R as e}from"./iframe-Ce1K7ebi.js";import{R as i}from"./zIndexSlice-8Zo3fsoU.js";import{C as a}from"./ComposedChart-COfY451m.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BOpB_UQw.js";import{X as s}from"./XAxis-3C9aClrU.js";import{Y as c}from"./YAxis-DnjNgR7C.js";import{L as d}from"./Line-Beg62wAW.js";import{R as g}from"./ReferenceLine-lcGK79Kq.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-wBCCevMF.js";import"./index-s0WSFyA7.js";import"./index-AjZPfGGe.js";import"./get-BJIMs5EG.js";import"./resolveDefaultProps-DSV9zLoY.js";import"./isWellBehavedNumber-CQ8pg5Hb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BrIlX8W1.js";import"./index-BorxIHRi.js";import"./index-gt-wl4xF.js";import"./renderedTicksSlice-GRKlOorj.js";import"./axisSelectors-CwdMfS2t.js";import"./d3-scale-Dx0XyOwO.js";import"./CartesianChart-BDjFqgQH.js";import"./chartDataContext-CPsHUBNm.js";import"./CategoricalChart-CSIi67W8.js";import"./CartesianAxis-vXS1PjkI.js";import"./Layer-B1_feEXA.js";import"./Text-BYOeWYK5.js";import"./DOMUtils-DkFEIDQF.js";import"./Label-CmiiW9da.js";import"./ZIndexLayer-CVK_cW1P.js";import"./types-EmN6t4vl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BMLS1vNR.js";import"./step-fKuN5Fcd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DUKSjkGs.js";import"./useAnimationId-BsE4V4Ok.js";import"./ActivePoints-DVEwrhzj.js";import"./Dot-fVsrRUzo.js";import"./RegisterGraphicalItemId-CAijELDs.js";import"./ErrorBarContext-ZtUvHt5X.js";import"./GraphicalItemClipPath-DDqY4rhz.js";import"./SetGraphicalItem-CTmxPNcP.js";import"./getRadiusAndStrokeWidthFromDot-B3GcRvO7.js";import"./ActiveShapeUtils-DLpYpzZO.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};
