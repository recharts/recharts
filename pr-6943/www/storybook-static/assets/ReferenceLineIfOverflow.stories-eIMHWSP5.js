import{e}from"./iframe-CdO7Aj1B.js";import{R as n}from"./arrayEqualityCheck-DSjGda-c.js";import{C as p}from"./ComposedChart-D7sGpZBQ.js";import{C as s}from"./CartesianGrid-DVOfHa-A.js";import{X as c}from"./XAxis-B3LqZDEz.js";import{Y as f}from"./YAxis-BL8TYUdf.js";import{L as l}from"./Line-hwrXWpiM.js";import{R as d}from"./ReferenceLine-B7g_MGnn.js";import{R as h}from"./RechartsHookInspector-8WkUE3nw.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dyq-HTDO.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CFINL4TS.js";import"./hooks-ByFk5pNE.js";import"./axisSelectors-Cz6m7_H_.js";import"./zIndexSlice-Cqlz5Qvk.js";import"./CartesianChart-K1VjCNnA.js";import"./chartDataContext-CXvLn27W.js";import"./CategoricalChart-CJknGgTn.js";import"./CartesianAxis-C5xy13MG.js";import"./Layer-oFeUaaGY.js";import"./Text-gQNQGlDJ.js";import"./DOMUtils-Dc62r5Je.js";import"./Label-BR3nHz9_.js";import"./ZIndexLayer-Dre2jW6R.js";import"./types-DFIEYgnV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D5Zl77ai.js";import"./ActivePoints-qmc9cdem.js";import"./Dot-BR-Bd9Ri.js";import"./RegisterGraphicalItemId-DmbEzUCY.js";import"./ErrorBarContext-DHKDzrNN.js";import"./GraphicalItemClipPath-C-aricuY.js";import"./SetGraphicalItem-Bu99Otwj.js";import"./useAnimationId-Ci_KtL1a.js";import"./getRadiusAndStrokeWidthFromDot-CcsWdYYV.js";import"./ActiveShapeUtils-BhQSb30R.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ct8C5CYW.js";import"./Trapezoid-UgLOqUt_.js";import"./Sector-D64_Ht99.js";import"./Symbols-DohrOtO1.js";import"./Curve-BvwXZ_2X.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B2k25Twf.js";import"./ChartSizeDimensions-ximU9rqf.js";import"./OffsetShower-zZ47YVPO.js";import"./PlotAreaShower-D_H3WfKK.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
