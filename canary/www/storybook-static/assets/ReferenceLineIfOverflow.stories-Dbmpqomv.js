import{e}from"./iframe-Ddtg6pJD.js";import{R as n}from"./arrayEqualityCheck-CG9XTfyR.js";import{C as p}from"./ComposedChart-BM48fs1-.js";import{C as s}from"./CartesianGrid-ClAnFFvt.js";import{X as c}from"./XAxis-BuVbltIt.js";import{Y as f}from"./YAxis-DZmITrXC.js";import{L as l}from"./Line-YleTGVwT.js";import{R as d}from"./ReferenceLine-DMiXOb10.js";import{R as h}from"./RechartsHookInspector-CCfITcFS.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BClOIvLb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_aZbub_8.js";import"./hooks-DMJ48TSK.js";import"./axisSelectors-yUV1wcMm.js";import"./zIndexSlice-Ccg2qy_d.js";import"./CartesianChart-BJB0TrzH.js";import"./chartDataContext-rtX1npPB.js";import"./CategoricalChart-DEs3YJXi.js";import"./CartesianAxis-Bg_xmACB.js";import"./Layer-DFCJKk43.js";import"./Text-Dr3Q50hE.js";import"./DOMUtils-ClD35WUk.js";import"./Label-DVFU8Pe0.js";import"./ZIndexLayer-BmeIxVaP.js";import"./types-ClXtAg6j.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Cw8MXjHP.js";import"./ActivePoints-Ds6wCLcR.js";import"./Dot-CLk6qXvT.js";import"./RegisterGraphicalItemId-QH6oSkLG.js";import"./ErrorBarContext-CvI528BI.js";import"./GraphicalItemClipPath-3Plpc9D_.js";import"./SetGraphicalItem-CMBgXv4K.js";import"./useAnimationId-CURyQWbL.js";import"./getRadiusAndStrokeWidthFromDot-dgSAwQ2V.js";import"./ActiveShapeUtils-DMR6fW_T.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DJ8F3yH0.js";import"./Trapezoid-CtTP1eQD.js";import"./Sector-ClpHZ9p-.js";import"./Symbols-TieKMT2F.js";import"./Curve-C-ksUiT7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DxoUglm9.js";import"./ChartSizeDimensions-CSjlsLF1.js";import"./OffsetShower-B4ALlsP9.js";import"./PlotAreaShower-B9MEGcsm.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
