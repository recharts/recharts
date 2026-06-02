import{c as e}from"./iframe-QM_Hy95O.js";import{g as n}from"./zIndexSlice-BlNPxokt.js";import{C as s}from"./ComposedChart-CQ4Xoo2c.js";import{p}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-xNLG7r9K.js";import{X as f}from"./XAxis-k_T7UBmN.js";import{Y as l}from"./YAxis-ByuMssjK.js";import{R as d}from"./ReferenceDot-BvbWziKY.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-fQ35ak9n.js";import"./index-CPQwco96.js";import"./index-CyaeIqvy.js";import"./get-in6fAyvy.js";import"./resolveDefaultProps-BlXEfe9z.js";import"./isWellBehavedNumber-COg8tf3N.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ls9ymLSy.js";import"./index-rIa8t0ZL.js";import"./index-CGSa8iwo.js";import"./renderedTicksSlice-CdDiUgXh.js";import"./axisSelectors-CnIWqyv7.js";import"./d3-scale-CDUvP8fj.js";import"./CartesianChart-BOBGMUhC.js";import"./chartDataContext-Cuzu216J.js";import"./CategoricalChart-C66Yjwv3.js";import"./CartesianAxis-B-Qfc6z6.js";import"./Layer-DMLrZzOp.js";import"./Text-CiqEhbxu.js";import"./DOMUtils-O0X-t8NY.js";import"./Label-D4PO75Y9.js";import"./ZIndexLayer-BiKPrQca.js";import"./types-B29_egWp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-CfJGHcqY.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
