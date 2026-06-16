import{R as e}from"./iframe-Bd_RatVP.js";import{R as s}from"./zIndexSlice-Bs3cmT56.js";import{C as p}from"./ComposedChart-C0J2irJb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Bbe3282o.js";import{X as d}from"./XAxis-CxMafso2.js";import{Y as l}from"./YAxis-KJSd-Ivi.js";import{R as h}from"./ReferenceArea-UZObIk_K.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-K2Jr_glw.js";import"./index-DuMhoHLg.js";import"./index-AIDQn2zy.js";import"./get-D2eywazJ.js";import"./resolveDefaultProps-CDT2X36A.js";import"./isWellBehavedNumber-vEzZ_uBL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DoiYSoxN.js";import"./index-CtCj_c9U.js";import"./index-KgYFzznq.js";import"./renderedTicksSlice-BaNjR9ZK.js";import"./axisSelectors-iePK0TpX.js";import"./d3-scale-8NOk75ft.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BgWder66.js";import"./chartDataContext-2ZBdxPuo.js";import"./CategoricalChart-B7ZdZ9dp.js";import"./CartesianAxis-DYnLL5ki.js";import"./Layer-CSKVUvgL.js";import"./Text-CID6qmBG.js";import"./DOMUtils-BvIcVirU.js";import"./Label-_LaAHgCb.js";import"./ZIndexLayer-CW5Q6iO0.js";import"./types-B_YM2FYy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-BiRALYrC.js";import"./useAnimationId-WD2dkHdB.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
