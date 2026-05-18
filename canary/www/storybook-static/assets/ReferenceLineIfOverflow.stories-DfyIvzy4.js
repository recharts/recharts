import{e}from"./iframe-CNlB-yu6.js";import{g as n}from"./arrayEqualityCheck-lQwJ1fam.js";import{C as p}from"./ComposedChart-CFG01hB_.js";import{p as s}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-D6SIWwVp.js";import{X as f}from"./XAxis-BuwdDhSN.js";import{Y as l}from"./YAxis-BWbQlW4z.js";import{L as d}from"./Line-CD6wlHNc.js";import{R as h}from"./ReferenceLine-C1vaq2Lr.js";import{R as w}from"./RechartsHookInspector-D5_K6jhD.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-uksPlQVK.js";import"./immer-awn-juYO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BAvxe-5M.js";import"./index-FVVlmF5D.js";import"./hooks-CzETKye0.js";import"./axisSelectors-Sb3f1ocW.js";import"./d3-scale-DgLwc5xh.js";import"./zIndexSlice-BueUxKyz.js";import"./renderedTicksSlice-BhtQt-EH.js";import"./CartesianChart-BAbFLAD3.js";import"./chartDataContext-B8Bgp5-9.js";import"./CategoricalChart-CCKvkIcs.js";import"./CartesianAxis-Ci2q_-V4.js";import"./Layer-DZ6C1Fsa.js";import"./Text-BkgbSJBB.js";import"./DOMUtils--5Ctvvni.js";import"./Label-Bi7SkSuM.js";import"./ZIndexLayer-DBrFOYBh.js";import"./types-CPecuUPI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CZXZiRZU.js";import"./ActivePoints-BJcxAugH.js";import"./Dot-Be-ydJG6.js";import"./RegisterGraphicalItemId-BYNQWvmg.js";import"./ErrorBarContext-B0g5HTrn.js";import"./GraphicalItemClipPath-D754deXs.js";import"./SetGraphicalItem-DVSS-M3K.js";import"./useAnimationId-PuhsBKnu.js";import"./getRadiusAndStrokeWidthFromDot-YVqudBJv.js";import"./ActiveShapeUtils-BIq2I243.js";import"./isPlainObject-BpzaTaPh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B8_swSm0.js";import"./Trapezoid-C-zzOAzy.js";import"./Sector-LS-_W5nP.js";import"./Symbols-C5zVtj1R.js";import"./symbol-DsMOupFF.js";import"./step-D1tlFFQW.js";import"./Curve-tmuRXssi.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DkFAXYsf.js";import"./ChartSizeDimensions-CofMKbAb.js";import"./OffsetShower-C20eLi2f.js";import"./PlotAreaShower-peVTKEtW.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,ge as default};
