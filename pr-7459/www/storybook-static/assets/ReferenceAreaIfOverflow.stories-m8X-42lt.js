import{R as e}from"./iframe-CoKy4elT.js";import{R as s}from"./zIndexSlice-CY4yYEbq.js";import{C as p}from"./ComposedChart-BVJUWbH_.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CbNhhmdD.js";import{X as d}from"./XAxis-DsRQf7G7.js";import{Y as l}from"./YAxis-BJGGz_YN.js";import{R as h}from"./ReferenceArea-CMFqMv7N.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-lWVojOeC.js";import"./index-Bjw5bEKW.js";import"./index-B3BiA27P.js";import"./get-BfSl0Rns.js";import"./resolveDefaultProps-CDt21lVt.js";import"./isWellBehavedNumber-1a8W8TdO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkPhnPXC.js";import"./index-B6XlI2wQ.js";import"./index-C3h5ViMU.js";import"./renderedTicksSlice-DBzopiP-.js";import"./axisSelectors-D-8m2pyG.js";import"./d3-scale-xTkB24fT.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DX79lhQp.js";import"./chartDataContext-JpjBb8GI.js";import"./CategoricalChart-DaCgDPQn.js";import"./CartesianAxis-DoYCv6Ih.js";import"./Layer-k2Wdsuzq.js";import"./Text-DL1Q3xYK.js";import"./DOMUtils-YWM1N8Io.js";import"./Label-MtH_fF3i.js";import"./ZIndexLayer-Gbc9J2Kq.js";import"./types-Du-R6iBe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-CO7CILtg.js";import"./useAnimationId-DCY8-kt_.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
