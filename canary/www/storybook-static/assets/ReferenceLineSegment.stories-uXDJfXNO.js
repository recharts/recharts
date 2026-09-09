import{R as e}from"./iframe-D3O6io8m.js";import{R as i}from"./zIndexSlice-DQB1nost.js";import{C as n}from"./ComposedChart-Cn_VV92w.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Bh9mZ_wb.js";import{X as s}from"./XAxis-DUDfURVS.js";import{Y as c}from"./YAxis-BzpJJ7qL.js";import{L as d}from"./Line-Dt8Tbg_O.js";import{R as g}from"./ReferenceLine-D6vIMSXZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CaEEZkOZ.js";import"./index-B0ONpcCM.js";import"./index-5LaKRWmN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-kP9mtom1.js";import"./isWellBehavedNumber-B1sq1tTx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DlAcodG6.js";import"./axisSelectors-DYaW_3kH.js";import"./d3-scale-CVKZtCyw.js";import"./index-emaHTIIt.js";import"./index-DdBSGBzR.js";import"./renderedTicksSlice-Do9cyu74.js";import"./index-kC31JoLB.js";import"./CartesianChart-rEbOxYKn.js";import"./chartDataContext-NUXFSw-S.js";import"./CategoricalChart-BslMClSv.js";import"./CartesianAxis-B7axhf8y.js";import"./Layer-nZxEgPG5.js";import"./Text-De-f5jqv.js";import"./DOMUtils-Cvz_isR7.js";import"./useId-CrZafLfR.js";import"./useBackwardsCompatibleTheme-CHhEQzss.js";import"./Label-CWCww6MW.js";import"./ZIndexLayer-CNTWWRns.js";import"./types-B4ar_Rgv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BqlJ0F26.js";import"./step-BpERcgqV.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B5d6Ob4T.js";import"./useAnimationId-Cz9FmiXJ.js";import"./ActivePoints-gquoLNda.js";import"./Dot-bFsMR4tf.js";import"./RegisterGraphicalItemId-JcTZBT0j.js";import"./ErrorBarContext-CYOIqMSi.js";import"./GraphicalItemClipPath-B0houyvR.js";import"./SetGraphicalItem-DB0WYfC5.js";import"./getRadiusAndStrokeWidthFromDot-BFirVaXF.js";import"./ActiveShapeUtils-CaF-7U2y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
