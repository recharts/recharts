import{e}from"./iframe-CPMBPDiW.js";import{R as n}from"./arrayEqualityCheck-BuDnjzUV.js";import{C as s}from"./ComposedChart-DtpNVTCG.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CfdD4djh.js";import{X as f}from"./XAxis-CjRYfiQ4.js";import{Y as l}from"./YAxis-Bk6_l7JM.js";import{R as h}from"./ReferenceDot-TqShBnZr.js";import{R as d}from"./RechartsHookInspector-DxdSXL0K.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-x-xJryKY.js";import"./immer-vUXr1xyy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7X0iTSa.js";import"./index-41kzo7-f.js";import"./hooks-CZjbEOHJ.js";import"./axisSelectors-DS_oX4Yb.js";import"./d3-scale-DxZ452bO.js";import"./zIndexSlice-Dr6oT2qB.js";import"./renderedTicksSlice-BJAXzV77.js";import"./CartesianChart-DH2v7K23.js";import"./chartDataContext-CV0cJvXm.js";import"./CategoricalChart-Cbmwan-l.js";import"./CartesianAxis-FhEMhfrS.js";import"./Layer-BU-6_6Kb.js";import"./Text-3lL52T9r.js";import"./DOMUtils-DD4Lzq5B.js";import"./Label-DxWyVNuC.js";import"./ZIndexLayer-D5fxgLpy.js";import"./types-BEArBsqN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-C0mRoZzJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B8_wGQ9D.js";import"./ChartSizeDimensions-DELo0r0O.js";import"./OffsetShower-HzHsLlkW.js";import"./PlotAreaShower-BJ8q8bHN.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
