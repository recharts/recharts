import{e}from"./iframe--x23rdHV.js";import{R as n}from"./arrayEqualityCheck-BD1qZPxT.js";import{C as p}from"./ComposedChart-Cx255MWZ.js";import{C as s}from"./CartesianGrid-CWvvQXSx.js";import{X as c}from"./XAxis-C6zLiMLH.js";import{Y as f}from"./YAxis-DrKE9qmp.js";import{L as l}from"./Line-BcEdIH6b.js";import{R as d}from"./ReferenceLine-BE_PeV9g.js";import{R as h}from"./RechartsHookInspector-CS_N4Y-F.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Q3fBKAvl.js";import"./PolarUtils-DJ6pmdE6.js";import"./RechartsWrapper-CaVQgtIT.js";import"./hooks-B9glux5h.js";import"./axisSelectors-DmpeXiUd.js";import"./zIndexSlice-BZ8J8CWC.js";import"./CartesianChart-7YsubAAE.js";import"./chartDataContext-CDQnRCpO.js";import"./CategoricalChart-NDapYkGp.js";import"./CartesianAxis-kvi8Pcym.js";import"./Layer-W9JL67lG.js";import"./Text-C7KTYcc4.js";import"./DOMUtils-a1QzPdPR.js";import"./Label-CHtfbXlI.js";import"./ZIndexLayer-ezCnztm4.js";import"./types-DIiwzDHn.js";import"./ReactUtils-Bbi28O4z.js";import"./ActivePoints-BGDarTer.js";import"./Dot-DVriPTsk.js";import"./RegisterGraphicalItemId-DjY_2vEh.js";import"./ErrorBarContext-z3_2koBv.js";import"./GraphicalItemClipPath-B3HNdztG.js";import"./SetGraphicalItem-Ccb8m39o.js";import"./useAnimationId-DUCYZNMW.js";import"./getRadiusAndStrokeWidthFromDot-pzOWmeWo.js";import"./ActiveShapeUtils-Xs79DTHH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ZSQAb92H.js";import"./Trapezoid-B1cr3UmX.js";import"./Sector-En_dyy3k.js";import"./Symbols-DVanmgvf.js";import"./Curve-BsoHhr4Y.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DL_1z0BC.js";import"./ChartSizeDimensions-wrT4dmYN.js";import"./OffsetShower-CJxOrGxz.js";import"./PlotAreaShower-AHA62Bp0.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
