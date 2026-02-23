import{e}from"./iframe-DDI_DJJN.js";import{R as n}from"./arrayEqualityCheck-hZTzDH-w.js";import{C as p}from"./ComposedChart-CSHbYHX_.js";import{C as s}from"./CartesianGrid-djPL6F_S.js";import{X as c}from"./XAxis-CyGjCDT7.js";import{Y as f}from"./YAxis-8PQWMae8.js";import{L as l}from"./Line-30ftzad6.js";import{R as d}from"./ReferenceLine-B-vK8Dj6.js";import{R as h}from"./RechartsHookInspector-C3V8sbCd.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CLbNKqYx.js";import"./immer-Brsuo9bJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMJyf-Ro.js";import"./index-Cy1m0pGF.js";import"./hooks-wL8R-wOE.js";import"./axisSelectors-ChmA7UB1.js";import"./d3-scale-C1aLw3GY.js";import"./zIndexSlice-DxTiX0Vg.js";import"./renderedTicksSlice-CdTaSuMU.js";import"./CartesianChart-0fUn6gYr.js";import"./chartDataContext-D_5cMEe0.js";import"./CategoricalChart-lTFMLhnQ.js";import"./CartesianAxis-FKnuWFmP.js";import"./Layer-CIeq28iC.js";import"./Text-lRH21Xfn.js";import"./DOMUtils-CSAlYQMj.js";import"./Label-CGfHxLGm.js";import"./ZIndexLayer-NEFv0ypW.js";import"./types-3HOHeyG7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BsJAl1au.js";import"./ActivePoints-0YQSYC1d.js";import"./Dot-CPC0L5kt.js";import"./RegisterGraphicalItemId-CcKibD6X.js";import"./ErrorBarContext-CWlsK-qh.js";import"./GraphicalItemClipPath-BeQVZHHf.js";import"./SetGraphicalItem-D9woa3Pp.js";import"./useAnimationId-CexGYFUY.js";import"./getRadiusAndStrokeWidthFromDot-BkaUjW92.js";import"./ActiveShapeUtils-TXeo_kM0.js";import"./isPlainObject-DQmMsT9g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DYHIra0M.js";import"./Trapezoid-CCG-1NIc.js";import"./Sector-BD9d8CEy.js";import"./Symbols-Cb1Mvpcy.js";import"./symbol-BbtwQcdi.js";import"./step-8724oeyl.js";import"./Curve-CV9593Ht.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-iQmKaGYo.js";import"./ChartSizeDimensions-BQ24u2Cw.js";import"./OffsetShower-BVATxvoJ.js";import"./PlotAreaShower-uC34L_bk.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
