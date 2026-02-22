import{e}from"./iframe-CqeTTYgU.js";import{R as n}from"./arrayEqualityCheck-Coc3X9xQ.js";import{C as p}from"./ComposedChart-BOROE11D.js";import{C as s}from"./CartesianGrid-yfJNILtK.js";import{X as c}from"./XAxis-BD3HY8Ew.js";import{Y as f}from"./YAxis-G7ixdQ8E.js";import{L as l}from"./Line-LV0Unjzt.js";import{R as d}from"./ReferenceLine-Cv_NwzIh.js";import{R as h}from"./RechartsHookInspector-DuqrKYC7.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cwp1jNVd.js";import"./immer-Bmaq1-Mg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D6Akcaf8.js";import"./index-BO_IR7-E.js";import"./hooks-BVZwqIsr.js";import"./axisSelectors-eZrQ8WsS.js";import"./d3-scale-BUPtB_Da.js";import"./zIndexSlice-B88Xz9xU.js";import"./renderedTicksSlice-8ohVO2kh.js";import"./CartesianChart-DZdtJPpm.js";import"./chartDataContext-Ldzwvxi_.js";import"./CategoricalChart-BJzA0W2C.js";import"./CartesianAxis-B73_0LJP.js";import"./Layer-BQFYDPNU.js";import"./Text-CnAhi5dg.js";import"./DOMUtils-CyUZ16Kt.js";import"./Label-CPRQ4lU_.js";import"./ZIndexLayer-3q_nDWL4.js";import"./types-Bq8qb-jz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B-FxzwwC.js";import"./ActivePoints-CQGIjEIn.js";import"./Dot-B3GxioXu.js";import"./RegisterGraphicalItemId-BIO7eBqw.js";import"./ErrorBarContext-CkyHavp9.js";import"./GraphicalItemClipPath-CG5McJvS.js";import"./SetGraphicalItem--tjWfp6d.js";import"./useAnimationId-qdD0Hx_g.js";import"./getRadiusAndStrokeWidthFromDot-8MQj61Xg.js";import"./ActiveShapeUtils-DuOrrb61.js";import"./isPlainObject-D0uwI2wh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ns2TMUOg.js";import"./Trapezoid-CAvqiTd0.js";import"./Sector-DAbvgQ-I.js";import"./Symbols-CZaCanOC.js";import"./symbol-DUDKRTy9.js";import"./step-D7PdYBbD.js";import"./Curve-BysHPIUF.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B3OxvjqV.js";import"./ChartSizeDimensions-VEbBqbyV.js";import"./OffsetShower-DVBsz6mw.js";import"./PlotAreaShower-DAW7_xjH.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
