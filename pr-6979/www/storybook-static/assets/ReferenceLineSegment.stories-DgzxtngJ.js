import{e}from"./iframe-Bm_dlztP.js";import{R as i}from"./arrayEqualityCheck-BKx_y40S.js";import{C as a}from"./ComposedChart-DyBYNAPL.js";import{C as p}from"./CartesianGrid-D8kzHBwE.js";import{X as n}from"./XAxis-DiBdkzoV.js";import{Y as s}from"./YAxis-Dt19AUea.js";import{L as c}from"./Line-CLMa4j3x.js";import{R as d}from"./ReferenceLine-BdkayPcd.js";import{R as g}from"./RechartsHookInspector-CZNQLUTJ.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DAVx7IVS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BufFVb6a.js";import"./hooks-QfdSjeut.js";import"./axisSelectors-BUAas6a1.js";import"./zIndexSlice-Bq54Z1bK.js";import"./CartesianChart-BEFObzU7.js";import"./chartDataContext-D60asm_F.js";import"./CategoricalChart-DinCBVKr.js";import"./CartesianAxis-Df-SQWPS.js";import"./Layer-DqzpUDSE.js";import"./Text-BE0vw9O_.js";import"./DOMUtils-BT5kncNa.js";import"./Label-CDVZMFBi.js";import"./ZIndexLayer-BWJMOT1A.js";import"./types-DmFvG4SC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-278YW1x2.js";import"./ActivePoints-CYA336oa.js";import"./Dot-DVC6PvDp.js";import"./RegisterGraphicalItemId-Fy4B400g.js";import"./ErrorBarContext-DrNk0Egn.js";import"./GraphicalItemClipPath-DBcACHox.js";import"./SetGraphicalItem-C3DJs7FG.js";import"./useAnimationId-DL43TA5B.js";import"./getRadiusAndStrokeWidthFromDot-zhMizOQu.js";import"./ActiveShapeUtils-CdMwlbl5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CF3NoYDn.js";import"./Trapezoid-BcjTe3fL.js";import"./Sector-Tp_jaJNZ.js";import"./Symbols-CIac5k7Z.js";import"./Curve-D1sI4FDZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DBvu736D.js";import"./ChartSizeDimensions-vZmS1AK4.js";import"./OffsetShower-D1dBuDTC.js";import"./PlotAreaShower-CncsJcTH.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
