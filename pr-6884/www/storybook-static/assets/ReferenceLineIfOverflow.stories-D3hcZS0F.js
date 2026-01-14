import{e}from"./iframe-CaIgGyHM.js";import{R as n}from"./arrayEqualityCheck-CjxR2bSj.js";import{C as p}from"./ComposedChart-ByOO_lp0.js";import{C as s}from"./CartesianGrid-Bv3reDCi.js";import{X as c}from"./XAxis-CTD8LeaB.js";import{Y as f}from"./YAxis-CtUU2Zal.js";import{L as l}from"./Line-JaWJo4pn.js";import{R as d}from"./ReferenceLine-BCzinTnk.js";import{R as h}from"./RechartsHookInspector-Dwl6GEES.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DWSFOFU9.js";import"./PolarUtils-DrqRDweU.js";import"./RechartsWrapper-GR6QdmkY.js";import"./hooks-C-Cwfz9Q.js";import"./axisSelectors-CnuhT51I.js";import"./zIndexSlice-Q7xIp-VY.js";import"./CartesianChart-oU5kzf8D.js";import"./chartDataContext-D2XV3P37.js";import"./CategoricalChart-BosqoloG.js";import"./CartesianAxis-BIL2gr42.js";import"./Layer-Bv6QiOXu.js";import"./Text-b4cawV-F.js";import"./DOMUtils-Bp1vNIxR.js";import"./Label-P-OvPLPn.js";import"./ZIndexLayer-Dbr8-T8d.js";import"./types-8d_H4dY-.js";import"./ReactUtils-CsC3O-TD.js";import"./ActivePoints-C6Jn1jar.js";import"./Dot-LAxET7O2.js";import"./RegisterGraphicalItemId-BuoGtP2e.js";import"./ErrorBarContext-Dm8UQh69.js";import"./GraphicalItemClipPath-DomblT_L.js";import"./SetGraphicalItem-ByoAYqMJ.js";import"./useAnimationId-C8_uny94.js";import"./getRadiusAndStrokeWidthFromDot-_YFZPvzl.js";import"./ActiveShapeUtils-BYK5wQE6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CaJA74zA.js";import"./Trapezoid-DwBeZXV_.js";import"./Sector-BJsydvu6.js";import"./Symbols-Crj6RDt9.js";import"./Curve-9htNi4i5.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B-tNTan1.js";import"./ChartSizeDimensions-BI1RWPz_.js";import"./OffsetShower-BPLk7P8i.js";import"./PlotAreaShower-CFgftmSD.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
