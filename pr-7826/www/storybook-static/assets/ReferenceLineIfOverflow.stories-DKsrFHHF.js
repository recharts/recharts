import{R as e}from"./iframe-BXKiYcQC.js";import{R as a}from"./zIndexSlice-BkBU_0wW.js";import{C as p}from"./ComposedChart-CB-KYGEU.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CRSDtwsn.js";import{X as f}from"./XAxis-BXKhWSVM.js";import{Y as l}from"./YAxis-DRJndkYg.js";import{L as d}from"./Line-DftoaBqr.js";import{R as h}from"./ReferenceLine-B7HGUL3v.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DvwfsdC-.js";import"./index-GSTqcvk8.js";import"./index-D60lzj2N.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-xB5H15BL.js";import"./isWellBehavedNumber-B0ZNfpM9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D0jZXTe7.js";import"./axisSelectors-Dg1vgECj.js";import"./d3-scale-CKemSFI4.js";import"./index-CLqidrW7.js";import"./index-DYRjOJPU.js";import"./renderedTicksSlice-BaGELWxj.js";import"./index-BmE7GHu6.js";import"./CartesianChart-CSl2_jhz.js";import"./chartDataContext-CuS1DNow.js";import"./CategoricalChart-BhGptR4V.js";import"./CartesianAxis-D0z983kz.js";import"./Layer-csMx_Fjy.js";import"./Text-DNCWotX8.js";import"./DOMUtils-_UiVQ5Hy.js";import"./useId-C1UlWvnO.js";import"./useBackwardsCompatibleTheme-DRIVYL1M.js";import"./Label-BTmQht23.js";import"./ZIndexLayer-BcmKCBr7.js";import"./types-DfEjGV4b.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-eKtRh9tf.js";import"./step-z9dWT9Gq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CWzKwhub.js";import"./useAnimationId-DnJ1WtPs.js";import"./ActivePoints-CJCyHGsQ.js";import"./Dot-BRaUdeFo.js";import"./RegisterGraphicalItemId-BECJYOqX.js";import"./ErrorBarContext-Dq8g53R2.js";import"./GraphicalItemClipPath-CbDQFeTD.js";import"./SetGraphicalItem-DR2Q_8-D.js";import"./getRadiusAndStrokeWidthFromDot-qGxx_52s.js";import"./ActiveShapeUtils-B64LrBnv.js";import"./useGraphicalItemIdentity-Cgc4UBVs.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
