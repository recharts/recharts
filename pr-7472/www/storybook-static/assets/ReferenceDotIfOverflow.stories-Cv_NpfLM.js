import{R as e}from"./iframe-BY-61mf3.js";import{R as n}from"./zIndexSlice-D5LeFsJF.js";import{C as s}from"./ComposedChart-Bx2_Wy5f.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-ColXwOja.js";import{X as f}from"./XAxis-BqqI2L9m.js";import{Y as l}from"./YAxis-Dnu2jnBx.js";import{R as d}from"./ReferenceDot-DngqLdFr.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-B9G3_Kxy.js";import"./index-DbrznSTp.js";import"./index-CqG97JZW.js";import"./get-CrMrHDfL.js";import"./resolveDefaultProps-BvLTVmPU.js";import"./isWellBehavedNumber-CxSUDioC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-TrezbvJj.js";import"./index-CGSMpc0u.js";import"./index-Bdv48GrD.js";import"./renderedTicksSlice-JT8za5Hk.js";import"./axisSelectors-BLK3CBL0.js";import"./d3-scale-BkYTXwQ3.js";import"./string-B6fdYHAA.js";import"./CartesianChart-wc_TuFln.js";import"./chartDataContext-CBgaHz3-.js";import"./CategoricalChart-g-2efyUa.js";import"./CartesianAxis-DQMh9jmY.js";import"./Layer-o5jG4U6-.js";import"./Text-A8PySNC6.js";import"./DOMUtils-Dx1NP75k.js";import"./Label-TO2FniFg.js";import"./ZIndexLayer-BYFtOnRb.js";import"./types-hvByNsoa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-zxBqnqxW.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
