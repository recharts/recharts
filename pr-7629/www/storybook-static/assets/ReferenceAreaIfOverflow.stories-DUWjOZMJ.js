import{R as e}from"./iframe-CMWK1RnV.js";import{R as s}from"./zIndexSlice-BytvSaR0.js";import{C as p}from"./ComposedChart-C24U-VBD.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DnbggMbP.js";import{X as d}from"./XAxis-DWpQtd1t.js";import{Y as l}from"./YAxis-BW66Z7F1.js";import{R as h}from"./ReferenceArea-XQTA1IG7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DHHUYikL.js";import"./index-AeW_NqGc.js";import"./index-Syzk9fQZ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-phMwPKZe.js";import"./isWellBehavedNumber-CyyUOQdm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BeDYcqlN.js";import"./index-y1rMs8xl.js";import"./index-D8xGdR5e.js";import"./axisSelectors-BgzJH9qY.js";import"./d3-scale-CPniq2Ig.js";import"./renderedTicksSlice-X6zEnROV.js";import"./CartesianChart-CFORAsRI.js";import"./chartDataContext-LElJR2nd.js";import"./CategoricalChart-JJ_xXB-S.js";import"./CartesianAxis-B04cLUP1.js";import"./Layer-CCdAbzHQ.js";import"./Text-CsZIDzps.js";import"./DOMUtils-BcIZbNLs.js";import"./Label-D4xT1rG9.js";import"./ZIndexLayer-DaLkAJUw.js";import"./types-ClsmN4lT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-oN75whkn.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CcMV1lU1.js";import"./useAnimationId-McaNs9se.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
