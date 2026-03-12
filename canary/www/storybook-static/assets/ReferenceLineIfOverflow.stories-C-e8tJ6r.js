import{e}from"./iframe-COcG-qbh.js";import{R as n}from"./arrayEqualityCheck-BeOMvnb3.js";import{C as p}from"./ComposedChart-Bj1Kn6Ah.js";import{C as s}from"./CartesianGrid-1N8_LUDi.js";import{X as c}from"./XAxis-BvRN0x7f.js";import{Y as f}from"./YAxis-D1iCzuYE.js";import{L as l}from"./Line-ybx60JI6.js";import{R as d}from"./ReferenceLine-Cm2hTXZD.js";import{R as h}from"./RechartsHookInspector-D4zrFLHG.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B_uk6Xbm.js";import"./immer-Ca_zwxaB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C1tql2K4.js";import"./index-L5JLgxKc.js";import"./hooks-B6EdczHv.js";import"./axisSelectors-CYW86iHh.js";import"./d3-scale-CT6TP1ZB.js";import"./zIndexSlice-DLKXsrK7.js";import"./renderedTicksSlice-CPg6Eb9Y.js";import"./CartesianChart-C0k3xA_C.js";import"./chartDataContext-BfM2rVtS.js";import"./CategoricalChart-DbHJ5slW.js";import"./CartesianAxis-RY42tSQN.js";import"./Layer-vnezQjXg.js";import"./Text-C_7F8gzT.js";import"./DOMUtils-DToY1wG2.js";import"./Label-DoQmsUBD.js";import"./ZIndexLayer-BbjqRzm7.js";import"./types-BmPLOBN4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-ByNOpxgT.js";import"./ActivePoints-BrEavqGN.js";import"./Dot-CVahyVSD.js";import"./RegisterGraphicalItemId-DgZGaJJ7.js";import"./ErrorBarContext-DI230CHI.js";import"./GraphicalItemClipPath-B0HdbPwh.js";import"./SetGraphicalItem-D9CK4gaX.js";import"./useAnimationId-C4wu98Fe.js";import"./getRadiusAndStrokeWidthFromDot-BeBm-eBn.js";import"./ActiveShapeUtils-RW2zb_O9.js";import"./isPlainObject-C1cKrmsx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DI-yKH8h.js";import"./Trapezoid-CsCypRfT.js";import"./Sector-DxAh5Ohi.js";import"./Symbols-BHgUqhVd.js";import"./symbol-DxkjCDul.js";import"./step-CYjHyJAh.js";import"./Curve-C3xLkezj.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-R98a5OxC.js";import"./ChartSizeDimensions-DH_xn-IL.js";import"./OffsetShower-aZbRgbm7.js";import"./PlotAreaShower-Dce4f1ZD.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
