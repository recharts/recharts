import{R as e}from"./iframe-D_UL8fjK.js";import{R as s}from"./zIndexSlice-B8f2hTRD.js";import{C as p}from"./ComposedChart-CDUUKafl.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-NE6h68CE.js";import{X as d}from"./XAxis-CazN9wRX.js";import{Y as l}from"./YAxis-Dd6vSYjv.js";import{R as h}from"./ReferenceArea-DTMWctjV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-EbH1y2w7.js";import"./index-DNxkBCVe.js";import"./index-h-g40TxG.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Byb1qXS0.js";import"./isWellBehavedNumber-iC5WXlxZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DnUEvc6-.js";import"./index-DmYZtYvi.js";import"./index-Bs4KGwv6.js";import"./axisSelectors-BNsSlswM.js";import"./d3-scale-5WraxJWy.js";import"./renderedTicksSlice-DZH5dqFY.js";import"./CartesianChart-C-1LzzB9.js";import"./chartDataContext-BZOn_6n4.js";import"./CategoricalChart-CtOYQTRo.js";import"./CartesianAxis-BrHAq2Nx.js";import"./Layer-DErQ8LWn.js";import"./Text-bynAhtfX.js";import"./DOMUtils-y3mUx3tY.js";import"./Label-efHFABNJ.js";import"./ZIndexLayer-CzKUyCGh.js";import"./types-D8jMk9wl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DF-Xzw8d.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-Bpl55SbL.js";import"./useAnimationId-1dDzdKc5.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
