import{R as e}from"./iframe-Bh1U-oMl.js";import{R as n}from"./zIndexSlice-CbwDGfhV.js";import{C as s}from"./ComposedChart-_0dXWU4B.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DLxfJWcm.js";import{X as f}from"./XAxis-BDDyTBp4.js";import{Y as l}from"./YAxis-DLWlNOvC.js";import{R as d}from"./ReferenceDot-DPcVN7A5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DMII0ZAy.js";import"./index-CIfG7xc6.js";import"./index-B7DuV58o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cs5bXre5.js";import"./isWellBehavedNumber-Dyeu8bHm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJiANDik.js";import"./index-BJEvKA6W.js";import"./index-Pl0BuMhm.js";import"./axisSelectors-KgYrPzsA.js";import"./d3-scale-DvNPjBaU.js";import"./renderedTicksSlice-6pXaWoy-.js";import"./CartesianChart-YxKbksJG.js";import"./chartDataContext-B8xHbf95.js";import"./CategoricalChart-DcSXPqkv.js";import"./CartesianAxis-DON_KZPp.js";import"./Layer-C3H-dOT5.js";import"./Text-bdpnJJaC.js";import"./DOMUtils-TtYkNMfa.js";import"./Label-CoZlS51A.js";import"./ZIndexLayer-C51_GrjW.js";import"./types-w_TylJof.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Bbvr3NVw.js";import"./isBuffer-BG75eWKN.js";import"./Dot-ClTJQBAf.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
