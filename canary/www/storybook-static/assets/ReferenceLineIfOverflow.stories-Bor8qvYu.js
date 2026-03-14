import{e}from"./iframe-DvuZWOTb.js";import{R as n}from"./arrayEqualityCheck-BBARzIRr.js";import{C as p}from"./ComposedChart-OEf0xrLY.js";import{C as s}from"./CartesianGrid-CDq5TP-K.js";import{X as c}from"./XAxis-DowQdhQL.js";import{Y as f}from"./YAxis-DIT5pVYc.js";import{L as l}from"./Line-Cq6zsUpN.js";import{R as d}from"./ReferenceLine-2pxm6xtR.js";import{R as h}from"./RechartsHookInspector-Cl4EGw9D.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BNfHMc3-.js";import"./immer-BHFkM9Mg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C8dH0HHg.js";import"./index-eU4Ehn4B.js";import"./hooks-43hsLZ0P.js";import"./axisSelectors-BnR_Cfp_.js";import"./d3-scale-BdRaduXu.js";import"./zIndexSlice-BABNjTcN.js";import"./renderedTicksSlice-BAodcevd.js";import"./CartesianChart-CnMFmEeq.js";import"./chartDataContext-BXYQ6GMf.js";import"./CategoricalChart-CPAqYbsf.js";import"./CartesianAxis-Dm47pK4a.js";import"./Layer-D0S2CDqI.js";import"./Text-CU_3ER1b.js";import"./DOMUtils-BxxJ-Wkd.js";import"./Label-CD05nnQG.js";import"./ZIndexLayer-DRMyD2Rp.js";import"./types-BkPBAcGb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-jSjmTH71.js";import"./ActivePoints-DPmz5x-b.js";import"./Dot-DYn7MakE.js";import"./RegisterGraphicalItemId-BH6ssqoP.js";import"./ErrorBarContext-Dt0Jqr2E.js";import"./GraphicalItemClipPath-DmmSLEF_.js";import"./SetGraphicalItem-Dkbl2A_A.js";import"./useAnimationId-oxTUA15o.js";import"./getRadiusAndStrokeWidthFromDot-DrFKHZSY.js";import"./ActiveShapeUtils-0RU40zhg.js";import"./isPlainObject-BJJzFz0o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CpIWh0L4.js";import"./Trapezoid-BCrvbeh4.js";import"./Sector-Uwlbv7Cd.js";import"./Symbols-4yD0ZZ3H.js";import"./symbol-tCdMof47.js";import"./step-Cug99buo.js";import"./Curve-CApkeTVu.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CGCMEZS5.js";import"./ChartSizeDimensions-E7tryntV.js";import"./OffsetShower-BUvvOC4J.js";import"./PlotAreaShower-iq9hWQZ1.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,Re as default};
