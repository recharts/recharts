import{e}from"./iframe-DFbc2wnk.js";import{R as n}from"./arrayEqualityCheck-DNx-7st0.js";import{C as p}from"./ComposedChart-b5llXj5F.js";import{C as s}from"./CartesianGrid-yYQlEY0W.js";import{X as c}from"./XAxis-DGAvxfHG.js";import{Y as f}from"./YAxis-BmkMcK7A.js";import{L as l}from"./Line-CeZSySXS.js";import{R as d}from"./ReferenceLine-B1cKkgiJ.js";import{R as h}from"./RechartsHookInspector-BArVV55G.js";import{p as w}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ClO_iFbZ.js";import"./PolarUtils-BDvNNmDF.js";import"./RechartsWrapper-PvLVQTSN.js";import"./hooks-zOgLtc1N.js";import"./axisSelectors-BtV4vldP.js";import"./zIndexSlice-DhoG6ae-.js";import"./CartesianChart-DAIV8Ndc.js";import"./chartDataContext-Coc1sgsX.js";import"./CategoricalChart-UkGGk_Hv.js";import"./CartesianAxis-C9Id4cvu.js";import"./Layer-qN8dyvlM.js";import"./Text-DCmcV5md.js";import"./DOMUtils-Bie9vKOH.js";import"./Label-CS9yD1bY.js";import"./ZIndexLayer-DxPlI_9c.js";import"./types-CdWStgLs.js";import"./ReactUtils-BJsLkXPe.js";import"./ActivePoints-BIgMZJDi.js";import"./Dot-DRgklH7x.js";import"./RegisterGraphicalItemId-BFMXufyl.js";import"./ErrorBarContext-DSr7txyg.js";import"./GraphicalItemClipPath-Dc38YvNS.js";import"./SetGraphicalItem-DlUa5gp3.js";import"./useAnimationId-B9C_B4hh.js";import"./getRadiusAndStrokeWidthFromDot-oEQcqU2-.js";import"./ActiveShapeUtils-BSQcxVua.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-tz9WvN-g.js";import"./Trapezoid-CRho5hrx.js";import"./Sector-BE1YiTfv.js";import"./Symbols--iTzKkzh.js";import"./Curve-CTbZZW_i.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DEbDUIbN.js";import"./ChartSizeDimensions-BvKst1DG.js";import"./OffsetShower-BMIsB7Uf.js";import"./PlotAreaShower-CrjZWfAt.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
