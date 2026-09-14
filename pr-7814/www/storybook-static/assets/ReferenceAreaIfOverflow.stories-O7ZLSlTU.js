import{R as e}from"./iframe-u9oyaNDa.js";import{R as p}from"./zIndexSlice-CP6DEYJK.js";import{C as s}from"./ComposedChart-CjiIL43I.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-3za1VbL9.js";import{X as d}from"./XAxis-mDQaQsGs.js";import{Y as l}from"./YAxis-DcziBOs8.js";import{R as h}from"./ReferenceArea-K9jF7wPQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BNJMxzFn.js";import"./index-Cf659ixt.js";import"./index-KfJc4WDj.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DAwvazXN.js";import"./isWellBehavedNumber-BM97SC6u.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BUYC64MV.js";import"./axisSelectors-OhjP93PE.js";import"./d3-scale-CXFCyIt2.js";import"./index-BqftORPs.js";import"./index-CBGd9m5k.js";import"./renderedTicksSlice-Kslt8j3i.js";import"./index-DWf2p5U7.js";import"./CartesianChart-GMYsDnOd.js";import"./chartDataContext-CUbnBmUW.js";import"./CategoricalChart-DAgdBpFV.js";import"./CartesianAxis-BInpl5Mc.js";import"./Layer-DjumWApv.js";import"./Text-BjcDy3qe.js";import"./DOMUtils-ClqiwCzY.js";import"./useId-C7h_mhKQ.js";import"./useBackwardsCompatibleTheme-B4wBZYcr.js";import"./Label-Q8r239gm.js";import"./ZIndexLayer-CWsudvRq.js";import"./types-DQ_9ILU-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-un1MW7QV.js";import"./useAnimationId-DzZz4Iie.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
