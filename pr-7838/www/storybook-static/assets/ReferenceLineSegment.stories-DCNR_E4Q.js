import{R as e}from"./iframe-Bo128pRc.js";import{R as i}from"./zIndexSlice-WbjY_zmo.js";import{C as n}from"./ComposedChart-Cw7mlXQ9.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CQ9c3NM-.js";import{X as s}from"./XAxis-BBTi9Quq.js";import{Y as c}from"./YAxis-Bd_441pA.js";import{L as d}from"./Line-Bnr8u_lG.js";import{R as g}from"./ReferenceLine-CFNzjMsq.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DKRp2Cpf.js";import"./index-BFq8L4Qf.js";import"./index-Cj2yGnH8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CR_Daah7.js";import"./isWellBehavedNumber-DSGzbKJq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DmrtgzWA.js";import"./axisSelectors-BYCa1KQi.js";import"./d3-scale-EUAW_uXn.js";import"./index-CTI4te1e.js";import"./index-9RfS0P5N.js";import"./renderedTicksSlice-BJhZejFa.js";import"./index-CNXfLYdJ.js";import"./CartesianChart-Df4TbwdF.js";import"./chartDataContext-BfZakhMa.js";import"./CategoricalChart-D4todBvL.js";import"./CartesianAxis-CscJTeW3.js";import"./Layer-DR8K2tDR.js";import"./Text-BFaLgVB9.js";import"./DOMUtils-DyhgREL4.js";import"./useId-DR5HNXG4.js";import"./useBackwardsCompatibleTheme-DyPyGrUA.js";import"./Label-ghQ3JhC7.js";import"./ZIndexLayer-DD1XEuiL.js";import"./types-CsIyy1S-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BOVvH2tq.js";import"./step-C7Pxf4sj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BX9wZRAd.js";import"./useAnimationId-CQmNoSKE.js";import"./ActivePoints-Bl65ih3N.js";import"./Dot-eLqrzeMr.js";import"./RegisterGraphicalItemId-CwYw7hzr.js";import"./ErrorBarContext-QkPpzvTl.js";import"./GraphicalItemClipPath-RiFLM0LL.js";import"./SetGraphicalItem-qyOUVGvM.js";import"./getRadiusAndStrokeWidthFromDot-DoOeRTU4.js";import"./ActiveShapeUtils-wH4Ic5EK.js";import"./useGraphicalItemIdentity-B2TrnUL8.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
