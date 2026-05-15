import{e}from"./iframe-BwSUf2T9.js";import{R as n}from"./arrayEqualityCheck-kNUesU9n.js";import{C as p}from"./ComposedChart-DIEhpHjl.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-TC7LM2zJ.js";import{X as f}from"./XAxis-DMsA7lKM.js";import{Y as l}from"./YAxis-CuVkr_B5.js";import{L as d}from"./Line-BN5F3gve.js";import{R as h}from"./ReferenceLine-DHqXPgH-.js";import{R as w}from"./RechartsHookInspector-DKqzdAWN.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CvrFLXNt.js";import"./immer-7Mb6ATLS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-4BCl0_T5.js";import"./index-DweiLrJJ.js";import"./hooks-DWJz6m6D.js";import"./axisSelectors-BxFZbnk8.js";import"./d3-scale-4uUuwoJk.js";import"./zIndexSlice-CtGAVWci.js";import"./renderedTicksSlice-BDQYkSRg.js";import"./CartesianChart-Bob7JQC-.js";import"./chartDataContext-DGesBm7c.js";import"./CategoricalChart-DQIJaSSS.js";import"./CartesianAxis-D9SaV3-s.js";import"./Layer-CG8DX7G3.js";import"./Text-BIBt_YS0.js";import"./DOMUtils-DuReS6JS.js";import"./Label-cBW6O7Up.js";import"./ZIndexLayer-Bv5glbFY.js";import"./types-CNlhQ7_N.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BlFNJVa6.js";import"./ActivePoints-dru_eoBO.js";import"./Dot-CW3ALvSp.js";import"./RegisterGraphicalItemId-fD1_o_b6.js";import"./ErrorBarContext-BaQDv8aw.js";import"./GraphicalItemClipPath-bwNzittR.js";import"./SetGraphicalItem-DlbF6pEY.js";import"./useAnimationId-DY4wSWRx.js";import"./getRadiusAndStrokeWidthFromDot-DGBZLmVX.js";import"./ActiveShapeUtils-N1muSzDi.js";import"./isPlainObject-BZM5eFQe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CW7YI0Bu.js";import"./Trapezoid-BeLgkWe2.js";import"./Sector-D_JRIQS4.js";import"./Symbols-CCCMBfqC.js";import"./symbol-Cn5r8HhL.js";import"./step-CwM1BVfC.js";import"./Curve-DXAcp3xR.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D71go6ze.js";import"./ChartSizeDimensions-DuDQVVyz.js";import"./OffsetShower-3pww61PI.js";import"./PlotAreaShower-CkcQ7s4a.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
