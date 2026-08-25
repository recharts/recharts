import{R as e}from"./iframe-pb0eGUzQ.js";import{R as i}from"./zIndexSlice-Cv3joHsa.js";import{C as a}from"./ComposedChart-BYOHyhAB.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CP4v98tj.js";import{X as s}from"./XAxis-C8pfECSp.js";import{Y as c}from"./YAxis-CZ5C3-Kt.js";import{L as d}from"./Line-BK-thIbQ.js";import{R as g}from"./ReferenceLine-SmID6-vG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CLVKwQCr.js";import"./index-CadbAa9f.js";import"./index-B3wblxBJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BIcSgHHm.js";import"./isWellBehavedNumber-sYswO0zz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BvkKxzHL.js";import"./index-Ci6SDbSO.js";import"./index-DmA7_hIT.js";import"./axisSelectors-RMGVuaxT.js";import"./d3-scale-D40q8NYs.js";import"./renderedTicksSlice-BIUrSjZy.js";import"./CartesianChart-D9u_fkX_.js";import"./chartDataContext-tQQ7C7rr.js";import"./CategoricalChart-DraDT8M3.js";import"./CartesianAxis-DVH187SM.js";import"./Layer-CsF7idKX.js";import"./Text-Bq7mJ7MP.js";import"./DOMUtils-C_JPJk8X.js";import"./useId-xKOkSlvZ.js";import"./useBackwardsCompatibleTheme-DGBzFLd0.js";import"./Label-C-65Vs2n.js";import"./ZIndexLayer-BlGsGj6Y.js";import"./types-CuZ7ciTr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CGTwaLHs.js";import"./step-BNEQKmaP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DvU5M9qH.js";import"./useAnimationId-hkXeXWT6.js";import"./ActivePoints-CH_dCX-F.js";import"./Dot-DmEXtJXC.js";import"./RegisterGraphicalItemId-BA80SMDx.js";import"./ErrorBarContext-BE4oep3j.js";import"./GraphicalItemClipPath-B6_R3NgE.js";import"./SetGraphicalItem-DoaJ7VXW.js";import"./getRadiusAndStrokeWidthFromDot-DyhskonW.js";import"./ActiveShapeUtils-DGHBRMQa.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
