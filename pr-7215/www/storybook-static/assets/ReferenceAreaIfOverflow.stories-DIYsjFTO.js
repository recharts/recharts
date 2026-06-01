import{c as e}from"./iframe-CE1Ai-kZ.js";import{g as s}from"./zIndexSlice-yWbeh4A5.js";import{C as p}from"./ComposedChart-BkL-CQuh.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-ChTvHEsA.js";import{X as d}from"./XAxis-b9Iy0H9I.js";import{Y as l}from"./YAxis-CtQfEX5v.js";import{R as h}from"./ReferenceArea-B9J2DZv9.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DgYhOWDS.js";import"./index-Gozxl0v8.js";import"./index-B1iIDv_0.js";import"./get-mVWjURP_.js";import"./resolveDefaultProps-CmEakyQ-.js";import"./isWellBehavedNumber-Bxf6a22g.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-4e423j6r.js";import"./index-DaGE07U6.js";import"./index-DziNllj1.js";import"./renderedTicksSlice-BQLVMwTH.js";import"./axisSelectors-C9KJ0caj.js";import"./d3-scale-BHF3M1h_.js";import"./string-yHBgcFlJ.js";import"./CartesianChart-Cs0xCG0T.js";import"./chartDataContext-Y7cA5Syy.js";import"./CategoricalChart-BlcXzgR0.js";import"./CartesianAxis-C_FQ4pG9.js";import"./Layer-IyK8O9Af.js";import"./Text-DURDmivW.js";import"./DOMUtils-CSrHQ79m.js";import"./Label-DLrYniOW.js";import"./ZIndexLayer-CqYRU3_E.js";import"./types-Cms7mXxl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-Las83rKf.js";import"./useAnimationId-BY50CzGe.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
