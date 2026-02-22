import{e}from"./iframe-BAkhr1dX.js";import{R as n}from"./arrayEqualityCheck-ws_I-Su9.js";import{C as p}from"./ComposedChart-Dktxrbto.js";import{C as s}from"./CartesianGrid-aFWZAFV9.js";import{X as c}from"./XAxis-DFbVQKiI.js";import{Y as f}from"./YAxis-B2mEiGUw.js";import{L as l}from"./Line-BedHLVHg.js";import{R as d}from"./ReferenceLine-BTe0h1GT.js";import{R as h}from"./RechartsHookInspector-CZGFYlgB.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CNqTx6xA.js";import"./immer-CpzDDdx2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C6vYGZxV.js";import"./index-Cogrk3y-.js";import"./hooks-BQ6EMEQX.js";import"./axisSelectors-5IeRVjyJ.js";import"./d3-scale-D4vzySek.js";import"./zIndexSlice-DySAbts1.js";import"./renderedTicksSlice-KIutDziH.js";import"./CartesianChart-JKhVhhuI.js";import"./chartDataContext-BxZ2tnlW.js";import"./CategoricalChart-BEpc5Jb6.js";import"./CartesianAxis-DhYmi_Op.js";import"./Layer-ChOUaBRc.js";import"./Text-DEUhZcIO.js";import"./DOMUtils-B-z1kise.js";import"./Label-C63pHtg-.js";import"./ZIndexLayer-D9oqm7-r.js";import"./types-UutyoBzA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CLeHX5Ip.js";import"./ActivePoints-CD0GXcpd.js";import"./Dot-JL6yZKot.js";import"./RegisterGraphicalItemId-BbgywdL0.js";import"./ErrorBarContext-DGlqNFZc.js";import"./GraphicalItemClipPath-wygGc-U-.js";import"./SetGraphicalItem-D74ae6eQ.js";import"./useAnimationId-DpHYdy2q.js";import"./getRadiusAndStrokeWidthFromDot-BlTIAy7U.js";import"./ActiveShapeUtils-xtyk6YAI.js";import"./isPlainObject-_51Ij8KQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DGk7C1pp.js";import"./Trapezoid-XKQAH1TM.js";import"./Sector-CoTacwlm.js";import"./Symbols-BpFdmF0L.js";import"./symbol-BeaTf5eH.js";import"./step-BqWOfOpT.js";import"./Curve-oAmAnVW8.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CEM5lfG1.js";import"./ChartSizeDimensions-DS99mPzw.js";import"./OffsetShower-BN9FCNNs.js";import"./PlotAreaShower-DjsLqly8.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
