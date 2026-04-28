import{e}from"./iframe-C-pXZx8X.js";import{R as n}from"./arrayEqualityCheck-3ozDp3-_.js";import{C as s}from"./ComposedChart-2Cv-F1wi.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BZjNYz-6.js";import{X as f}from"./XAxis-Cso_vWau.js";import{Y as l}from"./YAxis-Cf-PEWST.js";import{R as h}from"./ReferenceDot-CbRGoqUS.js";import{R as d}from"./RechartsHookInspector-BtUn4E77.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-cEBRbYcQ.js";import"./immer-BPSGuEHb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAPnfiXY.js";import"./index-BNdn82my.js";import"./hooks-r8g2kJ2v.js";import"./axisSelectors-DSvN8duu.js";import"./d3-scale-DB0MXZYa.js";import"./zIndexSlice-DrJF7HQv.js";import"./renderedTicksSlice-DMz1msG5.js";import"./CartesianChart-DOSPFIH6.js";import"./chartDataContext-DGhRpyKC.js";import"./CategoricalChart-DtUHVQpT.js";import"./CartesianAxis-DSUJUk3Y.js";import"./Layer-B6gfj40j.js";import"./Text-BgpDM3B5.js";import"./DOMUtils-DRd1JeLt.js";import"./Label-CSYOUhma.js";import"./ZIndexLayer-C3MbX-IF.js";import"./types-TOcuhXpR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DLckMiiT.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-jtYe93T2.js";import"./ChartSizeDimensions-7zC2ccyN.js";import"./OffsetShower--ZPGXMQT.js";import"./PlotAreaShower-tlilFsff.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
