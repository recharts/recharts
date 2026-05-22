import{e}from"./iframe-osYa99rW.js";import{g as n}from"./arrayEqualityCheck-DVAn2Veo.js";import{C as s}from"./ComposedChart-Bt-pX0Ef.js";import{p}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-B6UjWCCj.js";import{X as f}from"./XAxis-DB9q536o.js";import{Y as l}from"./YAxis-CPpRvup6.js";import{R as h}from"./ReferenceDot-DuEteGCU.js";import{R as d}from"./RechartsHookInspector-VtrkbRKP.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-e5wzBDkv.js";import"./immer-C4kOpB_4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C7HrPqDt.js";import"./index-FVmQP7oK.js";import"./hooks-CbohzQKL.js";import"./axisSelectors-jckpyKNb.js";import"./d3-scale-BGIasGRq.js";import"./zIndexSlice-DbxduRWl.js";import"./renderedTicksSlice-Jw-bjgRX.js";import"./CartesianChart-qVL1bhzD.js";import"./chartDataContext-CTr_Fr3F.js";import"./CategoricalChart-KWj4YaNg.js";import"./CartesianAxis-C67x0626.js";import"./Layer-gnKUTyol.js";import"./Text-BLYIGASS.js";import"./DOMUtils-DNI7arDM.js";import"./Label-DAoBltIG.js";import"./ZIndexLayer-kQ2XKLeS.js";import"./types-D2LtkD4l.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DRU2iJQo.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DXz8B56j.js";import"./ChartSizeDimensions-Cg7YHQ1i.js";import"./OffsetShower-DqXXwFDQ.js";import"./PlotAreaShower-CXw6zCF-.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
