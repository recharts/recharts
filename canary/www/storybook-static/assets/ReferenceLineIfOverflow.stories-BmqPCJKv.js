import{e}from"./iframe-DVKGYMpC.js";import{R as n}from"./arrayEqualityCheck-C3dMZwVz.js";import{C as p}from"./ComposedChart-DpZn3J7A.js";import{C as s}from"./CartesianGrid-DdK_tTpX.js";import{X as c}from"./XAxis-WP1B-t-F.js";import{Y as f}from"./YAxis-36kfWwzX.js";import{L as l}from"./Line-DM6-icql.js";import{R as d}from"./ReferenceLine-gFKjbdlp.js";import{R as h}from"./RechartsHookInspector-BRvRKLe7.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-m52n9a41.js";import"./immer-mdmEhKTL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-VcgGm0Mh.js";import"./index-XfA7Rruh.js";import"./hooks-KmYc7udA.js";import"./axisSelectors-C6zo9Ho5.js";import"./d3-scale-CKFP8_y_.js";import"./zIndexSlice-BCKi_K05.js";import"./renderedTicksSlice-DNTEgzlA.js";import"./CartesianChart-20x7b3cD.js";import"./chartDataContext-DkfeKHKL.js";import"./CategoricalChart-lWTiO2LF.js";import"./CartesianAxis-hM284rmA.js";import"./Layer-Cbzg46jm.js";import"./Text-D8j9jByl.js";import"./DOMUtils-Cq0pXhle.js";import"./Label-CgM8GhgJ.js";import"./ZIndexLayer-D9yE2b_P.js";import"./types-D5_2czw6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-2VJeHFxo.js";import"./ActivePoints-D-CneBw2.js";import"./Dot-Du5UEN4g.js";import"./RegisterGraphicalItemId-DFvy2IAN.js";import"./ErrorBarContext-D0RCHEkz.js";import"./GraphicalItemClipPath-Dbga3z9T.js";import"./SetGraphicalItem-Dd-xAAAu.js";import"./useAnimationId-BLC1f5rw.js";import"./getRadiusAndStrokeWidthFromDot-DUAFpNa5.js";import"./ActiveShapeUtils-DbiEWzYq.js";import"./isPlainObject-JLSnB0Dw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BA2b7ur5.js";import"./Trapezoid-Byuc0lU9.js";import"./Sector-BMT_0fK5.js";import"./Symbols-CUdlDqJ5.js";import"./symbol-BuAcBDh_.js";import"./step-BPnB-OiB.js";import"./Curve-DFpbuCXU.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DH-aWMW3.js";import"./ChartSizeDimensions-DAFzj3WJ.js";import"./OffsetShower-lcp6F4HW.js";import"./PlotAreaShower-BUpHI0ia.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
