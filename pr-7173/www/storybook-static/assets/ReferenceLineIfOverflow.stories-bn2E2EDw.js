import{e}from"./iframe-BnJtTsiG.js";import{R as n}from"./arrayEqualityCheck-JqF9arvj.js";import{C as p}from"./ComposedChart-Wvhceelx.js";import{C as s}from"./CartesianGrid-C0Nk_Jye.js";import{X as c}from"./XAxis-DNI9rGLu.js";import{Y as f}from"./YAxis-2aBmaGwM.js";import{L as l}from"./Line-Cxdeapqx.js";import{R as d}from"./ReferenceLine-BssSiUKL.js";import{R as h}from"./RechartsHookInspector-BUkbtt6T.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CNKXDHIv.js";import"./immer-BilgQS7Z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DnFeqk-S.js";import"./index-BR9ucj69.js";import"./hooks-DgbcPaC5.js";import"./axisSelectors-_uj0cu9d.js";import"./d3-scale-RH1gCsj4.js";import"./zIndexSlice-u5N52emx.js";import"./renderedTicksSlice-C2Lx4sh9.js";import"./CartesianChart-yY9oGGmK.js";import"./chartDataContext-Br9_d6ie.js";import"./CategoricalChart-CVrJtZ9b.js";import"./CartesianAxis-BY9ve2Nt.js";import"./Layer-CZajLfJ2.js";import"./Text-8iVX3WBp.js";import"./DOMUtils-u57yL_f_.js";import"./Label-C079WU8o.js";import"./ZIndexLayer-MihbceXQ.js";import"./types-Dgf_4DYj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CGCbFUwc.js";import"./ActivePoints-AmnsL1mA.js";import"./Dot-BFdVk3ol.js";import"./RegisterGraphicalItemId-Cp9jZ34F.js";import"./ErrorBarContext-DLm5F4wp.js";import"./GraphicalItemClipPath-BqLiE-Qj.js";import"./SetGraphicalItem-DTmYNChn.js";import"./useAnimationId-BlSLZQPR.js";import"./getRadiusAndStrokeWidthFromDot-C7HKOHBW.js";import"./ActiveShapeUtils-CiETt0z1.js";import"./isPlainObject-DWBUHdsc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-38-vQMAB.js";import"./Trapezoid-CcsFZinE.js";import"./Sector-DPWQhCCR.js";import"./Symbols-kj3svvPH.js";import"./symbol-Y2fv4Hlp.js";import"./step-Dk-_s7iR.js";import"./Curve-Dms99yFp.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BsJ1xsh-.js";import"./ChartSizeDimensions-DdW7v9MQ.js";import"./OffsetShower-YcN9xEjX.js";import"./PlotAreaShower-B5YeOyEN.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
