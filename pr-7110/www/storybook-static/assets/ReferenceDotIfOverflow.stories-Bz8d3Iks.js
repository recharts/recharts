import{e}from"./iframe-DDWKRrqv.js";import{R as n}from"./arrayEqualityCheck-B69_8zAh.js";import{C as s}from"./ComposedChart-79X4aNc0.js";import{C as p}from"./CartesianGrid-BUxTPynp.js";import{X as c}from"./XAxis-D_2M1x8X.js";import{Y as f}from"./YAxis-BdM975Hp.js";import{R as l}from"./ReferenceDot-7w_OC0oE.js";import{R as h}from"./RechartsHookInspector-DceXjH5Q.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D_DYv1p0.js";import"./immer-BOVNGK3k.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DzmWRH09.js";import"./index-Bsn1GeuN.js";import"./hooks-DMdViquZ.js";import"./axisSelectors-IRdkb48b.js";import"./d3-scale-Bur08Y-w.js";import"./zIndexSlice-BN5Gbmzf.js";import"./renderedTicksSlice-C67zSA8W.js";import"./CartesianChart-CkzL1Tm4.js";import"./chartDataContext-DtPiS87l.js";import"./CategoricalChart-g8bKJafN.js";import"./CartesianAxis-6QkrUt7M.js";import"./Layer-h3-3YPyh.js";import"./Text-BHc0cwIs.js";import"./DOMUtils-slrfpt58.js";import"./Label-NRlvBr1w.js";import"./ZIndexLayer-BwiDnk8J.js";import"./types-DOdoKNLX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-CkKJMsGk.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BsIrbSk0.js";import"./ChartSizeDimensions-FoS83u8h.js";import"./OffsetShower-CMRNvtsS.js";import"./PlotAreaShower-C4MeqViy.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
