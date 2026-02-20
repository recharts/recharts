import{e}from"./iframe-B4ZOa_Yu.js";import{R as n}from"./arrayEqualityCheck-C7qm6m5x.js";import{C as p}from"./ComposedChart-Bx4qcLUx.js";import{C as s}from"./CartesianGrid-D8vgK1HJ.js";import{X as c}from"./XAxis-Ds-wBXG3.js";import{Y as f}from"./YAxis-ORG4L0tf.js";import{L as l}from"./Line-C2tunPhG.js";import{R as d}from"./ReferenceLine-gzPlQZjL.js";import{R as h}from"./RechartsHookInspector-D8rerupA.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DcaNso53.js";import"./immer-B05rlcy5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B66RMWp1.js";import"./index-DBSwNlxD.js";import"./hooks-BoWukVEP.js";import"./axisSelectors-CUTvv79j.js";import"./d3-scale-xF4QVF1U.js";import"./zIndexSlice-L-52L8l2.js";import"./renderedTicksSlice-BHPoCGKs.js";import"./CartesianChart-Dq-7HfpP.js";import"./chartDataContext-CeyVK9Tw.js";import"./CategoricalChart-CIWpFNpg.js";import"./CartesianAxis-CCuPeB1h.js";import"./Layer-D8UY7UMK.js";import"./Text-RCR9lAA9.js";import"./DOMUtils-WUmSdG9_.js";import"./Label-CDxkI7IB.js";import"./ZIndexLayer-DJVNNdtG.js";import"./types-Cvz57JP2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-upui8jKZ.js";import"./ActivePoints-DrOeuumg.js";import"./Dot-C8akGE8Z.js";import"./RegisterGraphicalItemId-DSbtEDT7.js";import"./ErrorBarContext-CqZUOVMv.js";import"./GraphicalItemClipPath-DUfb3-iB.js";import"./SetGraphicalItem-DHjcaBbG.js";import"./useAnimationId-BoXeTLIY.js";import"./getRadiusAndStrokeWidthFromDot-CUYccmbg.js";import"./ActiveShapeUtils-t1m8X5yO.js";import"./isPlainObject-CdRNPTy1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-qe02Stpb.js";import"./Trapezoid-C5xqhjGS.js";import"./Sector-DG-V-cIW.js";import"./Symbols-aoMnmAhk.js";import"./symbol-ClQQoX6e.js";import"./step-bVfLcMGZ.js";import"./Curve-BSyKD1Ot.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C8tftqM8.js";import"./ChartSizeDimensions-CgbdMiCv.js";import"./OffsetShower-z8r0Gugh.js";import"./PlotAreaShower-CPk3ggQs.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
