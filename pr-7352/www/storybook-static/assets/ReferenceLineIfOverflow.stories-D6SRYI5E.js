import{e}from"./iframe-osYa99rW.js";import{g as n}from"./arrayEqualityCheck-DVAn2Veo.js";import{C as p}from"./ComposedChart-Bt-pX0Ef.js";import{p as s}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-B6UjWCCj.js";import{X as f}from"./XAxis-DB9q536o.js";import{Y as l}from"./YAxis-CPpRvup6.js";import{L as d}from"./Line-C2qsCCMD.js";import{R as h}from"./ReferenceLine-DpgMoENi.js";import{R as w}from"./RechartsHookInspector-VtrkbRKP.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-e5wzBDkv.js";import"./immer-C4kOpB_4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C7HrPqDt.js";import"./index-FVmQP7oK.js";import"./hooks-CbohzQKL.js";import"./axisSelectors-jckpyKNb.js";import"./d3-scale-BGIasGRq.js";import"./zIndexSlice-DbxduRWl.js";import"./renderedTicksSlice-Jw-bjgRX.js";import"./CartesianChart-qVL1bhzD.js";import"./chartDataContext-CTr_Fr3F.js";import"./CategoricalChart-KWj4YaNg.js";import"./CartesianAxis-C67x0626.js";import"./Layer-gnKUTyol.js";import"./Text-BLYIGASS.js";import"./DOMUtils-DNI7arDM.js";import"./Label-DAoBltIG.js";import"./ZIndexLayer-kQ2XKLeS.js";import"./types-D2LtkD4l.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DMV5yuc6.js";import"./step-BBN71zyD.js";import"./path-DyVhHtw_.js";import"./ReactUtils-Dd2jwjm5.js";import"./ActivePoints-42Our513.js";import"./Dot-DRU2iJQo.js";import"./RegisterGraphicalItemId-rIlloXLK.js";import"./ErrorBarContext-Xd9mG_11.js";import"./GraphicalItemClipPath-BJe2Wn_o.js";import"./SetGraphicalItem-DW948_Jf.js";import"./useAnimationId-CKNV6DVG.js";import"./getRadiusAndStrokeWidthFromDot-CGiLTsNp.js";import"./ActiveShapeUtils-CUIK7NEg.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DXz8B56j.js";import"./ChartSizeDimensions-Cg7YHQ1i.js";import"./OffsetShower-DqXXwFDQ.js";import"./PlotAreaShower-CXw6zCF-.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
