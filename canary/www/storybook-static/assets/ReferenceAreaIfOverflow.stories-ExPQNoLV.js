import{R as e}from"./iframe-B9f439XI.js";import{R as p}from"./zIndexSlice-C6Otyq85.js";import{C as s}from"./ComposedChart-C-QIoD4C.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-C4GjJN79.js";import{X as d}from"./XAxis-DOU84Hlo.js";import{Y as l}from"./YAxis-JNrwnee_.js";import{R as h}from"./ReferenceArea-CROX9aIO.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cul9o8Fv.js";import"./index-BbETDB0j.js";import"./index-Ba5C8sSe.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-gOTjLOeS.js";import"./isWellBehavedNumber-CYewbHK2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DhjKeyZf.js";import"./axisSelectors-CtkTbFLc.js";import"./d3-scale-D5l0Isqr.js";import"./index-C3T5ZoZg.js";import"./index--FioM-W6.js";import"./renderedTicksSlice-v2nQGwWu.js";import"./index-Dmy_GPO_.js";import"./CartesianChart-DaH8zaVP.js";import"./chartDataContext-1z3k21sD.js";import"./CategoricalChart-7BozNq5r.js";import"./CartesianAxis-DdFgmu19.js";import"./Layer-JExDg_3T.js";import"./Text-Bow6SjUp.js";import"./DOMUtils-DhGAIzWN.js";import"./useId-C9eyJZjo.js";import"./useBackwardsCompatibleTheme-CPO8fYQ4.js";import"./Label-DVN-Hwwb.js";import"./ZIndexLayer-C4eGne8u.js";import"./types-BsF4BT96.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-B0vFWPEb.js";import"./useAnimationId-7tiok7vs.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ne as __namedExportsOrder,oe as default};
