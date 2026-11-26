import{R as e}from"./iframe-B9Tl-Ens.js";import{R as s}from"./zIndexSlice-CeB5DPsb.js";import{C as p}from"./ComposedChart-BkpfzGMq.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-UZ-yUTT_.js";import{X as d}from"./XAxis-DgmkF9Yy.js";import{Y as l}from"./YAxis-CjYRlTBq.js";import{R as h}from"./ReferenceArea-DZtgWyTa.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dx7qzCwA.js";import"./get-CjriyByo.js";import"./throttle-dfeJw9jR.js";import"./index-DuaVn5It.js";import"./index-DQWwV-s1.js";import"./RechartsWrapper-DeTgaRib.js";import"./axisSelectors-x8C92zXU.js";import"./polarAxisSelectors-C83zEpXU.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Cl0QaiN4.js";import"./index-166nmvSm.js";import"./index-iYKKcn13.js";import"./renderedTicksSlice-BtRpF17f.js";import"./index-fTBi_u0-.js";import"./fillDefinitions-BDEW-tdf.js";import"./CartesianChart-BbmwDwWI.js";import"./chartDataContext-DkV3RH4w.js";import"./CategoricalChart-BLl8H6lt.js";import"./CartesianAxis-BYNQxUMc.js";import"./Layer-Bu8k813y.js";import"./Text-Bu0oCoIY.js";import"./ZIndexLayer-Ci5oHiVJ.js";import"./Label-Dez-agGk.js";import"./types-BDfLdEx1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-BHPo4ax_.js";import"./useAnimationId-eoD8CiMN.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
