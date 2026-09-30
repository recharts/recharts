import{R as e}from"./iframe-CDSer5wk.js";import{R as a}from"./zIndexSlice-B-lpBScO.js";import{C as p}from"./ComposedChart-b_m8lhmT.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-ywJIirHV.js";import{X as f}from"./XAxis-CLZ8_tLg.js";import{Y as l}from"./YAxis-DN7TNoMj.js";import{L as d}from"./Line-DsDCihMT.js";import{R as h}from"./ReferenceLine-1tsExi9E.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-fnP7_niv.js";import"./index-Mdu1MT_Q.js";import"./index-DPnG0BF_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DTBx4E7L.js";import"./isWellBehavedNumber-Cbiw2L0f.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CkjZ8sdT.js";import"./axisSelectors-DSp6qoYe.js";import"./d3-scale-BNdPRZbv.js";import"./index-DV1Q8ly1.js";import"./index-SPPJq_2I.js";import"./renderedTicksSlice-Nk82yORn.js";import"./index-DbUyrogr.js";import"./CartesianChart-B7gL7VFT.js";import"./chartDataContext-SSvdGu54.js";import"./CategoricalChart-BazdXmMB.js";import"./CartesianAxis-DnSeAvbN.js";import"./Layer-BlrsPtdk.js";import"./Text-B-qlIjrY.js";import"./DOMUtils-COEpD6x9.js";import"./useId-SR9QF0F6.js";import"./useBackwardsCompatibleTheme-zogGwhJH.js";import"./Label-CDfUkOd_.js";import"./ZIndexLayer-BGJbwrqn.js";import"./types-DCfhmQQy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BrORdZJH.js";import"./step-BIecx5Me.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C7ScRxUV.js";import"./useAnimationId-DsIt1eY5.js";import"./ActivePoints-6u2iLucI.js";import"./Dot-7OP2vIm4.js";import"./RegisterGraphicalItemId-BtK15Bh8.js";import"./ErrorBarContext-DAmUJr4k.js";import"./GraphicalItemClipPath-DlXs2ztm.js";import"./SetGraphicalItem-b1y0Bklu.js";import"./getRadiusAndStrokeWidthFromDot-Bb_SzVF_.js";import"./ActiveShapeUtils-BNDheO9x.js";import"./useGraphicalItemIdentity-DX00RNhI.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
