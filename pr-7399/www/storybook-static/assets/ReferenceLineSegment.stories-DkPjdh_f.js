import{c as e}from"./iframe-CSdIsBuA.js";import{g as i}from"./zIndexSlice-Cwyv9NeI.js";import{C as a}from"./ComposedChart-Ckj1xbao.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-Dw20LUYN.js";import{X as s}from"./XAxis-4daNYmE3.js";import{Y as c}from"./YAxis-ONZy-yVZ.js";import{L as d}from"./Line-B5eG26iw.js";import{R as g}from"./ReferenceLine-CeMMrQLL.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DsufihQm.js";import"./index-Cpoemtz2.js";import"./index-DE5N2T-X.js";import"./get-Duntrb6V.js";import"./resolveDefaultProps-DILKQm8l.js";import"./isWellBehavedNumber-C3OI8iVg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B89fPpLO.js";import"./index-BTvkQKhU.js";import"./index-Bec9HE3p.js";import"./renderedTicksSlice-B5Ptxudq.js";import"./axisSelectors-BnFkCmMm.js";import"./d3-scale-B9s2XGKQ.js";import"./CartesianChart-Bk8EQL3g.js";import"./chartDataContext-BUAn3ipS.js";import"./CategoricalChart-DbkFDn9v.js";import"./CartesianAxis-DbuOwL9w.js";import"./Layer-B_G2sVc2.js";import"./Text-B3fnIIS6.js";import"./DOMUtils-BrUe4Qn6.js";import"./Label-BjSFKFzq.js";import"./ZIndexLayer-D0Yli8nf.js";import"./types-Ct8C6hXI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CKKHwC-M.js";import"./step-w2kxUIwB.js";import"./path-DyVhHtw_.js";import"./ReactUtils-BhhiwOUg.js";import"./ActivePoints-DxvB2SaA.js";import"./Dot-DEg4e3iy.js";import"./RegisterGraphicalItemId-DM7h7YxF.js";import"./ErrorBarContext-BgoP0PAw.js";import"./GraphicalItemClipPath-DPD0FrgU.js";import"./SetGraphicalItem-D2hWeYSE.js";import"./useAnimationId-B6008U_B.js";import"./getRadiusAndStrokeWidthFromDot-DJfd0kAV.js";import"./ActiveShapeUtils-9x_mtGFa.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
