import{e}from"./iframe-CoxmJKyj.js";import{R as n}from"./arrayEqualityCheck-BiMa-XSg.js";import{C as s}from"./ComposedChart-CnWrvDY-.js";import{C as p}from"./CartesianGrid-BvUKtn8y.js";import{X as c}from"./XAxis-ByfqRbuq.js";import{Y as f}from"./YAxis-CBdXzckK.js";import{R as l}from"./ReferenceDot-DQ6sSAhl.js";import{R as h}from"./RechartsHookInspector-DxKqckh3.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-sn4NzjIu.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BeGnBw32.js";import"./hooks-C3tSBkhO.js";import"./axisSelectors-Cx1Cm9h8.js";import"./zIndexSlice-BS5hTNaN.js";import"./CartesianChart-TnRBDpKI.js";import"./chartDataContext-88-zaTIw.js";import"./CategoricalChart-CyysacNR.js";import"./CartesianAxis-C3XzKlXq.js";import"./Layer-FnVtSY9f.js";import"./Text-CbKrSYiu.js";import"./DOMUtils-p48KsCFt.js";import"./Label-BaauyrMN.js";import"./ZIndexLayer-C9Rpc0HU.js";import"./types-VgYnwRoj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BifkMnm9.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BjMwiY7v.js";import"./ChartSizeDimensions-CtAc8nGI.js";import"./OffsetShower-BIEGpqN_.js";import"./PlotAreaShower-B9vM17qm.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
