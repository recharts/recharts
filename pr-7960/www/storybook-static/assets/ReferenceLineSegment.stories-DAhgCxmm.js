import{R as e}from"./iframe-BqTe2UMP.js";import{R as i}from"./zIndexSlice-GTynhOsS.js";import{C as n}from"./ComposedChart-BWB9SKNi.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CCujIa1V.js";import{X as s}from"./XAxis-BFKvA3gZ.js";import{Y as c}from"./YAxis-D_xFHHwS.js";import{L as d}from"./Line-wMnln6I9.js";import{R as g}from"./ReferenceLine-B0pfH0BR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-PmeTbXwQ.js";import"./index-CM2oe_lg.js";import"./index-CG7aEEME.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-1c7_8SpD.js";import"./isWellBehavedNumber-BqrJeuDz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWqjI8ow.js";import"./axisSelectors-lM2vG64O.js";import"./d3-scale-DWaVLjKI.js";import"./index-DCgfcJWI.js";import"./index-CwY_lGiF.js";import"./renderedTicksSlice-CNIelq8e.js";import"./index-2KC7EUkH.js";import"./CartesianChart-BNeCXpfh.js";import"./chartDataContext-Bf8mKNm_.js";import"./CategoricalChart-D6_cM4w9.js";import"./CartesianAxis-DbBZeFb1.js";import"./Layer-BZqCsxZY.js";import"./Text-DWSqExsy.js";import"./pageBackground-CkUHzRfu.js";import"./useId-C8HkpFIm.js";import"./useBackwardsCompatibleTheme-B_ORpNqj.js";import"./Label-C4tYPzVx.js";import"./ZIndexLayer-CvPcnuan.js";import"./types-YR4m-55g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DW1_vQIY.js";import"./step-BBQ8ZX6a.js";import"./path-DyVhHtw_.js";import"./activeStyles-A8WZQcUr.js";import"./useAnimationId-D1_C1lZo.js";import"./dataEntryStyles-jb_0UPIc.js";import"./ActivePoints-B0febV6B.js";import"./Dot-jbPDGXVe.js";import"./ErrorBarContext-D6ZWbiIN.js";import"./GraphicalItemClipPath-B2ZrWFWd.js";import"./SetGraphicalItem-BGuonubA.js";import"./getRadiusAndStrokeWidthFromDot-Ddhrr2Nr.js";import"./ActiveShapeUtils-gWmw8qk4.js";import"./useEffectiveDataKey-x1RSS2yk.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
