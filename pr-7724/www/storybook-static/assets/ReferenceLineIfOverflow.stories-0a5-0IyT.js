import{R as e}from"./iframe-BMDGt33G.js";import{R as n}from"./zIndexSlice-DCVNKZSi.js";import{C as p}from"./ComposedChart-B_FiSDXS.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D_fcGPSa.js";import{X as f}from"./XAxis-BLwPYlxb.js";import{Y as l}from"./YAxis-Bb9GrcYH.js";import{L as d}from"./Line-DesYXgxV.js";import{R as h}from"./ReferenceLine-MjzbW9rG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DHXzdyrx.js";import"./index-CQIY09nP.js";import"./index-KK-TIT-h.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DOWWXdZM.js";import"./isWellBehavedNumber-D73nv25y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CU85gN_Z.js";import"./axisSelectors-DoXQrKNQ.js";import"./d3-scale-BLx8xy0x.js";import"./index-ubnZgXyZ.js";import"./index-B-bSR3iB.js";import"./renderedTicksSlice-D2nTsm-u.js";import"./index-BALx0JUZ.js";import"./CartesianChart-CefyJEjd.js";import"./chartDataContext-BXP4dIO1.js";import"./CategoricalChart-UAMcsDW6.js";import"./CartesianAxis-D9IiMPGB.js";import"./Layer-CjUZiXYs.js";import"./Text-DYkDw-5j.js";import"./DOMUtils-DBrlboks.js";import"./useId-D70LGxdi.js";import"./useBackwardsCompatibleTheme-DUdO4_jh.js";import"./Label-l14yVQ5q.js";import"./ZIndexLayer-CaEles3w.js";import"./types-BuxhmSle.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CIJakMM0.js";import"./step-B_y4L6H0.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DPSFxYpd.js";import"./useAnimationId-B5h3AUKS.js";import"./ActivePoints-CHdXi4sp.js";import"./Dot-CYm9TxQB.js";import"./RegisterGraphicalItemId-iJ7X__4u.js";import"./ErrorBarContext-CTZMo0d8.js";import"./GraphicalItemClipPath-BpuwakLC.js";import"./SetGraphicalItem-V8CFRMGm.js";import"./getRadiusAndStrokeWidthFromDot-CYss6dEa.js";import"./ActiveShapeUtils-EQw7SaSK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const {
      findByText
    } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ye=["IfOverflow"];export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
