import{e}from"./iframe-BhUxTtiL.js";import{g as n}from"./arrayEqualityCheck-DppgWusB.js";import{C as p}from"./ComposedChart-BMn_6oDC.js";import{p as s}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid--6r5zeu6.js";import{X as f}from"./XAxis-C73en9jh.js";import{Y as l}from"./YAxis-CqkUk7nh.js";import{L as d}from"./Line-p3VovnKi.js";import{R as h}from"./ReferenceLine-l6AYWEGR.js";import{R as w}from"./RechartsHookInspector-JMIq0pQS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BwRhqspK.js";import"./immer-CHCHxlI3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BR1uoXx0.js";import"./index-XjGx_uyE.js";import"./hooks-DR2LEq6I.js";import"./axisSelectors-CJkBbfZc.js";import"./d3-scale-XHTmrGeR.js";import"./zIndexSlice-nXWOo65n.js";import"./renderedTicksSlice-CYNpjUFM.js";import"./CartesianChart-Bbu5UDic.js";import"./chartDataContext-l2E_xhbE.js";import"./CategoricalChart-BpuJQUho.js";import"./CartesianAxis-Dg6rum68.js";import"./Layer-BGQI9FGV.js";import"./Text-_q4HIlMq.js";import"./DOMUtils-BPHETHho.js";import"./Label-B-L_WnHM.js";import"./ZIndexLayer-BPpIaF6c.js";import"./types-Lg-gn8wA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BICrVSEu.js";import"./step-DotG6x7P.js";import"./path-DyVhHtw_.js";import"./ReactUtils-BLhQELGN.js";import"./ActivePoints-B8FRaVHI.js";import"./Dot-Bn8XUR1d.js";import"./RegisterGraphicalItemId-05uKE1t1.js";import"./ErrorBarContext-xJxnsNXv.js";import"./GraphicalItemClipPath-CLhlaT2j.js";import"./SetGraphicalItem-C4bg6-5U.js";import"./useAnimationId-B-QfnVAI.js";import"./getRadiusAndStrokeWidthFromDot-CjnN3OM9.js";import"./ActiveShapeUtils-BtaI_SKC.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-6wyw6I_N.js";import"./ChartSizeDimensions-Bic6l-OJ.js";import"./OffsetShower-CD4roSzf.js";import"./PlotAreaShower-CXgcskuB.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ve=["IfOverflow"];export{t as IfOverflow,ve as __namedExportsOrder,we as default};
