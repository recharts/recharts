import{R as e}from"./iframe-5yXyXnaZ.js";import{R as i}from"./zIndexSlice-BDAt33KO.js";import{C as a}from"./ComposedChart-Dwgw5DNZ.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DoTx4VAZ.js";import{X as s}from"./XAxis-DBNQ58f8.js";import{Y as c}from"./YAxis-DrQXbr6a.js";import{L as d}from"./Line-DVLh0I7m.js";import{R as g}from"./ReferenceLine-BC7bY4ac.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cv9w3d5_.js";import"./index-Bglp-BB_.js";import"./index-B8ryNKY3.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DO3cHs1F.js";import"./isWellBehavedNumber-CjXf4Ny0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DA6sibZ3.js";import"./index-BHMzx10I.js";import"./index-sztAkQPC.js";import"./renderedTicksSlice-C1OGHM2B.js";import"./axisSelectors-BXq32W01.js";import"./d3-scale-qreNZqM_.js";import"./CartesianChart-9hlK9pZx.js";import"./chartDataContext-CuGicOh1.js";import"./CategoricalChart-DQJ8zgbM.js";import"./CartesianAxis-B2yef_ws.js";import"./Layer-DvsJVPiG.js";import"./Text-CgBcsLfs.js";import"./DOMUtils-BV08T-c-.js";import"./Label-BYYKCmSa.js";import"./ZIndexLayer-DtzoUjMA.js";import"./types-D9gPTTpR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-BJjaxUht.js";import"./step-7JpJFPkO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B7Ugi4uF.js";import"./useAnimationId-C0yd1tvr.js";import"./ActivePoints-CqHCG0xk.js";import"./Dot-Dqwh_5PD.js";import"./RegisterGraphicalItemId-BWyrz_yh.js";import"./ErrorBarContext-3caAFu0Q.js";import"./GraphicalItemClipPath-C3T_bjgu.js";import"./SetGraphicalItem-ChFugbQc.js";import"./getRadiusAndStrokeWidthFromDot-CDO922ey.js";import"./ActiveShapeUtils-C8Wl3VBj.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
