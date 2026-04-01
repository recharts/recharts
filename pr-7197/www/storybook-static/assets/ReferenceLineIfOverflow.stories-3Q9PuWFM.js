import{e}from"./iframe-CpushxGE.js";import{R as n}from"./arrayEqualityCheck-VmHOknUh.js";import{C as p}from"./ComposedChart-BGbAqQTx.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BQfUsrZx.js";import{X as f}from"./XAxis-3mUHVa_Q.js";import{Y as l}from"./YAxis-isuSziaR.js";import{L as d}from"./Line-bs4retuD.js";import{R as h}from"./ReferenceLine-DiuKuUQb.js";import{R as w}from"./RechartsHookInspector-h4ARZYih.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B56n8ket.js";import"./immer-Cv3ASI8f.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DvBLK8o3.js";import"./index-CwlbuTCS.js";import"./hooks-CALuMaxS.js";import"./axisSelectors-BUlu_9c5.js";import"./d3-scale-CLRxj8Kp.js";import"./zIndexSlice-BHiqQbmT.js";import"./renderedTicksSlice-x6hn4tz0.js";import"./CartesianChart-B5J4yM2Q.js";import"./chartDataContext-BCzU7NnM.js";import"./CategoricalChart-CsJClX-e.js";import"./CartesianAxis-C6WYLYP9.js";import"./Layer-CGETD00I.js";import"./Text-y4JjiomS.js";import"./DOMUtils-CJKLrICw.js";import"./Label-Cxa0XqXu.js";import"./ZIndexLayer-B2YDg5m4.js";import"./types-CPRA2Aat.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DYxQvQT8.js";import"./ActivePoints-CwpA1DJv.js";import"./Dot-BwRmgNs_.js";import"./RegisterGraphicalItemId-CT6Zr_oQ.js";import"./ErrorBarContext-CLrRGRfs.js";import"./GraphicalItemClipPath-BjHOIpZc.js";import"./SetGraphicalItem-BLLA-ZWB.js";import"./useAnimationId-CaEP2jnF.js";import"./getRadiusAndStrokeWidthFromDot-C3UHG55r.js";import"./ActiveShapeUtils-DlpM3N5z.js";import"./isPlainObject-DBfMrsvU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CagKfqqY.js";import"./Trapezoid-Cc12cYdx.js";import"./Sector-V5LdKq7s.js";import"./Symbols-Dka0CVy4.js";import"./symbol-B3B4BbBB.js";import"./step-C3JKHl5Q.js";import"./Curve-CXWLomdX.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B4LfVqDu.js";import"./ChartSizeDimensions-sbCQr6f5.js";import"./OffsetShower-BnOXM9oT.js";import"./PlotAreaShower-wypqhv64.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
