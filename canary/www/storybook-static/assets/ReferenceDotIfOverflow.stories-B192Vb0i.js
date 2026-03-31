import{e}from"./iframe-R35hz9hm.js";import{R as n}from"./arrayEqualityCheck-l_dnVtmw.js";import{C as s}from"./ComposedChart-4PYTru1q.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D4JR-kM2.js";import{X as f}from"./XAxis-iZqvrzZu.js";import{Y as l}from"./YAxis-BsChZZHK.js";import{R as h}from"./ReferenceDot-CijcRxPS.js";import{R as d}from"./RechartsHookInspector-DP3Qs2H_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DfULgVhS.js";import"./immer-CFK8uJ_y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BzZW_8cp.js";import"./index-BFs7fXnY.js";import"./hooks-DwD3G30p.js";import"./axisSelectors-BZF7ob4Z.js";import"./d3-scale-DK92Q0IA.js";import"./zIndexSlice-DymzsNPY.js";import"./renderedTicksSlice-DFK-mhd6.js";import"./CartesianChart-dKVKHPad.js";import"./chartDataContext-B0058VjU.js";import"./CategoricalChart-BeKpYgsM.js";import"./CartesianAxis-BfU0E9Vd.js";import"./Layer-NhMRn63k.js";import"./Text-CIuibZ8V.js";import"./DOMUtils-CUUuW9k8.js";import"./Label-CVLCzJ8S.js";import"./ZIndexLayer-BeTprR_g.js";import"./types-CncuKFdL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DYh4HsOt.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Dr19aGzn.js";import"./ChartSizeDimensions-CNipumKi.js";import"./OffsetShower-BtN_LmjI.js";import"./PlotAreaShower-DeWLuHk-.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
