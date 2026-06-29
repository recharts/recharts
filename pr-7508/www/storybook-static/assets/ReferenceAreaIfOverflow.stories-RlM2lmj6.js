import{R as e}from"./iframe-CCxa2X_3.js";import{R as s}from"./zIndexSlice-CjS-6Q6g.js";import{C as p}from"./ComposedChart-C30GB46c.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BnLmHshS.js";import{X as d}from"./XAxis-DgXTsbE5.js";import{Y as l}from"./YAxis-LHNbupxO.js";import{R as h}from"./ReferenceArea-B_HVbh8z.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DVixtPip.js";import"./index-BTMSijfB.js";import"./index-Bu6kQjLM.js";import"./get-BWGRxCzY.js";import"./resolveDefaultProps-DiPmn6d5.js";import"./isWellBehavedNumber-D-qJMApD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-2JrQYSBT.js";import"./index-HidsIZF1.js";import"./index-DtdyiYMy.js";import"./renderedTicksSlice-BZsMGLS6.js";import"./axisSelectors-DutwzDNX.js";import"./d3-scale-BD_lAQxm.js";import"./CartesianChart-BqBORtky.js";import"./chartDataContext-un8h0oN7.js";import"./CategoricalChart-BETRAeyd.js";import"./CartesianAxis-06zEjNAD.js";import"./Layer-DSUD-a_F.js";import"./Text-zmbPwYi6.js";import"./DOMUtils-D9dcGvYT.js";import"./Label-BbbTGnnM.js";import"./ZIndexLayer-DK9HGDkh.js";import"./types-BCrxJhqI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-BK1YtbdL.js";import"./useAnimationId-Qtosu25G.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
