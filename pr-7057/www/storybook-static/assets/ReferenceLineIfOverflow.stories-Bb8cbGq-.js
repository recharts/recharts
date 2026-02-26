import{e}from"./iframe-6geHM4bd.js";import{R as n}from"./arrayEqualityCheck-Bhk4eC6b.js";import{C as p}from"./ComposedChart-WUSkt1eH.js";import{C as s}from"./CartesianGrid-OsQE69dK.js";import{X as c}from"./XAxis-enChBe_S.js";import{Y as f}from"./YAxis-CyQoyaj5.js";import{L as l}from"./Line-jU53A7NC.js";import{R as d}from"./ReferenceLine-CqpL99On.js";import{R as h}from"./RechartsHookInspector-DIMVuZhQ.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CBsCUn_G.js";import"./immer-BHDsl4Gi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CT-ler3b.js";import"./index-BthKVvnl.js";import"./hooks-DI5QNaPY.js";import"./axisSelectors-CkcbrWkF.js";import"./d3-scale-B4Y55H0h.js";import"./zIndexSlice-DbqCu4eM.js";import"./renderedTicksSlice-Q5iEeOyf.js";import"./CartesianChart-DcdXCHSt.js";import"./chartDataContext-C-mzylkg.js";import"./CategoricalChart-T8dvDJlI.js";import"./CartesianAxis-BqFoQr74.js";import"./Layer-AOnBAVLr.js";import"./Text--8GWbfGy.js";import"./DOMUtils-Bh7eQOMe.js";import"./Label-eYApNfXX.js";import"./ZIndexLayer-D_4fvMt1.js";import"./types-BNIhqt2v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DLbKFm0I.js";import"./ActivePoints-BxYhIeKT.js";import"./Dot-CxbLLsp7.js";import"./RegisterGraphicalItemId-CnRMZ_3g.js";import"./ErrorBarContext-D0w-EAob.js";import"./GraphicalItemClipPath-CLYl1R8a.js";import"./SetGraphicalItem-B9Yc_fe3.js";import"./useAnimationId-RNAT_shg.js";import"./getRadiusAndStrokeWidthFromDot-nLQDjczC.js";import"./ActiveShapeUtils-Bd1evmhL.js";import"./isPlainObject-BrUI-U16.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Upynic_t.js";import"./Trapezoid-COJp5Zhq.js";import"./Sector-xROucIrP.js";import"./Symbols-D0fHlVEK.js";import"./symbol-D3KeBWn_.js";import"./step-DQP9UvLT.js";import"./Curve-CQuCDB0y.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-W9fTJ1Ap.js";import"./ChartSizeDimensions-ZcxWch0o.js";import"./OffsetShower-D1XTDPFK.js";import"./PlotAreaShower-BWZPams-.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
