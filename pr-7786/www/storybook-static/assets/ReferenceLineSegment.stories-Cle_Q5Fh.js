import{R as e}from"./iframe-ZxfiIiWi.js";import{R as i}from"./zIndexSlice-By0bZmpT.js";import{C as n}from"./ComposedChart-B6tALutk.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CSncOHrx.js";import{X as s}from"./XAxis-8M4LuTq0.js";import{Y as c}from"./YAxis-Ce1Cc64q.js";import{L as d}from"./Line-DdCEipwX.js";import{R as g}from"./ReferenceLine-BsdcTGh5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CfDYUS1N.js";import"./index-DZp6XoEo.js";import"./index-DLRIqKjc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-1Uan2Hnp.js";import"./isWellBehavedNumber-DX24GKSm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-UKbeDROs.js";import"./axisSelectors-DMQ84IJA.js";import"./d3-scale-Np9PFIYo.js";import"./index-DRuu78hr.js";import"./index-6NV0E9go.js";import"./renderedTicksSlice-nc0b0sSE.js";import"./index-BgcSxEKm.js";import"./CartesianChart-v34KMzUV.js";import"./chartDataContext-D2b6BjfF.js";import"./CategoricalChart-Ls_A9xeg.js";import"./CartesianAxis-DHTAgCml.js";import"./Layer-SD6n1FzC.js";import"./Text-BxPrjmzo.js";import"./DOMUtils-CTcVRqQO.js";import"./useId-DbFmynHI.js";import"./useBackwardsCompatibleTheme-iH09SwpV.js";import"./Label-C08NNQeO.js";import"./ZIndexLayer-MDZol7np.js";import"./types-DfGxKHCw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DPtlKYb4.js";import"./step-BSgEqbWI.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C7ik5li4.js";import"./useAnimationId-Bd76uFLI.js";import"./ActivePoints--DLJoCCT.js";import"./Dot-DBOOUc-e.js";import"./RegisterGraphicalItemId-BglnUmW_.js";import"./ErrorBarContext-lXhQP1y7.js";import"./GraphicalItemClipPath-D7uJY0ae.js";import"./SetGraphicalItem-DfXzBFI9.js";import"./getRadiusAndStrokeWidthFromDot-CERp_c72.js";import"./ActiveShapeUtils-O5hE5x5h.js";import"./useGraphicalItemIdentity-Cy74xmM1.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
