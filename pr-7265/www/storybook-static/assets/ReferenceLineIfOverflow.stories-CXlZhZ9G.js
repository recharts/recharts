import{e}from"./iframe-CUdKgdkG.js";import{R as n}from"./arrayEqualityCheck-BSmSVrdu.js";import{C as p}from"./ComposedChart-B_srWo8L.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CuZ2qMB_.js";import{X as f}from"./XAxis-mAd7Kpdc.js";import{Y as l}from"./YAxis-Na-JXGDj.js";import{L as d}from"./Line-CSFYD9Tk.js";import{R as h}from"./ReferenceLine-BtnfZqS5.js";import{R as w}from"./RechartsHookInspector-Cq0IOlAH.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-FNj3XcfL.js";import"./immer-Cj2VbGf6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cw3qTPi-.js";import"./index-CFMZ10nV.js";import"./hooks-CQ9pmujM.js";import"./axisSelectors-B4cxlRHn.js";import"./d3-scale-Cybfxil2.js";import"./zIndexSlice-R-FfD4BY.js";import"./renderedTicksSlice-CKVu5O47.js";import"./CartesianChart-2AvxhW1F.js";import"./chartDataContext-C6IOAwjY.js";import"./CategoricalChart-Cyn18alE.js";import"./CartesianAxis-IOZxWSIl.js";import"./Layer-DmKN-F8X.js";import"./Text-DGg_g2qE.js";import"./DOMUtils-BpuSrLFt.js";import"./Label-DglRGLXy.js";import"./ZIndexLayer-CDgenCRH.js";import"./types-Du7cRNSr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-C73Q90p0.js";import"./ActivePoints-a6uvGFsO.js";import"./Dot-BZIhq4qY.js";import"./RegisterGraphicalItemId-MhTEXlyY.js";import"./ErrorBarContext-PwkZe7K2.js";import"./GraphicalItemClipPath-doETQzOU.js";import"./SetGraphicalItem-D9_vCp7v.js";import"./useAnimationId-AqfbREG9.js";import"./getRadiusAndStrokeWidthFromDot-D4zfOBB4.js";import"./ActiveShapeUtils-BTsbslWJ.js";import"./isPlainObject-rQI65vsh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BfZJm5g2.js";import"./Trapezoid-CeXt5ImY.js";import"./Sector-Criwg8Ev.js";import"./Symbols-DVxfPYYz.js";import"./symbol-CtsFoFGk.js";import"./step-DvWhuTZk.js";import"./Curve-CaswtT1y.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D6AtQ2XN.js";import"./ChartSizeDimensions-BX1J8uWf.js";import"./OffsetShower-Ba03E4d5.js";import"./PlotAreaShower-CBo6UyYv.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
