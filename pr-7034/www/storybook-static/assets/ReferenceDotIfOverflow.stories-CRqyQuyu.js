import{e}from"./iframe-CRTFvrj9.js";import{R as n}from"./arrayEqualityCheck-C-72eKdK.js";import{C as s}from"./ComposedChart-DTMWU6Jk.js";import{C as p}from"./CartesianGrid-Dlfi_HS_.js";import{X as c}from"./XAxis-BSKb_OYU.js";import{Y as f}from"./YAxis-BR4X3yoq.js";import{R as l}from"./ReferenceDot-D-QGuhjD.js";import{R as h}from"./RechartsHookInspector-D5fTK36V.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D1q6QfKc.js";import"./immer-C2wqAH-O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BSniLpj2.js";import"./index-DTIfmw9b.js";import"./hooks-6Wtbcjpq.js";import"./axisSelectors-Da0NuHcy.js";import"./d3-scale-B3vyKD8X.js";import"./zIndexSlice-CeN_cpGA.js";import"./renderedTicksSlice-Clwuxehj.js";import"./CartesianChart-BA-bIZkf.js";import"./chartDataContext-BdW7EA-o.js";import"./CategoricalChart-C4w7U3Tr.js";import"./CartesianAxis-UwfPUOGl.js";import"./Layer-CS75NGqW.js";import"./Text-B5hVsXUE.js";import"./DOMUtils-DFZ-Lmef.js";import"./Label-B8ukM34Q.js";import"./ZIndexLayer-T_Qg2faX.js";import"./types-DqJmRq78.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-Bs4qVlF8.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Bed0KFZ4.js";import"./ChartSizeDimensions-8pWs_Ibt.js";import"./OffsetShower-BF3aeG8w.js";import"./PlotAreaShower-D8bDGspZ.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
