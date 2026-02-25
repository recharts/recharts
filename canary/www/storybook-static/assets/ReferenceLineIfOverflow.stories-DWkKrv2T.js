import{e}from"./iframe-CCtdbun4.js";import{R as n}from"./arrayEqualityCheck-BN-qRjNh.js";import{C as p}from"./ComposedChart-BHeCK0iI.js";import{C as s}from"./CartesianGrid-DpC4y52a.js";import{X as c}from"./XAxis-Ct1i4Wo3.js";import{Y as f}from"./YAxis-BAJWEbem.js";import{L as l}from"./Line-DI439emv.js";import{R as d}from"./ReferenceLine-DqlBQzCM.js";import{R as h}from"./RechartsHookInspector-nkQJYVm3.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cu5xR3IA.js";import"./immer-BcxcW3su.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CEuf5fH-.js";import"./index-DBCQ_ffx.js";import"./hooks-DXcbfnOk.js";import"./axisSelectors-BomcgeiZ.js";import"./d3-scale-CwYvmJNK.js";import"./zIndexSlice-DX2GAYEt.js";import"./renderedTicksSlice-iuxiofvQ.js";import"./CartesianChart-rX1ISTKc.js";import"./chartDataContext-D9BGjOgR.js";import"./CategoricalChart-ozbpSDhd.js";import"./CartesianAxis-DjTpORWb.js";import"./Layer-De9fsiqG.js";import"./Text-BxEo2MUu.js";import"./DOMUtils-DqJTy59P.js";import"./Label-B5ApX3Ma.js";import"./ZIndexLayer-i87njMD3.js";import"./types-W2NqahI8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DmviycaL.js";import"./ActivePoints-BkjKkFoX.js";import"./Dot-DR26Huk-.js";import"./RegisterGraphicalItemId-BxjxRH6l.js";import"./ErrorBarContext-ANthrryL.js";import"./GraphicalItemClipPath-CUfY08eo.js";import"./SetGraphicalItem-CHU7mth4.js";import"./useAnimationId-Dw71NoSQ.js";import"./getRadiusAndStrokeWidthFromDot-tQsEHpRr.js";import"./ActiveShapeUtils-DrfPmOEF.js";import"./isPlainObject-Cvg7OzPl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DkQFoQU0.js";import"./Trapezoid-BDAKKZ25.js";import"./Sector-DD0LTKZr.js";import"./Symbols-C_90O_d8.js";import"./symbol-B6Bw4Roa.js";import"./step-axPf2-sT.js";import"./Curve-Bg-TKsWy.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BAcfBBrr.js";import"./ChartSizeDimensions-BH1EyVxm.js";import"./OffsetShower-WQ852gw6.js";import"./PlotAreaShower-B-YpjWsE.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
