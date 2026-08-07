import{R as e}from"./iframe-DQ5pdRpT.js";import{R as s}from"./zIndexSlice-DQojUU3D.js";import{C as p}from"./ComposedChart-4NtsiuE-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-2P83tjAO.js";import{X as d}from"./XAxis-BbDJVinv.js";import{Y as l}from"./YAxis-B3S1-9pB.js";import{R as h}from"./ReferenceArea-B4uwPp4X.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-j7vxqIWJ.js";import"./index-B42gFx1y.js";import"./index-CKPKUGRw.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C2j2eShk.js";import"./isWellBehavedNumber-DO3SFpF7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper--EivWNjp.js";import"./index-CUdIWJWE.js";import"./index-CUVFW2Mq.js";import"./axisSelectors-BLoeM8Ql.js";import"./d3-scale-CzelId51.js";import"./renderedTicksSlice-DZuwhgdB.js";import"./CartesianChart-DCEWo6vx.js";import"./chartDataContext-BANEa2Gn.js";import"./CategoricalChart-DmEP8iSm.js";import"./CartesianAxis-9E3w2iOb.js";import"./Layer-BrLbSCb2.js";import"./Text-BbwznCj8.js";import"./DOMUtils-3opGu7KJ.js";import"./Label-ogcMQvX_.js";import"./ZIndexLayer-LAqpTUNY.js";import"./types-DwD8FSIs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DYFm3WDH.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BmXaPyvq.js";import"./useAnimationId-Bjim9SiW.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
