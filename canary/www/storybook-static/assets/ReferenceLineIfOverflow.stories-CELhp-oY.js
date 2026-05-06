import{e}from"./iframe-6KIzFwNo.js";import{R as n}from"./arrayEqualityCheck-CGqQmqAs.js";import{C as p}from"./ComposedChart-CFeB8Qm9.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DOgFM7CW.js";import{X as f}from"./XAxis-D1NIlvkv.js";import{Y as l}from"./YAxis-BQuCUfzU.js";import{L as d}from"./Line-BsmGvey2.js";import{R as h}from"./ReferenceLine-Bz1iepZQ.js";import{R as w}from"./RechartsHookInspector-DHKbTB6e.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CCemV21k.js";import"./immer-ql4DR2MT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BS52G--d.js";import"./index-CsYEUaZR.js";import"./hooks-DBLrG0Zs.js";import"./axisSelectors-IZ0_1Z0f.js";import"./d3-scale-CbScBmFc.js";import"./zIndexSlice-NyQa_NDp.js";import"./renderedTicksSlice-Bre3xjAe.js";import"./CartesianChart-BlXPw11X.js";import"./chartDataContext-BRQTC3wB.js";import"./CategoricalChart-C7SCseXA.js";import"./CartesianAxis-ByaVWi8_.js";import"./Layer-qh1dFQeJ.js";import"./Text-EuDfZQJr.js";import"./DOMUtils-CF_DubJK.js";import"./Label-LIb90dQ2.js";import"./ZIndexLayer-oU3hoYkX.js";import"./types-Bw6Zsg7c.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-6iymp8WO.js";import"./ActivePoints-DJj1zq0e.js";import"./Dot-CqmXJMhg.js";import"./RegisterGraphicalItemId-BJjNu8aV.js";import"./ErrorBarContext-BCQYaQUJ.js";import"./GraphicalItemClipPath-BiTFGdna.js";import"./SetGraphicalItem-B20_5yrQ.js";import"./useAnimationId-sBKnBvXo.js";import"./getRadiusAndStrokeWidthFromDot-Df503nhX.js";import"./ActiveShapeUtils-DmtFxvwi.js";import"./isPlainObject-CESm1hTz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BFSMfk7Q.js";import"./Trapezoid-R4CEZFO4.js";import"./Sector-BUTYQkfs.js";import"./Symbols-MySoeztG.js";import"./symbol-9PvFUqwr.js";import"./step-CIIfuNim.js";import"./Curve-BHLjwYFi.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D6ot0Q8y.js";import"./ChartSizeDimensions-Cv_HNug1.js";import"./OffsetShower-DwEE3buh.js";import"./PlotAreaShower-BdnS3yQL.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
