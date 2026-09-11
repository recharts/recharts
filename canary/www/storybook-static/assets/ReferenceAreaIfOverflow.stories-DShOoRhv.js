import{R as e}from"./iframe-CMVuz_WR.js";import{R as p}from"./zIndexSlice-Bu9BgD7f.js";import{C as s}from"./ComposedChart-BHXT81yI.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Dt5f8TE4.js";import{X as d}from"./XAxis-Dls2O1nz.js";import{Y as l}from"./YAxis-DhZVcnhy.js";import{R as h}from"./ReferenceArea-kJZ51-bg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BD5EEuEt.js";import"./index-8182fU53.js";import"./index-bZstop0p.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DlgO1mgX.js";import"./isWellBehavedNumber-DZvjV6rT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-i8SteWdh.js";import"./axisSelectors-D6i4LlUB.js";import"./d3-scale-BJGJFwwk.js";import"./index-t37cwTj5.js";import"./index-BjTWdNOV.js";import"./renderedTicksSlice-CIeJUrxO.js";import"./index-CqRVWfEr.js";import"./CartesianChart-C05zOa_e.js";import"./chartDataContext-zZnvxmy2.js";import"./CategoricalChart-C-sUxYeh.js";import"./CartesianAxis-aP0rvO-w.js";import"./Layer-BNHnjhAQ.js";import"./Text-_Yf6eN5X.js";import"./DOMUtils-ClFVphvT.js";import"./useId-BNZP75Mi.js";import"./useBackwardsCompatibleTheme-YE2IG8yO.js";import"./Label-BusuXXbv.js";import"./ZIndexLayer-CC6O4jFa.js";import"./types-C-qBJNve.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BfCZIbio.js";import"./useAnimationId-DpagfNvu.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
