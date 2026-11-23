import{R as e}from"./iframe-B3Q9BieZ.js";import{R as i}from"./zIndexSlice-sqFd1bzt.js";import{C as n}from"./ComposedChart-D1EiQGBZ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DTELdrvM.js";import{X as s}from"./XAxis-D2lT-EVr.js";import{Y as c}from"./YAxis-DvVjGCkX.js";import{L as d}from"./Line-CqPtSHor.js";import{R as g}from"./ReferenceLine-EjrZ_Di2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BfktPE_A.js";import"./throttle-D7B_fzZD.js";import"./index-BCJi3GJg.js";import"./index-vYqwVqCg.js";import"./RechartsWrapper-Cfrbgio_.js";import"./axisSelectors-DvTAFEOk.js";import"./polarAxisSelectors-DPwJ5LbZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C94aTEcE.js";import"./index-DcskzPeY.js";import"./index-orRyden8.js";import"./renderedTicksSlice-1Ib_b5H5.js";import"./index-CII0l-xa.js";import"./fillDefinitions-DFJ8_pt7.js";import"./CartesianChart-Cr3Ujgb_.js";import"./chartDataContext-BZMC5ZNk.js";import"./CategoricalChart-DW1p8FyC.js";import"./CartesianAxis-COGs4upa.js";import"./Layer-CM6IL6TI.js";import"./Text-vJxvkBMX.js";import"./ZIndexLayer-D273i2uL.js";import"./Label-DqBOaUXK.js";import"./types-D4j33x05.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-CVv--GX5.js";import"./Curve-1WEPDMRv.js";import"./step-CLCxHiga.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DvvOVUEP.js";import"./ActivePoints-tqDqo9N4.js";import"./Dot-ClUpNew-.js";import"./activeStyles-BLYIXqri.js";import"./useAnimationId-2VJaNjeA.js";import"./Symbols-CWY2nbRa.js";import"./symbol-MUjZPdnP.js";import"./ErrorBarContext-B613I2F5.js";import"./SetGraphicalItem-B51ay4rQ.js";import"./ActiveShapeUtils-axs2zJFe.js";import"./useEffectiveDataKey-CELfbHpr.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
