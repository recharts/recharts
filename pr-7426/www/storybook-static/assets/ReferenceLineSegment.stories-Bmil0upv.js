import{R as e}from"./iframe-CcUePkZz.js";import{R as i}from"./zIndexSlice-DSc4KC75.js";import{C as a}from"./ComposedChart-CRM55qGb.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-UvUMKN2F.js";import{X as s}from"./XAxis-BcdHEGYE.js";import{Y as c}from"./YAxis-nZsFOeFr.js";import{L as d}from"./Line-DAxMD2wb.js";import{R as g}from"./ReferenceLine-Byqq4PHL.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-VeyOR81A.js";import"./index-Z6USwMiQ.js";import"./index-CJTFlpIe.js";import"./get-UnfM8TPj.js";import"./resolveDefaultProps-BXf8ljNz.js";import"./isWellBehavedNumber-CXwth3qC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DA0Yxt9x.js";import"./index-C-Pbn--W.js";import"./index-C1-J5F4u.js";import"./renderedTicksSlice-BL5Mffta.js";import"./axisSelectors-BlPxUPB7.js";import"./d3-scale-ac-XiUen.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D-BudT5K.js";import"./chartDataContext-VDW5Tgrh.js";import"./CategoricalChart-CG91Q5ky.js";import"./CartesianAxis-B7nFXCrA.js";import"./Layer-CKbs6a8D.js";import"./Text-BLCpim0o.js";import"./DOMUtils-CgmzxpAH.js";import"./Label-dVerXnTS.js";import"./ZIndexLayer-B4p-btGn.js";import"./types-C4zY2OW7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Dhf7CAZi.js";import"./step-w_kmAd5Q.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BbZPIVL8.js";import"./useAnimationId-CH023PHf.js";import"./ActivePoints-D-HwpVLA.js";import"./Dot-CijEuNsy.js";import"./RegisterGraphicalItemId-Dk2pKOym.js";import"./ErrorBarContext-BIy678QN.js";import"./GraphicalItemClipPath-Bc96kw55.js";import"./SetGraphicalItem-D7jXrYhk.js";import"./getRadiusAndStrokeWidthFromDot-CTEsWB1S.js";import"./ActiveShapeUtils-CRuYv9Bp.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
