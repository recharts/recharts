import{R as e}from"./iframe-_0vvsXwQ.js";import{R as n}from"./zIndexSlice-UDOegWIl.js";import{C as s}from"./ComposedChart-C9VfnRnH.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C4KP2IfC.js";import{X as f}from"./XAxis-BVL11hxO.js";import{Y as l}from"./YAxis-DH6-Go25.js";import{R as d}from"./ReferenceDot-BGwG3wgH.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Crw1A_KU.js";import"./index-B2rwiSR7.js";import"./index-B-MK1gV-.js";import"./get-dROHwlCD.js";import"./resolveDefaultProps-Dur14Ufb.js";import"./isWellBehavedNumber-Cb6oai8T.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D_godwDH.js";import"./index-DjufVxMp.js";import"./index-CQeeIj4f.js";import"./renderedTicksSlice-Dyv93tW0.js";import"./axisSelectors-DOgNvw74.js";import"./d3-scale-9nut4HIz.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DuAlGfbC.js";import"./chartDataContext-ooxC0Mwi.js";import"./CategoricalChart-yQk_e9Td.js";import"./CartesianAxis-ZzlyT-7-.js";import"./Layer-CbOAMwV5.js";import"./Text-DjMF9a9a.js";import"./DOMUtils-BVwvsn59.js";import"./Label-CiJ4G9HU.js";import"./ZIndexLayer-F6Q8sfzp.js";import"./types-DDFFAOTe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-COzuztjB.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
