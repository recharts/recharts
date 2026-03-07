import{e}from"./iframe-Drx3sHzD.js";import{R as n}from"./arrayEqualityCheck-Cxh3C5Ut.js";import{C as s}from"./ComposedChart-Cv9ZLW_z.js";import{C as p}from"./CartesianGrid-BbBnyfm6.js";import{X as c}from"./XAxis-CHiVQCBM.js";import{Y as f}from"./YAxis-BFFqV8T1.js";import{R as l}from"./ReferenceDot-B1mSZmB0.js";import{R as h}from"./RechartsHookInspector-B47NB8Ba.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DJZRJ_w1.js";import"./immer-CMngUaVZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C25rZHqy.js";import"./index-C1X6dA56.js";import"./hooks-CoGkBA0W.js";import"./axisSelectors-Dvu2n2j0.js";import"./d3-scale-DJsTU-V4.js";import"./zIndexSlice-BtH-N1PM.js";import"./renderedTicksSlice-NaH2qnuB.js";import"./CartesianChart-X3a2_VbG.js";import"./chartDataContext-4c8heGUY.js";import"./CategoricalChart-BH-H9_fa.js";import"./CartesianAxis-CtfoqZiD.js";import"./Layer-BX4NaN0s.js";import"./Text-puWaXg2i.js";import"./DOMUtils-CNGQFx5Q.js";import"./Label-BYpXDDHB.js";import"./ZIndexLayer-BCRbCnLV.js";import"./types-Dt1v_DFT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DJk_feJD.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-UsmbSRTd.js";import"./ChartSizeDimensions-DO_eIzzc.js";import"./OffsetShower-C7m1BjsQ.js";import"./PlotAreaShower-BQS_Wf3K.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
