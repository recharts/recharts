import{R as e}from"./iframe-DktoyP0I.js";import{R as s}from"./zIndexSlice-BqxjHKrS.js";import{C as p}from"./ComposedChart-BDFJsZWU.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CKU87Pn6.js";import{X as d}from"./XAxis-BxV59Hhm.js";import{Y as l}from"./YAxis-BLG3LfpU.js";import{R as h}from"./ReferenceArea-DsKARUkX.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-yOjEFYCA.js";import"./index-Be24bbvM.js";import"./index-BFyGHYnF.js";import"./get-DZQ4X22M.js";import"./resolveDefaultProps-Bs_-cxps.js";import"./isWellBehavedNumber-D7-lB0Sk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C48Z7D7H.js";import"./index-CjF-Q638.js";import"./index-B91yukul.js";import"./renderedTicksSlice-Cd_bo-5U.js";import"./axisSelectors-C830vntb.js";import"./d3-scale-BMKK7LPO.js";import"./CartesianChart-cbrKpDvd.js";import"./chartDataContext-BtRoA9Zg.js";import"./CategoricalChart-DGVvOUvV.js";import"./CartesianAxis-DrMR96cw.js";import"./Layer-DxVIdqTA.js";import"./Text-DAKApr79.js";import"./DOMUtils-JSCS2paE.js";import"./Label-BR89T_1_.js";import"./ZIndexLayer-CSsqT-BM.js";import"./types-CkRwSSe-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-CpoNtx3K.js";import"./useAnimationId-Dyo3RN72.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
