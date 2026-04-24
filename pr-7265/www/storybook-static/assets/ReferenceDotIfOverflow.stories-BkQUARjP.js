import{e}from"./iframe-37zUUx_E.js";import{R as n}from"./arrayEqualityCheck-DutKhOGK.js";import{C as s}from"./ComposedChart-BywxKeJQ.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BXoyn2mv.js";import{X as f}from"./XAxis-Blm4GLfV.js";import{Y as l}from"./YAxis-DSVS60ds.js";import{R as h}from"./ReferenceDot-h296ARS5.js";import{R as d}from"./RechartsHookInspector-CDipa0hp.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B9PzFguX.js";import"./immer-CUnR0E5N.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B76xGR1e.js";import"./index-0-WoshO7.js";import"./hooks-CAbbZjj1.js";import"./axisSelectors-DkFLtXON.js";import"./d3-scale-E5kHX0Us.js";import"./zIndexSlice-D134Hh5h.js";import"./renderedTicksSlice-5LDn2Ezt.js";import"./CartesianChart-8ApklZQP.js";import"./chartDataContext-kqFcMPUE.js";import"./CategoricalChart-CHzXuF8K.js";import"./CartesianAxis-BBEhLEqn.js";import"./Layer-Blxm0j6C.js";import"./Text-CFCBMdCH.js";import"./DOMUtils-BZYNC1iv.js";import"./Label-D6SKAk7k.js";import"./ZIndexLayer-AHauez6T.js";import"./types-BDojSeLG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-Dh6UB_x_.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-cHRr1rY9.js";import"./ChartSizeDimensions-0RPcwWKr.js";import"./OffsetShower-HjsFwihi.js";import"./PlotAreaShower-lKdypGoe.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
