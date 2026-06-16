import{R as e}from"./iframe-YX8o2v6C.js";import{R as i}from"./zIndexSlice-DdFbRU-_.js";import{C as a}from"./ComposedChart-CuekEZUs.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Bm0phJiH.js";import{X as s}from"./XAxis-DQ2uOSag.js";import{Y as c}from"./YAxis-Be6O_CQ7.js";import{L as d}from"./Line-Dmxs4MTa.js";import{R as g}from"./ReferenceLine-BEDLdSpI.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D9wrmu0j.js";import"./index-DH-2xtWc.js";import"./index-Cl4YYRbA.js";import"./get-BycinDno.js";import"./resolveDefaultProps-Beo9Ue5G.js";import"./isWellBehavedNumber-BTMdVTVN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CG6S7igm.js";import"./index-CEZPHdCs.js";import"./index-C3Ly3wbD.js";import"./renderedTicksSlice-CH1AW_i0.js";import"./axisSelectors-D8SjoVzs.js";import"./d3-scale-BBOwGfMu.js";import"./string-B6fdYHAA.js";import"./CartesianChart-W4Jk2biF.js";import"./chartDataContext-BjewCl-Q.js";import"./CategoricalChart-D0PZB27U.js";import"./CartesianAxis-CKLUnXwa.js";import"./Layer-BIbmWem6.js";import"./Text-Buo3hKKc.js";import"./DOMUtils-QQafW-5D.js";import"./Label-MzgVsBeP.js";import"./ZIndexLayer-jNA71lIU.js";import"./types-DnEhxp69.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BvJZo-0O.js";import"./step-ChRxg50y.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CRhm6WPg.js";import"./useAnimationId-CqTJac9i.js";import"./ActivePoints-DmjJPaKb.js";import"./Dot-DeMjnZzF.js";import"./RegisterGraphicalItemId-6llrHCrO.js";import"./ErrorBarContext-BJw7X7Qy.js";import"./GraphicalItemClipPath-BF8Vebbu.js";import"./SetGraphicalItem-OjQ_8WxS.js";import"./getRadiusAndStrokeWidthFromDot-wgzhKlDZ.js";import"./ActiveShapeUtils-C75e4XAE.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
