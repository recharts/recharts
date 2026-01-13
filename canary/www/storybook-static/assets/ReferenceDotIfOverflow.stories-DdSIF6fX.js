import{e}from"./iframe-BqhCRw8_.js";import{R as n}from"./arrayEqualityCheck-C0e5XGku.js";import{C as s}from"./ComposedChart-XGDLsI_Y.js";import{C as p}from"./CartesianGrid-_rSYIU2z.js";import{X as c}from"./XAxis-B6heQTMm.js";import{Y as f}from"./YAxis--q0qF4k-.js";import{R as l}from"./ReferenceDot-B78XNGJv.js";import{R as h}from"./RechartsHookInspector-D3QTgPO3.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Ayaicgzr.js";import"./PolarUtils-DQrS6uhh.js";import"./RechartsWrapper-CKbioI8N.js";import"./hooks-9X7mYxl9.js";import"./axisSelectors-HrCd8mj3.js";import"./zIndexSlice-DIIl2FeU.js";import"./CartesianChart-FjeQ0j5o.js";import"./chartDataContext-CS827bLR.js";import"./CategoricalChart-DGivdYUS.js";import"./CartesianAxis-D53Jp3Xe.js";import"./Layer-STOxxKM-.js";import"./Text-BS3Ermk4.js";import"./DOMUtils-Dw5i-fzQ.js";import"./Label-DtQEJ7YC.js";import"./ZIndexLayer-ZQy-DVxw.js";import"./types-DSzwAYYq.js";import"./Dot-8ifXwx0k.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BUjJ7HF5.js";import"./ChartSizeDimensions-DGTJjry1.js";import"./OffsetShower-HUtE30KP.js";import"./PlotAreaShower-C7l9vpaF.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const V=["IfOverflow"];export{t as IfOverflow,V as __namedExportsOrder,Q as default};
