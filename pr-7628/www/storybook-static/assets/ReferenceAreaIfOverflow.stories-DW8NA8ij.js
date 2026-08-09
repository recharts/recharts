import{R as e}from"./iframe--KdzZtf9.js";import{R as s}from"./zIndexSlice-CHztvQxJ.js";import{C as p}from"./ComposedChart-hjuG2iDf.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-D5FjoZZr.js";import{X as d}from"./XAxis-BtfaW-Ms.js";import{Y as l}from"./YAxis-CoP3OSHi.js";import{R as h}from"./ReferenceArea-_L-_61vx.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-hG26ZCHv.js";import"./index-S42N58hu.js";import"./index-BmB7_o0P.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DclZvKxN.js";import"./isWellBehavedNumber-vpVCWLp_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbMAL-gW.js";import"./index-q7cE3wgI.js";import"./index-BlCKzZxU.js";import"./axisSelectors-DJc-QTCs.js";import"./d3-scale-DQou-uOy.js";import"./renderedTicksSlice-D0sDrWJo.js";import"./CartesianChart-tb7UCCzE.js";import"./chartDataContext-sbVF-hg4.js";import"./CategoricalChart-DmFxRtAx.js";import"./CartesianAxis-8V80jjh3.js";import"./Layer-DCgJY1vZ.js";import"./Text-DiczCyux.js";import"./DOMUtils-DCy02iSc.js";import"./Label-Bwq_3Ge6.js";import"./ZIndexLayer--b9avAgZ.js";import"./types-DxjttXzA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CFhBSuLJ.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-24EhHdQN.js";import"./useAnimationId-Dz24l0hc.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
