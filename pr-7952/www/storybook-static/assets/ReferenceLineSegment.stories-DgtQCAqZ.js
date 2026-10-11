import{R as e}from"./iframe-BR4M1uiR.js";import{R as i}from"./zIndexSlice-HrFSVAcv.js";import{C as n}from"./ComposedChart-HjQSkOyf.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CKu_uDPm.js";import{X as s}from"./XAxis-CcBq3_nh.js";import{Y as c}from"./YAxis-DWcZ5Lh0.js";import{L as d}from"./Line-BPjJBSiN.js";import{R as g}from"./ReferenceLine-Bhy4w_-A.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-G6Y8pgni.js";import"./index-Ci_VIYcH.js";import"./index-BnaGZY2I.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BLjA4bYj.js";import"./isWellBehavedNumber-D_WQYNTo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0bWwFQm.js";import"./axisSelectors-BqweAZHb.js";import"./d3-scale-CeZrfwiY.js";import"./index-YkNArcGN.js";import"./index-D8NvIHNM.js";import"./renderedTicksSlice-BfPj2XQ-.js";import"./index-CncCwIwt.js";import"./CartesianChart-q49HIkvw.js";import"./chartDataContext-BuFcKplQ.js";import"./CategoricalChart-2FTjt8Lf.js";import"./CartesianAxis-CHydPwh7.js";import"./Layer-DlfW1ESK.js";import"./Text-VnSH714e.js";import"./pageBackground-DPb5heYZ.js";import"./useId-pURs8c9G.js";import"./useBackwardsCompatibleTheme-D05qWzDc.js";import"./Label-XYAyrwIP.js";import"./ZIndexLayer-CLaDw56X.js";import"./types-B-qT5SDC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-D8aJ7Tuc.js";import"./step-CbSh2F2e.js";import"./path-DyVhHtw_.js";import"./activeStyles-WDF83Cdx.js";import"./useAnimationId-AG0wMyfL.js";import"./dataEntryStyles-DLaplEnq.js";import"./ActivePoints-BSY_3c_N.js";import"./Dot-BLsUlW8t.js";import"./ErrorBarContext-DuGO1Y_l.js";import"./GraphicalItemClipPath-yRc51fA7.js";import"./SetGraphicalItem-BfeYb81m.js";import"./getRadiusAndStrokeWidthFromDot-Cs2lmqDd.js";import"./ActiveShapeUtils-CPXOp-Yk.js";import"./useEffectiveDataKey-B_fgXjH_.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
