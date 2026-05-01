import{e}from"./iframe-C5l4DaJO.js";import{R as n}from"./arrayEqualityCheck-fM0600Tt.js";import{C as p}from"./ComposedChart-OPX83XMh.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B7NRw-Pr.js";import{X as f}from"./XAxis-ByPIKQU1.js";import{Y as l}from"./YAxis-Bv8R6otu.js";import{L as d}from"./Line-DrCzNtMt.js";import{R as h}from"./ReferenceLine-De_uaJq7.js";import{R as w}from"./RechartsHookInspector-eKcCgGD5.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DwIPpqCH.js";import"./immer-BjHWRAG8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DiBHoctn.js";import"./index-D7g3MY6b.js";import"./hooks-CSO2fo2K.js";import"./axisSelectors-2uaPjYwk.js";import"./d3-scale-BfKzTeEs.js";import"./zIndexSlice-BEG784rk.js";import"./renderedTicksSlice-DaHjC-C2.js";import"./CartesianChart-DaKOKwGw.js";import"./chartDataContext-m4J49DgA.js";import"./CategoricalChart-z5J8qEz7.js";import"./CartesianAxis-DstjLvt8.js";import"./Layer-BQ7ZElOW.js";import"./Text-BNyB8yLu.js";import"./DOMUtils-rl_vKHVV.js";import"./Label-CxCh3fMv.js";import"./ZIndexLayer-DhZlyZCE.js";import"./types-CjQ8Fnwy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-C_GhcNSF.js";import"./ActivePoints-DwJBd7DK.js";import"./Dot-DaM5pVyw.js";import"./RegisterGraphicalItemId-DYWgcQMi.js";import"./ErrorBarContext-Cu_fSz69.js";import"./GraphicalItemClipPath-H584rNDL.js";import"./SetGraphicalItem-DKJsTKLV.js";import"./useAnimationId-Ivno0Gk6.js";import"./getRadiusAndStrokeWidthFromDot-Cq3JaBlL.js";import"./ActiveShapeUtils-BesHP-Xv.js";import"./isPlainObject-Bb91VWq3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BvzLcgoo.js";import"./Trapezoid-Mm7QWflE.js";import"./Sector-BXKHAeCR.js";import"./Symbols-CUAzhRbj.js";import"./symbol-Cm5jk-xC.js";import"./step-5ABOenpE.js";import"./Curve-C8kgiu5F.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D-KNk5kJ.js";import"./ChartSizeDimensions-MhlbxMFi.js";import"./OffsetShower-BJNZ64do.js";import"./PlotAreaShower-mtOsWYxm.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
