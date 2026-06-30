import{R as e}from"./iframe-DCxLvNga.js";import{R as i}from"./zIndexSlice-DgwgOA8W.js";import{C as a}from"./ComposedChart-BhW0iq0n.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CB2P8cwY.js";import{X as s}from"./XAxis-CvAM-btA.js";import{Y as c}from"./YAxis-BqxXsg45.js";import{L as d}from"./Line-BL__EnOs.js";import{R as g}from"./ReferenceLine-DPjid_G-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BEPLbkDl.js";import"./index-8Ky9zJpe.js";import"./index-eUk0KR26.js";import"./get-Cqaz2t92.js";import"./resolveDefaultProps-Clp0Py5Q.js";import"./isWellBehavedNumber-C0c3JW0z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQRomY3U.js";import"./index-WumRa2O_.js";import"./index-HEbudI5N.js";import"./renderedTicksSlice-PHCHKu5h.js";import"./axisSelectors-LD-bHnG0.js";import"./d3-scale-U7zf4vxG.js";import"./CartesianChart-WbtSIkDa.js";import"./chartDataContext-1-JtWOIC.js";import"./CategoricalChart-BL0VhkFE.js";import"./CartesianAxis-D6yEppZ-.js";import"./Layer-wgUOVjl0.js";import"./Text-CxvVezqe.js";import"./DOMUtils-CJlLdKU3.js";import"./Label-B5b7aLp5.js";import"./ZIndexLayer-CM9bDnHX.js";import"./types-CVkN-t8Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BhRVcMAR.js";import"./step-x_BcDJPY.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-kb_X2dzq.js";import"./useAnimationId-HOEbSJwy.js";import"./ActivePoints-BUWG0sGV.js";import"./Dot-D-XUpmdF.js";import"./RegisterGraphicalItemId-uoD-MQmf.js";import"./ErrorBarContext-BqmhDiAL.js";import"./GraphicalItemClipPath-CWBeJB2a.js";import"./SetGraphicalItem-Cst8NOmH.js";import"./getRadiusAndStrokeWidthFromDot-6CNdFBKE.js";import"./ActiveShapeUtils-j_zEDQtR.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
