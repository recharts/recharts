import{e}from"./iframe-Cpa_K2wH.js";import{g as n}from"./arrayEqualityCheck-B3CGbERi.js";import{C as s}from"./ComposedChart-Gg-TcJTy.js";import{p}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-BlvjnmIK.js";import{X as f}from"./XAxis-BzN0sbb6.js";import{Y as l}from"./YAxis-D01H3xLK.js";import{R as h}from"./ReferenceDot-D9P40Pql.js";import{R as d}from"./RechartsHookInspector-Bqt-aS6w.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CjUJiL9-.js";import"./immer-DMfm46iJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D0afUUed.js";import"./index-d0_kz5ki.js";import"./hooks-B0YV-Gb0.js";import"./axisSelectors-Cmllf_me.js";import"./d3-scale-Bfg_RKT9.js";import"./zIndexSlice-BHc5vdfp.js";import"./renderedTicksSlice-kARXbS5M.js";import"./CartesianChart-Oxo-XTmW.js";import"./chartDataContext-DWc0FZ1G.js";import"./CategoricalChart-U85gevCj.js";import"./CartesianAxis-BYutAp1h.js";import"./Layer-C28Vj2nU.js";import"./Text-DwR88wHZ.js";import"./DOMUtils-BkGoz7XV.js";import"./Label-9gVLBIOF.js";import"./ZIndexLayer-CVL2PXNl.js";import"./types-BYysGBoP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BhWE0LKt.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-fBY_53TJ.js";import"./ChartSizeDimensions-_3CJ7Z39.js";import"./OffsetShower-BpeLegDD.js";import"./PlotAreaShower-LKM4gBGb.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
