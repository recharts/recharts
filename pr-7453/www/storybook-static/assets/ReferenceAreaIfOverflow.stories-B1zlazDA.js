import{R as e}from"./iframe-BCtefvpd.js";import{R as s}from"./zIndexSlice-DLtTjfC4.js";import{C as p}from"./ComposedChart-B-FcUFTM.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BuCMqxRQ.js";import{X as d}from"./XAxis-DRnpS9Qy.js";import{Y as l}from"./YAxis-CXAPbw5z.js";import{R as h}from"./ReferenceArea-C7xBRRFB.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DIhiteEo.js";import"./index-DA3zv02Q.js";import"./index-BqWWOLm7.js";import"./get-DFMRZS9d.js";import"./resolveDefaultProps-CVGnLM0G.js";import"./isWellBehavedNumber-OR7M83Gu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cp9N8_Bk.js";import"./index-BcefENIv.js";import"./index-C3JFnZZi.js";import"./renderedTicksSlice-kBir8HDa.js";import"./axisSelectors-DOKBLmJM.js";import"./d3-scale-CVyajGd1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-COa7p1e9.js";import"./chartDataContext-qlylvQc9.js";import"./CategoricalChart-B2VvTH4v.js";import"./CartesianAxis-CgS78KcM.js";import"./Layer-sJOcNnwh.js";import"./Text-BeTx0pmM.js";import"./DOMUtils-BhG_b4P2.js";import"./Label-CC74cj4o.js";import"./ZIndexLayer-DEcD4grM.js";import"./types-Cdi5Da9N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-LhiWNSwp.js";import"./useAnimationId-Bcchcs5m.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
