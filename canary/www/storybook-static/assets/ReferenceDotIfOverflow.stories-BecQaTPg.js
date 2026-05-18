import{e}from"./iframe-BmdG6Yuj.js";import{g as n}from"./arrayEqualityCheck-Cs0ODbAq.js";import{C as s}from"./ComposedChart-CzsBStAV.js";import{p}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-CUho8OhZ.js";import{X as f}from"./XAxis-yj9kgQkK.js";import{Y as l}from"./YAxis-BmW1MgwT.js";import{R as h}from"./ReferenceDot-PdkON1N1.js";import{R as d}from"./RechartsHookInspector-C9gdculA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CzKMDris.js";import"./immer-r1hs1aui.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BRt9rj0a.js";import"./index-emtiH1OM.js";import"./hooks-DLMhcoxZ.js";import"./axisSelectors-B5YNmqFl.js";import"./d3-scale-BCNqbAE1.js";import"./zIndexSlice-CernrlT2.js";import"./renderedTicksSlice-BiizQght.js";import"./CartesianChart-n72JXqS8.js";import"./chartDataContext-DC8YgnRR.js";import"./CategoricalChart-mKbdU8Ir.js";import"./CartesianAxis-DQoe1nv2.js";import"./Layer-CTqkrp1s.js";import"./Text-DqTFRyGd.js";import"./DOMUtils-Cpgve9lL.js";import"./Label-BahHfmoK.js";import"./ZIndexLayer-BALln1nu.js";import"./types-HBeXaxhb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-C-X-bkP7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C_lgB8BG.js";import"./ChartSizeDimensions-DqzMb5LP.js";import"./OffsetShower-DFfLZ4K8.js";import"./PlotAreaShower-CawkEE7f.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
