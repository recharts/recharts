import{R as e}from"./iframe-C3hysSwX.js";import{R as s}from"./zIndexSlice-jLrLCsrp.js";import{C as p}from"./ComposedChart-4b-0Cq8-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-9IqwpISI.js";import{X as d}from"./XAxis-Bz5F1_iJ.js";import{Y as l}from"./YAxis-nAN9SxkJ.js";import{R as h}from"./ReferenceArea-CfK_xzsU.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BNUBbCyS.js";import"./index-BUU-eT_B.js";import"./index-DdpCgkK0.js";import"./get-4mmuOJ4Q.js";import"./resolveDefaultProps-XPHM9Bxg.js";import"./isWellBehavedNumber-Cfqt3JW2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJVzzpRJ.js";import"./index-BV0Ox4K8.js";import"./index-By0blv9S.js";import"./renderedTicksSlice-CSlp22Dw.js";import"./axisSelectors-BKkILLr_.js";import"./d3-scale-Z5oWCNO5.js";import"./CartesianChart-Dz5Andp2.js";import"./chartDataContext-Da5IPa1T.js";import"./CategoricalChart-BUhA_1lj.js";import"./CartesianAxis-DJwGDBXD.js";import"./Layer-BWZwdMd6.js";import"./Text-9LavA5GP.js";import"./DOMUtils-B0ueEniv.js";import"./Label-BY3nn8Dv.js";import"./ZIndexLayer-BbmqSC7x.js";import"./types-B-fiXt0f.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-D6Gug0yv.js";import"./useAnimationId-CTVdzEbK.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
