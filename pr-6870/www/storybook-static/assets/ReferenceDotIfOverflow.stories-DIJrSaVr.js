import{e}from"./iframe-C9kyXynm.js";import{R as n}from"./arrayEqualityCheck-BdbBdFIu.js";import{C as s}from"./ComposedChart-CNIVaO9y.js";import{C as p}from"./CartesianGrid-C8kB-52l.js";import{X as c}from"./XAxis-DlZ1onwt.js";import{Y as f}from"./YAxis-V3Y4BL5v.js";import{R as l}from"./ReferenceDot-CmjUNSWQ.js";import{R as h}from"./RechartsHookInspector-CKajdCMN.js";import{p as d}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BCZIpR14.js";import"./PolarUtils-B_1hBJ6O.js";import"./RechartsWrapper-ultCJT0w.js";import"./hooks-BzniDeZ2.js";import"./axisSelectors-50fqgJ0X.js";import"./zIndexSlice-cJxKJ8ug.js";import"./CartesianChart-EinDqxZ_.js";import"./chartDataContext-CZ4PAiww.js";import"./CategoricalChart-5uqkh1gH.js";import"./CartesianAxis-DH1-Rlhr.js";import"./Layer-LG3hnzpE.js";import"./Text-BcrXlrdS.js";import"./DOMUtils-CQZn70zK.js";import"./Label-C-oa8ua5.js";import"./ZIndexLayer-7ELyukPI.js";import"./types-BfqR7E8K.js";import"./Dot-BiJvCsb9.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DVm8rubF.js";import"./ChartSizeDimensions-COOovYk2.js";import"./OffsetShower-D9P9ThB2.js";import"./PlotAreaShower-B7fr2_CT.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const V=["IfOverflow"];export{t as IfOverflow,V as __namedExportsOrder,Q as default};
