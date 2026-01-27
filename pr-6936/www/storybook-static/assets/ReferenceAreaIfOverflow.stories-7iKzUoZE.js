import{e}from"./iframe-BRGG-JoH.js";import{R as s}from"./arrayEqualityCheck-mIQ5hzOq.js";import{C as p}from"./ComposedChart-EtXkgG2p.js";import{C as c}from"./CartesianGrid-CAZWUUAM.js";import{X as f}from"./XAxis-Cdr81EpX.js";import{Y as l}from"./YAxis-Dr8aURmX.js";import{R as h}from"./ReferenceArea-mmIngSkn.js";import{R as d}from"./RechartsHookInspector-Ctx1w3em.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BBbl5cFh.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-9pcaaxwh.js";import"./hooks-DSsUFC43.js";import"./axisSelectors-Ru0x886W.js";import"./zIndexSlice-DL-y9Kvz.js";import"./CartesianChart-CwIqL3bq.js";import"./chartDataContext-CCJSSKas.js";import"./CategoricalChart-CMPAsQVa.js";import"./CartesianAxis-BoArf1fz.js";import"./Layer-Da-YNOyz.js";import"./Text-By0RWd1u.js";import"./DOMUtils-dg_NvrMM.js";import"./Label-cR9E2h9U.js";import"./ZIndexLayer-D0IJam7I.js";import"./types-BKK4rjEh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-DW4Clnem.js";import"./useAnimationId-CqPKjgNu.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D8mL5N4x.js";import"./ChartSizeDimensions-CED_Nm_I.js";import"./OffsetShower-BMRMJ2Vb.js";import"./PlotAreaShower-DTP32oyl.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
