import{R as e}from"./iframe-BKvNh1h_.js";import{R as s}from"./zIndexSlice-C45OUbld.js";import{C as p}from"./ComposedChart-DVKY2yWi.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CU7MDKqs.js";import{X as d}from"./XAxis-Cpwb-IQX.js";import{Y as l}from"./YAxis-TFOOT7wp.js";import{R as h}from"./ReferenceArea-C8Zm3f16.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CCr4r-wz.js";import"./index-LbIdVRN9.js";import"./index-C8RhipGY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DkG3FLLb.js";import"./isWellBehavedNumber-CCuIO4aK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bjdqnb5s.js";import"./index-LDeJ6IyG.js";import"./index-Bs0U2hFi.js";import"./axisSelectors-CqcxQY1m.js";import"./d3-scale-C0LZPMhi.js";import"./renderedTicksSlice-CZ4-swon.js";import"./CartesianChart-BRsslnmW.js";import"./chartDataContext-CYnF151M.js";import"./CategoricalChart-ByQYOV-Z.js";import"./CartesianAxis-BURSUJ7n.js";import"./Layer-B8EPTqa2.js";import"./Text-Uy9kBT6v.js";import"./DOMUtils-B6CNM4ee.js";import"./Label-D2RnPYt_.js";import"./ZIndexLayer-Dc9WCXop.js";import"./types-BwPciZr7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-a-KGKEje.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-OKuxmDV_.js";import"./useAnimationId-B6MPcNoZ.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
