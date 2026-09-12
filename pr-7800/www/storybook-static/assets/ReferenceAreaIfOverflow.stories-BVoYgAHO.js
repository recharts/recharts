import{R as e}from"./iframe-BnZHUF9X.js";import{R as p}from"./zIndexSlice-ONbH2CMm.js";import{C as s}from"./ComposedChart-B4o4gtm7.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-m_0SQtv7.js";import{X as d}from"./XAxis-CRqJ7xsJ.js";import{Y as l}from"./YAxis-C5pkUNB3.js";import{R as h}from"./ReferenceArea-DAeYCIUR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DYWyyBD4.js";import"./index-DwyAhWM9.js";import"./index-Ck__QTcD.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CS-Gahor.js";import"./isWellBehavedNumber-Bn5kvLQQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ztAk4E9P.js";import"./axisSelectors-DSOG4fe3.js";import"./d3-scale-hcynQqTx.js";import"./index-ksKJqe-L.js";import"./index-BrEYDHSM.js";import"./renderedTicksSlice-CKzVsDw2.js";import"./index-CVXi-tnN.js";import"./CartesianChart-a0B_k2pR.js";import"./chartDataContext-CxsSdioC.js";import"./CategoricalChart-CSXyHKQE.js";import"./CartesianAxis-CnqpkBi3.js";import"./Layer-D4LkPBUk.js";import"./Text-CPiy7pnu.js";import"./DOMUtils-C0afjJmd.js";import"./useId-nraStDaz.js";import"./useBackwardsCompatibleTheme-CLSYsBSa.js";import"./Label-hOa9Xaax.js";import"./ZIndexLayer-CIa5rzLp.js";import"./types-CA0d64vS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-Cx8oRFI-.js";import"./useAnimationId-CuFFFGhn.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ne as __namedExportsOrder,oe as default};
