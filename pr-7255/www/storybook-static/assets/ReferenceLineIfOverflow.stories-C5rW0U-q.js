import{e}from"./iframe-Bs9ufhmU.js";import{R as n}from"./arrayEqualityCheck-bNviqcqR.js";import{C as p}from"./ComposedChart-K0C4_WI2.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DYp7RgbA.js";import{X as f}from"./XAxis-vN0EOhjQ.js";import{Y as l}from"./YAxis-Dy4N7pk9.js";import{L as d}from"./Line-a0e7HScR.js";import{R as h}from"./ReferenceLine-1jSOuZjn.js";import{R as w}from"./RechartsHookInspector-BLOzRcf9.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CGjn5uwQ.js";import"./immer-7dvTdnME.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BZIvkK7Y.js";import"./index-Dj-F8bgJ.js";import"./hooks-DNTcenQI.js";import"./axisSelectors-B6DmQDXD.js";import"./d3-scale-QYSZWFrh.js";import"./zIndexSlice-B-DHuVWa.js";import"./renderedTicksSlice-D4shqqjC.js";import"./CartesianChart-BB1EgM6J.js";import"./chartDataContext-pLUBtclw.js";import"./CategoricalChart-jwpeEM8k.js";import"./CartesianAxis-Dy-A2DW9.js";import"./Layer-BeNhTzXz.js";import"./Text-hajrhHnl.js";import"./DOMUtils-DooEv1Ok.js";import"./Label-DU0nM-QI.js";import"./ZIndexLayer-BNfspdHK.js";import"./types-iG6YPFqe.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DhI6Oe1E.js";import"./ActivePoints-B_kl37lc.js";import"./Dot-Hw3ymEj1.js";import"./RegisterGraphicalItemId-_wgk5kOH.js";import"./ErrorBarContext-E0MFYBlH.js";import"./GraphicalItemClipPath-cqIDCUaZ.js";import"./SetGraphicalItem-DGPcT5tY.js";import"./useAnimationId-B97gwkv5.js";import"./getRadiusAndStrokeWidthFromDot-BRin4YHv.js";import"./ActiveShapeUtils-BF7TNpr9.js";import"./isPlainObject-DsuLoG7m.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DUsMUIL7.js";import"./Trapezoid-5VBN_EIn.js";import"./Sector-mpY_PZJM.js";import"./Symbols-D0Ncjn54.js";import"./symbol-BG2oG_xM.js";import"./step-Egwu_prR.js";import"./Curve-B9iYmKCN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-bM7E3l5J.js";import"./ChartSizeDimensions-SAcKlyRY.js";import"./OffsetShower-BK-2MEQe.js";import"./PlotAreaShower-BHBQx0G4.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
