import{c as e}from"./iframe-CmE1Gw1b.js";import{g as s}from"./zIndexSlice-CPvazyt5.js";import{C as p}from"./ComposedChart-B0hkf2v7.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-BqmKPhec.js";import{X as d}from"./XAxis-CsAE-1wy.js";import{Y as l}from"./YAxis-sLz07qff.js";import{R as h}from"./ReferenceArea-DsW3ceQW.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D0ucvycs.js";import"./index-Cxu3QwYw.js";import"./index-BRRHmhT0.js";import"./get-Xs9eC5t9.js";import"./resolveDefaultProps-DMnLPor7.js";import"./isWellBehavedNumber-iiy358B8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D8R_Xy2B.js";import"./index-DBnd1KA6.js";import"./index-CVCvCqpB.js";import"./renderedTicksSlice-CPDsz2oQ.js";import"./axisSelectors-DB3YTJ5D.js";import"./d3-scale-CvKKQLFm.js";import"./CartesianChart-CVLVFTZa.js";import"./chartDataContext-BRP4CbYg.js";import"./CategoricalChart-dsp09r-Q.js";import"./CartesianAxis-CAtPdKeh.js";import"./Layer-abY4Fjir.js";import"./Text-BQZJ76YD.js";import"./DOMUtils-omFfYIeV.js";import"./Label-Cvukc7WC.js";import"./ZIndexLayer-DHcHf456.js";import"./types-DmTRT5mp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-DC373LRb.js";import"./useAnimationId-D3nuvCaK.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
