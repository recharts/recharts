import{e}from"./iframe-Dnf4AlLR.js";import{g as n}from"./arrayEqualityCheck-UrcKYzS0.js";import{C as s}from"./ComposedChart-B93d8mqD.js";import{p}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-DZQbzxdE.js";import{X as f}from"./XAxis-DLWfACul.js";import{Y as l}from"./YAxis-BV2CBSac.js";import{R as h}from"./ReferenceDot-C97Y6-0j.js";import{R as d}from"./RechartsHookInspector-OLBh2oCI.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BqkLROOU.js";import"./immer-DA9BPlnc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAmqBWgG.js";import"./index-D1BDiruz.js";import"./hooks-ByMCROpL.js";import"./axisSelectors-VRydpu3s.js";import"./d3-scale-Cb8N1VfB.js";import"./zIndexSlice-BgXAgJL3.js";import"./renderedTicksSlice-CTDdadeF.js";import"./CartesianChart-CTkTDluY.js";import"./chartDataContext-D6OzkCBP.js";import"./CategoricalChart-DESZNtyF.js";import"./CartesianAxis-DIOPUoh9.js";import"./Layer-V8ImnEZB.js";import"./Text-BH203wB1.js";import"./DOMUtils-DeOIiqB-.js";import"./Label-B_crGnD8.js";import"./ZIndexLayer-DOX2ldNu.js";import"./types-DHYQQjs9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-2Bj9Ykgw.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DhYdY39W.js";import"./ChartSizeDimensions-xg99Q5LG.js";import"./OffsetShower-CsmBnO90.js";import"./PlotAreaShower-CowJNvBY.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
