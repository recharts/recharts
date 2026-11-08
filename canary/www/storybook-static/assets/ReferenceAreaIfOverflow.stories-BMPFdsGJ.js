import{R as e}from"./iframe-Cn8BbXdc.js";import{R as s}from"./zIndexSlice-Cplo4OJz.js";import{C as p}from"./ComposedChart-COauRXZ_.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DfLIIGrV.js";import{X as d}from"./XAxis-OdkIm8mG.js";import{Y as l}from"./YAxis-CvKMQQHY.js";import{R as h}from"./ReferenceArea-CyyE03AS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dx-UV5kK.js";import"./throttle-BbuJxkpw.js";import"./index-Vt5NnRCL.js";import"./index-r2FQlKmQ.js";import"./RechartsWrapper-CCqZUt6C.js";import"./axisSelectors-Cb1wJ0Tf.js";import"./polarAxisSelectors-Dlr2J2lS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BDIN99PH.js";import"./index-CIAdjncW.js";import"./index-apP2Ny11.js";import"./renderedTicksSlice-CBPyHODM.js";import"./index-CkmJfaR7.js";import"./fillDefinitions-Dqk1J0Zs.js";import"./CartesianChart-Cu7ICiUo.js";import"./chartDataContext-CsFOc9VE.js";import"./CategoricalChart-D66OJrIZ.js";import"./CartesianAxis-CrDF4n3X.js";import"./Layer-B5iMOq_s.js";import"./Text-C0NLdB6_.js";import"./ZIndexLayer-CPj3ZDvt.js";import"./Label-BMteoko4.js";import"./types-7A15NfYp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-DSJXIYeh.js";import"./useAnimationId-BQvfHsDD.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
