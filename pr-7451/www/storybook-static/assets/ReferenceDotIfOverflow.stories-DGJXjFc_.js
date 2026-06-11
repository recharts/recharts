import{R as e}from"./iframe-DVB9NpZr.js";import{R as n}from"./zIndexSlice-inUr0xCU.js";import{C as s}from"./ComposedChart-oQ-te1DN.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D6RpYwoO.js";import{X as f}from"./XAxis-CjffC60d.js";import{Y as l}from"./YAxis-CIOeYwaY.js";import{R as d}from"./ReferenceDot-D2onNpKO.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-cUFuezMs.js";import"./index-jND3wDEX.js";import"./index-BFwMZWAZ.js";import"./get-DFBBhs2u.js";import"./resolveDefaultProps-B0kvhTPY.js";import"./isWellBehavedNumber-B9edeUWc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-dTztbV_h.js";import"./index-r4smWfCS.js";import"./index-DwUGYNg_.js";import"./renderedTicksSlice-BJczlu3R.js";import"./axisSelectors-ORdVTni-.js";import"./d3-scale-wZkz8Wtl.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DFuv_KZ0.js";import"./chartDataContext-8-Op06e4.js";import"./CategoricalChart-onThNRP3.js";import"./CartesianAxis-BFFWpUHq.js";import"./Layer-CznYhS6e.js";import"./Text-RO4N7_ds.js";import"./DOMUtils-b4dXHa1v.js";import"./Label-C-9e4xzc.js";import"./ZIndexLayer-YpWmKYVa.js";import"./types-CmHpCyOi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-EUv2v8ot.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
