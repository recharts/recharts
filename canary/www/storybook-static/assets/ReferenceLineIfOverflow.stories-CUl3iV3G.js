import{R as e}from"./iframe-CMVuz_WR.js";import{R as a}from"./zIndexSlice-Bu9BgD7f.js";import{C as p}from"./ComposedChart-BHXT81yI.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dt5f8TE4.js";import{X as f}from"./XAxis-Dls2O1nz.js";import{Y as l}from"./YAxis-DhZVcnhy.js";import{L as d}from"./Line-BqUMG49z.js";import{R as h}from"./ReferenceLine-C3EYId-z.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BD5EEuEt.js";import"./index-8182fU53.js";import"./index-bZstop0p.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DlgO1mgX.js";import"./isWellBehavedNumber-DZvjV6rT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-i8SteWdh.js";import"./axisSelectors-D6i4LlUB.js";import"./d3-scale-BJGJFwwk.js";import"./index-t37cwTj5.js";import"./index-BjTWdNOV.js";import"./renderedTicksSlice-CIeJUrxO.js";import"./index-CqRVWfEr.js";import"./CartesianChart-C05zOa_e.js";import"./chartDataContext-zZnvxmy2.js";import"./CategoricalChart-C-sUxYeh.js";import"./CartesianAxis-aP0rvO-w.js";import"./Layer-BNHnjhAQ.js";import"./Text-_Yf6eN5X.js";import"./DOMUtils-ClFVphvT.js";import"./useId-BNZP75Mi.js";import"./useBackwardsCompatibleTheme-YE2IG8yO.js";import"./Label-BusuXXbv.js";import"./ZIndexLayer-CC6O4jFa.js";import"./types-C-qBJNve.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Br63M5mM.js";import"./step-D1p4WhbU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BtNlpq_I.js";import"./useAnimationId-DpagfNvu.js";import"./ActivePoints-Ct1HkDqz.js";import"./Dot-BH3mzIrp.js";import"./RegisterGraphicalItemId-CX_ikIzR.js";import"./ErrorBarContext-Bf0CG0PF.js";import"./GraphicalItemClipPath-Dm_wDd6O.js";import"./SetGraphicalItem-B2N4WPPi.js";import"./getRadiusAndStrokeWidthFromDot-D4x4O6vv.js";import"./ActiveShapeUtils-Ce44UUga.js";import"./useGraphicalItemIdentity-Czg2hm9T.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
