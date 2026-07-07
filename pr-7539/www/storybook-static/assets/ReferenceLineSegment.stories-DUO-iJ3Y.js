import{R as e}from"./iframe-BhYIBUmE.js";import{R as i}from"./zIndexSlice-iZ75WhkA.js";import{C as a}from"./ComposedChart-CSJIRxEz.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-B8gFCMp1.js";import{X as s}from"./XAxis-B9ZJYuv4.js";import{Y as c}from"./YAxis-BDjlgMSD.js";import{L as d}from"./Line-CKX7TNtb.js";import{R as g}from"./ReferenceLine-DFseOOt5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Y6Q35rOn.js";import"./index-DEEvK7wS.js";import"./index-D-p5hhZ6.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BDtRZXkF.js";import"./isWellBehavedNumber-XdoKmyaC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQUmtvyG.js";import"./index-BoNxyHn5.js";import"./index-B02QR74t.js";import"./renderedTicksSlice-BvbBXc0R.js";import"./axisSelectors-XMI2B6JU.js";import"./d3-scale-Ca87_qMg.js";import"./CartesianChart-CnNFNMoi.js";import"./chartDataContext-DqiOTlWU.js";import"./CategoricalChart-DhAV5rxK.js";import"./CartesianAxis-D47H33vb.js";import"./Layer-Di4CjYT0.js";import"./Text-DvhjqfeR.js";import"./DOMUtils-0OARPr3L.js";import"./Label-D4aavVkg.js";import"./ZIndexLayer-DzEhLRNI.js";import"./types-98-DlTag.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BFWIv3Fl.js";import"./step-Dbe6DqiS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BLN0wGQm.js";import"./useAnimationId-BPiSh6IJ.js";import"./ActivePoints-GDUXfCj4.js";import"./Dot-DorxToFy.js";import"./RegisterGraphicalItemId-BXUxqLaU.js";import"./ErrorBarContext-CcwUloBe.js";import"./GraphicalItemClipPath-gTOFxICa.js";import"./SetGraphicalItem-ZzJW--aO.js";import"./getRadiusAndStrokeWidthFromDot-Bno7EZgK.js";import"./ActiveShapeUtils-Di4Bw8dO.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
