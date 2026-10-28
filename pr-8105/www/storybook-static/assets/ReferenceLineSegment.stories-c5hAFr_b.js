import{R as e}from"./iframe-BMnEk6rk.js";import{R as i}from"./zIndexSlice-AHK2lLDY.js";import{C as n}from"./ComposedChart-DXU97qLG.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BgeAcGhx.js";import{X as s}from"./XAxis-DO8MMAbO.js";import{Y as c}from"./YAxis-Bg-R0mkd.js";import{L as d}from"./Line-uhUVV2ZJ.js";import{R as g}from"./ReferenceLine-C9Ojswns.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B_QljJZX.js";import"./throttle-BLJmRI7W.js";import"./index-lkPNhlVs.js";import"./index-Bttv8G3u.js";import"./RechartsWrapper-D4g7WfzD.js";import"./axisSelectors-p5JtpZwX.js";import"./polarAxisSelectors-CeZI25QH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CFf5tOkL.js";import"./index-DVw0VuQJ.js";import"./index-Bk611d1z.js";import"./renderedTicksSlice-CBxoq99O.js";import"./index-Cs2FdYvJ.js";import"./CartesianChart-D8VYP9Px.js";import"./ZIndexPortal-BccU1gyk.js";import"./CategoricalChart-CejU0SpF.js";import"./CartesianAxis-1xDTwGjL.js";import"./Layer-DhQvAzDq.js";import"./Text-C8Qyn2EQ.js";import"./pageBackground-CtZK7idk.js";import"./ZIndexLayer-B5NKkV0N.js";import"./Label-h8wQzOus.js";import"./types-BEqbC_4a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-D8kPdRuj.js";import"./step-OCTxecjD.js";import"./path-DyVhHtw_.js";import"./LabelList-Dd3JyrGq.js";import"./ActivePoints-BPIJeIuh.js";import"./Dot-BOMHkylR.js";import"./activeStyles-DlaO21qO.js";import"./useAnimationId-Ctda-hFk.js";import"./dataEntryStyles-DegCLzhf.js";import"./Symbols-H6KF7Fzl.js";import"./symbol-BrVg2837.js";import"./ErrorBarContext-dq2106Y0.js";import"./SetGraphicalItem-C1JNOq53.js";import"./getRadiusAndStrokeWidthFromDot-BNTnGfox.js";import"./ActiveShapeUtils-BwTzV5YZ.js";import"./useEffectiveDataKey-DQstj3az.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
