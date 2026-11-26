import{R as e}from"./iframe-B9Tl-Ens.js";import{R as m}from"./zIndexSlice-CeB5DPsb.js";import{C as s}from"./ComposedChart-BkpfzGMq.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-UZ-yUTT_.js";import{X as f}from"./XAxis-DgmkF9Yy.js";import{Y as l}from"./YAxis-CjYRlTBq.js";import{R as d}from"./ReferenceDot-B7DSyA59.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dx7qzCwA.js";import"./get-CjriyByo.js";import"./throttle-dfeJw9jR.js";import"./index-DuaVn5It.js";import"./index-DQWwV-s1.js";import"./RechartsWrapper-DeTgaRib.js";import"./axisSelectors-x8C92zXU.js";import"./polarAxisSelectors-C83zEpXU.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Cl0QaiN4.js";import"./index-166nmvSm.js";import"./index-iYKKcn13.js";import"./renderedTicksSlice-BtRpF17f.js";import"./index-fTBi_u0-.js";import"./fillDefinitions-BDEW-tdf.js";import"./CartesianChart-BbmwDwWI.js";import"./chartDataContext-DkV3RH4w.js";import"./CategoricalChart-BLl8H6lt.js";import"./CartesianAxis-BYNQxUMc.js";import"./Layer-Bu8k813y.js";import"./Text-Bu0oCoIY.js";import"./ZIndexLayer-Ci5oHiVJ.js";import"./Label-Dez-agGk.js";import"./types-BDfLdEx1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-DzsU10RZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
