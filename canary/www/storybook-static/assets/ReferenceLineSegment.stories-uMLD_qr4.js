import{R as e}from"./iframe-DwjhlfMW.js";import{R as i}from"./zIndexSlice-B1eqx357.js";import{C as n}from"./ComposedChart-Bfl28-Ka.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-jvsmUCUA.js";import{X as s}from"./XAxis-BypJb1q6.js";import{Y as c}from"./YAxis-DCYSznIj.js";import{L as d}from"./Line-LIz09oAh.js";import{R as g}from"./ReferenceLine-DKNCO4vZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-KAp-qu0T.js";import"./index-DEuGyOjS.js";import"./index-BGwBnv2j.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CEwq-pLy.js";import"./isWellBehavedNumber-Ck5vetYF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DfYeCvHJ.js";import"./axisSelectors-BLfWrXUN.js";import"./d3-scale-ONQE_M5R.js";import"./index-1dx-TPak.js";import"./index-u7UrDuUK.js";import"./renderedTicksSlice-CYiI8XB-.js";import"./index-Di1osVNT.js";import"./CartesianChart-nX1tU7iU.js";import"./chartDataContext-CIXOSwbU.js";import"./CategoricalChart-C8RwzjmY.js";import"./CartesianAxis-_QUC34Jt.js";import"./Layer-Pu2wX4UR.js";import"./Text-Fn7sKK4t.js";import"./DOMUtils-DNcH8Otg.js";import"./useId-CjpXrJxi.js";import"./useBackwardsCompatibleTheme-B5uR-87m.js";import"./Label-CDX3QCgQ.js";import"./ZIndexLayer-D63gMRTb.js";import"./types-BUORd8J7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CZFfEwwz.js";import"./step-DEQntpmi.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-0LuF_asA.js";import"./useAnimationId-AvDok9ug.js";import"./ActivePoints-CmID2-UK.js";import"./Dot-_dbDJcAj.js";import"./RegisterGraphicalItemId-LQahHGMW.js";import"./ErrorBarContext-D4j3Tcrr.js";import"./GraphicalItemClipPath-HnyZhYrt.js";import"./SetGraphicalItem-Ci5JV0yp.js";import"./getRadiusAndStrokeWidthFromDot-01qAW-aB.js";import"./ActiveShapeUtils-CRTLiydv.js";import"./useGraphicalItemIdentity-DLGtb43T.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
