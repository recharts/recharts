import{e}from"./iframe-BLDR2_i0.js";import{R as n}from"./arrayEqualityCheck-CvNQEz9w.js";import{C as p}from"./ComposedChart-D_KoMtLA.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DbVsK7fZ.js";import{X as f}from"./XAxis-DtQQBd2y.js";import{Y as l}from"./YAxis-D1KSMWgt.js";import{L as d}from"./Line-D-dTaVGT.js";import{R as h}from"./ReferenceLine-DLrmlouv.js";import{R as w}from"./RechartsHookInspector-B1GuqCEe.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BRIlCLrP.js";import"./immer-BKFNBdyg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ct1BBYFn.js";import"./index-CFbRxLRx.js";import"./hooks-CtJRBtxo.js";import"./axisSelectors-BB17965m.js";import"./d3-scale-BhFvmkin.js";import"./zIndexSlice-yBBB4uSb.js";import"./renderedTicksSlice-BSzl6y0x.js";import"./CartesianChart-LlNtHt9D.js";import"./chartDataContext-Bphfe7Jq.js";import"./CategoricalChart-DdO_PfYZ.js";import"./CartesianAxis-BPi0jvIf.js";import"./Layer-Bg4znOhy.js";import"./Text-Z-_UHMZw.js";import"./DOMUtils-CzTi80AG.js";import"./Label-BeUhNh6s.js";import"./ZIndexLayer-7ToExptV.js";import"./types-DW7k3YBY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BZwBYxFJ.js";import"./ActivePoints-rdhL3F9r.js";import"./Dot-DzHpuORN.js";import"./RegisterGraphicalItemId-BAO_-1Fe.js";import"./ErrorBarContext-DJptcZIz.js";import"./GraphicalItemClipPath-iX6Zf2o8.js";import"./SetGraphicalItem-DTwOd3dX.js";import"./useAnimationId-CuonZP-E.js";import"./getRadiusAndStrokeWidthFromDot-BdzGGcnE.js";import"./ActiveShapeUtils-Bx3IdaBV.js";import"./isPlainObject-Bgs7IkK4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CFLqOtC4.js";import"./Trapezoid-DytqB0t5.js";import"./Sector-DJtO2zeV.js";import"./Symbols-BPbqFGSD.js";import"./symbol-BlMgqIva.js";import"./step-CJMvDBr8.js";import"./Curve-Dso7sD8l.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CTEoDz69.js";import"./ChartSizeDimensions-CoOcLq9u.js";import"./OffsetShower-C2FYUo8c.js";import"./PlotAreaShower-toIN3X0K.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
