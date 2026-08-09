import{R as e}from"./iframe-CMWK1RnV.js";import{R as n}from"./zIndexSlice-BytvSaR0.js";import{C as s}from"./ComposedChart-C24U-VBD.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DnbggMbP.js";import{X as f}from"./XAxis-DWpQtd1t.js";import{Y as l}from"./YAxis-BW66Z7F1.js";import{R as d}from"./ReferenceDot-C3U6jvKE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DHHUYikL.js";import"./index-AeW_NqGc.js";import"./index-Syzk9fQZ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-phMwPKZe.js";import"./isWellBehavedNumber-CyyUOQdm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BeDYcqlN.js";import"./index-y1rMs8xl.js";import"./index-D8xGdR5e.js";import"./axisSelectors-BgzJH9qY.js";import"./d3-scale-CPniq2Ig.js";import"./renderedTicksSlice-X6zEnROV.js";import"./CartesianChart-CFORAsRI.js";import"./chartDataContext-LElJR2nd.js";import"./CategoricalChart-JJ_xXB-S.js";import"./CartesianAxis-B04cLUP1.js";import"./Layer-CCdAbzHQ.js";import"./Text-CsZIDzps.js";import"./DOMUtils-BcIZbNLs.js";import"./Label-D4xT1rG9.js";import"./ZIndexLayer-DaLkAJUw.js";import"./types-ClsmN4lT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-oN75whkn.js";import"./isBuffer-BG75eWKN.js";import"./Dot-3F0SNdEj.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
