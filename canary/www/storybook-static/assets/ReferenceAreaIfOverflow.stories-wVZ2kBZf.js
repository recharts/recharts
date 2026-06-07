import{R as e}from"./iframe-RDkqVuG2.js";import{R as s}from"./zIndexSlice-C4ZKGTQh.js";import{C as p}from"./ComposedChart-n_pkeOwP.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-B2a8Q35-.js";import{X as d}from"./XAxis-DEACd4mi.js";import{Y as l}from"./YAxis-4GVW-TXE.js";import{R as h}from"./ReferenceArea-wmy5CNhr.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-tJ0TJl6x.js";import"./index-9iQIkkD_.js";import"./index-C0Sw1Z_f.js";import"./get-qTOI2Rj3.js";import"./resolveDefaultProps-CrvfBHpF.js";import"./isWellBehavedNumber-B7BMWvxG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BeMiseSr.js";import"./index-DIx3ZRGh.js";import"./index-Bl5JBY4m.js";import"./renderedTicksSlice-BbGCSG_u.js";import"./axisSelectors-ChiETq8M.js";import"./d3-scale-CNXGEtqn.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CkUHBUTg.js";import"./chartDataContext-DCYgbhWK.js";import"./CategoricalChart-DKO530-y.js";import"./CartesianAxis-BXGLIO05.js";import"./Layer-DnJxeL60.js";import"./Text-euyAwdDa.js";import"./DOMUtils-B1kyH5Gm.js";import"./Label-kl9r3lv0.js";import"./ZIndexLayer-ChplAtHB.js";import"./types-BwJsYmye.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-Cf0Ils5n.js";import"./useAnimationId-DWgEGQGL.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
