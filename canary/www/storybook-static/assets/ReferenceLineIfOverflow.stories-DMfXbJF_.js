import{e}from"./iframe-B9fQ2oqm.js";import{R as n}from"./arrayEqualityCheck-BL4DC-lX.js";import{C as p}from"./ComposedChart-D_5yxs5_.js";import{C as s}from"./CartesianGrid-DlVZn37a.js";import{X as c}from"./XAxis-C_-a0rcx.js";import{Y as f}from"./YAxis-DLGPf3is.js";import{L as l}from"./Line-Cd_NmmRF.js";import{R as d}from"./ReferenceLine-B9ZiDtPN.js";import{R as h}from"./RechartsHookInspector-Bgd-A5WA.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-I2gIUEIG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cj27l0cc.js";import"./hooks-CgvDvD0u.js";import"./axisSelectors-WDcSlsrb.js";import"./zIndexSlice-Dtm-TxeQ.js";import"./renderedTicksSlice-BpKCGg5r.js";import"./CartesianChart-BNj2fWwb.js";import"./chartDataContext-C4zbKrr2.js";import"./CategoricalChart-vuUHc2U_.js";import"./CartesianAxis-IX04Fc3e.js";import"./Layer-Be_YD9cf.js";import"./Text-CtxM0wos.js";import"./DOMUtils-fTKYrial.js";import"./Label-CAIiijl8.js";import"./ZIndexLayer-sFj17QWh.js";import"./types-CGGhjhj7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-C4s4yAkw.js";import"./ActivePoints-vM53PnMo.js";import"./Dot-D-_UDvP8.js";import"./RegisterGraphicalItemId-DqMQRK17.js";import"./ErrorBarContext-B0P8b6XD.js";import"./GraphicalItemClipPath-C2gRI9rX.js";import"./SetGraphicalItem-MN_yffMw.js";import"./useAnimationId-ixpsepmW.js";import"./getRadiusAndStrokeWidthFromDot-BzQWgG8S.js";import"./ActiveShapeUtils-B57xr0Gy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-H10qCiiT.js";import"./Trapezoid-DsuehI9k.js";import"./Sector-C5PqXP9J.js";import"./Symbols-B8Ovocri.js";import"./Curve-BO7IcGeE.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DpQlVcWs.js";import"./ChartSizeDimensions-DoVF9EA8.js";import"./OffsetShower-BUflKiRR.js";import"./PlotAreaShower-DNG_eO1L.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,he={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const we=["IfOverflow"];export{t as IfOverflow,we as __namedExportsOrder,he as default};
