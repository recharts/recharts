import{R as e}from"./iframe-C3Hc6ExU.js";import{R as n}from"./zIndexSlice-DUSt-QRk.js";import{C as s}from"./ComposedChart-DQvc_r-0.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DRfcDaI-.js";import{X as f}from"./XAxis-Dtgw3Co8.js";import{Y as l}from"./YAxis-C-y6lpsY.js";import{R as d}from"./ReferenceDot-CYaUYpla.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DY2EWLMY.js";import"./index-BCuR5Ep7.js";import"./index-N8Br274d.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-I9hvH7ZX.js";import"./isWellBehavedNumber-BaxFFXf5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7tS-h39.js";import"./index-DPHIqaZF.js";import"./index-jh_FdFAs.js";import"./axisSelectors-CVNuchwD.js";import"./d3-scale-BNbYa6kD.js";import"./renderedTicksSlice-C_VQ6yCW.js";import"./CartesianChart-D83sOKb0.js";import"./chartDataContext-De2r_5pJ.js";import"./CategoricalChart-Z9dORHEb.js";import"./CartesianAxis-DzoIF-ni.js";import"./Layer-nhPcXxtD.js";import"./Text-DrMy69_K.js";import"./DOMUtils-Cnn_urMe.js";import"./useId-z0f7lKjA.js";import"./useBackwardsCompatibleTheme-BO1TP3oH.js";import"./Label-CANqho75.js";import"./ZIndexLayer-G0ryhOC-.js";import"./types-fNKA8Oi0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-Dhy6Aaz6.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
