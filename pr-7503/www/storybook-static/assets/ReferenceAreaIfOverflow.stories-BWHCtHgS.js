import{R as e}from"./iframe-yOPx9Gik.js";import{R as s}from"./zIndexSlice-D67vVDIo.js";import{C as p}from"./ComposedChart-CNKZcRKd.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DAxTRuGa.js";import{X as d}from"./XAxis-CJ8HGhD8.js";import{Y as l}from"./YAxis-CkktISrz.js";import{R as h}from"./ReferenceArea-Dw9wUlzQ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-MwiuxAbo.js";import"./index-DJygjR8e.js";import"./index-gBURTRbi.js";import"./get-BfHGT2kl.js";import"./resolveDefaultProps-DB1B-raE.js";import"./isWellBehavedNumber-X6n-T2Sz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCqwcFHc.js";import"./index-C-1T0p6G.js";import"./index-CyWWVFG2.js";import"./renderedTicksSlice-ClbKT4Vz.js";import"./axisSelectors-BcCjx1Bb.js";import"./d3-scale-BQYCkYi4.js";import"./CartesianChart-tj_Q7LqM.js";import"./chartDataContext-CIZm0aW3.js";import"./CategoricalChart-C2Hn6eQd.js";import"./CartesianAxis-C7MTbV32.js";import"./Layer-Bwtnd2Qr.js";import"./Text-BYswpnhx.js";import"./DOMUtils-Cu0iYWZD.js";import"./Label-BqUT8U7H.js";import"./ZIndexLayer-B4R3RCf9.js";import"./types-BJAf4K7V.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-DeKBG9DN.js";import"./useAnimationId-D3arzwOC.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
