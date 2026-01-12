import{e}from"./iframe-CzId_vMR.js";import{R as n}from"./arrayEqualityCheck-DSdyV2X5.js";import{C as s}from"./ComposedChart-CMv1ks2h.js";import{C as p}from"./CartesianGrid-B6tHMBdj.js";import{X as c}from"./XAxis-CekBcBSy.js";import{Y as f}from"./YAxis-D1MjdOqy.js";import{R as l}from"./ReferenceDot-Chk0m5HF.js";import{R as h}from"./RechartsHookInspector-Co5fk2RP.js";import{p as d}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CjfObxG9.js";import"./PolarUtils-pvs2WqdL.js";import"./RechartsWrapper-CN4xlQ0u.js";import"./hooks-C9JnWS43.js";import"./axisSelectors-OGsi9SPN.js";import"./zIndexSlice-BwlmGQPJ.js";import"./CartesianChart-Cp_RTL_u.js";import"./chartDataContext-bc8aYpmC.js";import"./CategoricalChart-Fsg15egP.js";import"./CartesianAxis-DwsgLCPL.js";import"./Layer-Cd1nD4kQ.js";import"./Text-DyrIV_fF.js";import"./DOMUtils-DbOiFokS.js";import"./Label-C0ElDb7Z.js";import"./ZIndexLayer-C_SxWHYm.js";import"./types-DjXw3wTJ.js";import"./Dot-BamGkrTG.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CS_I0C1E.js";import"./ChartSizeDimensions-DGZWUdPh.js";import"./OffsetShower-b12JY01P.js";import"./PlotAreaShower-BQSWUX-t.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
