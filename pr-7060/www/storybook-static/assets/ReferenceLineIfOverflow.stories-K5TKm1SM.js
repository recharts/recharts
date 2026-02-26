import{e}from"./iframe-Ch2H383w.js";import{R as n}from"./arrayEqualityCheck-CcoXvTIe.js";import{C as p}from"./ComposedChart-IGKBWSvp.js";import{C as s}from"./CartesianGrid-CTinLeGK.js";import{X as c}from"./XAxis-CNQurGdF.js";import{Y as f}from"./YAxis-DxTWoH9V.js";import{L as l}from"./Line-h7uGauY1.js";import{R as d}from"./ReferenceLine-CBvsdpzw.js";import{R as h}from"./RechartsHookInspector-BJIWLpAN.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Ce5Vf20-.js";import"./immer-CuzWzTfz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B4us9W1h.js";import"./index-B83dRs4n.js";import"./hooks-CSqGm2Vh.js";import"./axisSelectors-D5kbvOqb.js";import"./d3-scale--P9_UiJN.js";import"./zIndexSlice-D0Km72rD.js";import"./renderedTicksSlice-Cpaoi516.js";import"./CartesianChart-Bsy01o0m.js";import"./chartDataContext-Dkm8eTMR.js";import"./CategoricalChart-DRsF6Hco.js";import"./CartesianAxis-DOQRlkLH.js";import"./Layer-yB3Q88eR.js";import"./Text-CMCGaMex.js";import"./DOMUtils-DvEd-B07.js";import"./Label-h8Lj8ZpR.js";import"./ZIndexLayer-Bo-lDWay.js";import"./types-yO-TS24R.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BnK3eejK.js";import"./ActivePoints-DcrHd6tF.js";import"./Dot-CviiMKw7.js";import"./RegisterGraphicalItemId-DrnJwnvQ.js";import"./ErrorBarContext-BZSQmULr.js";import"./GraphicalItemClipPath-rQxmGc46.js";import"./SetGraphicalItem-BZ3_hlL3.js";import"./useAnimationId-dRwxXRVb.js";import"./getRadiusAndStrokeWidthFromDot-D-cthvwF.js";import"./ActiveShapeUtils-BKBe1trq.js";import"./isPlainObject-Bve2BbtD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BKDxLQJC.js";import"./Trapezoid-DPpAMK_h.js";import"./Sector-HOrLF-jD.js";import"./Symbols-DbTFPMcv.js";import"./symbol-BWpDFnQE.js";import"./step-BoAzBu0R.js";import"./Curve-BBxbYyGH.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DtZkbyPi.js";import"./ChartSizeDimensions-7l9XUt5L.js";import"./OffsetShower-DDeP8nwr.js";import"./PlotAreaShower-CC7ji8nO.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
