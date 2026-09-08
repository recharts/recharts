import{R as e}from"./iframe-DtUqFz4i.js";import{R as m}from"./zIndexSlice-D7wiyJvz.js";import{C as p}from"./ComposedChart-CzQBCEWP.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B552XU5x.js";import{X as f}from"./XAxis-CDer3rOu.js";import{Y as l}from"./YAxis-BMscqJB-.js";import{R as d}from"./ReferenceDot-Br1HuIAt.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Xq_SZc3C.js";import"./index-G8DVyxPR.js";import"./index-6pOrVVYJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DhbLPpq6.js";import"./isWellBehavedNumber-BD9jivhZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-okeo-S0V.js";import"./axisSelectors-DKiSvbvB.js";import"./d3-scale-qNEzaThY.js";import"./index-BUmCPeXH.js";import"./index-Dz7I98PR.js";import"./renderedTicksSlice-bHtuYqVk.js";import"./index-CBc8BsFv.js";import"./CartesianChart-BFiV2di3.js";import"./chartDataContext-D9qEIths.js";import"./CategoricalChart-P4h5BQO5.js";import"./CartesianAxis-CvUiwg6W.js";import"./Layer-DaGE4xdO.js";import"./Text-Ci0TXZMh.js";import"./DOMUtils-CAVjRHi7.js";import"./useId-B1tEHKrt.js";import"./useBackwardsCompatibleTheme-Dq0ydbtQ.js";import"./Label-DSBhBvVo.js";import"./ZIndexLayer-Dl9c6NgM.js";import"./types-DIyWN1O2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-CtYAIqQI.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
