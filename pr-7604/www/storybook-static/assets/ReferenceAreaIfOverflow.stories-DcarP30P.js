import{R as e}from"./iframe-Bcp8O5w9.js";import{R as s}from"./zIndexSlice-D89hrw0J.js";import{C as p}from"./ComposedChart-BTnoYdrr.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-B6HQ76qh.js";import{X as d}from"./XAxis-BiaLRW8b.js";import{Y as l}from"./YAxis-BfwBAog7.js";import{R as h}from"./ReferenceArea-DkdL1cwB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DAyQB-br.js";import"./index-8PiiTqGz.js";import"./index-D5K7XRz9.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DZIqX7HS.js";import"./isWellBehavedNumber-Cv5vkYjV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5FCNVgo.js";import"./index-BdFtKw5i.js";import"./index-CR585iKh.js";import"./renderedTicksSlice-DrTN80Ah.js";import"./axisSelectors-CoK9S3rY.js";import"./d3-scale-CsP8i0FA.js";import"./CartesianChart-CD4QeXTd.js";import"./chartDataContext-DNuqophf.js";import"./CategoricalChart-YaAk4iek.js";import"./CartesianAxis-BtWjjBG7.js";import"./Layer-be5X0p7R.js";import"./Text-wdIqEHol.js";import"./DOMUtils-CK1FWe6a.js";import"./Label-hDShUpMs.js";import"./ZIndexLayer-DGoKIl_r.js";import"./types-BoqxM4LK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BZ4wBUr5.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-D0LEdSIL.js";import"./useAnimationId-BscNfyQw.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
