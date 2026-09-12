import{R as e}from"./iframe-CKftEeOR.js";import{R as m}from"./zIndexSlice-Rd7CQgQI.js";import{C as p}from"./ComposedChart-D4xLMnX4.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C5zADhw1.js";import{X as f}from"./XAxis-IahfvaCM.js";import{Y as l}from"./YAxis-DtHNKlU_.js";import{R as d}from"./ReferenceDot-BCdKUf3g.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BNKYmND6.js";import"./index-B3U1nEt0.js";import"./index-CMyqNfgS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CUD-thP6.js";import"./isWellBehavedNumber-B15AKauy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CBr2vBLf.js";import"./axisSelectors-DhTPihhT.js";import"./d3-scale-DUU3auep.js";import"./index-CfJyz4zD.js";import"./index-CaONc0yZ.js";import"./renderedTicksSlice-4VCM87iZ.js";import"./index-D3UZJ1g6.js";import"./CartesianChart-yCMxlTpO.js";import"./chartDataContext-4zvmbyyj.js";import"./CategoricalChart-DGT3qw3A.js";import"./CartesianAxis-klHqdii2.js";import"./Layer-t7Sk-OLm.js";import"./Text-BY0JJbaS.js";import"./DOMUtils-B_LhErBS.js";import"./useId-j7axFfWl.js";import"./useBackwardsCompatibleTheme-BFpC_R2y.js";import"./Label-BtMZmHcU.js";import"./ZIndexLayer-CfiakTBb.js";import"./types-CQiiKif5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-C7TV-TKY.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
