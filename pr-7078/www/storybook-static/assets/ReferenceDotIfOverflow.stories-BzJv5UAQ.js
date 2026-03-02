import{e}from"./iframe-VPJyTU3C.js";import{R as n}from"./arrayEqualityCheck-CXN3l8IH.js";import{C as s}from"./ComposedChart-BcIOapvV.js";import{C as p}from"./CartesianGrid-BbDsYPkG.js";import{X as c}from"./XAxis-3pLP0gWY.js";import{Y as f}from"./YAxis-wNsuba1v.js";import{R as l}from"./ReferenceDot-Djv2IkgU.js";import{R as h}from"./RechartsHookInspector-vDuc6y-U.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BvWNwQsu.js";import"./immer-BfJiACOe.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCl2bEfe.js";import"./index-DQ7yK4Y3.js";import"./hooks-nSftgnTX.js";import"./axisSelectors-saXNBwIQ.js";import"./d3-scale-DGhAz-7E.js";import"./zIndexSlice-Dq9melht.js";import"./renderedTicksSlice-Eh1g0N0V.js";import"./CartesianChart-hKkJhyE8.js";import"./chartDataContext-cb_R-PX2.js";import"./CategoricalChart-Cn-cyvDx.js";import"./CartesianAxis-CiyiTEma.js";import"./Layer-7CDZtGSl.js";import"./Text-DR-p8moo.js";import"./DOMUtils-CEVaRraF.js";import"./Label-9AdH7Mzz.js";import"./ZIndexLayer-Bu1rH0K3.js";import"./types-CXB2nDIk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DKFvoc5_.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C07bsWnd.js";import"./ChartSizeDimensions-CmjLLHly.js";import"./OffsetShower-3s1Vs-j5.js";import"./PlotAreaShower-B0po3Iq4.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
