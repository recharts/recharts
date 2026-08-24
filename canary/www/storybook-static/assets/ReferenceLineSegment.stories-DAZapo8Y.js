import{R as e}from"./iframe-B5plfFOD.js";import{R as i}from"./zIndexSlice-DbNmOY3-.js";import{C as a}from"./ComposedChart-DIa361yX.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DKX8upjI.js";import{X as s}from"./XAxis-BSTDbcVl.js";import{Y as c}from"./YAxis-GTebhYCm.js";import{L as d}from"./Line-ovty_Oih.js";import{R as g}from"./ReferenceLine-Ctr-a5YX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B-azr0kq.js";import"./index-PX_n5hQs.js";import"./index-CNQoj7bz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BlDjsfrB.js";import"./isWellBehavedNumber-Da64mp0K.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGezTKFK.js";import"./index-CL4khl8X.js";import"./index-Wbnw9Fvi.js";import"./axisSelectors-BLYlno2y.js";import"./d3-scale-DCKop38A.js";import"./renderedTicksSlice-BhrWC83q.js";import"./CartesianChart-DwKWqDkX.js";import"./chartDataContext-kMO755bg.js";import"./CategoricalChart-C1LQoQak.js";import"./CartesianAxis-DCr9g_ht.js";import"./Layer-ByEseNp7.js";import"./Text-CpDGg_G2.js";import"./DOMUtils-D6jyt4Vs.js";import"./useId-Bp2MS-0a.js";import"./useBackwardsCompatibleTheme-DbWiZjcQ.js";import"./Label-D1J3ucoA.js";import"./ZIndexLayer-IfT3mYts.js";import"./types-BGPhMwrg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CaJzkXTx.js";import"./step-BSKO3-IJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1lzxzMI.js";import"./useAnimationId-B-SkX0Hu.js";import"./ActivePoints-0px9-aiA.js";import"./Dot-DN6yzzHr.js";import"./RegisterGraphicalItemId-CWna7QKU.js";import"./ErrorBarContext-CLev7xWU.js";import"./GraphicalItemClipPath-Qthp7O67.js";import"./SetGraphicalItem-CTmoE1ld.js";import"./getRadiusAndStrokeWidthFromDot-bk7Qsl9y.js";import"./ActiveShapeUtils-DUhOL-u8.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
