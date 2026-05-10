import{e}from"./iframe-Ck9vc756.js";import{R as n}from"./arrayEqualityCheck-vzCieRp2.js";import{C as p}from"./ComposedChart-DfP8SAqH.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Brki6jMT.js";import{X as f}from"./XAxis-DhL58n8S.js";import{Y as l}from"./YAxis-CN8GVS1Z.js";import{L as d}from"./Line-BQJSgsKR.js";import{R as h}from"./ReferenceLine-Mr8j-2s4.js";import{R as w}from"./RechartsHookInspector-jYNw452D.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-nQu5Go0U.js";import"./immer-DxfnJBPA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-VxEE_HZc.js";import"./index-DcmFMlNy.js";import"./hooks-e18ms5aC.js";import"./axisSelectors-BUVUYV1B.js";import"./d3-scale-CWye4qHt.js";import"./zIndexSlice-y206Xv9r.js";import"./renderedTicksSlice-DZ5s87U9.js";import"./CartesianChart-DU17ec1s.js";import"./chartDataContext-w_xDJEY9.js";import"./CategoricalChart-dlD1y7dU.js";import"./CartesianAxis-B_BJsMJ6.js";import"./Layer-C26sMZzH.js";import"./Text-DDesK1Nf.js";import"./DOMUtils-BCDfv7vR.js";import"./Label-Crw3CPfI.js";import"./ZIndexLayer-CJ-WJ8V7.js";import"./types-BGHQe8uG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-QBrDvIPv.js";import"./ActivePoints-D7rmE1Zy.js";import"./Dot-BSnXD6GM.js";import"./RegisterGraphicalItemId-Ddc28GTk.js";import"./ErrorBarContext-wfunW0SD.js";import"./GraphicalItemClipPath-O2r-hl13.js";import"./SetGraphicalItem-Dos1M3Gw.js";import"./useAnimationId-B40SS4XH.js";import"./getRadiusAndStrokeWidthFromDot-r9WuKRbn.js";import"./ActiveShapeUtils-BEDy9_pC.js";import"./isPlainObject-BGDfWSco.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DmefmFIR.js";import"./Trapezoid-DfEdCmhW.js";import"./Sector-DK3gU8wt.js";import"./Symbols-DO4Vi22k.js";import"./symbol-DBHvF3Bk.js";import"./step-BIffBEER.js";import"./Curve-DcMGJFRD.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D1Nat1jZ.js";import"./ChartSizeDimensions-DeS7AUEB.js";import"./OffsetShower-B5SEMIpQ.js";import"./PlotAreaShower-BRBe-I_w.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,Re as default};
