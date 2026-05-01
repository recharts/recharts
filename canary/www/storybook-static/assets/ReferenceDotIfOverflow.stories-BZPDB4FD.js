import{e}from"./iframe-C5l4DaJO.js";import{R as n}from"./arrayEqualityCheck-fM0600Tt.js";import{C as s}from"./ComposedChart-OPX83XMh.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B7NRw-Pr.js";import{X as f}from"./XAxis-ByPIKQU1.js";import{Y as l}from"./YAxis-Bv8R6otu.js";import{R as h}from"./ReferenceDot-S_OmNXTv.js";import{R as d}from"./RechartsHookInspector-eKcCgGD5.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DwIPpqCH.js";import"./immer-BjHWRAG8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DiBHoctn.js";import"./index-D7g3MY6b.js";import"./hooks-CSO2fo2K.js";import"./axisSelectors-2uaPjYwk.js";import"./d3-scale-BfKzTeEs.js";import"./zIndexSlice-BEG784rk.js";import"./renderedTicksSlice-DaHjC-C2.js";import"./CartesianChart-DaKOKwGw.js";import"./chartDataContext-m4J49DgA.js";import"./CategoricalChart-z5J8qEz7.js";import"./CartesianAxis-DstjLvt8.js";import"./Layer-BQ7ZElOW.js";import"./Text-BNyB8yLu.js";import"./DOMUtils-rl_vKHVV.js";import"./Label-CxCh3fMv.js";import"./ZIndexLayer-DhZlyZCE.js";import"./types-CjQ8Fnwy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DaM5pVyw.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D-KNk5kJ.js";import"./ChartSizeDimensions-MhlbxMFi.js";import"./OffsetShower-BJNZ64do.js";import"./PlotAreaShower-mtOsWYxm.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
