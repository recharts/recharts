import{R as e}from"./iframe-pbo-QmUV.js";import{R as i}from"./zIndexSlice-uFV94i-F.js";import{C as n}from"./ComposedChart-DxMGwfzH.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BJc9xt0z.js";import{X as s}from"./XAxis-D3aLIvS-.js";import{Y as c}from"./YAxis-nh7YJu46.js";import{L as d}from"./Line-6O9C2MB0.js";import{R as g}from"./ReferenceLine-Bp1tTief.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-pz4AEyIn.js";import"./index-D_Ub_wFV.js";import"./index-CKUumD7T.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bn-8X6Qs.js";import"./isWellBehavedNumber-zRxxoDF3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D_F_8pjg.js";import"./axisSelectors-Ry70X2n2.js";import"./d3-scale-CHgOHIs9.js";import"./index-Cqrsc3wV.js";import"./index-DRjmG3NL.js";import"./renderedTicksSlice-DBjq58iQ.js";import"./index-CgW8Pfrl.js";import"./CartesianChart-CVXeZ94e.js";import"./chartDataContext-D8AV35hB.js";import"./CategoricalChart-C7FDKNmd.js";import"./CartesianAxis-DdLDEoN3.js";import"./Layer-Cu62JC_z.js";import"./Text-BdcAn3_A.js";import"./DOMUtils-C6RebZcO.js";import"./useId-BuOtXniO.js";import"./useBackwardsCompatibleTheme-CqO1jBVJ.js";import"./Label-DU5Wkeud.js";import"./ZIndexLayer-DMCFd0Py.js";import"./types-C5-2SUHa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-mcatnmip.js";import"./step-LTM-Duq3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems--5FH9Bfg.js";import"./useAnimationId-w92tOT6t.js";import"./ActivePoints-D9o-N645.js";import"./Dot-D4f4qHEu.js";import"./RegisterGraphicalItemId-m6HZhBI1.js";import"./ErrorBarContext-DqrAg45D.js";import"./GraphicalItemClipPath-Q1XGfFBL.js";import"./SetGraphicalItem-Dbyeimyx.js";import"./getRadiusAndStrokeWidthFromDot-CFJndDg7.js";import"./ActiveShapeUtils-ompTjO3b.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
