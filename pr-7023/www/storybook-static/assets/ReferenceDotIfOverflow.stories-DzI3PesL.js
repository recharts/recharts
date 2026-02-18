import{e}from"./iframe-C8rrCX6B.js";import{R as n}from"./arrayEqualityCheck-B6s-2qWd.js";import{C as s}from"./ComposedChart-C-53OFl9.js";import{C as p}from"./CartesianGrid-EKJBNeKk.js";import{X as c}from"./XAxis-B3LhdJHC.js";import{Y as f}from"./YAxis-DOVMeyYT.js";import{R as l}from"./ReferenceDot-dVQKtpTy.js";import{R as h}from"./RechartsHookInspector-CRTByZl4.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-g0jZ7vdX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Zx0A2i-h.js";import"./hooks-CpCGF1sd.js";import"./axisSelectors-B7ZWRmd4.js";import"./zIndexSlice-Df3dbiIE.js";import"./renderedTicksSlice-Chx9DuQU.js";import"./CartesianChart-ZPTdsj2m.js";import"./chartDataContext-CpPK2chg.js";import"./CategoricalChart-D5ZpTP8T.js";import"./CartesianAxis-B58JFruC.js";import"./Layer-D1v-1P4s.js";import"./Text-CymC-fJp.js";import"./DOMUtils-D6vD6WjU.js";import"./Label-pD9QpgDQ.js";import"./ZIndexLayer-DFkgVZys.js";import"./types-DDBoPPlm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DdOaoll5.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CVthgwiF.js";import"./ChartSizeDimensions-CE_McqMG.js";import"./OffsetShower-DFFOsGB0.js";import"./PlotAreaShower-BNzfzgkR.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
