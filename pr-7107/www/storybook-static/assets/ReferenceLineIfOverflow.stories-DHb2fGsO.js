import{e}from"./iframe-aCccIK8W.js";import{R as n}from"./arrayEqualityCheck-ClrrSpKq.js";import{C as p}from"./ComposedChart-BI19kJGr.js";import{C as s}from"./CartesianGrid-C6abTyCe.js";import{X as c}from"./XAxis-DiB5K0gp.js";import{Y as f}from"./YAxis-DESrMeXh.js";import{L as l}from"./Line-C_rjhjlW.js";import{R as d}from"./ReferenceLine-BdOGKwId.js";import{R as h}from"./RechartsHookInspector-DXULShHw.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BiMbCPR1.js";import"./immer-CMSDbRto.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-KXQQ6Aed.js";import"./index-7BGALgNU.js";import"./hooks-BQl6gm9P.js";import"./axisSelectors-BqKDnBGl.js";import"./d3-scale-CSKaLMYw.js";import"./zIndexSlice-dI_hsE6E.js";import"./renderedTicksSlice-C5CpkahC.js";import"./CartesianChart-Dg_vwzFX.js";import"./chartDataContext-DcZ4BnGt.js";import"./CategoricalChart-43yq3nHJ.js";import"./CartesianAxis-DWcQuKap.js";import"./Layer-CmBSmthE.js";import"./Text-CNK9ky3H.js";import"./DOMUtils-6k1qM2nD.js";import"./Label-BjurlKVT.js";import"./ZIndexLayer-B0CgEJFf.js";import"./types-BigTFNah.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DHbtMuek.js";import"./ActivePoints-CPXBnAoH.js";import"./Dot-DtYrWfLR.js";import"./RegisterGraphicalItemId-taqDOdbV.js";import"./ErrorBarContext-BYQ7VTEV.js";import"./GraphicalItemClipPath-DFzOqGMg.js";import"./SetGraphicalItem-C9DhQ9yz.js";import"./useAnimationId-DA5IV2DG.js";import"./getRadiusAndStrokeWidthFromDot-BvcMpZcb.js";import"./ActiveShapeUtils-DCYjk_1o.js";import"./isPlainObject-DUQm3b0H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bexr03gH.js";import"./Trapezoid-XFMgvjFP.js";import"./Sector-v0Uu-y4P.js";import"./Symbols-BntmdNmA.js";import"./symbol-CMsEkqSO.js";import"./step-DZfgQXrh.js";import"./Curve-BLf6fQkp.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B0bVpeoD.js";import"./ChartSizeDimensions-6pSaZa--.js";import"./OffsetShower-zTVqoSRT.js";import"./PlotAreaShower-DtT8gIxN.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
