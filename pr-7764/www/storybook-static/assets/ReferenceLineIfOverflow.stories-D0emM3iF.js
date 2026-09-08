import{R as e}from"./iframe-BKCxgEu7.js";import{R as a}from"./zIndexSlice-DPN7gMs_.js";import{C as p}from"./ComposedChart-Dzlr49a2.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C5_wax7r.js";import{X as f}from"./XAxis-DBpqCofo.js";import{Y as l}from"./YAxis-_Uh6yuoH.js";import{L as d}from"./Line-BTQ-dt1P.js";import{R as h}from"./ReferenceLine-CGhX5fbG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-SvLRig2f.js";import"./index-C0FXEVD9.js";import"./index-ByWdUQTm.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-hjqhlyP6.js";import"./isWellBehavedNumber-4uIsFCV6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BUOX-u1t.js";import"./axisSelectors-D2VU5o1r.js";import"./d3-scale-fKLPTI5B.js";import"./index-BQwfhQz_.js";import"./index-bhQBCTAA.js";import"./renderedTicksSlice-7MFbI2Ip.js";import"./index-BL0gWy2l.js";import"./CartesianChart-Dx01wauZ.js";import"./chartDataContext-D7QilCwv.js";import"./CategoricalChart-TFuOhU4H.js";import"./CartesianAxis-CuN00Lvq.js";import"./Layer-GDBs0RPs.js";import"./Text-DbzVeL34.js";import"./DOMUtils-B8pyYDTq.js";import"./useId-DtzVtqW0.js";import"./useBackwardsCompatibleTheme-D4Zi4gsK.js";import"./Label-D0bShNKS.js";import"./ZIndexLayer-Bi2QbHjK.js";import"./types--eHqqtV8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DJnDjTkh.js";import"./step-Bha1rdtW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BXOuP06z.js";import"./useAnimationId-Dludl8d_.js";import"./ActivePoints-CP4nca60.js";import"./Dot-DKhQ94yz.js";import"./RegisterGraphicalItemId-DzHzaEjw.js";import"./ErrorBarContext-8H81gPWM.js";import"./GraphicalItemClipPath-Qfm8sxPZ.js";import"./SetGraphicalItem-BTjD6Tnz.js";import"./getRadiusAndStrokeWidthFromDot-CQKvs0EM.js";import"./ActiveShapeUtils-EGktKins.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
