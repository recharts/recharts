import{e}from"./iframe-Cr3T7ZdA.js";import{R as n}from"./arrayEqualityCheck-DqF1T4jr.js";import{C as p}from"./ComposedChart-C4RuOW4J.js";import{C as s}from"./CartesianGrid-BmfMprKw.js";import{X as c}from"./XAxis-DBNHDh11.js";import{Y as f}from"./YAxis-D1E5tbtq.js";import{L as l}from"./Line-CLdKLaES.js";import{R as d}from"./ReferenceLine-DxupMds8.js";import{R as h}from"./RechartsHookInspector-ClBCFl3l.js";import{p as w}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-QfAcHL3W.js";import"./PolarUtils-Bmm-pqPZ.js";import"./RechartsWrapper-Cofc_HNc.js";import"./hooks-jzijfY0b.js";import"./axisSelectors-DxNzAaef.js";import"./zIndexSlice-DMIprIZ-.js";import"./CartesianChart-BU0IfpuH.js";import"./chartDataContext-DYJ71PQb.js";import"./CategoricalChart-BUJ2-En9.js";import"./CartesianAxis-CSlwZ6TK.js";import"./Layer-BFmFB8To.js";import"./Text-DbGQ3XiU.js";import"./DOMUtils-zL1z85r6.js";import"./Label-DztQJaU2.js";import"./ZIndexLayer-CX1hwCrz.js";import"./types-CSmgv1ek.js";import"./ReactUtils-DZO-5FXB.js";import"./ActivePoints-BdPSsFnL.js";import"./Dot-6-wh7CsL.js";import"./RegisterGraphicalItemId-IPVqF7Vn.js";import"./ErrorBarContext-BW79uC4e.js";import"./GraphicalItemClipPath-ChnTD72G.js";import"./SetGraphicalItem-CtAyZH4_.js";import"./useAnimationId-2lKqmsIN.js";import"./getRadiusAndStrokeWidthFromDot-BaVzfpDE.js";import"./ActiveShapeUtils-DPbFIg-T.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DrfuL_Gq.js";import"./Trapezoid-BeG4Metg.js";import"./Sector-CoMH23ZQ.js";import"./Symbols-DxVRzyBt.js";import"./Curve-vdkFq02R.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-ClJsMHvI.js";import"./ChartSizeDimensions-BmiXy0Af.js";import"./OffsetShower-SLhoxg8F.js";import"./PlotAreaShower-CKe-EEVm.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
