import{e}from"./iframe-BaY_xsSZ.js";import{R as n}from"./arrayEqualityCheck-Bdjqc4Ae.js";import{C as s}from"./ComposedChart-4BbEyXcR.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BHLdTw0l.js";import{X as f}from"./XAxis-ViYQKBdh.js";import{Y as l}from"./YAxis-BAjE4AI0.js";import{R as h}from"./ReferenceDot-Xv9w0bHV.js";import{R as d}from"./RechartsHookInspector-BZJAdbFr.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-VJ-BUAvR.js";import"./immer-BxBygCNY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGEkw1V9.js";import"./index-BSMrFEqd.js";import"./hooks-CRXiVztC.js";import"./axisSelectors-B-OR9MKB.js";import"./d3-scale-DIZez8ZA.js";import"./zIndexSlice-CtFEU_Ni.js";import"./renderedTicksSlice-B0xJlAOa.js";import"./CartesianChart-D3S0Vg1A.js";import"./chartDataContext-Dfnon4gt.js";import"./CategoricalChart-CR4gEzum.js";import"./CartesianAxis-CxJxU8_8.js";import"./Layer-04iznQcl.js";import"./Text-F1Mr-vkp.js";import"./DOMUtils-DVKXUmKU.js";import"./Label-B4b2gNZT.js";import"./ZIndexLayer-BzH8oXrO.js";import"./types-BZAl2150.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BqkojDsv.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D_Zsn0a-.js";import"./ChartSizeDimensions-Tq7694Qh.js";import"./OffsetShower-D7qcdJv9.js";import"./PlotAreaShower-DF_9siN1.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
