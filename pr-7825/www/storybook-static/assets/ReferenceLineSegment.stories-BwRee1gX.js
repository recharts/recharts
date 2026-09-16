import{R as e}from"./iframe-DlBA_NHD.js";import{R as i}from"./zIndexSlice-BOYVZGeR.js";import{C as n}from"./ComposedChart-C_8xlH-x.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-_pYFmvqD.js";import{X as s}from"./XAxis-CN5TgDqJ.js";import{Y as c}from"./YAxis-B5aZasbZ.js";import{L as d}from"./Line-apD60rO_.js";import{R as g}from"./ReferenceLine-MenE6nsM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-EeT9c_n_.js";import"./index-2M50Q2uq.js";import"./index-CsNZB3UM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C8Ozokz2.js";import"./isWellBehavedNumber-BHQR8F7C.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-hVJCe5PM.js";import"./axisSelectors-CON7ryxt.js";import"./d3-scale-nBoiSLy0.js";import"./index-Bc4bnspn.js";import"./index-BgT2sRhI.js";import"./renderedTicksSlice-BAGWAjRI.js";import"./index-B9Sew5zo.js";import"./CartesianChart-DNfpc-WW.js";import"./chartDataContext-Dz5AUJl-.js";import"./CategoricalChart-YMws6pgL.js";import"./CartesianAxis-C833i1Hp.js";import"./Layer-DLKMiHzQ.js";import"./Text-CICH4fLL.js";import"./DOMUtils-B-Y8jIku.js";import"./useId-DfZYzD58.js";import"./useBackwardsCompatibleTheme-DZYIoyAk.js";import"./Label-Bdz7xSee.js";import"./ZIndexLayer-R1mFVhfI.js";import"./types-CqsOLULy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DRH1VSH_.js";import"./step-BzPuQicN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-KG4Q9B6N.js";import"./useAnimationId-ZOIa2F-P.js";import"./ActivePoints-B_ryvrm8.js";import"./Dot-coVzMkTm.js";import"./RegisterGraphicalItemId-DYXz-Xt3.js";import"./ErrorBarContext-ZM-eyTPM.js";import"./GraphicalItemClipPath-CLhUFps9.js";import"./SetGraphicalItem-0kKuUivG.js";import"./getRadiusAndStrokeWidthFromDot-CuoUyQpF.js";import"./ActiveShapeUtils-BF0jq83h.js";import"./useGraphicalItemIdentity-DwrMS_39.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
