import{e}from"./iframe-Cbg-fKNU.js";import{g as n}from"./arrayEqualityCheck-hFPRsS2v.js";import{C as p}from"./ComposedChart-Cte27ylB.js";import{p as s}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-B52730MV.js";import{X as f}from"./XAxis-scJ13O_U.js";import{Y as l}from"./YAxis-DeM2VHlz.js";import{L as d}from"./Line-CJNTh-a_.js";import{R as h}from"./ReferenceLine-DKqCpND_.js";import{R as w}from"./RechartsHookInspector-D7okJ7xS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D6T4fIvs.js";import"./immer-S1zDTrNa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-EdxkrsQJ.js";import"./index-tFSrK1wv.js";import"./hooks-CL-gQxGz.js";import"./axisSelectors-COlbOcyl.js";import"./d3-scale-DuHK7VZm.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-ByH7lQpu.js";import"./renderedTicksSlice-BAcUufvh.js";import"./CartesianChart-IEffqnC4.js";import"./chartDataContext-BUHR6knq.js";import"./CategoricalChart-DAwQUD4-.js";import"./CartesianAxis-A8y-DKmq.js";import"./Layer-OlYOmPUf.js";import"./Text-BtrwnnO1.js";import"./DOMUtils-BOYR8naz.js";import"./Label-Dne7i20P.js";import"./ZIndexLayer-qeHNPcT8.js";import"./types-BpyuZwQS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-C22NWxJ6.js";import"./step-CgbJhf5W.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-POHvOeVE.js";import"./useAnimationId-ClgLuj6x.js";import"./ActivePoints-CVBcNwxF.js";import"./Dot-CvNBt79L.js";import"./RegisterGraphicalItemId-CwmBMhGa.js";import"./ErrorBarContext-Q5zY_unn.js";import"./GraphicalItemClipPath-B0xiuhMH.js";import"./SetGraphicalItem-BIH6QpC3.js";import"./getRadiusAndStrokeWidthFromDot-Cg3OgevG.js";import"./ActiveShapeUtils-Drq8bts1.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BkDgLzYn.js";import"./ChartSizeDimensions-D9mNUeVH.js";import"./OffsetShower-DsmXSBYW.js";import"./PlotAreaShower-CeGNuSiV.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ye=["IfOverflow"];export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
