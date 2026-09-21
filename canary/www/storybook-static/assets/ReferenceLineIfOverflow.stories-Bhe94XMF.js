import{R as e}from"./iframe-BGOT0UMq.js";import{R as a}from"./zIndexSlice-BPU0EfFx.js";import{C as p}from"./ComposedChart-Cn5XstS9.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Cg8yM-IZ.js";import{X as f}from"./XAxis-Cg--p2uq.js";import{Y as l}from"./YAxis-Ce9ej7bF.js";import{L as d}from"./Line-JD7ySvzw.js";import{R as h}from"./ReferenceLine-CkJlyDw9.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-gIJqAgIK.js";import"./index-hikMEuKp.js";import"./index-NAo39Q3o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BSwwqvcB.js";import"./isWellBehavedNumber-BnpxWTLo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CjrWTlpw.js";import"./axisSelectors-Wq_jv7lJ.js";import"./d3-scale-BPTXd-TV.js";import"./index-DfHr9lQU.js";import"./index-DlwvoXAU.js";import"./renderedTicksSlice-CgKWkcXA.js";import"./index-_Ok-JjZj.js";import"./CartesianChart-TgiGuVC0.js";import"./chartDataContext-Bp5THtgE.js";import"./CategoricalChart-CqDZ11FZ.js";import"./CartesianAxis-hSXvCGlw.js";import"./Layer-C_IgQKNN.js";import"./Text-D50SBSje.js";import"./DOMUtils-DS3nE711.js";import"./useId-DPA6djN8.js";import"./useBackwardsCompatibleTheme-BNqsR3kp.js";import"./Label-BU1lFQ2f.js";import"./ZIndexLayer-Bo4GMA0B.js";import"./types-B69giCR1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DVizwtjl.js";import"./step-B3HmNN3j.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DLd27jVc.js";import"./useAnimationId-B8wYOiNY.js";import"./ActivePoints-qLhVMlGM.js";import"./Dot-CUw-BquZ.js";import"./RegisterGraphicalItemId-CDcrkiRG.js";import"./ErrorBarContext-C9R0WBsq.js";import"./GraphicalItemClipPath-CPiocMLU.js";import"./SetGraphicalItem-C3s6q2T3.js";import"./getRadiusAndStrokeWidthFromDot-C5RVjXgj.js";import"./ActiveShapeUtils-DjoIgzDR.js";import"./useGraphicalItemIdentity-NEokAZII.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
