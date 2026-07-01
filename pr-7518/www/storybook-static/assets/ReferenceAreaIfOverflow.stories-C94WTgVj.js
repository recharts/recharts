import{R as e}from"./iframe-EI0Ls4hC.js";import{R as s}from"./zIndexSlice-yKXgbZM9.js";import{C as p}from"./ComposedChart-Be7puHYx.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BC9TO7ip.js";import{X as d}from"./XAxis-isMopIja.js";import{Y as l}from"./YAxis-BDDTXkrb.js";import{R as h}from"./ReferenceArea-BXGeQ5b0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cdlad3bH.js";import"./index-nHjkW3_e.js";import"./index-D-rMjtE6.js";import"./get-BON1YutH.js";import"./resolveDefaultProps-NPYXHAaZ.js";import"./isWellBehavedNumber-DWxIjg9k.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CVfLxVvb.js";import"./index-CzoIO75z.js";import"./index-BIz2bYpH.js";import"./renderedTicksSlice-CoFXcUVC.js";import"./axisSelectors-Cok1HNra.js";import"./d3-scale-DBYKxB4y.js";import"./CartesianChart-DxsNLdfg.js";import"./chartDataContext-AgenIsJt.js";import"./CategoricalChart-DnbprEZ3.js";import"./CartesianAxis-C7eaHI9Q.js";import"./Layer-D2PSeBO4.js";import"./Text-BwBPbfGl.js";import"./DOMUtils-DrXieiLo.js";import"./Label-V9mTYK6m.js";import"./ZIndexLayer-C3S5Zj6R.js";import"./types-C8rhvdfR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-Dj6dtcwd.js";import"./useAnimationId-B72UM_RE.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
