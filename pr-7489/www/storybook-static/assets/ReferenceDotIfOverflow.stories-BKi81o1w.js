import{R as e}from"./iframe-Csitbru2.js";import{R as n}from"./zIndexSlice-BG9qkId4.js";import{C as s}from"./ComposedChart-BUYN4Cux.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BnYcAmsk.js";import{X as f}from"./XAxis-GSkuRjug.js";import{Y as l}from"./YAxis-77x_J4Mg.js";import{R as d}from"./ReferenceDot-TJeG-1xR.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DZIxrqNF.js";import"./index-DY2vKHdm.js";import"./index-82VYn5V_.js";import"./get-DUq6txa7.js";import"./resolveDefaultProps-zVEOPP5d.js";import"./isWellBehavedNumber-_7tyBBfO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJrqmvjr.js";import"./index-BUYeukup.js";import"./index-3rUoeV7Y.js";import"./renderedTicksSlice-DArjmdb9.js";import"./axisSelectors-BKzg4uht.js";import"./d3-scale-ruaAtfZ3.js";import"./CartesianChart-CQCv9B95.js";import"./chartDataContext-5AtwXdKv.js";import"./CategoricalChart-CH47Oqt0.js";import"./CartesianAxis-625Se9fv.js";import"./Layer-CzMJ0aPe.js";import"./Text-CCtHFY4v.js";import"./DOMUtils-QGCjuYeS.js";import"./Label-ipIcHgJV.js";import"./ZIndexLayer-BXMbhl4p.js";import"./types-CUGjGCsQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-Wnlr8zt6.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
