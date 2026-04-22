import{e}from"./iframe-ARz8mg4k.js";import{R as n}from"./arrayEqualityCheck-DrcNi_LJ.js";import{C as s}from"./ComposedChart-DRBeqEP-.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-SDIgipzt.js";import{X as f}from"./XAxis-BTtzk9-i.js";import{Y as l}from"./YAxis-nFfmrEBY.js";import{R as h}from"./ReferenceDot-Axl75pzP.js";import{R as d}from"./RechartsHookInspector-BQqyZpBz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B-6s3uHj.js";import"./immer-DTctj60x.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Blzvisg2.js";import"./index-rdZdQMAv.js";import"./hooks-BYzsfUc2.js";import"./axisSelectors-BVUGHvar.js";import"./d3-scale-C0EL32h-.js";import"./zIndexSlice-DS03Ah9k.js";import"./renderedTicksSlice-CVTh0NIO.js";import"./CartesianChart-BUThqtKP.js";import"./chartDataContext-DOtajESI.js";import"./CategoricalChart-B_WLpA_O.js";import"./CartesianAxis-BXpWNIc5.js";import"./Layer-DVzuE_pH.js";import"./Text-D-6uYGdc.js";import"./DOMUtils-CE-5408s.js";import"./Label-Cu7mDpGK.js";import"./ZIndexLayer-C2oPn4PG.js";import"./types-DqkCHGa8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-D4Exawvu.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-L5czeD9H.js";import"./ChartSizeDimensions-CD-DU66p.js";import"./OffsetShower-IkmwAKSt.js";import"./PlotAreaShower-atAkjEbW.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
