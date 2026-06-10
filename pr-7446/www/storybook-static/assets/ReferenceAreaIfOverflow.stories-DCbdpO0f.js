import{R as e}from"./iframe-DR9JYvo9.js";import{R as s}from"./zIndexSlice-C8us_33i.js";import{C as p}from"./ComposedChart-DKmeLx_e.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BcdMj9Ha.js";import{X as d}from"./XAxis-CkTBv7Vq.js";import{Y as l}from"./YAxis-njpk2nvi.js";import{R as h}from"./ReferenceArea-UYjy5e1_.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BibliqvJ.js";import"./index-BSI6txHD.js";import"./index-DDKROPpY.js";import"./get-cu4HmN_G.js";import"./resolveDefaultProps-BYvz8ioJ.js";import"./isWellBehavedNumber-CoRQ5I_Q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-xGluos2C.js";import"./index-k7j0Xumv.js";import"./index-CU_PZZsV.js";import"./renderedTicksSlice-CyVH_MQq.js";import"./axisSelectors-DGVKCopH.js";import"./d3-scale-L0XByWhe.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BZ37_3cP.js";import"./chartDataContext-CejwtDPv.js";import"./CategoricalChart-BpqxHQTK.js";import"./CartesianAxis-Dipo9dl9.js";import"./Layer-BDZfdfVu.js";import"./Text-DBYgVn99.js";import"./DOMUtils-Bi5BI6KA.js";import"./Label-De6_no0_.js";import"./ZIndexLayer-BgzJVSii.js";import"./types-C_DqPfQs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-DCKYc31L.js";import"./useAnimationId-BlaQudXH.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
