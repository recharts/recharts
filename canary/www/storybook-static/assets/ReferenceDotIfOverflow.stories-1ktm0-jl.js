import{R as e}from"./iframe-CjAZXmgk.js";import{R as m}from"./zIndexSlice-DZ6wU0kL.js";import{C as p}from"./ComposedChart-C9HbEoPU.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dv_tqLlh.js";import{X as f}from"./XAxis-XXYcX2bn.js";import{Y as l}from"./YAxis-CunYyPtb.js";import{R as d}from"./ReferenceDot-DA7FVBuw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-aHpS-uJF.js";import"./index-CXqdHhNs.js";import"./index-D72PX-EN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B3dy_A6W.js";import"./isWellBehavedNumber-CbOfPh0Q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C1tX5Xq9.js";import"./axisSelectors-DVMe8D3h.js";import"./d3-scale-Cdy5oRLL.js";import"./index-CgP4dGwF.js";import"./index-DoglCRE6.js";import"./renderedTicksSlice-DRvvM2hj.js";import"./index-jRxYEVM9.js";import"./CartesianChart-Bi3Tf3h4.js";import"./chartDataContext-Brj1C6P1.js";import"./CategoricalChart-ChU13xsV.js";import"./CartesianAxis-CNPqH8LV.js";import"./Layer-CMYvDThQ.js";import"./Text-VSZhuuVN.js";import"./pageBackground-CYQU4eM8.js";import"./useId-UofRKXbz.js";import"./useBackwardsCompatibleTheme-C26HYKO8.js";import"./Label-DnpXC07H.js";import"./ZIndexLayer-maUeBX7p.js";import"./types-BUTy-eCs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-C4dqO9Kj.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
