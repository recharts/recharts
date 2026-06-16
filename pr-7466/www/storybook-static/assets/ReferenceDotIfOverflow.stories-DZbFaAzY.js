import{R as e}from"./iframe-D8_PwwQn.js";import{R as n}from"./zIndexSlice-D3hIREVO.js";import{C as s}from"./ComposedChart-DWabK0Ov.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Cq-Nn9aG.js";import{X as f}from"./XAxis-BMXTihse.js";import{Y as l}from"./YAxis-B3qPS3l7.js";import{R as d}from"./ReferenceDot-pV07h1p8.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-B4u9UiQz.js";import"./index-ComLpA2A.js";import"./index-Bf27XMU5.js";import"./get-VOiq-nzz.js";import"./resolveDefaultProps-CDlH06hb.js";import"./isWellBehavedNumber-I9OE6uzw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DSRWnM09.js";import"./index-BYYXq0C_.js";import"./index-DGMH0rdv.js";import"./renderedTicksSlice-Dazc5DIT.js";import"./axisSelectors-GpzB0aa8.js";import"./d3-scale-B_gxMkbZ.js";import"./string-B6fdYHAA.js";import"./CartesianChart-VfOncxQc.js";import"./chartDataContext-CFZ_6_Pd.js";import"./CategoricalChart-DVNyDBwI.js";import"./CartesianAxis-AGoux6hi.js";import"./Layer-DIbVHc_A.js";import"./Text-Dcw4f9im.js";import"./DOMUtils-BuLBbKXn.js";import"./Label-DYAIx6Pc.js";import"./ZIndexLayer-Dhl_4keR.js";import"./types-C59kAQfA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-BJ21P9KG.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
