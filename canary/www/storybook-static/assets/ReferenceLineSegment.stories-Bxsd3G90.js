import{R as e}from"./iframe-C1szs8Ge.js";import{R as i}from"./zIndexSlice-2Z2wgmDW.js";import{C as n}from"./ComposedChart-CENNwY7-.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-C1NQ-B2u.js";import{X as s}from"./XAxis-DAR-gQPA.js";import{Y as c}from"./YAxis-BL_YScKz.js";import{L as d}from"./Line-BHGjXSGr.js";import{R as g}from"./ReferenceLine-DBnrdAQB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CIiYtXni.js";import"./throttle-BnhEbDBT.js";import"./index-Bs58vI0d.js";import"./index-DcPa8fOp.js";import"./RechartsWrapper-xd3kaPdN.js";import"./axisSelectors-D9npcJPs.js";import"./polarAxisSelectors-Du9qp_Aq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D4TUcbxA.js";import"./index-CRFlBobz.js";import"./index-D0v9EDwx.js";import"./renderedTicksSlice-CTsziWKi.js";import"./index-BmvynZon.js";import"./CartesianChart-CXVzGtkA.js";import"./ZIndexPortal-DqFnA3uG.js";import"./CategoricalChart-dJgQ9xv_.js";import"./CartesianAxis-8dKjDOC0.js";import"./Layer-KO-TauTm.js";import"./Text-BAXgr8vS.js";import"./DOMUtils-DrwuOTMG.js";import"./ZIndexLayer-n44qhyKx.js";import"./Label-DKy-t54T.js";import"./types-DbKLPbYB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Curve-BGMmiUdq.js";import"./step-CEIdKdZW.js";import"./path-DyVhHtw_.js";import"./LabelList-iP8lFrAf.js";import"./ActivePoints-CPsO1qxs.js";import"./Dot-DMbI3mI2.js";import"./activeStyles-CqRrjByh.js";import"./useAnimationId-Cg9ej0wY.js";import"./dataEntryStyles-D1ZH1qoE.js";import"./Symbols-By-_RD8m.js";import"./symbol-D-xguMnA.js";import"./ErrorBarContext-C-G-Mak5.js";import"./SetGraphicalItem-DIZkXs21.js";import"./getRadiusAndStrokeWidthFromDot-DKxug9PK.js";import"./ActiveShapeUtils-Cmzt23TH.js";import"./useEffectiveDataKey-SSLwUhsN.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,he as __namedExportsOrder,fe as default};
