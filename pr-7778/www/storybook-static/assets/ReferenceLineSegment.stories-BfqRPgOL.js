import{R as e}from"./iframe-D0hbihpw.js";import{R as i}from"./zIndexSlice-BQR9Og2n.js";import{C as n}from"./ComposedChart-DG9EmM0m.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-B23msN0v.js";import{X as s}from"./XAxis-BAOUXnRk.js";import{Y as c}from"./YAxis-fB5-70kE.js";import{L as d}from"./Line-DNABoAU9.js";import{R as g}from"./ReferenceLine-CWfDoLlz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DvTX4uc0.js";import"./index-BZ9qdzrn.js";import"./index-Dh99j1-7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dmu88e8o.js";import"./isWellBehavedNumber-CZhc5lub.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CXRkLc1K.js";import"./axisSelectors-Va6d-v4h.js";import"./d3-scale-O8h2L0ph.js";import"./index-DrgC61Jv.js";import"./index-8bi5BFX5.js";import"./renderedTicksSlice-CXB8MRbw.js";import"./index-BDFJggKj.js";import"./CartesianChart-V6lubhpa.js";import"./chartDataContext-DAXrP6D1.js";import"./CategoricalChart-Byua6Cow.js";import"./CartesianAxis-DbFRpkHK.js";import"./Layer-DikASeyh.js";import"./Text-CuYqG2IB.js";import"./DOMUtils-pnmg3tR-.js";import"./useId-CqMWBNZ1.js";import"./useBackwardsCompatibleTheme-BB_m6SGU.js";import"./Label-CuFmC-Nb.js";import"./ZIndexLayer-J_UAcRhh.js";import"./types-C5BTVxoc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-ar9QbNVF.js";import"./step-DPrNd-pa.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-SbRPQVaD.js";import"./useAnimationId-qESP7nT-.js";import"./ActivePoints-CEQslcDp.js";import"./Dot-bpGHDnlK.js";import"./RegisterGraphicalItemId-DeHO2KGG.js";import"./ErrorBarContext-BWM6Th1h.js";import"./GraphicalItemClipPath-BlTfPWVo.js";import"./SetGraphicalItem-DqlrOVj_.js";import"./getRadiusAndStrokeWidthFromDot-DEVmJr6b.js";import"./ActiveShapeUtils-5v_sCHFD.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
