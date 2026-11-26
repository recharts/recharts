import{R as e}from"./iframe-DEVQjgtg.js";import{R as i}from"./zIndexSlice-DfK8JSFq.js";import{C as n}from"./ComposedChart-CkNI_L7v.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-qpQnI3BO.js";import{X as s}from"./XAxis-BW3rW0v-.js";import{Y as c}from"./YAxis-DNUJzVJY.js";import{L as d}from"./Line-DIzt92wi.js";import{R as g}from"./ReferenceLine-ChbyyFVV.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CwoRT4vA.js";import"./get-CjriyByo.js";import"./throttle-icp-MZ_z.js";import"./index-Cpcs4tmX.js";import"./index-C95LL0D7.js";import"./RechartsWrapper-CfFuT0mb.js";import"./axisSelectors-t3BvEa3q.js";import"./polarAxisSelectors-DOgnXW1S.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Co6YNHM_.js";import"./index-fXrCovV3.js";import"./index-TVJDl2u2.js";import"./renderedTicksSlice-2D_h0Nlg.js";import"./index-Cxp_oZwY.js";import"./fillDefinitions-D1YpghSP.js";import"./CartesianChart-pH5TOmhe.js";import"./chartDataContext-DImnS5HH.js";import"./CategoricalChart-BtHLUBe9.js";import"./CartesianAxis-CPxmijCh.js";import"./Layer-Cr563h4j.js";import"./Text-B9Mi7Fii.js";import"./ZIndexLayer-FMAzY6FJ.js";import"./Label-CuMp2cQz.js";import"./types-B0JGDzFy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-g6-mSPtW.js";import"./Curve-a_jcRLJ0.js";import"./step-CpcYtbS4.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DAcHMSZ1.js";import"./ActivePoints-Dpho8RxE.js";import"./Dot-p_BgihRi.js";import"./activeStyles-D4aY95Js.js";import"./useAnimationId-CMFy88eN.js";import"./Symbols-CuwdJXxk.js";import"./symbol-Dp50t1em.js";import"./ErrorBarContext-D5jMJqSB.js";import"./SetGraphicalItem-CsW3luzS.js";import"./ActiveShapeUtils-DqT038Y8.js";import"./useEffectiveDataKey-Cx2ptCsW.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
