import{e}from"./iframe-CUlKjRv5.js";import{g as s}from"./arrayEqualityCheck-DBgCs58d.js";import{C as p}from"./ComposedChart-D68WBCYe.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-Thm5ek-6.js";import{X as l}from"./XAxis-CO_kz_i5.js";import{Y as h}from"./YAxis-CKyv_Ble.js";import{R as d}from"./ReferenceArea-B0jaB2Cg.js";import{R as x}from"./RechartsHookInspector-DIUnr0hb.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-_1GgMiat.js";import"./immer-DSTsi-PZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CERDCORy.js";import"./index-k3Ta7lxE.js";import"./hooks-CnLCGSHs.js";import"./axisSelectors-DDDlTFJI.js";import"./d3-scale-BHCIS0TK.js";import"./zIndexSlice-ygbvIPwo.js";import"./renderedTicksSlice-j7r-ksqS.js";import"./CartesianChart-DIQmD_un.js";import"./chartDataContext-CEx1iXe-.js";import"./CategoricalChart-B3EUrP3A.js";import"./CartesianAxis-BeQQMY3-.js";import"./Layer-BRPUehgK.js";import"./Text-D0vEHMRY.js";import"./DOMUtils-2QlatUUm.js";import"./Label-CsCoT34Y.js";import"./ZIndexLayer-Dzag2pwA.js";import"./types-cseKagnM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BeDuyTKv.js";import"./useAnimationId-527k5CUF.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CsGwSrdN.js";import"./ChartSizeDimensions-7oIIj1ej.js";import"./OffsetShower-CPkU8Ejw.js";import"./PlotAreaShower-BQaO0vts.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
