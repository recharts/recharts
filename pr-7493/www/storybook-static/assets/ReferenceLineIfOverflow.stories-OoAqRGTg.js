import{R as e}from"./iframe-BWYv0W0I.js";import{R as n}from"./zIndexSlice-BZjtJtRO.js";import{C as p}from"./ComposedChart-3rsPeh8g.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-3IdHAIbq.js";import{X as f}from"./XAxis-DpTHfSKL.js";import{Y as l}from"./YAxis-DIG6TcZO.js";import{L as d}from"./Line-BatACtMg.js";import{R as h}from"./ReferenceLine-BaDY3ntn.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BPqm6WO1.js";import"./index-DTxMd3-u.js";import"./index-BcXaHiqG.js";import"./get-YpvzSERN.js";import"./resolveDefaultProps-_5I5KHm0.js";import"./isWellBehavedNumber-BvLe-n8Z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-A48iA3eZ.js";import"./index-C30dpYE2.js";import"./index-ByNF5ywv.js";import"./renderedTicksSlice-BylsjMl6.js";import"./axisSelectors-BqS5J0kn.js";import"./d3-scale-CFHPl3Hx.js";import"./CartesianChart-CWrMrl0B.js";import"./chartDataContext-8Yx6Y713.js";import"./CategoricalChart-COWvBEEg.js";import"./CartesianAxis-DUktxQyy.js";import"./Layer-Bj1H698J.js";import"./Text-z-woKoAn.js";import"./DOMUtils-CcdNUrj8.js";import"./Label-Df5r-7el.js";import"./ZIndexLayer-DFHa7v_x.js";import"./types-Dytxgf6V.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-u414SiC4.js";import"./step-FVBZPP9Y.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DhxwbWlw.js";import"./useAnimationId-CZnp92c4.js";import"./ActivePoints-_ILc4AHk.js";import"./Dot-DQMh135C.js";import"./RegisterGraphicalItemId-CK6cp7E5.js";import"./ErrorBarContext-CwrVQcWY.js";import"./GraphicalItemClipPath-lDfebASI.js";import"./SetGraphicalItem-DQ0Lh0bj.js";import"./getRadiusAndStrokeWidthFromDot-DsWQpG0J.js";import"./ActiveShapeUtils-iodju3ZT.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
