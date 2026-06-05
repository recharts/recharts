import{R as e}from"./iframe-COvhlo3n.js";import{R as i}from"./zIndexSlice-UjQyxCBO.js";import{C as a}from"./ComposedChart-B7Y6WjOd.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DloNNRRy.js";import{X as s}from"./XAxis-CiJXThtt.js";import{Y as c}from"./YAxis-Xvc1KoDU.js";import{L as d}from"./Line-Cmqu6p5D.js";import{R as g}from"./ReferenceLine-BG7M2691.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BpCohf0r.js";import"./index-HVKWfhx-.js";import"./index-S2en6f0x.js";import"./get-DcOFzyCK.js";import"./resolveDefaultProps-DJ7OALvu.js";import"./isWellBehavedNumber-y7VTG9QG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dx2dgZSl.js";import"./index-iNixOGJn.js";import"./index-DX1qvyWd.js";import"./renderedTicksSlice-DbzHTb4p.js";import"./axisSelectors-Zbm12FCw.js";import"./d3-scale-BlVLCp11.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Dy7YVWuh.js";import"./chartDataContext-iIol8Xhi.js";import"./CategoricalChart-CLWSl7gV.js";import"./CartesianAxis-s3bXG1ws.js";import"./Layer-B-6Is3nc.js";import"./Text-opN_hZQa.js";import"./DOMUtils-C6WNHbS7.js";import"./Label-Vr2WzXIC.js";import"./ZIndexLayer-B0TWuVZ-.js";import"./types-p5b3Q5GI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DZz8_CrJ.js";import"./step-hf0ZFvgG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DpY5jibk.js";import"./useAnimationId-BKJNFkSk.js";import"./ActivePoints-Dfm7fkiJ.js";import"./Dot-DfhacusV.js";import"./RegisterGraphicalItemId-C7wd0umC.js";import"./ErrorBarContext-BHPD5mnS.js";import"./GraphicalItemClipPath-CI-F5EmQ.js";import"./SetGraphicalItem-CwV_dfS_.js";import"./getRadiusAndStrokeWidthFromDot-D1_dalUD.js";import"./ActiveShapeUtils-C3R6UHJX.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
