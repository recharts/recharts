import{R as e}from"./iframe-CovNYYUo.js";import{R as a}from"./zIndexSlice-CG1QRjTL.js";import{C as p}from"./ComposedChart-DrZWGeZy.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dp78tYlU.js";import{X as f}from"./XAxis-Chp7Zboz.js";import{Y as l}from"./YAxis-C8zfjK9y.js";import{L as d}from"./Line-CMjTMYY1.js";import{R as h}from"./ReferenceLine-zidmlXhz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DFV15FmS.js";import"./index-BOOo10Dt.js";import"./index-BX1OwXWy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C3KXfaUm.js";import"./isWellBehavedNumber-CBjh5bWe.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CcAFjHOR.js";import"./axisSelectors-DLPfwtJa.js";import"./d3-scale-8-fomhbE.js";import"./index-CJEqzZUU.js";import"./index-QRiHEery.js";import"./renderedTicksSlice-CESc-GFX.js";import"./index-B2LjI-r6.js";import"./CartesianChart-90if4UGz.js";import"./chartDataContext-H-ub9DU9.js";import"./CategoricalChart-BDIwdK2u.js";import"./CartesianAxis--m_-6qlQ.js";import"./Layer-DKlwDXlR.js";import"./Text-DEuItJ4K.js";import"./DOMUtils-De4xq-vL.js";import"./useId-Cjo1HJUq.js";import"./useBackwardsCompatibleTheme-DN97qP5V.js";import"./Label-9Le1xeRu.js";import"./ZIndexLayer-ZvhdQo8-.js";import"./types-KNQCcPDF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CpiWutfx.js";import"./step-CsDIgpPD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CJ9rAey6.js";import"./useAnimationId-JaizdS8W.js";import"./ActivePoints-D3M5ri8z.js";import"./Dot-DDfjuoX5.js";import"./RegisterGraphicalItemId-Bcqk9WK5.js";import"./ErrorBarContext-QhTrXeZ4.js";import"./GraphicalItemClipPath-Ba1ve3pE.js";import"./SetGraphicalItem-CMRsJ6yg.js";import"./getRadiusAndStrokeWidthFromDot-DnZmCba8.js";import"./ActiveShapeUtils-D5kbOuDR.js";import"./useGraphicalItemIdentity-Dsva0Zcm.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
