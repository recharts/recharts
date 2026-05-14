import{e}from"./iframe-Dx3F1CSe.js";import{R as n}from"./arrayEqualityCheck-DMaNZfsY.js";import{C as s}from"./ComposedChart-CNQE5BNL.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Uf5nVG_Q.js";import{X as f}from"./XAxis-DSoOfFVG.js";import{Y as l}from"./YAxis-XfxcBWOr.js";import{R as h}from"./ReferenceDot-CTncYF6n.js";import{R as d}from"./RechartsHookInspector-BAwm_Fvn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CXoJrQ_A.js";import"./immer-CPegyDWk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_B5nhKu.js";import"./index-BeZ_ypUT.js";import"./hooks-aYl0koFW.js";import"./axisSelectors-DmW2duOw.js";import"./d3-scale-BnGwHyKU.js";import"./zIndexSlice-CPXQUw6s.js";import"./renderedTicksSlice-S30Bo7Xq.js";import"./CartesianChart-2VGagNAy.js";import"./chartDataContext-CVXqCkfR.js";import"./CategoricalChart-ByIQfQbt.js";import"./CartesianAxis-CgkE7jBY.js";import"./Layer-BatgHwMu.js";import"./Text-ClY5nVeB.js";import"./DOMUtils-Bny8fRsV.js";import"./Label-B3UU_HSI.js";import"./ZIndexLayer-BTGGDCgU.js";import"./types-Fk51O_d2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DyEp_Y2i.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DBIJZBCi.js";import"./ChartSizeDimensions-CO9342qd.js";import"./OffsetShower-C0Ua3cjt.js";import"./PlotAreaShower-jcM5E0P2.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
