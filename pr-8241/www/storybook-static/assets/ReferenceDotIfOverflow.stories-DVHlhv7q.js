import{R as e}from"./iframe-BoIdwylW.js";import{R as m}from"./zIndexSlice-PMZXbuz8.js";import{C as s}from"./ComposedChart-CtZqtgqM.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B5vMehIg.js";import{X as f}from"./XAxis-ClVSu1zU.js";import{Y as l}from"./YAxis-GNczrVGv.js";import{R as d}from"./ReferenceDot-B0_Iup1G.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CtzWd-qA.js";import"./throttle-DJovDE6i.js";import"./index-DNtzd00k.js";import"./index-D93QOL6W.js";import"./RechartsWrapper-KwWkpOaO.js";import"./axisSelectors-CnNiq6Rh.js";import"./polarAxisSelectors-BUrHoreM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Asjkzq2w.js";import"./index-Cb6O7Zhr.js";import"./index-DeVO3TjK.js";import"./renderedTicksSlice-BcY34TaC.js";import"./index-DLxdIIWm.js";import"./fillDefinitions-CK96g-PQ.js";import"./CartesianChart-RjOUEsRj.js";import"./chartDataContext-XVkCEP1D.js";import"./CategoricalChart-8Ce8TnvZ.js";import"./CartesianAxis-DE9aH7XM.js";import"./Layer-DnLGFXqh.js";import"./Text-D_S4fT48.js";import"./ZIndexLayer-BYJgF0xG.js";import"./Label-B2lBcb4D.js";import"./types-D0djA_gg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-CLBNcaQB.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
