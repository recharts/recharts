import{R as e}from"./iframe-D1iFT1mY.js";import{R as s}from"./zIndexSlice-B6TgBQrN.js";import{C as p}from"./ComposedChart-oca7_NcQ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CIMtiBLV.js";import{X as d}from"./XAxis-zY-Ami2t.js";import{Y as l}from"./YAxis-CW-ZNT8W.js";import{R as h}from"./ReferenceArea-FSPOmNrI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CzPbu-Ix.js";import"./index-DpDzEI56.js";import"./index-rDbSE8GI.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BMIUma5c.js";import"./isWellBehavedNumber-Du8M38U_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BlluAAtZ.js";import"./index-DvHXLyo3.js";import"./index-BBsSvonK.js";import"./renderedTicksSlice-Bf_HC71D.js";import"./axisSelectors-CxzN54IZ.js";import"./d3-scale-DpibCxtP.js";import"./CartesianChart-D2tBODZW.js";import"./chartDataContext-CYm6jQFo.js";import"./CategoricalChart-D5N5XyOw.js";import"./CartesianAxis-HsnRG105.js";import"./Layer-FA9hcod8.js";import"./Text-J63_ff7W.js";import"./DOMUtils-BANERqy9.js";import"./Label-DT6YPp8b.js";import"./ZIndexLayer-8c0NuDUK.js";import"./types-DXiAmoHC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-V-255kdt.js";import"./useAnimationId-CoQh4DtZ.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
