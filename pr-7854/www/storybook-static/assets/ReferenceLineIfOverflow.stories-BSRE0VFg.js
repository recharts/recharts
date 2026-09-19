import{R as e}from"./iframe-F7LhK7Eo.js";import{R as a}from"./zIndexSlice-B_tReVy-.js";import{C as p}from"./ComposedChart-mcVYsTsk.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B-JhAW37.js";import{X as f}from"./XAxis-BKvY-R-H.js";import{Y as l}from"./YAxis-CJvKQyTT.js";import{L as d}from"./Line-DaaBT1lU.js";import{R as h}from"./ReferenceLine-DyDmEhBa.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C_DYoZtt.js";import"./index-BHnugEqK.js";import"./index-D2U0SDM0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BWBKDxpl.js";import"./isWellBehavedNumber-DjIyZMF-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ay4Rio5L.js";import"./axisSelectors-u93D5o3N.js";import"./d3-scale-Cx-l4XO1.js";import"./index-C3Rm0W8c.js";import"./index-DQvCajjI.js";import"./renderedTicksSlice-B1tuu0tD.js";import"./index-BWf5kuaX.js";import"./CartesianChart-B3D6zv8Y.js";import"./chartDataContext-DhRxggLS.js";import"./CategoricalChart-D6bN-RZ3.js";import"./CartesianAxis-lENxpg_y.js";import"./Layer-DYdC0UVh.js";import"./Text-DW85mx3b.js";import"./DOMUtils-BT8dLI2y.js";import"./useId-DyKnYw8e.js";import"./useBackwardsCompatibleTheme-IFXQGVV2.js";import"./Label-Cunaqz8i.js";import"./ZIndexLayer-BeZh5IO9.js";import"./types-Cc5FeE6i.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DmoJ01pM.js";import"./step-BQbq2B-X.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-9NyDgZfV.js";import"./useAnimationId-1tb1AqGd.js";import"./ActivePoints-DqbOcZnl.js";import"./Dot-0_Q3awJ6.js";import"./RegisterGraphicalItemId-G1rEfZcP.js";import"./ErrorBarContext-Cwt6Jtd7.js";import"./GraphicalItemClipPath-DGCCZDh5.js";import"./SetGraphicalItem-DG_xI-Un.js";import"./getRadiusAndStrokeWidthFromDot-CT63cvvB.js";import"./ActiveShapeUtils-B1DBYTAd.js";import"./useGraphicalItemIdentity-CZAMumnN.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
