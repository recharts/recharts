import{R as e}from"./iframe-DUrcY2US.js";import{R as n}from"./zIndexSlice-D23NNcc-.js";import{C as p}from"./ComposedChart-BFk3L6F0.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BWcvMaBJ.js";import{X as f}from"./XAxis-CVek6dQA.js";import{Y as l}from"./YAxis-BFaz6XgS.js";import{L as d}from"./Line-aGtxROI3.js";import{R as h}from"./ReferenceLine-CYrND_S1.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-u55YHgne.js";import"./index-CZQ13dE7.js";import"./index-DfVYeqBk.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bkhh-EU7.js";import"./isWellBehavedNumber-U-rEAUF7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-FovoggR2.js";import"./index-CeyJFFE6.js";import"./index-CE9cEvcF.js";import"./renderedTicksSlice-BAoXnBM4.js";import"./axisSelectors-BmIoikMn.js";import"./d3-scale-CjT_6rZL.js";import"./CartesianChart-UL0Qt6Ls.js";import"./chartDataContext-BTSN0B0I.js";import"./CategoricalChart-BS_7Qovh.js";import"./CartesianAxis-jsyQa0HM.js";import"./Layer-CYHvsOgc.js";import"./Text-DMamusUo.js";import"./DOMUtils-B_GdkGLj.js";import"./Label-Dq5ZDKy5.js";import"./ZIndexLayer-bKTnWuHr.js";import"./types-BMr8FEQl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CuMyGQ3o.js";import"./step-C_R_L_9o.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BfwNRs0j.js";import"./useAnimationId-DrcrHxjP.js";import"./ActivePoints-CxX0cO8w.js";import"./Dot-CQSe7hSi.js";import"./RegisterGraphicalItemId-BwmS1f__.js";import"./ErrorBarContext-Dl94M6VN.js";import"./GraphicalItemClipPath-BTF9cLBi.js";import"./SetGraphicalItem-CXjv9Cz3.js";import"./getRadiusAndStrokeWidthFromDot-CXn6OxOm.js";import"./ActiveShapeUtils-DSfcbHhF.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const le=["IfOverflow"];export{t as IfOverflow,le as __namedExportsOrder,fe as default};
