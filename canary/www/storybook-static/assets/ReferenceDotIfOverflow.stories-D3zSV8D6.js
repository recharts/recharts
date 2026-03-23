import{e}from"./iframe-Ct0PK1iZ.js";import{R as n}from"./arrayEqualityCheck-cSrg192z.js";import{C as s}from"./ComposedChart-Dkf6chnc.js";import{C as p}from"./CartesianGrid-CZTL1fO6.js";import{X as c}from"./XAxis-ZfaBuFta.js";import{Y as f}from"./YAxis-CMvF26TK.js";import{R as l}from"./ReferenceDot-DuBeVTrb.js";import{R as h}from"./RechartsHookInspector-Ct0UJLxA.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CkDZ6rk0.js";import"./immer-C_0hot5p.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-JBNrYn90.js";import"./index-e5TdOq0j.js";import"./hooks-B5ECIQG0.js";import"./axisSelectors-DfI31pZt.js";import"./d3-scale-BIuiM5G6.js";import"./zIndexSlice-C0pIss81.js";import"./renderedTicksSlice-Xed-5Uzt.js";import"./CartesianChart-F11oHMFT.js";import"./chartDataContext-Be_hCN-X.js";import"./CategoricalChart-DBM3lb6I.js";import"./CartesianAxis-DpFipx6Q.js";import"./Layer-BFqbkghr.js";import"./Text-D7gtJPhg.js";import"./DOMUtils-DZtY6UXL.js";import"./Label-kZgIL_LG.js";import"./ZIndexLayer-CPK1fMG2.js";import"./types-B_QiL_OE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-B3FhOR5M.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DoqQxHuh.js";import"./ChartSizeDimensions-Blj7cX2O.js";import"./OffsetShower-kOurDMwT.js";import"./PlotAreaShower-CxG6J2wp.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
