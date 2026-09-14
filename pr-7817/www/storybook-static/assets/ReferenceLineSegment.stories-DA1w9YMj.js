import{R as e}from"./iframe-C079Nsfx.js";import{R as i}from"./zIndexSlice-DLciVaZw.js";import{C as n}from"./ComposedChart-BOV6wT6A.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-0QO_5WBI.js";import{X as s}from"./XAxis-De-1mJNj.js";import{Y as c}from"./YAxis-CLt4nzsu.js";import{L as d}from"./Line-D_FKsDxM.js";import{R as g}from"./ReferenceLine-DyhMjDOz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D3s_o_Wq.js";import"./index-DexGzJ_q.js";import"./index-zk8Wcx4z.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CabyU6Oc.js";import"./isWellBehavedNumber-CDqNrIr8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BrZlEkAN.js";import"./axisSelectors-BAri39V9.js";import"./d3-scale-BHoY9dLJ.js";import"./index-DADriLAa.js";import"./index-CQ3I_J9a.js";import"./renderedTicksSlice-DVdEowfn.js";import"./index-Duc3f3M9.js";import"./CartesianChart-BZirPUWR.js";import"./chartDataContext-VWCZx3p0.js";import"./CategoricalChart-DwP_vuON.js";import"./CartesianAxis-KliPXgnc.js";import"./Layer-Kj8YrSbz.js";import"./Text-6vWGAU42.js";import"./DOMUtils-L7J-bYO6.js";import"./useId-DU03E5LM.js";import"./useBackwardsCompatibleTheme-DGGDmwyU.js";import"./Label-DC63Ta0S.js";import"./ZIndexLayer-IY8xHCFB.js";import"./types-CUH5bwnf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-iBp1fVgP.js";import"./step-Chg4DONu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DS39RbqN.js";import"./useAnimationId-MWHCnbEb.js";import"./ActivePoints-D6LcUBQa.js";import"./Dot-mGzGAe7T.js";import"./RegisterGraphicalItemId-jBLm1jna.js";import"./ErrorBarContext-DRwIAR_a.js";import"./GraphicalItemClipPath-BbWylYdQ.js";import"./SetGraphicalItem-CzroE857.js";import"./getRadiusAndStrokeWidthFromDot-CGqoDsan.js";import"./ActiveShapeUtils-DRAmEoLS.js";import"./useGraphicalItemIdentity-D2ZyzXPv.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
