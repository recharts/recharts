import{e}from"./iframe-Dbih6tM_.js";import{g as n}from"./zIndexSlice-F7HsGAhb.js";import{C as s}from"./ComposedChart-hkcoJXW_.js";import{p}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-B47bI95A.js";import{X as f}from"./XAxis-UKVsyr7-.js";import{Y as l}from"./YAxis-x6PKBVdt.js";import{R as d}from"./ReferenceDot-DgTXqnBF.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-u9L_0Kl5.js";import"./get-DVIR8H8G.js";import"./resolveDefaultProps-C6XhIduD.js";import"./isWellBehavedNumber-C76PNx6x.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CzkBSRjy.js";import"./index-yjWx6Bgh.js";import"./index-C3fYT42t.js";import"./index-VrctuRm7.js";import"./renderedTicksSlice-CY1pIMUb.js";import"./axisSelectors-DGtb_paL.js";import"./d3-scale-QFZ3DYXF.js";import"./CartesianChart-sZ1KYKyT.js";import"./chartDataContext-CumcEPMe.js";import"./CategoricalChart-BUbHs2Eq.js";import"./CartesianAxis-sMFUgupR.js";import"./Layer-B42S8g5T.js";import"./Text-BD0wWctz.js";import"./DOMUtils-DtcMNyN4.js";import"./Label-CzYO866A.js";import"./ZIndexLayer-DaMCCGdS.js";import"./types-Bhc7gOzP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BKoIVpn9.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
