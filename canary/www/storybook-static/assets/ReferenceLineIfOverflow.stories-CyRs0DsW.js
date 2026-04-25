import{e}from"./iframe-1xuwxK0i.js";import{R as n}from"./arrayEqualityCheck-CASLlqQ3.js";import{C as p}from"./ComposedChart-CgqH6xmd.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DMIlunDz.js";import{X as f}from"./XAxis-BKyyM-a9.js";import{Y as l}from"./YAxis-DxhfNzZF.js";import{L as d}from"./Line-CUH5xAuk.js";import{R as h}from"./ReferenceLine-Bxr-mFPv.js";import{R as w}from"./RechartsHookInspector-DjsmwIRA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BeeagbIX.js";import"./immer-BoNsEynp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-5Ekcff7f.js";import"./index-DCwL0QiS.js";import"./hooks-BzE3zYbI.js";import"./axisSelectors-DyjHckMI.js";import"./d3-scale-DUQowLdF.js";import"./zIndexSlice-DPF7rmTT.js";import"./renderedTicksSlice-Dixyj9Jy.js";import"./CartesianChart-4woDVZs_.js";import"./chartDataContext-BwmW5feg.js";import"./CategoricalChart-CiWFX2uU.js";import"./CartesianAxis-DrIFSgXd.js";import"./Layer-HRVol_nO.js";import"./Text-BBwkToBR.js";import"./DOMUtils-BhlllvxT.js";import"./Label-EE46xwmi.js";import"./ZIndexLayer-C7GyPaOO.js";import"./types-UwWXE9AL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B2i9al3C.js";import"./ActivePoints-BVDrdHpP.js";import"./Dot-Bf3Kg0FQ.js";import"./RegisterGraphicalItemId-CklwmYhh.js";import"./ErrorBarContext-SjXcYHyD.js";import"./GraphicalItemClipPath-BmfpOWt-.js";import"./SetGraphicalItem-BECsf1z-.js";import"./useAnimationId-CNQ0amde.js";import"./getRadiusAndStrokeWidthFromDot-CItpH8qB.js";import"./ActiveShapeUtils-CDdbS846.js";import"./isPlainObject-DBcZBbuh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B47wiU0M.js";import"./Trapezoid-Cr4fcElh.js";import"./Sector-2ltBV-lC.js";import"./Symbols-C6y5KnTy.js";import"./symbol-BMBn4bHO.js";import"./step-BCh-34yC.js";import"./Curve-CAhCV73Q.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-l66o8zNg.js";import"./ChartSizeDimensions-lZytJoNO.js";import"./OffsetShower-DHMDBhnx.js";import"./PlotAreaShower-Dete_MNu.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
