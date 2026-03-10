import{e}from"./iframe-DbhhbAlo.js";import{R as n}from"./arrayEqualityCheck-Lx_TMjyu.js";import{C as p}from"./ComposedChart-9BJrK2bZ.js";import{C as s}from"./CartesianGrid-S4-Vu-NK.js";import{X as c}from"./XAxis-DjIfDDta.js";import{Y as f}from"./YAxis-Dj1421bZ.js";import{L as l}from"./Line-DU9DHTcH.js";import{R as d}from"./ReferenceLine-DLiW2TKp.js";import{R as h}from"./RechartsHookInspector-BSvxhUzi.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DqjP-SJZ.js";import"./immer-CXubSzbd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BqWeXDcR.js";import"./index-bP3uccvR.js";import"./hooks-rkaChWzj.js";import"./axisSelectors-CG6dK3nK.js";import"./d3-scale-CD7WeVUs.js";import"./zIndexSlice-tEJEPfMp.js";import"./renderedTicksSlice-Br_sCV6u.js";import"./CartesianChart-2XwRf_I_.js";import"./chartDataContext-BjOOHIMo.js";import"./CategoricalChart-lS70JkQC.js";import"./CartesianAxis-DOxCqOnp.js";import"./Layer-BLRPCKMQ.js";import"./Text-9tx7qVgJ.js";import"./DOMUtils-CxI3YG9P.js";import"./Label-BD-AsMTb.js";import"./ZIndexLayer-BXjMifaG.js";import"./types-DCl9eSsv.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DlRYbFyy.js";import"./ActivePoints-DtxAI_Pv.js";import"./Dot-CgUaw4tF.js";import"./RegisterGraphicalItemId-CiV8HnYd.js";import"./ErrorBarContext-8lDTik7_.js";import"./GraphicalItemClipPath-Bl8bx72_.js";import"./SetGraphicalItem-CKtT4vYj.js";import"./useAnimationId-CLYn9ysU.js";import"./getRadiusAndStrokeWidthFromDot-CIAhrogS.js";import"./ActiveShapeUtils-BiQ2ESb_.js";import"./isPlainObject-D743ttwB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIGKSdSo.js";import"./Trapezoid-okY0yamA.js";import"./Sector-C3VJLfsw.js";import"./Symbols-C4vV8xjD.js";import"./symbol-PPpy3bVe.js";import"./step-B3CTsvyi.js";import"./Curve-Dxoto--N.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BEJpunbk.js";import"./ChartSizeDimensions-BHCR1SDL.js";import"./OffsetShower-D8NGzvq1.js";import"./PlotAreaShower-CmMEUx8D.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
