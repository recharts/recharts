import{e}from"./iframe-8sIubbdi.js";import{R as n}from"./arrayEqualityCheck-DbCj9c-Y.js";import{C as p}from"./ComposedChart-uiW_8j2H.js";import{C as s}from"./CartesianGrid-DEIWEGJ2.js";import{X as c}from"./XAxis-IWyMdbO5.js";import{Y as f}from"./YAxis-CDYxK6mN.js";import{L as l}from"./Line-CH8gt70I.js";import{R as d}from"./ReferenceLine-COjOFnYX.js";import{R as h}from"./RechartsHookInspector-AlYSKZYm.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DuCQFLVY.js";import"./immer-BT2n2B7O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D30EcdBX.js";import"./index-CbU0dTJ6.js";import"./hooks-D_DW5Oi2.js";import"./axisSelectors-DxwSejiD.js";import"./d3-scale-DEnCLOEW.js";import"./zIndexSlice-VsYA40So.js";import"./renderedTicksSlice-CfkkEf9Z.js";import"./CartesianChart-CXlojrwJ.js";import"./chartDataContext-4cME9qvC.js";import"./CategoricalChart-C7NQof8g.js";import"./CartesianAxis-DgCpBkCM.js";import"./Layer-BRXiwqet.js";import"./Text-3TK1Y5vF.js";import"./DOMUtils-DytWm70I.js";import"./Label-DilR1ra4.js";import"./ZIndexLayer-Ts04gVrK.js";import"./types-Bp02LWfB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BXvpQNi2.js";import"./ActivePoints-KfMw2aSf.js";import"./Dot-TuBc5AFD.js";import"./RegisterGraphicalItemId-Cm3HEb7M.js";import"./ErrorBarContext-bky3Fevr.js";import"./GraphicalItemClipPath-C8kD9Qqm.js";import"./SetGraphicalItem-CsZep-cL.js";import"./useAnimationId-De5EZ4DF.js";import"./getRadiusAndStrokeWidthFromDot-7blQF-c9.js";import"./ActiveShapeUtils---ZXszSA.js";import"./isPlainObject-rB9NvpQh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2TS-ysJA.js";import"./Trapezoid-DG6NQ2ho.js";import"./Sector-CO7y0BXS.js";import"./Symbols-DYzrjJ12.js";import"./symbol-CzQ70XR0.js";import"./step-CjuXRgh8.js";import"./Curve-BZpcUU-T.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-QIusEcOA.js";import"./ChartSizeDimensions-B-IxYWC1.js";import"./OffsetShower-CFWyxT0Z.js";import"./PlotAreaShower-CXMf_89y.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
