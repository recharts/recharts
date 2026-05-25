import{e}from"./iframe-CA2bza4n.js";import{g as n}from"./arrayEqualityCheck-DAdSVd1l.js";import{C as p}from"./ComposedChart-BKM2Jk4b.js";import{p as s}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-D-uFJsc9.js";import{X as f}from"./XAxis-CURUMdQ0.js";import{Y as l}from"./YAxis-DFFbe6p-.js";import{L as d}from"./Line-WMeTlkKP.js";import{R as h}from"./ReferenceLine-Cefh85I0.js";import{R as w}from"./RechartsHookInspector-QZX819t0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BnLaySgP.js";import"./immer-DasQIOIX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5q3WxuV.js";import"./index-CsA15_6S.js";import"./hooks-C5pIdCPM.js";import"./axisSelectors-To1e2V6V.js";import"./d3-scale-rP3V7GwL.js";import"./zIndexSlice-CSAGQhtB.js";import"./renderedTicksSlice-DH7mHkyS.js";import"./CartesianChart-DK-SLcv_.js";import"./chartDataContext-DoiK_cA8.js";import"./CategoricalChart-eE49ceQM.js";import"./CartesianAxis-4aGY63Ak.js";import"./Layer-2pQ-0vOW.js";import"./Text-GI5oKEYa.js";import"./DOMUtils-DrG-za0U.js";import"./Label-BmhtQvJ8.js";import"./ZIndexLayer-_xwh97le.js";import"./types-CZ_BmrzD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-7nNudVZs.js";import"./step-BK3O3AGs.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CEO6nkw8.js";import"./ActivePoints-rXvPQbuC.js";import"./Dot-C7a5PgHO.js";import"./RegisterGraphicalItemId-DMySGUM1.js";import"./ErrorBarContext-CKpFXypA.js";import"./GraphicalItemClipPath-qf9cPUyg.js";import"./SetGraphicalItem-iX6trfIf.js";import"./useAnimationId-CvBgWeeZ.js";import"./getRadiusAndStrokeWidthFromDot-M3B-XLBm.js";import"./ActiveShapeUtils-k84bNm8s.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DZjuuzp6.js";import"./ChartSizeDimensions-BRPqgDFi.js";import"./OffsetShower-CTWF0vR4.js";import"./PlotAreaShower-CqWXxpLn.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
