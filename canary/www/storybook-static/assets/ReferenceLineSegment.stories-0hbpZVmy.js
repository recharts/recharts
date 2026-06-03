import{R as e}from"./iframe-Dli_FHsd.js";import{R as i}from"./zIndexSlice-BKyYlhak.js";import{C as a}from"./ComposedChart-BEb2rMPq.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BzY3upoB.js";import{X as s}from"./XAxis-CgWc3L0L.js";import{Y as c}from"./YAxis-BgeWKEji.js";import{L as d}from"./Line-WVA6lS0G.js";import{R as g}from"./ReferenceLine-ByjiGu5m.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BDVTnirG.js";import"./index-B6ei3fzd.js";import"./index-eEp7ik7X.js";import"./get-D8Bu4bN4.js";import"./resolveDefaultProps-KCoOvOQy.js";import"./isWellBehavedNumber-DwKce9OS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-gcMhRjLK.js";import"./index-654UjlcV.js";import"./index-TBfimrOP.js";import"./renderedTicksSlice-Cr_zgIG9.js";import"./axisSelectors-BOuTa97x.js";import"./d3-scale-BaROhcEs.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B0dTZgGZ.js";import"./chartDataContext-Dh-3jSeu.js";import"./CategoricalChart-YvrRZEH2.js";import"./CartesianAxis-CDtTSBJJ.js";import"./Layer-D_tWiSqM.js";import"./Text-mDBdIk3r.js";import"./DOMUtils-CD-Gvcib.js";import"./Label-BlCBYS7y.js";import"./ZIndexLayer-56CQrnNK.js";import"./types-CxkhEKh5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-V2biDmKc.js";import"./step-DJ-Uc0dW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DgK_VlyJ.js";import"./useAnimationId-CYxQwOrZ.js";import"./ActivePoints-Dhrwjh9s.js";import"./Dot-C9Ldg7B9.js";import"./RegisterGraphicalItemId-rjfoubwa.js";import"./ErrorBarContext-DHC85wCi.js";import"./GraphicalItemClipPath-BJpRRLBw.js";import"./SetGraphicalItem-DN3sQjPD.js";import"./getRadiusAndStrokeWidthFromDot-BTi0vxmW.js";import"./ActiveShapeUtils-pciG5q6n.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
