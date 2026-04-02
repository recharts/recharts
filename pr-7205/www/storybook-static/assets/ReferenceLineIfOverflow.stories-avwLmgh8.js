import{e}from"./iframe-GfPTcwVI.js";import{R as n}from"./arrayEqualityCheck-zByCBXfp.js";import{C as p}from"./ComposedChart-g_3yl1AM.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-w_gvhw0o.js";import{X as f}from"./XAxis-D09jYQEI.js";import{Y as l}from"./YAxis-CAzK1_Cz.js";import{L as d}from"./Line-CQvFBi_4.js";import{R as h}from"./ReferenceLine-RYHGgHJ2.js";import{R as w}from"./RechartsHookInspector-BbE71-mZ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyMlioZM.js";import"./immer-C_ivLHTT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-xCEfQ3e6.js";import"./index-BPTb04yT.js";import"./hooks-CkLAhtAF.js";import"./axisSelectors-C1I30lvY.js";import"./d3-scale-CZ7HbC41.js";import"./zIndexSlice-BiywrOzN.js";import"./renderedTicksSlice-DubTevQM.js";import"./CartesianChart-C7artJXa.js";import"./chartDataContext-Dnq1iHBW.js";import"./CategoricalChart-DT84xA7C.js";import"./CartesianAxis-BgLkReml.js";import"./Layer-D5BHTSBb.js";import"./Text-Cz6Ir0Bd.js";import"./DOMUtils-CBAOKK6G.js";import"./Label-Dcg-6Pxd.js";import"./ZIndexLayer-ci0MSbfQ.js";import"./types-D3MLb6DN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D6XtI53O.js";import"./ActivePoints-DiX9hpdl.js";import"./Dot-B-wtPhzZ.js";import"./RegisterGraphicalItemId-BQasV6-Q.js";import"./ErrorBarContext-C9NklHyW.js";import"./GraphicalItemClipPath-DGk_Ausf.js";import"./SetGraphicalItem-v2qQdmnb.js";import"./useAnimationId-CJpqr1GQ.js";import"./getRadiusAndStrokeWidthFromDot-C8_IZqg1.js";import"./ActiveShapeUtils-DMmYEdu0.js";import"./isPlainObject-2G-hgaEW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChBxJEym.js";import"./Trapezoid-CUiisPn6.js";import"./Sector-F_1AI-V0.js";import"./Symbols-BG3HhGrw.js";import"./symbol-Dj4Qey2P.js";import"./step-BJ9jGGmt.js";import"./Curve-sYWT_Cke.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CtTj3QoQ.js";import"./ChartSizeDimensions-BaFn1hfG.js";import"./OffsetShower-C19M18-p.js";import"./PlotAreaShower-Bq5P1fMQ.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
