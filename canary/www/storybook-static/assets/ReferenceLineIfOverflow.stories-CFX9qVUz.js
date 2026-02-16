import{e}from"./iframe-DnFqMkNF.js";import{R as n}from"./arrayEqualityCheck-DEUF_nnv.js";import{C as p}from"./ComposedChart-DVAToR35.js";import{C as s}from"./CartesianGrid-CdVi4ss0.js";import{X as c}from"./XAxis-j8l4i7VN.js";import{Y as f}from"./YAxis-DkzCTt_M.js";import{L as l}from"./Line-uTxHYT36.js";import{R as d}from"./ReferenceLine-BW2QsxSD.js";import{R as h}from"./RechartsHookInspector-CUfHCEPB.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CrMqOqSJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-5Wt67h2M.js";import"./hooks-CP5b_m36.js";import"./axisSelectors-CPdHEeWG.js";import"./zIndexSlice-CXYr44g9.js";import"./renderedTicksSlice-BJnCLUzI.js";import"./CartesianChart-CRkgE73v.js";import"./chartDataContext-BDWyCmXn.js";import"./CategoricalChart-IxDmkQ4g.js";import"./CartesianAxis-CJ5glNJc.js";import"./Layer-9mC9xCqL.js";import"./Text-DsmkRe5m.js";import"./DOMUtils-D5GQzw0x.js";import"./Label-D7fFgVlW.js";import"./ZIndexLayer-B30mlZWZ.js";import"./types-D_jqkROP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-46mNTZgz.js";import"./ActivePoints-B_AgrQap.js";import"./Dot-3Z5bp850.js";import"./RegisterGraphicalItemId-DJudlZJr.js";import"./ErrorBarContext-CbJ9bt-9.js";import"./GraphicalItemClipPath-B-dv77RJ.js";import"./SetGraphicalItem-jeGmKde2.js";import"./useAnimationId-CAcVrmxD.js";import"./getRadiusAndStrokeWidthFromDot-xHG4qJ44.js";import"./ActiveShapeUtils-BUYAPEqO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BqCnT0bH.js";import"./Trapezoid-h6fpFzx0.js";import"./Sector-CApGG2LQ.js";import"./Symbols-CDqR_0sP.js";import"./Curve-BT-KWQUD.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B4_M3vQq.js";import"./ChartSizeDimensions-C8KjVzvN.js";import"./OffsetShower-CPo0ir56.js";import"./PlotAreaShower-B87d4Zfp.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,he={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const we=["IfOverflow"];export{t as IfOverflow,we as __namedExportsOrder,he as default};
