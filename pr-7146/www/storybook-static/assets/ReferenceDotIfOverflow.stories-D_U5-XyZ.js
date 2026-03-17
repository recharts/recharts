import{e}from"./iframe-Dq5DdRfA.js";import{R as n}from"./arrayEqualityCheck-qGR3MUeV.js";import{C as s}from"./ComposedChart-QdhTFZSq.js";import{C as p}from"./CartesianGrid-CK5HKDGi.js";import{X as c}from"./XAxis-CZx-cxt6.js";import{Y as f}from"./YAxis-BfiaHiWI.js";import{R as l}from"./ReferenceDot-BVE58gyq.js";import{R as h}from"./RechartsHookInspector-hbHSdV_4.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DHlsVcqU.js";import"./immer-BgAF4C3H.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-vGlNcTAG.js";import"./index-KC-eWLnl.js";import"./hooks-BxbNPqIZ.js";import"./axisSelectors-BFeCG5Ru.js";import"./d3-scale-DI2YC43N.js";import"./zIndexSlice-DPv0Xhij.js";import"./renderedTicksSlice-DP9i4nv6.js";import"./CartesianChart-BaePTbzD.js";import"./chartDataContext-CXein_ih.js";import"./CategoricalChart-BcQURnMq.js";import"./CartesianAxis-D7oRmpa0.js";import"./Layer-xEbSwsN4.js";import"./Text-CZ8K0x5S.js";import"./DOMUtils-C3M38rM5.js";import"./Label-RkqWKdyr.js";import"./ZIndexLayer-CmxjkRKY.js";import"./types-D0iVcQvS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DzScFwGr.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DD51iIl-.js";import"./ChartSizeDimensions-CU3eWKS2.js";import"./OffsetShower-6LrCHYpG.js";import"./PlotAreaShower-BdkOHlKt.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
