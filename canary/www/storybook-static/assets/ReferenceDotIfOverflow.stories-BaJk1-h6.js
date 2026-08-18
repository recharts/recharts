import{R as e}from"./iframe-BMarL12M.js";import{R as n}from"./zIndexSlice-C3zFoeWv.js";import{C as s}from"./ComposedChart-DmXgJ0VK.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Z6_HDZb4.js";import{X as f}from"./XAxis-HDWpUUwS.js";import{Y as l}from"./YAxis-hUo2hZ05.js";import{R as d}from"./ReferenceDot-VK4QA7tJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-szqIxzqv.js";import"./index-Dlh6vJO1.js";import"./index-D9BBRgqz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C6wBzGKi.js";import"./isWellBehavedNumber-DBs0imhW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C2ncjDjR.js";import"./index-rELjxh9R.js";import"./index-vTpJvilY.js";import"./axisSelectors-DONKf7kg.js";import"./d3-scale-C4M2cZc9.js";import"./renderedTicksSlice-BGVDzAbm.js";import"./CartesianChart-Bsi6NNhA.js";import"./chartDataContext-BcZuDILO.js";import"./CategoricalChart-D3itWTr1.js";import"./CartesianAxis-CxMr6rDg.js";import"./Layer-DPtUoMDp.js";import"./Text-CGkcqRdd.js";import"./DOMUtils-DSG72bMg.js";import"./useBackwardsCompatibleTheme-DDTyJRfe.js";import"./Label-wMX0Bukp.js";import"./ZIndexLayer-4Y9-7gYz.js";import"./types-B-ESMolm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-BRm5AFxN.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
