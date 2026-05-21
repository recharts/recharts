import{e}from"./iframe-Cn9771Nb.js";import{g as n}from"./arrayEqualityCheck-D-ixwH56.js";import{C as s}from"./ComposedChart-GHVX126K.js";import{p}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-GyJpwBAe.js";import{X as f}from"./XAxis-CdGr2Iem.js";import{Y as l}from"./YAxis-TQXh0mQm.js";import{R as h}from"./ReferenceDot-Bns093i7.js";import{R as d}from"./RechartsHookInspector-ByD7qz5q.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DDTNdovN.js";import"./immer-Dn_-MauB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-1z_kIANU.js";import"./index-BoXkF8M8.js";import"./hooks-O4XLkxr8.js";import"./axisSelectors-BMVy_6Bx.js";import"./d3-scale-BZXwjMGy.js";import"./zIndexSlice-B5zV17Bd.js";import"./renderedTicksSlice-CwaBKoDv.js";import"./CartesianChart-B8UuiIR4.js";import"./chartDataContext-DlTJMN40.js";import"./CategoricalChart-Doln_IjV.js";import"./CartesianAxis-DUvQ6ZkT.js";import"./Layer-CoWJhcnT.js";import"./Text-Ds1KECTG.js";import"./DOMUtils-CumEt8nf.js";import"./Label-DQheKZVl.js";import"./ZIndexLayer-DUDNhmE-.js";import"./types-BeorWpRA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-D-dqVUjX.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CIRzOza-.js";import"./ChartSizeDimensions-BsavwcKk.js";import"./OffsetShower-mfqGnir7.js";import"./PlotAreaShower-DtKJCQsO.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
