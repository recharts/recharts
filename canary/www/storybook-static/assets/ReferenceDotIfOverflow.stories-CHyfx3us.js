import{e}from"./iframe-9V8AjEOx.js";import{R as n}from"./arrayEqualityCheck--JByrSZG.js";import{C as s}from"./ComposedChart-IZ3mT89B.js";import{C as p}from"./CartesianGrid-NlelQ9W-.js";import{X as c}from"./XAxis-DLQ4yzhf.js";import{Y as f}from"./YAxis-CMVVgcYW.js";import{R as l}from"./ReferenceDot-ftZVug_g.js";import{R as h}from"./RechartsHookInspector-BPTP_PJv.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CUsIIFoU.js";import"./immer-GD2CRReg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqXbC8Hs.js";import"./index-BMXE6tR4.js";import"./hooks-DNt9wj8m.js";import"./axisSelectors-QruKIcBb.js";import"./d3-scale-Bl0aS6m3.js";import"./zIndexSlice-B9w7kjZW.js";import"./renderedTicksSlice-C4Apcjxw.js";import"./CartesianChart-CpyTtyWF.js";import"./chartDataContext-DJ1KYV-U.js";import"./CategoricalChart-dRG2K9eI.js";import"./CartesianAxis-BQAjBvVB.js";import"./Layer-BqC-87gq.js";import"./Text-Bl4_Rxhh.js";import"./DOMUtils-BsKMkSa3.js";import"./Label-BTjKNwoq.js";import"./ZIndexLayer-jMQWKp1h.js";import"./types-O5g7_guk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-D5dnQ80q.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CwQkTyvb.js";import"./ChartSizeDimensions-CbBegVji.js";import"./OffsetShower-BP30_Vv4.js";import"./PlotAreaShower-BGwj-jTe.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
