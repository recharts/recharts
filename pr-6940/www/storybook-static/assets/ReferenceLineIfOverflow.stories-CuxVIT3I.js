import{e}from"./iframe-C0b843bJ.js";import{R as n}from"./arrayEqualityCheck-Cbemodpd.js";import{C as p}from"./ComposedChart-E69Ihgri.js";import{C as s}from"./CartesianGrid-D40AEZku.js";import{X as c}from"./XAxis-ARyNq3Ww.js";import{Y as f}from"./YAxis-DsEQlDV3.js";import{L as l}from"./Line-CONzMbmN.js";import{R as d}from"./ReferenceLine-DzLR6J8A.js";import{R as h}from"./RechartsHookInspector-CBnKyMAv.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DhRhZ63O.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CO19iou7.js";import"./hooks-dTw7M1vz.js";import"./axisSelectors-qWILVFYf.js";import"./zIndexSlice-B8FeRzdW.js";import"./CartesianChart-7cy0WoRj.js";import"./chartDataContext-Btc_iGmV.js";import"./CategoricalChart-Bd7xSF-i.js";import"./CartesianAxis-By4zoTN4.js";import"./Layer-purCCvV2.js";import"./Text-rJUU6KZ4.js";import"./DOMUtils-C0s6ZPvi.js";import"./Label-2fZ2yvU7.js";import"./ZIndexLayer-_DstmVXN.js";import"./types-B5P-qikU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BUf380BK.js";import"./ActivePoints-CAaIfO7d.js";import"./Dot-Cu4RS_WI.js";import"./RegisterGraphicalItemId-BWOfQp6C.js";import"./ErrorBarContext-CEzzcyRd.js";import"./GraphicalItemClipPath-BXQrJ9Pv.js";import"./SetGraphicalItem-BrMK-Pyd.js";import"./useAnimationId-D7FQIEyi.js";import"./getRadiusAndStrokeWidthFromDot-lRyTFf8t.js";import"./ActiveShapeUtils-BcJOrbCg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4tB6UmQ.js";import"./Trapezoid-CtFJUH4H.js";import"./Sector-C0mFPEM4.js";import"./Symbols-C_e-ILSN.js";import"./Curve-Bs2FAeTM.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-lXdD0Nzr.js";import"./ChartSizeDimensions-DcGIh6Y9.js";import"./OffsetShower-1eskoS1A.js";import"./PlotAreaShower-8zrELIBX.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
