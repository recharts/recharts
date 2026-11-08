import{R as e}from"./iframe-Cn8BbXdc.js";import{R as a}from"./zIndexSlice-Cplo4OJz.js";import{C as p}from"./ComposedChart-COauRXZ_.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DfLIIGrV.js";import{X as f}from"./XAxis-OdkIm8mG.js";import{Y as l}from"./YAxis-CvKMQQHY.js";import{L as d}from"./Line-B2HjGTuQ.js";import{R as h}from"./ReferenceLine-C80EEbkE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dx-UV5kK.js";import"./throttle-BbuJxkpw.js";import"./index-Vt5NnRCL.js";import"./index-r2FQlKmQ.js";import"./RechartsWrapper-CCqZUt6C.js";import"./axisSelectors-Cb1wJ0Tf.js";import"./polarAxisSelectors-Dlr2J2lS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BDIN99PH.js";import"./index-CIAdjncW.js";import"./index-apP2Ny11.js";import"./renderedTicksSlice-CBPyHODM.js";import"./index-CkmJfaR7.js";import"./fillDefinitions-Dqk1J0Zs.js";import"./CartesianChart-Cu7ICiUo.js";import"./chartDataContext-CsFOc9VE.js";import"./CategoricalChart-D66OJrIZ.js";import"./CartesianAxis-CrDF4n3X.js";import"./Layer-B5iMOq_s.js";import"./Text-C0NLdB6_.js";import"./ZIndexLayer-CPj3ZDvt.js";import"./Label-BMteoko4.js";import"./types-7A15NfYp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DPXO0w3v.js";import"./step-CpKrc_Vd.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-fXcaT9lZ.js";import"./ActivePoints-CvLcmOKu.js";import"./Dot-DHIPOa_F.js";import"./activeStyles-DvMk-MBL.js";import"./useAnimationId-BQvfHsDD.js";import"./Symbols-V0KMXGx3.js";import"./symbol-B1AYOCFp.js";import"./ErrorBarContext-zwHjEd7p.js";import"./SetGraphicalItem-7Fal13Qm.js";import"./getRadiusAndStrokeWidthFromDot-CQo2Z7L1.js";import"./ActiveShapeUtils-Dlfc7hut.js";import"./useEffectiveDataKey-D8YFmfQj.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
