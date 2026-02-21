import{e}from"./iframe-CiJ-9oSW.js";import{R as n}from"./arrayEqualityCheck-C8jW8oZt.js";import{C as p}from"./ComposedChart-Dc7jAWzW.js";import{C as s}from"./CartesianGrid-DFVcV20B.js";import{X as c}from"./XAxis-BJxfrRMM.js";import{Y as f}from"./YAxis-BZxiz2W9.js";import{L as l}from"./Line-DYv13fKO.js";import{R as d}from"./ReferenceLine-DiuAZfuJ.js";import{R as h}from"./RechartsHookInspector-CQuYP5B8.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C_fWxmLs.js";import"./immer-37ItimpE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-eTQdG_km.js";import"./index-CDsMfUar.js";import"./hooks-Dfqn0uk4.js";import"./axisSelectors-DOyKuHrc.js";import"./d3-scale-DsUEV-Ka.js";import"./zIndexSlice-eHnPInNj.js";import"./renderedTicksSlice-9qCibHxh.js";import"./CartesianChart-CziHqUQ0.js";import"./chartDataContext-C_-Fr4aA.js";import"./CategoricalChart-B2RsDCkt.js";import"./CartesianAxis-BCIccZ9q.js";import"./Layer-BNBNN9ao.js";import"./Text-3tLRx2GL.js";import"./DOMUtils-DnoEKxPk.js";import"./Label-C9pOXevO.js";import"./ZIndexLayer-BJKv50T_.js";import"./types-vu75yOSZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DvnOMe61.js";import"./ActivePoints-C7RKWaCs.js";import"./Dot-3CUYNcL8.js";import"./RegisterGraphicalItemId-C-8W5AZj.js";import"./ErrorBarContext-CYSXeNyx.js";import"./GraphicalItemClipPath-wqub__sm.js";import"./SetGraphicalItem-LQknpEAz.js";import"./useAnimationId-CXrnPLqE.js";import"./getRadiusAndStrokeWidthFromDot-DRdGVHTE.js";import"./ActiveShapeUtils-DyEnrLdp.js";import"./isPlainObject-CsWSYAtR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BfLyzxqP.js";import"./Trapezoid-D3a_DMTo.js";import"./Sector-KbjOkzpv.js";import"./Symbols-B-HpyQSV.js";import"./symbol-BTeg8-vO.js";import"./step-DuNs4m9V.js";import"./Curve-CSLHFVyE.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DbWSPN2V.js";import"./ChartSizeDimensions-mFb6CdqR.js";import"./OffsetShower-vd944Mef.js";import"./PlotAreaShower-mwSW161D.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
