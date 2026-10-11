import{R as e}from"./iframe-B5nqGCFx.js";import{R as i}from"./zIndexSlice-fA6rJzVB.js";import{C as n}from"./ComposedChart-DwtG5NiV.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-C57lX0yd.js";import{X as s}from"./XAxis-BbfaJWKY.js";import{Y as c}from"./YAxis-BgoYMJlL.js";import{L as d}from"./Line-rcGSoU24.js";import{R as g}from"./ReferenceLine-B0uYIDWo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-8usPf-nG.js";import"./index-COQrJFEi.js";import"./index-BRJwV6Tu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DTwkyIYB.js";import"./isWellBehavedNumber-CTlIu6VQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ba7GDCRC.js";import"./axisSelectors-DRuLrEYP.js";import"./d3-scale-Cvdyq6r4.js";import"./index-D7H2LPLl.js";import"./index-C0uKubiT.js";import"./renderedTicksSlice-D3liRtIY.js";import"./index-DNc7GpB0.js";import"./CartesianChart-Bo-Bdmuv.js";import"./chartDataContext-BLw5SzU5.js";import"./CategoricalChart-BPnw4lhz.js";import"./CartesianAxis-nGdi1wTE.js";import"./Layer-SWDQGPXc.js";import"./Text-D2l9VyZ3.js";import"./pageBackground-Do8lEaLA.js";import"./useId-D5UXkky-.js";import"./useBackwardsCompatibleTheme-DdYC-jFL.js";import"./Label-Dboddtc6.js";import"./ZIndexLayer-udH7BH-f.js";import"./types-CilMbPhc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CUMSQUCB.js";import"./step-Bc1udJt4.js";import"./path-DyVhHtw_.js";import"./activeStyles-LGVgbHeS.js";import"./useAnimationId-DegqvOnN.js";import"./dataEntryStyles-CA9fGSl9.js";import"./ActivePoints-BouQ6dSD.js";import"./Dot-CdI0Le8G.js";import"./ErrorBarContext-BKhVL6zW.js";import"./GraphicalItemClipPath-RjRlios3.js";import"./SetGraphicalItem-B1zewZJg.js";import"./getRadiusAndStrokeWidthFromDot-CpJam9J5.js";import"./ActiveShapeUtils-BaXicK3x.js";import"./useGraphicalItemIdentity-C3gqRS6g.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
