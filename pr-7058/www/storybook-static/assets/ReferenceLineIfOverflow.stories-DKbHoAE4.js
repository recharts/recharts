import{e}from"./iframe-CIxNp6W3.js";import{R as n}from"./arrayEqualityCheck-ZcVH4_uJ.js";import{C as p}from"./ComposedChart-Ch4nojgt.js";import{C as s}from"./CartesianGrid-Bwn46UyA.js";import{X as c}from"./XAxis-DSbNXcpO.js";import{Y as f}from"./YAxis-Dt9ZpeSD.js";import{L as l}from"./Line-6m2pOD5-.js";import{R as d}from"./ReferenceLine-B0iMmfZd.js";import{R as h}from"./RechartsHookInspector-B8l4NQFC.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cf5_CJke.js";import"./immer-CkfrG0rl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CnQHtrMt.js";import"./index-Cib5zjST.js";import"./hooks-BNI7_4lT.js";import"./axisSelectors-BeBP2I3U.js";import"./d3-scale-BQ18Pqvj.js";import"./zIndexSlice-BEW6pf_v.js";import"./renderedTicksSlice-CbtbEbDH.js";import"./CartesianChart-CaQ1UeLW.js";import"./chartDataContext-DEZM9FrZ.js";import"./CategoricalChart-FVnBP1Tu.js";import"./CartesianAxis-vyecr7Hl.js";import"./Layer-Bp29xhoh.js";import"./Text-B-dRdN-u.js";import"./DOMUtils-SOpGz0EB.js";import"./Label-DM_zt9zM.js";import"./ZIndexLayer-DPYjXPVc.js";import"./types-D88TaevE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CD81hbcy.js";import"./ActivePoints-JOR1SBd5.js";import"./Dot-DbPKwx4_.js";import"./RegisterGraphicalItemId-B3XRN-uf.js";import"./ErrorBarContext-Dko46g4M.js";import"./GraphicalItemClipPath-DxCJ5NSr.js";import"./SetGraphicalItem-CExaHKdU.js";import"./useAnimationId-BJAtAhRd.js";import"./getRadiusAndStrokeWidthFromDot-DecXli92.js";import"./ActiveShapeUtils-DJ7hB8mH.js";import"./isPlainObject-B_udAERF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDKHqCIu.js";import"./Trapezoid-BynO58oQ.js";import"./Sector-NGTsm_Cr.js";import"./Symbols-CH9tQV3q.js";import"./symbol-R0iacGzj.js";import"./step-CuAsm7Fe.js";import"./Curve-CcclPR5V.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CEgQsKlh.js";import"./ChartSizeDimensions-CNahkAGh.js";import"./OffsetShower-CBcMXDRG.js";import"./PlotAreaShower-BJdN30iA.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
