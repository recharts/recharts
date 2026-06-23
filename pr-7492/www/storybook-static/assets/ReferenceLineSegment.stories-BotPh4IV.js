import{R as e}from"./iframe-BlvZN_ps.js";import{R as i}from"./zIndexSlice-D5hgUm6A.js";import{C as a}from"./ComposedChart--jP60YbA.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DYBP8TY-.js";import{X as s}from"./XAxis-KWtoy5jB.js";import{Y as c}from"./YAxis-CfoV_oqk.js";import{L as d}from"./Line-H_lUcLKC.js";import{R as g}from"./ReferenceLine-IPMpworV.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CGkt0g8p.js";import"./index-gQ6L8YEG.js";import"./index-DqSoJz4u.js";import"./get-ChlOH98w.js";import"./resolveDefaultProps-BSk6HMjY.js";import"./isWellBehavedNumber-D-GNZTzD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DZiKfiby.js";import"./index-DM8R45IP.js";import"./index-Q4Uh5SEe.js";import"./renderedTicksSlice-D8ZDt7ph.js";import"./axisSelectors-oNKIzGeo.js";import"./d3-scale-D-SQjsd3.js";import"./CartesianChart-Czz_wvXV.js";import"./chartDataContext-hk4GvDfq.js";import"./CategoricalChart-JZ4zyfB8.js";import"./CartesianAxis-Bbwk-dKT.js";import"./Layer-BGC4J_xD.js";import"./Text-iORmPHTw.js";import"./DOMUtils-CsRoe294.js";import"./Label-DWRV51vs.js";import"./ZIndexLayer-BWby1RF4.js";import"./types-DQZAaZ_X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Bcq56GGu.js";import"./step-Cd6fl88T.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CK8w4tlK.js";import"./useAnimationId-FA58Q0Bf.js";import"./ActivePoints-DBXxGTLr.js";import"./Dot-Do_OPL_B.js";import"./RegisterGraphicalItemId-r44ao9oh.js";import"./ErrorBarContext-DIIvOPaT.js";import"./GraphicalItemClipPath-B9V208TL.js";import"./SetGraphicalItem-DGuU9f1e.js";import"./getRadiusAndStrokeWidthFromDot-sYFWnDzD.js";import"./ActiveShapeUtils-D8MF483E.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
