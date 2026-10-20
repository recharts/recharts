import{R as e}from"./iframe-DtNEXb77.js";import{R as i}from"./zIndexSlice-C61cTRUd.js";import{C as n}from"./ComposedChart-D7gBmB-e.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DQ51llt0.js";import{X as s}from"./XAxis-B8fOHSNk.js";import{Y as c}from"./YAxis-BIfcFYbQ.js";import{L as d}from"./Line-B2PHvqdd.js";import{R as g}from"./ReferenceLine-DNlxkr3d.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DHRCkM2S.js";import"./index-DqUzV6Pu.js";import"./index-Da1Kct3U.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ci1CA8vh.js";import"./isWellBehavedNumber-C5_DATUj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3jS1aTx.js";import"./axisSelectors-CRqNtGDu.js";import"./d3-scale-4c7z9Afg.js";import"./index-By0oCmzG.js";import"./index-B8VSKNpf.js";import"./renderedTicksSlice-BLHzyPiU.js";import"./index-BsnYyY0R.js";import"./CartesianChart-Bw3KaQeV.js";import"./chartDataContext-BMn1S1Pl.js";import"./CategoricalChart-IPQiQcsO.js";import"./CartesianAxis-BqiHJNgo.js";import"./Layer-809xSg6I.js";import"./Text-M6NyH5bl.js";import"./pageBackground-CwZqZ7-z.js";import"./useId-fj0geEgf.js";import"./useBackwardsCompatibleTheme-By9gF9DG.js";import"./Label-9NLOMOhr.js";import"./ZIndexLayer-CBx6DJIh.js";import"./types-CsDLwvl0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-C4o5b1LX.js";import"./step-DBGMRA4B.js";import"./path-DyVhHtw_.js";import"./activeStyles-BtinU4U_.js";import"./useAnimationId-B5nilSLl.js";import"./dataEntryStyles-DdoWImTb.js";import"./ActivePoints-Cq7N-Rzx.js";import"./Dot-wiF8eMia.js";import"./ErrorBarContext-Cs-Qof9d.js";import"./GraphicalItemClipPath-D1LTNIcZ.js";import"./SetGraphicalItem-CBRl2Ktm.js";import"./getRadiusAndStrokeWidthFromDot-50sO_gfq.js";import"./ActiveShapeUtils-CKa9wY87.js";import"./useEffectiveDataKey-BFzz_xKL.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
