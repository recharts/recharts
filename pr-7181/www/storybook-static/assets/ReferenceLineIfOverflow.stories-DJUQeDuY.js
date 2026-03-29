import{e}from"./iframe-C5xSgLrQ.js";import{R as n}from"./arrayEqualityCheck-y9OahTCZ.js";import{C as p}from"./ComposedChart-Cii0yw7e.js";import{C as s}from"./CartesianGrid-D4zDVCTs.js";import{X as c}from"./XAxis-BRtXBZQJ.js";import{Y as f}from"./YAxis-DVWoPU6G.js";import{L as l}from"./Line-CdtP_u6B.js";import{R as d}from"./ReferenceLine-DqymsNom.js";import{R as h}from"./RechartsHookInspector-DGw_Tn__.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CvWnTU23.js";import"./immer-CibMA2Vd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C6VkPGGy.js";import"./index-7mth2ygc.js";import"./hooks-D_Ct_jBZ.js";import"./axisSelectors-Cjz2FycN.js";import"./d3-scale-DSnNq-Zb.js";import"./zIndexSlice-Bh8d7RDS.js";import"./renderedTicksSlice-3asYpfwT.js";import"./CartesianChart-DEUFIUWW.js";import"./chartDataContext-DLPHSsFH.js";import"./CategoricalChart-CdAWxs2w.js";import"./CartesianAxis-z8YHC5m1.js";import"./Layer-BwFEHJgH.js";import"./Text-D6Wg1Fki.js";import"./DOMUtils-DtO1NYEm.js";import"./Label-BiYutikV.js";import"./ZIndexLayer-BcEHBZGv.js";import"./types-BYICSsoS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BVTYGt8W.js";import"./ActivePoints-jvxv4kw8.js";import"./Dot-CuQtPzJT.js";import"./RegisterGraphicalItemId-B7TKQ3nD.js";import"./ErrorBarContext-C-GsEDOJ.js";import"./GraphicalItemClipPath-2_yqp8aO.js";import"./SetGraphicalItem-DGqH91p1.js";import"./useAnimationId-CQohD0O1.js";import"./getRadiusAndStrokeWidthFromDot-BzTohH68.js";import"./ActiveShapeUtils-8cpt_Ena.js";import"./isPlainObject-3QUEcvgB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-FhpSgi7L.js";import"./Trapezoid-C6D7yGaZ.js";import"./Sector-DJx2xoEl.js";import"./Symbols-DwxktYbI.js";import"./symbol-B65zJ9aN.js";import"./step-D0TR_J7h.js";import"./Curve-BgNWnWhG.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DNx2k_-S.js";import"./ChartSizeDimensions-ChWtlIEh.js";import"./OffsetShower-ChplnW4p.js";import"./PlotAreaShower-UojNVDVn.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
