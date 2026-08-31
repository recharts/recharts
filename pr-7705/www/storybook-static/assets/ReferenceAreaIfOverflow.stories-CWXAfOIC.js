import{R as e}from"./iframe-CmDfCYy4.js";import{R as p}from"./zIndexSlice-Djwis5u_.js";import{C as s}from"./ComposedChart-CuqccTr3.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Cr_AfIuT.js";import{X as d}from"./XAxis-CeJE8CyL.js";import{Y as l}from"./YAxis-Clc76Y2_.js";import{R as h}from"./ReferenceArea-bIie6FtW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BvVliBGf.js";import"./index-vlpbybCm.js";import"./index-DuLzr3ug.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D0zMnbP3.js";import"./isWellBehavedNumber-ytXpT6fS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-PRNOsza0.js";import"./axisSelectors-BLlvkyot.js";import"./d3-scale-h8Nvvkc2.js";import"./index-BiD8Ib67.js";import"./index-BDVGxzhR.js";import"./renderedTicksSlice-BvQmfKO8.js";import"./index-C3AEkUmj.js";import"./CartesianChart-DQcpQ0vQ.js";import"./chartDataContext-Csr98tLV.js";import"./CategoricalChart-BVrKXV60.js";import"./CartesianAxis-DVS9Bx8F.js";import"./Layer-2NB1aHcN.js";import"./Text-FnYPD4kR.js";import"./DOMUtils-CeEb1Ieo.js";import"./useId-DdN0jYjl.js";import"./useBackwardsCompatibleTheme-D23nCtop.js";import"./Label-C_EyvZ8C.js";import"./ZIndexLayer-DE-382dp.js";import"./types-BdmWqFz5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-DZ3tpH7C.js";import"./useAnimationId-CFWhy9Ri.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ae=["IfOverflow"];export{t as IfOverflow,ae as __namedExportsOrder,oe as default};
