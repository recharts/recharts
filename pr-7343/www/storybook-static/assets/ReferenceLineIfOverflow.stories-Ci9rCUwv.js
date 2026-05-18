import{e}from"./iframe-CuZPGzPC.js";import{g as n}from"./arrayEqualityCheck-0ArgbeWo.js";import{C as p}from"./ComposedChart-O8LQGjYj.js";import{p as s}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-B0MSrHB_.js";import{X as f}from"./XAxis-BZ1tAbJs.js";import{Y as l}from"./YAxis-CPd7xvrx.js";import{L as d}from"./Line-Cco-oGoS.js";import{R as h}from"./ReferenceLine-B8FXYQw9.js";import{R as w}from"./RechartsHookInspector-zRKZmo0i.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bk_EQyDM.js";import"./immer-YqkYbV94.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B6XKG7Lc.js";import"./index-Cvyduo3w.js";import"./hooks-CtSYEaPh.js";import"./axisSelectors-DJmfaPi-.js";import"./d3-scale-DFAjRXo_.js";import"./zIndexSlice-BDdD7Z6D.js";import"./renderedTicksSlice-CZA7_M_S.js";import"./CartesianChart-DorQ2AK5.js";import"./chartDataContext-B0jZsWqF.js";import"./CategoricalChart-BXlLUI69.js";import"./CartesianAxis-CfFX5JcQ.js";import"./Layer-D8WyiXT0.js";import"./Text-zA_9GeJ1.js";import"./DOMUtils-BikjfFYx.js";import"./Label-zspUhklU.js";import"./ZIndexLayer-B4dYONTA.js";import"./types-DTMUikhY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-G6cK3lSP.js";import"./ActivePoints-3HxEsaWV.js";import"./Dot-BETACs3N.js";import"./RegisterGraphicalItemId-Bjl2IzLe.js";import"./ErrorBarContext-BiThez5i.js";import"./GraphicalItemClipPath-DUbxYwTC.js";import"./SetGraphicalItem-B2q_jALm.js";import"./useAnimationId-CevvSFVo.js";import"./getRadiusAndStrokeWidthFromDot-CXvTaXSz.js";import"./ActiveShapeUtils-CX1NIdn4.js";import"./isPlainObject-C_gHiSxR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DjKAtsYL.js";import"./Trapezoid-CG3AkdCU.js";import"./Sector-CPKMPiIf.js";import"./Symbols-B_rDkX2s.js";import"./symbol-DmWPr50b.js";import"./step-CqiKd4MR.js";import"./Curve-8oAwKTPO.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D_0WpHmK.js";import"./ChartSizeDimensions-Dt2wwaf3.js";import"./OffsetShower-D-8ojbsk.js";import"./PlotAreaShower-D985qYJk.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,ge as default};
