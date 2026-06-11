import{R as e}from"./iframe-seguPege.js";import{R as n}from"./zIndexSlice-Cb-1bZoU.js";import{C as p}from"./ComposedChart-DVVsB1I4.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Be1ZTGJ9.js";import{X as f}from"./XAxis-DUluPi7y.js";import{Y as l}from"./YAxis-DMmP-D66.js";import{L as d}from"./Line-B5wrNkVZ.js";import{R as h}from"./ReferenceLine-CfiWNZir.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Ae2GGYT-.js";import"./index-xMrsE0KA.js";import"./index-BwRhAzA0.js";import"./get-BPoksESJ.js";import"./resolveDefaultProps-BPZN0bld.js";import"./isWellBehavedNumber-B-pqTWs3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DyL4MUL1.js";import"./index-DLDg1yAI.js";import"./index-BwbDEThZ.js";import"./renderedTicksSlice-Di3U0Cl0.js";import"./axisSelectors-B65K-pjL.js";import"./d3-scale-EL9kUTP1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CclsakCq.js";import"./chartDataContext-ZOJ8ES_m.js";import"./CategoricalChart-DsfEFljg.js";import"./CartesianAxis-CKcebKQz.js";import"./Layer-D0gi-KwG.js";import"./Text-DMr88uBj.js";import"./DOMUtils-CAhJeY0i.js";import"./Label-Bj9fNTdt.js";import"./ZIndexLayer-E8T2jKop.js";import"./types-Dh_7L2tU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Dy50jrXo.js";import"./step-CXbb4GLS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BjEmPeVW.js";import"./useAnimationId-Bb_iGYOg.js";import"./ActivePoints-BGPZQ7DK.js";import"./Dot-JTIqjmcj.js";import"./RegisterGraphicalItemId-C1rgLQS7.js";import"./ErrorBarContext-CqxJy0tW.js";import"./GraphicalItemClipPath-D2QHuOb3.js";import"./SetGraphicalItem-QZ64RzpK.js";import"./getRadiusAndStrokeWidthFromDot-7f0lski4.js";import"./ActiveShapeUtils-YVVmXP9O.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
