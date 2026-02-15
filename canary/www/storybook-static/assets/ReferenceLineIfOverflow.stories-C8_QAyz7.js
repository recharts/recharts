import{e}from"./iframe-yr43iL0r.js";import{R as n}from"./arrayEqualityCheck-CCQ3u8Vd.js";import{C as p}from"./ComposedChart-1KeYqgHX.js";import{C as s}from"./CartesianGrid-BGR_wFd3.js";import{X as c}from"./XAxis-CO6uFh57.js";import{Y as f}from"./YAxis-mhKbt4Et.js";import{L as l}from"./Line-DPN0sTqh.js";import{R as d}from"./ReferenceLine-H4X2Y2pV.js";import{R as h}from"./RechartsHookInspector-DBIDewuF.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dq1WM_rK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CBwzaw9q.js";import"./hooks-DV8SPP2s.js";import"./axisSelectors-CxU8esto.js";import"./zIndexSlice-BFVNfIo_.js";import"./renderedTicksSlice-C-Ibv-v0.js";import"./CartesianChart-XyvFTYw0.js";import"./chartDataContext-CzToVTlc.js";import"./CategoricalChart-NU99wwp5.js";import"./CartesianAxis-DoAv_8BM.js";import"./Layer-CmzX8B_O.js";import"./Text-D8JJ6HaF.js";import"./DOMUtils-Dis7On6r.js";import"./Label-BXAwjjII.js";import"./ZIndexLayer-Cs9veiYj.js";import"./types-C8fXyDYe.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BmYUR6Pw.js";import"./ActivePoints-C__HlfVm.js";import"./Dot-DO5eF7L8.js";import"./RegisterGraphicalItemId-CyCvhas2.js";import"./ErrorBarContext-OMAqLqYv.js";import"./GraphicalItemClipPath-Cvcgdpb5.js";import"./SetGraphicalItem-BOYYMY6l.js";import"./useAnimationId-CevQg5hG.js";import"./getRadiusAndStrokeWidthFromDot-DEWUqlIZ.js";import"./ActiveShapeUtils-tkDZnXJM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-KnzijHvw.js";import"./Trapezoid-BsqiFDvD.js";import"./Sector-BWGZTQIf.js";import"./Symbols-DYDfKw0L.js";import"./Curve-BbMbMcrT.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BF6TeZpk.js";import"./ChartSizeDimensions-DVhO3wZZ.js";import"./OffsetShower-po89n_GW.js";import"./PlotAreaShower-uj30a7QU.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,he={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const we=["IfOverflow"];export{t as IfOverflow,we as __namedExportsOrder,he as default};
