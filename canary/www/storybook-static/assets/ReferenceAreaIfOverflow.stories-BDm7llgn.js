import{R as e}from"./iframe-CWxtgXuN.js";import{R as s}from"./zIndexSlice-DuNjPOIA.js";import{C as p}from"./ComposedChart-CHLSjXfe.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid--MjGfx3V.js";import{X as d}from"./XAxis-BIy0Ixfj.js";import{Y as l}from"./YAxis-BwANZfYx.js";import{R as h}from"./ReferenceArea-C3222mSv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DySWaKHI.js";import"./index-D3Okail2.js";import"./index-Co2hlbGQ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DB57oDCz.js";import"./isWellBehavedNumber-RhnC_be2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-cC4MiwtJ.js";import"./index-ClfrRk61.js";import"./index-Cgh7W-Sw.js";import"./axisSelectors-D3U5jtqo.js";import"./d3-scale-PJ0eA6WB.js";import"./renderedTicksSlice-DdR3Yk66.js";import"./CartesianChart-VS3m0tpN.js";import"./chartDataContext-BzVtDYqK.js";import"./CategoricalChart-CDL51AOI.js";import"./CartesianAxis-Bg_4zGXW.js";import"./Layer-DvshJojd.js";import"./Text-Bzp-NWLm.js";import"./DOMUtils-B_ZEHGfF.js";import"./Label-B4Vj6wwG.js";import"./ZIndexLayer-BlQF_3Y8.js";import"./types-CUZin1-8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DQSpDGj3.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BaSYnlz4.js";import"./useAnimationId-N7_T0mrz.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
