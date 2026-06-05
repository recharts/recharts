import{R as e}from"./iframe-__Uni7ot.js";import{R as s}from"./zIndexSlice-D7vG4UcO.js";import{C as p}from"./ComposedChart-De5M1TqL.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Ccu2Kimz.js";import{X as d}from"./XAxis-_jE_dg8q.js";import{Y as l}from"./YAxis-CjBkwZMp.js";import{R as h}from"./ReferenceArea-B-PkMMwg.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DHOgEza7.js";import"./index-DuAus-7O.js";import"./index-D5MVAu2q.js";import"./get-M8ASrgh5.js";import"./resolveDefaultProps-id_IzIac.js";import"./isWellBehavedNumber-DShwpyY_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BbAqMlrq.js";import"./index-ClzAupHk.js";import"./index-B8BzxjEy.js";import"./renderedTicksSlice-DJf3fvCP.js";import"./axisSelectors-CWQCxUri.js";import"./d3-scale-DZYmGYua.js";import"./string-B6fdYHAA.js";import"./CartesianChart--sKXWUKy.js";import"./chartDataContext-CKCl4rEW.js";import"./CategoricalChart-BLqwxQ25.js";import"./CartesianAxis-CtUpgzNz.js";import"./Layer-CMTKTZZ4.js";import"./Text-C_yGKqXr.js";import"./DOMUtils-neCLUP_5.js";import"./Label-CrlvYGOF.js";import"./ZIndexLayer-C4Jgnnas.js";import"./types-DL1t91_l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-CGEFHU8W.js";import"./useAnimationId-BhPEQZA3.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
