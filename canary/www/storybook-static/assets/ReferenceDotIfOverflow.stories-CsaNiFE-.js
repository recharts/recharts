import{R as e}from"./iframe-C6tckEdC.js";import{R as m}from"./zIndexSlice-BRbRDCdD.js";import{C as s}from"./ComposedChart-5VVWJpva.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-M5jX1B50.js";import{X as f}from"./XAxis-DzYRQrky.js";import{Y as l}from"./YAxis-rcBaqYZ7.js";import{R as d}from"./ReferenceDot-CTZuI_HV.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CSiVUs4x.js";import"./get-CjriyByo.js";import"./throttle-CU3FfpOW.js";import"./index-BzKVLmVc.js";import"./index-BR0KP3KE.js";import"./RechartsWrapper-0oVlPs_v.js";import"./axisSelectors-BaS600qd.js";import"./polarAxisSelectors-BP0xU-X7.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-cNizIXDy.js";import"./index-DKLWww0Z.js";import"./index-DvK4dXF2.js";import"./renderedTicksSlice-gvMRVXAc.js";import"./index-Cqbhonwj.js";import"./fillDefinitions-D_qwa_ZF.js";import"./CartesianChart-Cl401OCs.js";import"./chartDataContext-BIkRUcpA.js";import"./CategoricalChart-BQKW_s0C.js";import"./CartesianAxis-HAEOo14B.js";import"./Layer-CZ4BpJHW.js";import"./Text-Wncpajm_.js";import"./ZIndexLayer-Duaj4w7a.js";import"./Label-DaLGTh2V.js";import"./types-DkdMor4N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-Byjprri8.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
