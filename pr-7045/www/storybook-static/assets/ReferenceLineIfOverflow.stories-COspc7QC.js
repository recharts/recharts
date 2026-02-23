import{e}from"./iframe-CGVhrCsk.js";import{R as n}from"./arrayEqualityCheck-hWfBO-dZ.js";import{C as p}from"./ComposedChart-Cs4bNDUq.js";import{C as s}from"./CartesianGrid-CPVW_xM8.js";import{X as c}from"./XAxis-CU7mfsQ-.js";import{Y as f}from"./YAxis-pDp602YX.js";import{L as l}from"./Line-BDkuDWC1.js";import{R as d}from"./ReferenceLine-CVpsLfPL.js";import{R as h}from"./RechartsHookInspector-W4SpTwNb.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CwNF5fMy.js";import"./immer-ByckOGb7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DgM4xUF4.js";import"./index-CEIii_b2.js";import"./hooks-mLbHXbPh.js";import"./axisSelectors-CrTWvSV9.js";import"./d3-scale-D5vl0Nsi.js";import"./zIndexSlice-DutzqnKh.js";import"./renderedTicksSlice-DmMczr5P.js";import"./CartesianChart-B1c-3hUF.js";import"./chartDataContext-DQaWG2U3.js";import"./CategoricalChart-X3-XrJiY.js";import"./CartesianAxis-DzeHRsGq.js";import"./Layer-DI3r5k9z.js";import"./Text-DbvmJCeH.js";import"./DOMUtils-5Zd9MXZO.js";import"./Label-Ca0FMlUU.js";import"./ZIndexLayer-BlFiVhV6.js";import"./types-CutyoUQf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CZtHcLE8.js";import"./ActivePoints-DCd-acaj.js";import"./Dot-Dwb1H9wZ.js";import"./RegisterGraphicalItemId-D2-m4nk3.js";import"./ErrorBarContext-BGDc3EIW.js";import"./GraphicalItemClipPath-D7PtxHvG.js";import"./SetGraphicalItem-BqAzYXKd.js";import"./useAnimationId-bFrgCHGo.js";import"./getRadiusAndStrokeWidthFromDot-EoCljdHa.js";import"./ActiveShapeUtils-DEu4pVNL.js";import"./isPlainObject-BSA6Caji.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CL9KViSo.js";import"./Trapezoid-C1cOue80.js";import"./Sector-8CmLtbdM.js";import"./Symbols-DsXXK2gD.js";import"./symbol-Dw_xitWX.js";import"./step-p7MifGWd.js";import"./Curve-DdraDXui.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CQT87Gjl.js";import"./ChartSizeDimensions-CJ3vtll8.js";import"./OffsetShower-56TqmRW6.js";import"./PlotAreaShower-CzLMiHXt.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
