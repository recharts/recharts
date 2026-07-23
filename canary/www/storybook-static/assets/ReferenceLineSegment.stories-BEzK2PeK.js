import{R as e}from"./iframe-DRSW8ue2.js";import{R as i}from"./zIndexSlice-Bu-rrRtT.js";import{C as a}from"./ComposedChart-kVHcj-R_.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DmzPENvO.js";import{X as s}from"./XAxis-CC1uze90.js";import{Y as c}from"./YAxis-B6_VA_0t.js";import{L as d}from"./Line-BDixv5uA.js";import{R as g}from"./ReferenceLine-B_iZM7uK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CUiRuHKg.js";import"./index-90eqwCh0.js";import"./index-p0Ur2FF4.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-raTiTqbb.js";import"./isWellBehavedNumber-DAnude9s.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DT9xTVvF.js";import"./index-CyOXcHUd.js";import"./index-iUHBfWdS.js";import"./renderedTicksSlice-Dq99djjA.js";import"./axisSelectors-D9B32UgG.js";import"./d3-scale-C6_vDDuq.js";import"./CartesianChart-CHa2q2rq.js";import"./chartDataContext-BFVcvsqe.js";import"./CategoricalChart-CyaAwA7K.js";import"./CartesianAxis-CAXmUWDV.js";import"./Layer-BXqs-IsN.js";import"./Text-DjqRVUg-.js";import"./DOMUtils-CyGXHzmH.js";import"./Label-DWIM-PiW.js";import"./ZIndexLayer-CrpBbv8w.js";import"./types-CaXHGphp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-BBQJYMka.js";import"./step-D-9g_k4w.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dm8lwSRg.js";import"./useAnimationId-Dnplssp6.js";import"./ActivePoints-Bj6N22Y9.js";import"./Dot-BBNcCK9J.js";import"./RegisterGraphicalItemId-D6Xem68n.js";import"./ErrorBarContext-CZiW4Ksz.js";import"./GraphicalItemClipPath-D8tm2vL2.js";import"./SetGraphicalItem-CM2WyRpW.js";import"./getRadiusAndStrokeWidthFromDot-BL9YvDb6.js";import"./ActiveShapeUtils-CyqwB66-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
