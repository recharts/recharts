import{R as e}from"./iframe-D38iL5U2.js";import{R as s}from"./zIndexSlice-Cm67KrxL.js";import{C as p}from"./ComposedChart-C9TDGW0Q.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Bx94-WYC.js";import{X as d}from"./XAxis-DxvBJIAO.js";import{Y as l}from"./YAxis-DusBbeDI.js";import{R as h}from"./ReferenceArea-H9F-PctT.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D6830BYN.js";import"./index-CiQf90fk.js";import"./index-CtVCdopk.js";import"./get-khzbl4AQ.js";import"./resolveDefaultProps-CZPTys3h.js";import"./isWellBehavedNumber-DYmqkCh1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-cRl9bCbj.js";import"./index-CrafHmD2.js";import"./index-BjsidNXN.js";import"./renderedTicksSlice-BJAgGPRy.js";import"./axisSelectors-31vNEB3v.js";import"./d3-scale-B4F2Cask.js";import"./CartesianChart-BM1M8_5y.js";import"./chartDataContext-kB1Q6Xdj.js";import"./CategoricalChart-CpYTfgB7.js";import"./CartesianAxis-C6E7eU9j.js";import"./Layer-BW7UV7J4.js";import"./Text-DbYnM2_N.js";import"./DOMUtils-o62mw7wr.js";import"./Label-CTZsXBnJ.js";import"./ZIndexLayer-B3mrn3nC.js";import"./types-CVlGri0W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-BaDJNhGo.js";import"./useAnimationId-CrM4tScF.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
