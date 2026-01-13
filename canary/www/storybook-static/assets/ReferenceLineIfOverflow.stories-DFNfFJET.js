import{e}from"./iframe-ZneQOoj5.js";import{R as n}from"./arrayEqualityCheck-BNajb9_C.js";import{C as p}from"./ComposedChart-BAOyItJh.js";import{C as s}from"./CartesianGrid-9pcoHFJE.js";import{X as c}from"./XAxis-iiI74VtB.js";import{Y as f}from"./YAxis-B0TStWJD.js";import{L as l}from"./Line-DO-PR6R0.js";import{R as d}from"./ReferenceLine-Dbfa4aC_.js";import{R as h}from"./RechartsHookInspector-o16may3G.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Ca5bm1S2.js";import"./PolarUtils-kb3Ynomj.js";import"./RechartsWrapper-Cti5RU63.js";import"./hooks-f5tcO63K.js";import"./axisSelectors-Bn4oM41D.js";import"./zIndexSlice-D_yw_EwD.js";import"./CartesianChart-CYjuCTh1.js";import"./chartDataContext-B0ByfYA8.js";import"./CategoricalChart-Dsfzrp1E.js";import"./CartesianAxis-ZVfszaWr.js";import"./Layer-CxIF_InE.js";import"./Text-BSmPk6IU.js";import"./DOMUtils-CY6Iwyv6.js";import"./Label-s2gAZUId.js";import"./ZIndexLayer-DbAXPfU_.js";import"./types-D_7qF1fe.js";import"./ReactUtils-Bw9y5ciT.js";import"./ActivePoints-DBydqYpl.js";import"./Dot-EaxYnBY2.js";import"./RegisterGraphicalItemId-GDWraSC2.js";import"./ErrorBarContext-ZUCqOgTN.js";import"./GraphicalItemClipPath-D0RDiP4j.js";import"./SetGraphicalItem-xtvvD71Q.js";import"./useAnimationId-qX2h62Hn.js";import"./getRadiusAndStrokeWidthFromDot-CBuap8aJ.js";import"./ActiveShapeUtils-DknnfoXI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-gyHsx_3Q.js";import"./Trapezoid-aiu3Rixu.js";import"./Sector-CIuTmDEF.js";import"./Symbols-DOSg8I_W.js";import"./Curve-D5OcxVms.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BhzpkJlR.js";import"./ChartSizeDimensions-DcPBcGoe.js";import"./OffsetShower-D0qLOk-K.js";import"./PlotAreaShower-kc5kHvIr.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
