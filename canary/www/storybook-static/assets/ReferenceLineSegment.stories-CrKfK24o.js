import{R as e}from"./iframe-pamQLAuY.js";import{R as i}from"./zIndexSlice-BlDUGc8d.js";import{C as n}from"./ComposedChart-D29eHQa-.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CQCtiiJp.js";import{X as s}from"./XAxis-D-SXbwy8.js";import{Y as c}from"./YAxis-BYc7pX1a.js";import{L as d}from"./Line-CX1OnHXo.js";import{R as g}from"./ReferenceLine-CU1HD-Ng.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-kiiYJYN_.js";import"./throttle-C_B1UjR8.js";import"./index-Cr46aqlt.js";import"./index-WeK6OXUT.js";import"./RechartsWrapper-ub_WEUz3.js";import"./axisSelectors-DKhGUp-k.js";import"./polarAxisSelectors-DoSBNlO9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-eIG0jwTX.js";import"./index-m8mQ2_y4.js";import"./index-QF6L8m8x.js";import"./renderedTicksSlice-BaFBICsx.js";import"./index-Dkcp91gd.js";import"./fillDefinitions-BDZZPSU3.js";import"./CartesianChart-CH5OILiC.js";import"./chartDataContext-B156a3vg.js";import"./CategoricalChart-C57OyuNX.js";import"./CartesianAxis-CWD0k2VK.js";import"./Layer-Cm9mi55v.js";import"./Text-CgAHMzD3.js";import"./ZIndexLayer-DY36flUP.js";import"./Label-53Y237WA.js";import"./types-DIKPUmB7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CBzOhU6V.js";import"./step-BpEAsRCc.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Cjt_fwSW.js";import"./ActivePoints-D3TY6zpk.js";import"./Dot-Ocwx86Cy.js";import"./activeStyles-BKbfAIaZ.js";import"./useAnimationId-BGgwVpYD.js";import"./Symbols-BHovV0ds.js";import"./symbol-OE1C7JWw.js";import"./ErrorBarContext-mAfMrTZ7.js";import"./SetGraphicalItem-CAx5rLIN.js";import"./getRadiusAndStrokeWidthFromDot-C-R45OAI.js";import"./ActiveShapeUtils-CLFAkUa0.js";import"./useEffectiveDataKey-DQOO5VHk.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
