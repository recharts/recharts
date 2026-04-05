import{e}from"./iframe-BzU5tZG5.js";import{R as n}from"./arrayEqualityCheck-BsfMiBB8.js";import{C as p}from"./ComposedChart-BoR_lsyS.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-tw-k3o28.js";import{X as f}from"./XAxis-B-W2dzi3.js";import{Y as l}from"./YAxis-l0f4JbWK.js";import{L as d}from"./Line-Ct73r5ic.js";import{R as h}from"./ReferenceLine-CIaux6Wl.js";import{R as w}from"./RechartsHookInspector-DCXeAgKX.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DmGz1ogE.js";import"./immer-C0fwLmkH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BbxErU3E.js";import"./index-De8EN-cC.js";import"./hooks-BZ9lkAel.js";import"./axisSelectors-Cxfo6rVo.js";import"./d3-scale-DcKEztNx.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-Bd6-3QTP.js";import"./renderedTicksSlice-HvaIjOyz.js";import"./CartesianChart-BVGWETT1.js";import"./chartDataContext-DW4aeEtj.js";import"./CategoricalChart-FYUpa-sB.js";import"./CartesianAxis--HQls11E.js";import"./Layer-BoRDeEOm.js";import"./Text-CmxtkjMm.js";import"./DOMUtils-Bnb5Olzx.js";import"./Label-hToV_gRB.js";import"./ZIndexLayer-x07EvPLC.js";import"./types-BbKBmvI2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./AnimatedItems-DpJzQnXc.js";import"./useAnimationId-D2sjwezL.js";import"./ActivePoints-OqIedk1P.js";import"./Dot-DzV-VpNB.js";import"./RegisterGraphicalItemId-B44_OcBQ.js";import"./ErrorBarContext-B_54DcZB.js";import"./GraphicalItemClipPath-CjoeLGJT.js";import"./SetGraphicalItem-D8FHaqBq.js";import"./getRadiusAndStrokeWidthFromDot-D38YSDE-.js";import"./ActiveShapeUtils-DAfXePCg.js";import"./isPlainObject-DeEpFnEl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dql0fF0Y.js";import"./Trapezoid-Du0ZEVwP.js";import"./Sector-CPh9calM.js";import"./Symbols-BOk-75a6.js";import"./symbol-CgkrJkl1.js";import"./step-fSDMrmBj.js";import"./Curve-DQMyibMX.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BxJbg6c2.js";import"./ChartSizeDimensions-CVqRiDUJ.js";import"./OffsetShower-0OLqDfEA.js";import"./PlotAreaShower-C8OLz8bs.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Ce={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Oe=["IfOverflow"];export{t as IfOverflow,Oe as __namedExportsOrder,Ce as default};
