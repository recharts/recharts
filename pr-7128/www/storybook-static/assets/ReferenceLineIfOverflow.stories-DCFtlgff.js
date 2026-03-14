import{e}from"./iframe-CxdcV2iU.js";import{R as n}from"./arrayEqualityCheck-DE5QCts1.js";import{C as p}from"./ComposedChart-5IQX-f6S.js";import{C as s}from"./CartesianGrid-B38EGBL2.js";import{X as c}from"./XAxis-C3dQuPvy.js";import{Y as f}from"./YAxis-Kn_05Fgj.js";import{L as l}from"./Line-DzCb6Me0.js";import{R as d}from"./ReferenceLine-CpR-U-dS.js";import{R as h}from"./RechartsHookInspector-Cmn_3oAZ.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BPgO4-u0.js";import"./immer-DbqgSjuj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-xlhT3EQD.js";import"./index-DQ1yjceL.js";import"./hooks-yyrPm8Tk.js";import"./axisSelectors-DYgSuTD7.js";import"./d3-scale-C-pis2q-.js";import"./zIndexSlice-DIhuoP2j.js";import"./renderedTicksSlice-DjqA2mFu.js";import"./CartesianChart-DuL6NNnl.js";import"./chartDataContext-yNk83f89.js";import"./CategoricalChart-3r6RgUng.js";import"./CartesianAxis-BIQ5tC5_.js";import"./Layer-C-TFz9Vn.js";import"./Text-gpiQWITt.js";import"./DOMUtils-C9YYP4cZ.js";import"./Label-BgXSQpWc.js";import"./ZIndexLayer-CWN6c1mH.js";import"./types-d6h03Wgd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BTiU_wBS.js";import"./ActivePoints-wIbpr4RN.js";import"./Dot-fd7eIvkn.js";import"./RegisterGraphicalItemId-Cdy6MSjO.js";import"./ErrorBarContext-CcA-FFLX.js";import"./GraphicalItemClipPath-CIKZm01y.js";import"./SetGraphicalItem-C9igpr7g.js";import"./useAnimationId-LJTPfExM.js";import"./getRadiusAndStrokeWidthFromDot-BgclTB9C.js";import"./ActiveShapeUtils-C1lnMWmS.js";import"./isPlainObject-7KcThv1C.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dl57DUUW.js";import"./Trapezoid-DT3U4xXZ.js";import"./Sector-CTFx0r-m.js";import"./Symbols-PkBH2_X7.js";import"./symbol-6aewdZ8t.js";import"./step-D4kO6QN2.js";import"./Curve-BibSVypT.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-8erOpdWv.js";import"./ChartSizeDimensions-yUCjMHhs.js";import"./OffsetShower-BFUvvsPo.js";import"./PlotAreaShower-BtFJQ4W6.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
