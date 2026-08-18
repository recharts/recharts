import{R as e}from"./iframe-BMarL12M.js";import{R as s}from"./zIndexSlice-C3zFoeWv.js";import{C as p}from"./ComposedChart-DmXgJ0VK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Z6_HDZb4.js";import{X as d}from"./XAxis-HDWpUUwS.js";import{Y as l}from"./YAxis-hUo2hZ05.js";import{R as h}from"./ReferenceArea-C9o7n7x9.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-szqIxzqv.js";import"./index-Dlh6vJO1.js";import"./index-D9BBRgqz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C6wBzGKi.js";import"./isWellBehavedNumber-DBs0imhW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C2ncjDjR.js";import"./index-rELjxh9R.js";import"./index-vTpJvilY.js";import"./axisSelectors-DONKf7kg.js";import"./d3-scale-C4M2cZc9.js";import"./renderedTicksSlice-BGVDzAbm.js";import"./CartesianChart-Bsi6NNhA.js";import"./chartDataContext-BcZuDILO.js";import"./CategoricalChart-D3itWTr1.js";import"./CartesianAxis-CxMr6rDg.js";import"./Layer-DPtUoMDp.js";import"./Text-CGkcqRdd.js";import"./DOMUtils-DSG72bMg.js";import"./useBackwardsCompatibleTheme-DDTyJRfe.js";import"./Label-wMX0Bukp.js";import"./ZIndexLayer-4Y9-7gYz.js";import"./types-B-ESMolm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-C589zoI3.js";import"./useAnimationId-W_lOfRkr.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
