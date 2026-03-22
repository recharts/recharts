import{e}from"./iframe-m8q5t3md.js";import{R as n}from"./arrayEqualityCheck-DrSDqkLD.js";import{C as s}from"./ComposedChart-mWV3_oXN.js";import{C as p}from"./CartesianGrid-DiF0WVwX.js";import{X as c}from"./XAxis-D9s1UdL9.js";import{Y as f}from"./YAxis-3rVJTeb7.js";import{R as l}from"./ReferenceDot-HPPpTtru.js";import{R as h}from"./RechartsHookInspector-BuC1LeAm.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CRYHZjsP.js";import"./immer-DMxbvvOq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZ3jmele.js";import"./index-BL9S6rdM.js";import"./hooks-nzhcMf4x.js";import"./axisSelectors-DSejHMOb.js";import"./d3-scale-CmP5dk1L.js";import"./zIndexSlice-BFsJzxfG.js";import"./renderedTicksSlice-2vEKdn9I.js";import"./CartesianChart-B3HJKIVC.js";import"./chartDataContext-CB7kvdLo.js";import"./CategoricalChart-CgU5MazA.js";import"./CartesianAxis-B_P6O2DK.js";import"./Layer-C2TdqJIe.js";import"./Text-CGYPmi9L.js";import"./DOMUtils-BVQX-RMY.js";import"./Label-JUKbE3JW.js";import"./ZIndexLayer-BMbN4Jmp.js";import"./types-C2IIvjb3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot--mgd1LbI.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B_d56yGA.js";import"./ChartSizeDimensions-IBUPmonY.js";import"./OffsetShower-qDjcRr8n.js";import"./PlotAreaShower-CM2PEioy.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
