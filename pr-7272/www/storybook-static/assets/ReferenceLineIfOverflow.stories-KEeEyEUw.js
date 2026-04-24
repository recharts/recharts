import{e}from"./iframe-BB47BP_R.js";import{R as n}from"./arrayEqualityCheck-DsmpO4hY.js";import{C as p}from"./ComposedChart-6bKTqoqC.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DwH09EHg.js";import{X as f}from"./XAxis-DQxW9k0r.js";import{Y as l}from"./YAxis-BYM4hMQ-.js";import{L as d}from"./Line-bLTmUZ5A.js";import{R as h}from"./ReferenceLine-BPI3iS9H.js";import{R as w}from"./RechartsHookInspector-Bw_zVSe3.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ChHsTaSR.js";import"./immer-BPWc-cD_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dv8Lspfl.js";import"./index-hrFcE4SI.js";import"./hooks-0PGFTC0L.js";import"./axisSelectors-DwtBuocC.js";import"./d3-scale-DgdfyRiI.js";import"./zIndexSlice-BL1P8vjr.js";import"./renderedTicksSlice-CRYHzUP0.js";import"./CartesianChart-iArLd4YM.js";import"./chartDataContext-CX2kZkbq.js";import"./CategoricalChart-nIJc5rAa.js";import"./CartesianAxis-BRoz3wmQ.js";import"./Layer-CRK7-uYr.js";import"./Text-BaUe6hyp.js";import"./DOMUtils-nrc65p4C.js";import"./Label-C6JmnJH6.js";import"./ZIndexLayer-DNdZ_4fl.js";import"./types-DuFBytmr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-EZ_AUGtU.js";import"./ActivePoints-uz5dhsjB.js";import"./Dot-CtP3KVPS.js";import"./RegisterGraphicalItemId-BStK0gR5.js";import"./ErrorBarContext-zf4eWKzk.js";import"./GraphicalItemClipPath-4XrHnf0Z.js";import"./SetGraphicalItem-BjF_TCCf.js";import"./useAnimationId-CZw8U2vZ.js";import"./getRadiusAndStrokeWidthFromDot-Dy6dZFhg.js";import"./ActiveShapeUtils-C06yHpcU.js";import"./isPlainObject-DJ4Ss-Vn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DCPvPDZL.js";import"./Trapezoid-Bue5bot_.js";import"./Sector-pI1eovgo.js";import"./Symbols-BE9_Ndbl.js";import"./symbol-CvKjPx-j.js";import"./step-CIqLegi0.js";import"./Curve-DocFTLoT.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C_6qwcxC.js";import"./ChartSizeDimensions-BMFZIPSb.js";import"./OffsetShower-CPW2UGpW.js";import"./PlotAreaShower-CjbeU8IP.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
