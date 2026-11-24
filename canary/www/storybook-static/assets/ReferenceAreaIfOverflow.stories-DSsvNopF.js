import{R as e}from"./iframe-B1Ov3CkI.js";import{R as s}from"./zIndexSlice-BZ09-fF4.js";import{C as p}from"./ComposedChart-Dd5cIYd9.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BNmKxAJh.js";import{X as d}from"./XAxis-B8awpm7u.js";import{Y as l}from"./YAxis-CKqezMqR.js";import{R as h}from"./ReferenceArea-CJjIHt8L.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DWDtOW2Y.js";import"./throttle-CU4m2LyG.js";import"./index-BZUg4nA9.js";import"./index-CKnkfWPE.js";import"./RechartsWrapper-CArKZuEM.js";import"./axisSelectors-CwNUFUW3.js";import"./polarAxisSelectors-BnryocK3.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRiCZA2b.js";import"./index-DD4HlTuM.js";import"./index-DoKEjPdp.js";import"./renderedTicksSlice-7kuLifM3.js";import"./index-BMXSO3re.js";import"./fillDefinitions-C3NO0Lw1.js";import"./CartesianChart-ClQxKu1o.js";import"./chartDataContext-fgeg9aho.js";import"./CategoricalChart-C2LUjjE6.js";import"./CartesianAxis-CqVMCZWw.js";import"./Layer-DAwsvvog.js";import"./Text-B3OKn0GK.js";import"./ZIndexLayer-DQABw9Zs.js";import"./Label-DD8YxEOL.js";import"./types-ynn-_gFH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-B3p2_n3w.js";import"./useAnimationId-DhG5SB-S.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
