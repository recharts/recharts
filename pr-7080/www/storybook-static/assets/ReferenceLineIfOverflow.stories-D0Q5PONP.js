import{e}from"./iframe-DtsdDKdZ.js";import{R as n}from"./arrayEqualityCheck-Droc7dSW.js";import{C as p}from"./ComposedChart-DJd-FMM5.js";import{C as s}from"./CartesianGrid-E5AGxnFR.js";import{X as c}from"./XAxis-BoqN_M_f.js";import{Y as f}from"./YAxis-Ca_gtZCr.js";import{L as l}from"./Line-B8-iHccE.js";import{R as d}from"./ReferenceLine-CvH5v5UM.js";import{R as h}from"./RechartsHookInspector-BlgcmNAN.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CYphw90L.js";import"./immer-Cl4pjRPT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BHAf4vKZ.js";import"./index-C-dV99_B.js";import"./hooks-BeulUkkW.js";import"./axisSelectors-DFbwRFUO.js";import"./d3-scale-C3JQrokV.js";import"./zIndexSlice-C9mn4FBr.js";import"./renderedTicksSlice-DiHGExst.js";import"./CartesianChart-dUJOPO3Y.js";import"./chartDataContext-BYoNMw3_.js";import"./CategoricalChart-G5xMZxW2.js";import"./CartesianAxis-XgYIScCi.js";import"./Layer-SH7Pqpr5.js";import"./Text-DywitbW7.js";import"./DOMUtils-_7Ng8zPY.js";import"./Label-DA1oiymG.js";import"./ZIndexLayer-DBoKoGoH.js";import"./types-8PVRu1dQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D2snZVWC.js";import"./ActivePoints-BpXmKIch.js";import"./Dot-W3eXNr9t.js";import"./RegisterGraphicalItemId-CUTcSbcF.js";import"./ErrorBarContext-BXVMNut-.js";import"./GraphicalItemClipPath-BnsyXWl3.js";import"./SetGraphicalItem-B8wIveBb.js";import"./useAnimationId-BeYERtYV.js";import"./getRadiusAndStrokeWidthFromDot-Fg5nPjko.js";import"./ActiveShapeUtils-DTqZq5h0.js";import"./isPlainObject-PKiGLw7x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bs14o4jp.js";import"./Trapezoid-CfylSPEx.js";import"./Sector-BvQTjcKL.js";import"./Symbols-Ct3soTwA.js";import"./symbol-Biu6vDdW.js";import"./step-BAMUjg0M.js";import"./Curve-DR4nUNk7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-txaMAxKK.js";import"./ChartSizeDimensions-RUaYI8h3.js";import"./OffsetShower-Cc_Brw8F.js";import"./PlotAreaShower-Ch2pfbhA.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
