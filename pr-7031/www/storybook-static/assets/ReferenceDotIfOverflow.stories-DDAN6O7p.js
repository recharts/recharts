import{e}from"./iframe-d3qCsCxk.js";import{R as n}from"./arrayEqualityCheck-BSeezrw4.js";import{C as s}from"./ComposedChart-D8dIpZCb.js";import{C as p}from"./CartesianGrid-DEXLWDCT.js";import{X as c}from"./XAxis-BmRFblia.js";import{Y as f}from"./YAxis-BYMuo7gN.js";import{R as l}from"./ReferenceDot-Bj9Cdki9.js";import{R as h}from"./RechartsHookInspector-ILLh7APk.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BEotyltG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3juZhR0.js";import"./hooks-BtAJA35U.js";import"./axisSelectors-dcntBxT_.js";import"./zIndexSlice-umaRj-LL.js";import"./renderedTicksSlice--Joe2iCZ.js";import"./CartesianChart-BmufPzla.js";import"./chartDataContext-DW0jkWxK.js";import"./CategoricalChart-0siU3dfK.js";import"./CartesianAxis-CyPlzw3T.js";import"./Layer-CUjYvDWI.js";import"./Text-Bh5Zv3nu.js";import"./DOMUtils-ClX6mTKm.js";import"./Label-oam-p3Cf.js";import"./ZIndexLayer-D3LUzJCs.js";import"./types-B3TZRrDh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BxRgbJKp.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DStWVrKL.js";import"./ChartSizeDimensions-B6KXJ3cA.js";import"./OffsetShower-BqFAEUk2.js";import"./PlotAreaShower-CwAbREDh.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
