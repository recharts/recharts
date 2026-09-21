import{R as e}from"./iframe-BGOT0UMq.js";import{R as p}from"./zIndexSlice-BPU0EfFx.js";import{C as s}from"./ComposedChart-Cn5XstS9.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Cg8yM-IZ.js";import{X as d}from"./XAxis-Cg--p2uq.js";import{Y as l}from"./YAxis-Ce9ej7bF.js";import{R as h}from"./ReferenceArea-D-jZzuUE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-gIJqAgIK.js";import"./index-hikMEuKp.js";import"./index-NAo39Q3o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BSwwqvcB.js";import"./isWellBehavedNumber-BnpxWTLo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CjrWTlpw.js";import"./axisSelectors-Wq_jv7lJ.js";import"./d3-scale-BPTXd-TV.js";import"./index-DfHr9lQU.js";import"./index-DlwvoXAU.js";import"./renderedTicksSlice-CgKWkcXA.js";import"./index-_Ok-JjZj.js";import"./CartesianChart-TgiGuVC0.js";import"./chartDataContext-Bp5THtgE.js";import"./CategoricalChart-CqDZ11FZ.js";import"./CartesianAxis-hSXvCGlw.js";import"./Layer-C_IgQKNN.js";import"./Text-D50SBSje.js";import"./DOMUtils-DS3nE711.js";import"./useId-DPA6djN8.js";import"./useBackwardsCompatibleTheme-BNqsR3kp.js";import"./Label-BU1lFQ2f.js";import"./ZIndexLayer-Bo4GMA0B.js";import"./types-B69giCR1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BYLcafiV.js";import"./useAnimationId-B8wYOiNY.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
