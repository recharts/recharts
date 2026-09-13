import{R as e}from"./iframe-Dv0y1gpD.js";import{R as i}from"./zIndexSlice-Dcg1qyEP.js";import{C as n}from"./ComposedChart-D5zGBnOn.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-55hsH-2z.js";import{X as s}from"./XAxis-DC1yM-4Y.js";import{Y as c}from"./YAxis-Bad4LtVV.js";import{L as d}from"./Line-DsKTVdZ7.js";import{R as g}from"./ReferenceLine-CGgfRCoQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DRnb1olJ.js";import"./index-CDdFi7FD.js";import"./index-CuUTphOp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BSnMxCtb.js";import"./isWellBehavedNumber-CSH4eNbA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DBZPU8BT.js";import"./axisSelectors-CWVN05a4.js";import"./d3-scale-C1I5bktH.js";import"./index-C_-lX3o6.js";import"./index-L6ZabEtj.js";import"./renderedTicksSlice-BROtRsGC.js";import"./index-D08948xk.js";import"./CartesianChart-By9n1b2a.js";import"./chartDataContext-BgIF_Hcs.js";import"./CategoricalChart-CsjQZa1B.js";import"./CartesianAxis-XZ9E7gxq.js";import"./Layer-BhVcBCwc.js";import"./Text-yCn_2ASS.js";import"./DOMUtils-BDbpPHw_.js";import"./useId-CIoPvc9K.js";import"./useBackwardsCompatibleTheme-D_XOd78A.js";import"./Label-BjJ47aqL.js";import"./ZIndexLayer-DKxKOknR.js";import"./types-DPFKMWXW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BcMDBBzU.js";import"./step-CmmDeSbO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DuOoJz7j.js";import"./useAnimationId-CIZ8sAVQ.js";import"./ActivePoints-ipJb0gdg.js";import"./Dot-jZhU2Vzn.js";import"./RegisterGraphicalItemId-Cct8Dhhi.js";import"./ErrorBarContext-W61HXda7.js";import"./GraphicalItemClipPath-C2A6ObbO.js";import"./SetGraphicalItem-bcdkfO_p.js";import"./getRadiusAndStrokeWidthFromDot-Bl_0a7Wc.js";import"./ActiveShapeUtils-Du3md58W.js";import"./useGraphicalItemIdentity-DxPaTWc4.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
