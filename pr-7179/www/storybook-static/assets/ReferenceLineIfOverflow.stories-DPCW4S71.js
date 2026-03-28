import{e}from"./iframe-CQJPfyRy.js";import{R as n}from"./arrayEqualityCheck-Do-enXm5.js";import{C as p}from"./ComposedChart-CSl27s_R.js";import{C as s}from"./CartesianGrid-2VhS-Z6i.js";import{X as c}from"./XAxis-C55dSO1i.js";import{Y as f}from"./YAxis-zax745HO.js";import{L as l}from"./Line-C2VLHXFP.js";import{R as d}from"./ReferenceLine-Cnwf4Xun.js";import{R as h}from"./RechartsHookInspector-BPipPUFl.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-0riu8XRb.js";import"./immer-DHWyBJal.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-7Czoz0bu.js";import"./index-asPVD2vd.js";import"./hooks-Br8DVu9M.js";import"./axisSelectors-gm8fWGo4.js";import"./d3-scale-0hh8p2_S.js";import"./zIndexSlice-BiBD01er.js";import"./renderedTicksSlice-DTP68QVC.js";import"./CartesianChart-CPXNCGau.js";import"./chartDataContext-DJi5hdYR.js";import"./CategoricalChart-CEJ--eNG.js";import"./CartesianAxis-DQSl9zNs.js";import"./Layer-BR9af65P.js";import"./Text-DUnDznQK.js";import"./DOMUtils-D2gdOsD8.js";import"./Label-BC7yp0Hg.js";import"./ZIndexLayer-CPRNxtdQ.js";import"./types-C_DlCak5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BwwuZj5u.js";import"./ActivePoints-9_VA3S9i.js";import"./Dot-CkHgD_rL.js";import"./RegisterGraphicalItemId-DMChCr2V.js";import"./ErrorBarContext-Dk7bnNHc.js";import"./GraphicalItemClipPath-CC9lmHGx.js";import"./SetGraphicalItem-Dq_i_ZrQ.js";import"./useAnimationId-CEC-e8Az.js";import"./getRadiusAndStrokeWidthFromDot-Cxhe8pLo.js";import"./ActiveShapeUtils-BA4ci1jq.js";import"./isPlainObject-CksZGLlM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dj9r1Fs-.js";import"./Trapezoid-D7kT_7oQ.js";import"./Sector-D83NtDJL.js";import"./Symbols-l6c5y-Z_.js";import"./symbol-BeKwF9Wk.js";import"./step-8cZIHSos.js";import"./Curve-ChVqsMwJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Dy-O-5Cx.js";import"./ChartSizeDimensions-LXLx4zNb.js";import"./OffsetShower-DO50Xpn-.js";import"./PlotAreaShower-5vmtZ6RI.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
