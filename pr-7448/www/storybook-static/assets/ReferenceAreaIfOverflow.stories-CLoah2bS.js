import{R as e}from"./iframe-CRd1fYKG.js";import{R as s}from"./zIndexSlice-BEDqBT5s.js";import{C as p}from"./ComposedChart-CMYYvZ46.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Ddze4Uvk.js";import{X as d}from"./XAxis-CFDNTKtN.js";import{Y as l}from"./YAxis-CcTJnWbU.js";import{R as h}from"./ReferenceArea-DnRiZci3.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DuXdSz_W.js";import"./index-Cu0dCOlk.js";import"./index-COR3Qgsn.js";import"./get-CAg3-hN5.js";import"./resolveDefaultProps-C_1LRrwf.js";import"./isWellBehavedNumber-IulUlDH2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CTRhzR3z.js";import"./index-Co5B8-DW.js";import"./index-Dyy4uRrG.js";import"./renderedTicksSlice-BwoXfhkK.js";import"./axisSelectors-CW_HZ1K1.js";import"./d3-scale-Bw_PCS9h.js";import"./string-B6fdYHAA.js";import"./CartesianChart-_Ts9MuUK.js";import"./chartDataContext-24IFZ5R3.js";import"./CategoricalChart-7SQT56eo.js";import"./CartesianAxis-BngYAupc.js";import"./Layer-uzXkuSL7.js";import"./Text-BzOWhyUQ.js";import"./DOMUtils-meWqI4ST.js";import"./Label-GPMVhHkr.js";import"./ZIndexLayer-CMZSY73E.js";import"./types-fr95e_gP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-KYXVSxkg.js";import"./useAnimationId-B3UhTZxg.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
