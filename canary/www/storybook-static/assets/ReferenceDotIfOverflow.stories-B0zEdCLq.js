import{R as e}from"./iframe-Cn8BbXdc.js";import{R as m}from"./zIndexSlice-Cplo4OJz.js";import{C as s}from"./ComposedChart-COauRXZ_.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DfLIIGrV.js";import{X as f}from"./XAxis-OdkIm8mG.js";import{Y as l}from"./YAxis-CvKMQQHY.js";import{R as d}from"./ReferenceDot-hEwYWGD9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dx-UV5kK.js";import"./throttle-BbuJxkpw.js";import"./index-Vt5NnRCL.js";import"./index-r2FQlKmQ.js";import"./RechartsWrapper-CCqZUt6C.js";import"./axisSelectors-Cb1wJ0Tf.js";import"./polarAxisSelectors-Dlr2J2lS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BDIN99PH.js";import"./index-CIAdjncW.js";import"./index-apP2Ny11.js";import"./renderedTicksSlice-CBPyHODM.js";import"./index-CkmJfaR7.js";import"./fillDefinitions-Dqk1J0Zs.js";import"./CartesianChart-Cu7ICiUo.js";import"./chartDataContext-CsFOc9VE.js";import"./CategoricalChart-D66OJrIZ.js";import"./CartesianAxis-CrDF4n3X.js";import"./Layer-B5iMOq_s.js";import"./Text-C0NLdB6_.js";import"./ZIndexLayer-CPj3ZDvt.js";import"./Label-BMteoko4.js";import"./types-7A15NfYp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-DHIPOa_F.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
