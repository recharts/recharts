import{e}from"./iframe-D7aX3J5h.js";import{R as n}from"./arrayEqualityCheck-DLuUv4yo.js";import{C as s}from"./ComposedChart-CmEEfZPd.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CkxeYeVM.js";import{X as f}from"./XAxis-EjrrpAWt.js";import{Y as l}from"./YAxis-ByFth8eE.js";import{R as h}from"./ReferenceDot-DaSkPNGm.js";import{R as d}from"./RechartsHookInspector-BTqr9y2h.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DDSKwV2V.js";import"./immer-DIW08hxt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_XTZaGgp.js";import"./index-BM0_uYzm.js";import"./hooks-D1J8v2Uc.js";import"./axisSelectors-I1seAFnS.js";import"./d3-scale-Mn_kc0sV.js";import"./zIndexSlice-uyR3EFO5.js";import"./renderedTicksSlice-OcRGvYoz.js";import"./CartesianChart-CKcNyqW5.js";import"./chartDataContext-davdrOpe.js";import"./CategoricalChart-XTP8dVhI.js";import"./CartesianAxis-Bj6Nx-J-.js";import"./Layer-CJYXhEUr.js";import"./Text-CWxCeK9x.js";import"./DOMUtils-DCfT5r3n.js";import"./Label-UZajBuhN.js";import"./ZIndexLayer-CkNFgsWD.js";import"./types-4ix9MfJ6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BDZGqa2C.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BUdbPquH.js";import"./ChartSizeDimensions-CBUuBi2H.js";import"./OffsetShower-YsWSeMxm.js";import"./PlotAreaShower-BsknmqpH.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
