import{R as e}from"./iframe-Y7LdsWUd.js";import{R as s}from"./zIndexSlice-g6buOjPK.js";import{C as p}from"./ComposedChart-ByCfqa9r.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-B14JXO8y.js";import{X as d}from"./XAxis-BEn1qEwo.js";import{Y as l}from"./YAxis-NkmeWl3a.js";import{R as h}from"./ReferenceArea-77LuEy-D.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CTHxJNnh.js";import"./index-Bl2KzI3D.js";import"./index-BqhFnWN1.js";import"./get-Bl7iuY_G.js";import"./resolveDefaultProps-EYxijulG.js";import"./isWellBehavedNumber-D670Qdyl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bz-cSrDT.js";import"./index-468XY5rC.js";import"./index-D9y4Xpfg.js";import"./renderedTicksSlice-_dHdD9iU.js";import"./axisSelectors-BKqrOX2w.js";import"./d3-scale-D0YrMM7V.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DUAWwhpK.js";import"./chartDataContext-DK8YFcnh.js";import"./CategoricalChart-BHdb9DL7.js";import"./CartesianAxis-1pwFs9AH.js";import"./Layer-CYliWRnL.js";import"./Text-c0cVIonZ.js";import"./DOMUtils-CMyDK0NY.js";import"./Label-B9hAjr1E.js";import"./ZIndexLayer-0MAyxgOl.js";import"./types-D3i7dddg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-DJ2W9D_9.js";import"./useAnimationId-BlokCSh_.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
