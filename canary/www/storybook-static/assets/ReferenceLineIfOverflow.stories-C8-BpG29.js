import{e}from"./iframe-Yt5kG58B.js";import{g as n}from"./arrayEqualityCheck-CmivkQHU.js";import{C as p}from"./ComposedChart-hlF-8j9Q.js";import{p as s}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-C6yEJEor.js";import{X as f}from"./XAxis-BMPl7mYX.js";import{Y as l}from"./YAxis-fNPxfz24.js";import{L as d}from"./Line-DblcEqSB.js";import{R as h}from"./ReferenceLine-D-tMTpyT.js";import{R as w}from"./RechartsHookInspector-Cviat0cY.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-unPLvkOT.js";import"./immer-CcDOB7WW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CNwUSHj6.js";import"./index-CCn_KrYt.js";import"./hooks-DdT8YGKV.js";import"./axisSelectors-Cu_RAN-5.js";import"./d3-scale-ClNNBzhr.js";import"./zIndexSlice-pBWW2gMH.js";import"./renderedTicksSlice-CAjiTAMh.js";import"./CartesianChart-CbX7HdzJ.js";import"./chartDataContext-D89eDWXB.js";import"./CategoricalChart-LTsMGKb4.js";import"./CartesianAxis-CkTrjpZB.js";import"./Layer-C5jjOkvS.js";import"./Text-Ch8634yl.js";import"./DOMUtils-BHiH0dNd.js";import"./Label-BnSyr1ay.js";import"./ZIndexLayer-V8l53dIn.js";import"./types-DbVT1P7h.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BqZs6d01.js";import"./step-C2PKa5KE.js";import"./path-DyVhHtw_.js";import"./ReactUtils-Jy4OurHq.js";import"./ActivePoints-BQ3lgqlU.js";import"./Dot-BBaQQz_u.js";import"./RegisterGraphicalItemId-u9uNYDRF.js";import"./ErrorBarContext-CIW2Opuu.js";import"./GraphicalItemClipPath-BVHUKTdw.js";import"./SetGraphicalItem-BQyEnfew.js";import"./useAnimationId-D8AADvXI.js";import"./getRadiusAndStrokeWidthFromDot-ew-Ir4iU.js";import"./ActiveShapeUtils-C6u69RRm.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BGUbPMKQ.js";import"./ChartSizeDimensions-DfUWMKem.js";import"./OffsetShower-DwOtQel9.js";import"./PlotAreaShower-C3hlHEsr.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
