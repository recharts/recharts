import{R as e}from"./iframe-C1V3amVF.js";import{R as i}from"./zIndexSlice-CxDitcfM.js";import{C as n}from"./ComposedChart-B9ikdlAe.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-iPOUv6eS.js";import{X as s}from"./XAxis-CUJJeScp.js";import{Y as c}from"./YAxis-CCWiCDwe.js";import{L as d}from"./Line-DBox68tq.js";import{R as g}from"./ReferenceLine-BBFsVCuu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DLY36_v2.js";import"./index-B41u_h9l.js";import"./index-B4ZIiFXx.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-maTY1UNo.js";import"./isWellBehavedNumber-sSvUiVa0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cc-bEMHs.js";import"./axisSelectors-BX0vcNuG.js";import"./d3-scale-BOUMSuvG.js";import"./index-CssId3o7.js";import"./index-DnibiSA_.js";import"./renderedTicksSlice-D9YwC06X.js";import"./index-BGhjEBZe.js";import"./CartesianChart-6UNv2iJv.js";import"./chartDataContext-CaPayD00.js";import"./CategoricalChart-B25IDucc.js";import"./CartesianAxis-DtpXHVOF.js";import"./Layer-BYwPbOg9.js";import"./Text-C-wx4MGw.js";import"./DOMUtils-BorqH6Wm.js";import"./useId-CqxK22LB.js";import"./useBackwardsCompatibleTheme-DW9fdEyu.js";import"./Label-B5Mwu39-.js";import"./ZIndexLayer-3Hvhzeb3.js";import"./types-BJLf6sJx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DehrnztG.js";import"./step-DAx8CwGE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-aGWDQ20-.js";import"./useAnimationId-CfyL2S79.js";import"./ActivePoints-DuRb2Tsi.js";import"./Dot-CjGXKiL0.js";import"./RegisterGraphicalItemId-DC_0c8kg.js";import"./ErrorBarContext-BBO43QIU.js";import"./GraphicalItemClipPath-CMqb799B.js";import"./SetGraphicalItem-BaWbpx0v.js";import"./getRadiusAndStrokeWidthFromDot-m1wPeMBb.js";import"./ActiveShapeUtils-MAleYnD7.js";import"./useGraphicalItemIdentity-DMF19NMJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
