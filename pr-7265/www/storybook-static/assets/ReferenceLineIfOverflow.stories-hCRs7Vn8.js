import{e}from"./iframe-jbS-E__g.js";import{R as n}from"./arrayEqualityCheck-Bc6HaNgk.js";import{C as p}from"./ComposedChart-CltpXdcI.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D6FefVEI.js";import{X as f}from"./XAxis-D2ruk6hB.js";import{Y as l}from"./YAxis-pXEMWudQ.js";import{L as d}from"./Line-Etl43fu5.js";import{R as h}from"./ReferenceLine-CtVCczRr.js";import{R as w}from"./RechartsHookInspector-BHyXn1pK.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-AZHx8nL2.js";import"./immer-1JIHG1sP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B-Sq2tux.js";import"./index-CUlk-TbT.js";import"./hooks-BJbsnZ8W.js";import"./axisSelectors--9NjHi9J.js";import"./d3-scale-CgsVpM20.js";import"./zIndexSlice-fK74Fe27.js";import"./renderedTicksSlice-kref20Pz.js";import"./CartesianChart-Bb9w7oEt.js";import"./chartDataContext-ZjVOMNJz.js";import"./CategoricalChart-Ca7o1_-0.js";import"./CartesianAxis-DVvLgkRy.js";import"./Layer-D3-cQotP.js";import"./Text-DPOTj-ff.js";import"./DOMUtils-Co4AyA4r.js";import"./Label-CqNEB3cA.js";import"./ZIndexLayer-C0UmvjN1.js";import"./types-KpzOghRu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CmIIaVE7.js";import"./ActivePoints-BAygIn8R.js";import"./Dot-B5SXOt0E.js";import"./RegisterGraphicalItemId-B4Mgvmap.js";import"./ErrorBarContext-BTnDLWKc.js";import"./GraphicalItemClipPath-DQWRROhy.js";import"./SetGraphicalItem-CLdOZJOU.js";import"./useAnimationId-Dl-7lH7S.js";import"./getRadiusAndStrokeWidthFromDot-BQh-5tcv.js";import"./ActiveShapeUtils-BRRS2IIP.js";import"./isPlainObject-CVxhLbCo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CttT3kPR.js";import"./Trapezoid-BNwixCzS.js";import"./Sector-C7-FdoJb.js";import"./Symbols-BT1y5TAN.js";import"./symbol-DR7gyPC3.js";import"./step-CRkklqfM.js";import"./Curve-BHonL5AG.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BLWb42Ez.js";import"./ChartSizeDimensions-BpE-Gxiy.js";import"./OffsetShower-BXbfoimB.js";import"./PlotAreaShower-CIgqmqyc.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
