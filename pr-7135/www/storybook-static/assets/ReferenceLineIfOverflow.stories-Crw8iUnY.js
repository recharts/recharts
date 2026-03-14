import{e}from"./iframe-Bv9A2uSW.js";import{R as n}from"./arrayEqualityCheck-40Pjb_0H.js";import{C as p}from"./ComposedChart-8suCaxCV.js";import{C as s}from"./CartesianGrid-B4a0JVAf.js";import{X as c}from"./XAxis-CDoYxb3o.js";import{Y as f}from"./YAxis-Czr7awDd.js";import{L as l}from"./Line-D2EubcdT.js";import{R as d}from"./ReferenceLine-C1-MeFAK.js";import{R as h}from"./RechartsHookInspector-gKybnL4n.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Y5jGROg-.js";import"./immer-Ch1CAK4c.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BINnaSWf.js";import"./index-CYS6IjLh.js";import"./hooks-BFXhp1mb.js";import"./axisSelectors-C-Y5dRy9.js";import"./d3-scale-B-GeqdsZ.js";import"./zIndexSlice-BDVZwdE1.js";import"./renderedTicksSlice-fUxzen-N.js";import"./CartesianChart-DVCnbG_A.js";import"./chartDataContext-Cx-F6gwT.js";import"./CategoricalChart-BfArJY5o.js";import"./CartesianAxis-CiclrdFg.js";import"./Layer-BOAumolw.js";import"./Text-ByTWddCc.js";import"./DOMUtils-DLZp3yaw.js";import"./Label-Dk_EOWAk.js";import"./ZIndexLayer-DOKoEx6m.js";import"./types-BNfpUJFf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Be8qMHP_.js";import"./ActivePoints-DpwJQ3PC.js";import"./Dot-BOg88zsH.js";import"./RegisterGraphicalItemId-Dztj5ea7.js";import"./ErrorBarContext-PQzMtlLN.js";import"./GraphicalItemClipPath-Ce74-Utf.js";import"./SetGraphicalItem-CrMe5qpl.js";import"./useAnimationId-5b7iZFah.js";import"./getRadiusAndStrokeWidthFromDot-EXhvIgor.js";import"./ActiveShapeUtils-__oljrAQ.js";import"./isPlainObject-CgUr2901.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C9QMG00E.js";import"./Trapezoid-WLRjMuUY.js";import"./Sector-S-QnBLP2.js";import"./Symbols-DSA8vyEc.js";import"./symbol-gFXZdrDQ.js";import"./step-Dhxu0QC9.js";import"./Curve-g-TKkld0.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B_DT_wU1.js";import"./ChartSizeDimensions-DOZqpgqC.js";import"./OffsetShower-CWVYqkue.js";import"./PlotAreaShower-DuXT_1jY.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
