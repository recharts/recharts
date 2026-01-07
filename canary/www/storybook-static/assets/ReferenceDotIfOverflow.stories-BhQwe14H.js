import{e}from"./iframe-2t9JIeSz.js";import{R as n}from"./arrayEqualityCheck-Ne24Ckb0.js";import{C as s}from"./ComposedChart-CKj3iGz6.js";import{C as p}from"./CartesianGrid-BgfG3uYI.js";import{X as c}from"./XAxis-RUsgvceF.js";import{Y as f}from"./YAxis-DOtUVqzp.js";import{R as l}from"./ReferenceDot-B9-LGDLl.js";import{R as h}from"./RechartsHookInspector-l9P1RfFo.js";import{p as d}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CwSOlvvS.js";import"./PolarUtils-Bz6vuuVH.js";import"./RechartsWrapper-C_G63Drq.js";import"./hooks-DDv3wssX.js";import"./axisSelectors-ELUvGx1F.js";import"./zIndexSlice-CQpntV3l.js";import"./CartesianChart-DBgS_hM4.js";import"./chartDataContext-CjpiQJqz.js";import"./CategoricalChart-f3TADWMW.js";import"./CartesianAxis-nSSqg5TL.js";import"./Layer-CYDA86pH.js";import"./Text-QtvFI3Y4.js";import"./DOMUtils-BaCwwoZ6.js";import"./Label-D1Z20PQg.js";import"./ZIndexLayer-B4A1m3pC.js";import"./types-D5gHJUP5.js";import"./Dot-Cgrjcqkr.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DUuuQEHh.js";import"./ChartSizeDimensions-DxYmbnCC.js";import"./OffsetShower-2v-BX8n-.js";import"./PlotAreaShower-D4PK9QSt.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
