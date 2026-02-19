import{e}from"./iframe-xRIz3qbF.js";import{R as n}from"./arrayEqualityCheck-BdN7i4MO.js";import{C as s}from"./ComposedChart-BETovjYm.js";import{C as p}from"./CartesianGrid-c2xUxGhI.js";import{X as c}from"./XAxis-k5taAUht.js";import{Y as f}from"./YAxis-cxDuI0HH.js";import{R as l}from"./ReferenceDot-DQrkQZwC.js";import{R as h}from"./RechartsHookInspector-CC_tuF9F.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CV23Ehqm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-y0J6uKM2.js";import"./hooks-0oNAH-Yd.js";import"./axisSelectors-CpIgH2EX.js";import"./zIndexSlice-BfBE69OZ.js";import"./renderedTicksSlice-BCeSf2F6.js";import"./CartesianChart-taOmKSzk.js";import"./chartDataContext-BSH8i1Pa.js";import"./CategoricalChart-Dtl4cVT_.js";import"./CartesianAxis-7YSNf4Ta.js";import"./Layer-BmRFOYbB.js";import"./Text-mQwo9EXr.js";import"./DOMUtils-ByQBTR3z.js";import"./Label-w-b8AlxD.js";import"./ZIndexLayer-CoDEXRAT.js";import"./types-BXkuDJCo.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-hvJwAgko.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BTLusoTB.js";import"./ChartSizeDimensions-C5NwM1WB.js";import"./OffsetShower-DskOXH-F.js";import"./PlotAreaShower-CKLNnJBS.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
