import{R as e}from"./iframe-BECHMrDZ.js";import{R as n}from"./zIndexSlice-ZZYOt5ZJ.js";import{C as p}from"./ComposedChart-DEoquINt.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BweugEAK.js";import{X as f}from"./XAxis-Dnf9N0V4.js";import{Y as l}from"./YAxis-9bvi17Wq.js";import{L as d}from"./Line-NU5SWiL4.js";import{R as h}from"./ReferenceLine-CwxFFIAA.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DNeblauM.js";import"./index-DsWKibNG.js";import"./index-BdtLPmOn.js";import"./get-CPwaVA9l.js";import"./resolveDefaultProps-BtqON1I7.js";import"./isWellBehavedNumber-Zub9mv9t.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNofag6x.js";import"./index-Cdabc56c.js";import"./index-BHRyfSkK.js";import"./renderedTicksSlice-CcmJJV_E.js";import"./axisSelectors-Do_tBIrF.js";import"./d3-scale-D-I2gAvK.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BmqQmt9e.js";import"./chartDataContext-ievxR12T.js";import"./CategoricalChart-CZw-S4E-.js";import"./CartesianAxis-BTVfzskq.js";import"./Layer-ESOqu-Gc.js";import"./Text-C9QSstgR.js";import"./DOMUtils-BMatnmOn.js";import"./Label-VQOoexxL.js";import"./ZIndexLayer-dzP4UBMr.js";import"./types-n4LQ-b_y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Bn_0oI69.js";import"./step-DbGI_ztS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CQmyu7n-.js";import"./useAnimationId-BT4jYtUB.js";import"./ActivePoints-Cmc10X0Q.js";import"./Dot-C7DD26qy.js";import"./RegisterGraphicalItemId-DV64Udii.js";import"./ErrorBarContext-D2jpma0H.js";import"./GraphicalItemClipPath-BUhmAU6I.js";import"./SetGraphicalItem-DhkvModl.js";import"./getRadiusAndStrokeWidthFromDot-C9KiXcw0.js";import"./ActiveShapeUtils-LDykMPUP.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
