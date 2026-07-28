import{R as e}from"./iframe-Byz0CZgU.js";import{R as n}from"./zIndexSlice-DotL-Jp7.js";import{C as s}from"./ComposedChart-C88qarp6.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BUrM0Lzp.js";import{X as f}from"./XAxis-BUPL4hjC.js";import{Y as l}from"./YAxis-jlA8Ias5.js";import{R as d}from"./ReferenceDot-D48-Rxgy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-4aokm5Ko.js";import"./index-CK-fZH2A.js";import"./index-CQCdoqal.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DuQSjIkO.js";import"./isWellBehavedNumber-B1YKzF79.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D5qdTAip.js";import"./index-CNmE48Wz.js";import"./index-D4FuUZjH.js";import"./renderedTicksSlice-BW0ZnHiJ.js";import"./axisSelectors-CN4g76wg.js";import"./d3-scale-D3FDPfRZ.js";import"./CartesianChart-QxAb7wSw.js";import"./chartDataContext-E1G0KTyW.js";import"./CategoricalChart-Dqx0x7Kl.js";import"./CartesianAxis-B3F7THN1.js";import"./Layer-jJo0ut9m.js";import"./Text-DEkD8bId.js";import"./DOMUtils-DwTCLKyl.js";import"./Label-DuUl9C5P.js";import"./ZIndexLayer-DaxIl4jI.js";import"./types-DE0YJD6S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DfGqi-Ay.js";import"./isBuffer-Crkas5dz.js";import"./Dot-B1fpIP2w.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
