import{R as e}from"./iframe-BIq879V5.js";import{R as s}from"./zIndexSlice-D4TMV-f8.js";import{C as p}from"./ComposedChart-Y-P0CO1c.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BnlL1Sxs.js";import{X as d}from"./XAxis-BeATFl8n.js";import{Y as l}from"./YAxis-CWb6gVw3.js";import{R as h}from"./ReferenceArea-BdXskcSs.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Bhe1IepA.js";import"./index-Bxqp1uTz.js";import"./index-1ZXeTe4f.js";import"./get-Dlp4HEDU.js";import"./resolveDefaultProps-D0mYDCdG.js";import"./isWellBehavedNumber-2nx214wI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-5ZbCTkSQ.js";import"./index-CoQnCr93.js";import"./index-qY5ecPCO.js";import"./renderedTicksSlice-wj6PxGI_.js";import"./axisSelectors-BEDQXBlF.js";import"./d3-scale-D2-Kj7HA.js";import"./CartesianChart-D5C06Dh0.js";import"./chartDataContext-DENfjobA.js";import"./CategoricalChart-B9HsjgZj.js";import"./CartesianAxis-DnWuLXim.js";import"./Layer-BQ46hdaR.js";import"./Text-D9ArQUyF.js";import"./DOMUtils-U4n6Sms4.js";import"./Label-CdyMu7UM.js";import"./ZIndexLayer-kG0uRxU5.js";import"./types-sdPoIcnS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-Be09360W.js";import"./useAnimationId-7GzLXqBz.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
