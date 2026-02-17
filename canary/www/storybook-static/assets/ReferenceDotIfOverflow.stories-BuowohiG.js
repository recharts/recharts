import{e}from"./iframe-B9fQ2oqm.js";import{R as n}from"./arrayEqualityCheck-BL4DC-lX.js";import{C as s}from"./ComposedChart-D_5yxs5_.js";import{C as p}from"./CartesianGrid-DlVZn37a.js";import{X as c}from"./XAxis-C_-a0rcx.js";import{Y as f}from"./YAxis-DLGPf3is.js";import{R as l}from"./ReferenceDot-PmmkjzHg.js";import{R as h}from"./RechartsHookInspector-Bgd-A5WA.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-I2gIUEIG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cj27l0cc.js";import"./hooks-CgvDvD0u.js";import"./axisSelectors-WDcSlsrb.js";import"./zIndexSlice-Dtm-TxeQ.js";import"./renderedTicksSlice-BpKCGg5r.js";import"./CartesianChart-BNj2fWwb.js";import"./chartDataContext-C4zbKrr2.js";import"./CategoricalChart-vuUHc2U_.js";import"./CartesianAxis-IX04Fc3e.js";import"./Layer-Be_YD9cf.js";import"./Text-CtxM0wos.js";import"./DOMUtils-fTKYrial.js";import"./Label-CAIiijl8.js";import"./ZIndexLayer-sFj17QWh.js";import"./types-CGGhjhj7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-D-_UDvP8.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DpQlVcWs.js";import"./ChartSizeDimensions-DoVF9EA8.js";import"./OffsetShower-BUflKiRR.js";import"./PlotAreaShower-DNG_eO1L.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
