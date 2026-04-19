import{e}from"./iframe-dL2OVy5F.js";import{R as n}from"./arrayEqualityCheck-CaMvItyo.js";import{C as s}from"./ComposedChart-Y8SckKJS.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BWHNj_Eu.js";import{X as f}from"./XAxis-B86_r9Ch.js";import{Y as l}from"./YAxis-BsWm2FVM.js";import{R as h}from"./ReferenceDot-B674_yBE.js";import{R as d}from"./RechartsHookInspector-BZsexvc_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-7Zncxn1v.js";import"./immer-DHklT898.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-2xnsmZbF.js";import"./index-C8r_0QEC.js";import"./hooks-CtDQVu0u.js";import"./axisSelectors-Do7BkVsn.js";import"./d3-scale-3VqrHCN7.js";import"./zIndexSlice-DAYnIbZH.js";import"./renderedTicksSlice-D7ViyujS.js";import"./CartesianChart-CQEHzqI9.js";import"./chartDataContext-BXPlG8LR.js";import"./CategoricalChart-BZHJ_HjV.js";import"./CartesianAxis-BKf97Rvg.js";import"./Layer-BrlL2tOs.js";import"./Text-Bwe6nLXh.js";import"./DOMUtils-Ci6QTQ3e.js";import"./Label-C6izcScL.js";import"./ZIndexLayer-BvENavnS.js";import"./types-LCDeNazI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DNIsMwyQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D_cVMinZ.js";import"./ChartSizeDimensions-CL0i_3ns.js";import"./OffsetShower-CTFYQb52.js";import"./PlotAreaShower-CS9RsVg8.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
