import{e}from"./iframe-NQnSavsc.js";import{R as n}from"./arrayEqualityCheck-ClUhvVMc.js";import{C as s}from"./ComposedChart-CtfPGNRU.js";import{C as p}from"./CartesianGrid-uwgsZBij.js";import{X as c}from"./XAxis-BVWUh-i7.js";import{Y as f}from"./YAxis-B4mT5_6h.js";import{R as l}from"./ReferenceDot-DNXAeaLU.js";import{R as h}from"./RechartsHookInspector-CrS4ifUj.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-clR4-9At.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BFx6ycKR.js";import"./hooks-BcaLrk1Y.js";import"./axisSelectors-GttesoX_.js";import"./zIndexSlice-nS_oTVB0.js";import"./CartesianChart-DsO03C2-.js";import"./chartDataContext-BPtWcoks.js";import"./CategoricalChart--MZ7Ud20.js";import"./CartesianAxis-BxH1zk3Y.js";import"./Layer-BUJpEzYu.js";import"./Text-s16izCJe.js";import"./DOMUtils-hORVmOPR.js";import"./Label-CdLQa_Zq.js";import"./ZIndexLayer-D7r7UDo0.js";import"./types-Ditu6fq2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DSKTAfka.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CtOaP7ae.js";import"./ChartSizeDimensions-BZdR1kHO.js";import"./OffsetShower-CoGf8iJT.js";import"./PlotAreaShower-CFMI3s33.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
