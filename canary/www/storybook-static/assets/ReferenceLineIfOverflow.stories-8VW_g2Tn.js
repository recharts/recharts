import{R as e}from"./iframe-upOKpTfC.js";import{R as n}from"./zIndexSlice-3kJy4_5s.js";import{C as p}from"./ComposedChart-XkmqlV9y.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DwehoHuO.js";import{X as f}from"./XAxis-g3--B4Im.js";import{Y as l}from"./YAxis-0bXs_H74.js";import{L as d}from"./Line-C6XO9CBA.js";import{R as h}from"./ReferenceLine-CmEPFEi7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DFA1f5tU.js";import"./index-fzhcIN9D.js";import"./index-BjDbck5L.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-C5MbGZTR.js";import"./isWellBehavedNumber-DrMtPoxC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BGh022Wu.js";import"./index-C-2GXdQU.js";import"./index-Bjw8W24w.js";import"./renderedTicksSlice-_aeWYehA.js";import"./axisSelectors-Bm__5HSH.js";import"./d3-scale-BoRQfYQu.js";import"./CartesianChart-C0cpSp27.js";import"./chartDataContext-CULDGz5L.js";import"./CategoricalChart-CtBwRsb8.js";import"./CartesianAxis-CO3H2wW4.js";import"./Layer-Bv6NwOOo.js";import"./Text-CuI103ie.js";import"./DOMUtils-BQfF-HWt.js";import"./Label-CWWfz4NX.js";import"./ZIndexLayer-CN5osLDH.js";import"./types-Bdshst7h.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-D2bD0YW0.js";import"./step-DhetwtCK.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DNy5Onjp.js";import"./useAnimationId-ypM0JLm_.js";import"./ActivePoints-CvqveQ6d.js";import"./Dot-CWeDp1FL.js";import"./RegisterGraphicalItemId-CKwYBx4V.js";import"./ErrorBarContext-BpEoBZZy.js";import"./GraphicalItemClipPath-CwmaU6d7.js";import"./SetGraphicalItem-DYmFEset.js";import"./getRadiusAndStrokeWidthFromDot-CMxxoR3Y.js";import"./ActiveShapeUtils-DdQ7UgVU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
