import{e}from"./iframe-DDnGsu5h.js";import{R as n}from"./arrayEqualityCheck-b4GtS9KF.js";import{C as p}from"./ComposedChart-DnFRUbQ4.js";import{C as s}from"./CartesianGrid-Cqk_p3-f.js";import{X as c}from"./XAxis-_OohREfq.js";import{Y as f}from"./YAxis-BFUe8vT1.js";import{L as l}from"./Line-B4wil4Rf.js";import{R as d}from"./ReferenceLine-N1GsUWJL.js";import{R as h}from"./RechartsHookInspector-BSABdRIX.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-fGyvU07W.js";import"./immer-Wl9pIdwq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CV2CC7gc.js";import"./index-d0V4PGet.js";import"./hooks-CvD5OSLo.js";import"./axisSelectors-K5XPsZJJ.js";import"./d3-scale-CMnVuEfq.js";import"./zIndexSlice-CzCRY4NE.js";import"./renderedTicksSlice-C6o-1nzY.js";import"./CartesianChart-B6G_xsde.js";import"./chartDataContext-BS9VYmJ6.js";import"./CategoricalChart-DhfYtuLa.js";import"./CartesianAxis-C4D4URoI.js";import"./Layer-BQ5I3ZR3.js";import"./Text-DIC51zN-.js";import"./DOMUtils-jQ5hfjUg.js";import"./Label-Cq1Jw9bg.js";import"./ZIndexLayer-CSa4Hu6m.js";import"./types-VBSg6qfW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-LLGJjmJY.js";import"./ActivePoints-Bm7ShVQX.js";import"./Dot-BvK9-kYF.js";import"./RegisterGraphicalItemId-BptZQ5zb.js";import"./ErrorBarContext-Bza5L9FQ.js";import"./GraphicalItemClipPath-wpXTFAhB.js";import"./SetGraphicalItem-Bpj0QyBT.js";import"./useAnimationId-CsY2QYNS.js";import"./getRadiusAndStrokeWidthFromDot-BQH46_oi.js";import"./ActiveShapeUtils-Qp0g2m0V.js";import"./isPlainObject-dg6p2L4N.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CItL8Q7z.js";import"./Trapezoid-sOsheLpd.js";import"./Sector-DVi4Mpj4.js";import"./Symbols-BliKz0Rz.js";import"./symbol-DvZtmJVK.js";import"./step-NA2d-6xM.js";import"./Curve-CVMF8Bc_.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DFiQJbL_.js";import"./ChartSizeDimensions-BTgFhtFz.js";import"./OffsetShower-C6Pk8qlF.js";import"./PlotAreaShower-Dg7-kQiU.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
