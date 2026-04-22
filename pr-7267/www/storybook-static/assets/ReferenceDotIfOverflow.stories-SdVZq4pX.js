import{e}from"./iframe-CIRDBmnY.js";import{R as n}from"./arrayEqualityCheck-Ccl-pv9u.js";import{C as s}from"./ComposedChart-D2raJxM1.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CXFgbD5_.js";import{X as f}from"./XAxis-Bxd0aLo-.js";import{Y as l}from"./YAxis-Cm87CNGN.js";import{R as h}from"./ReferenceDot-CKbs1R-g.js";import{R as d}from"./RechartsHookInspector-CW5oWR2W.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-WvlII-Nx.js";import"./immer-CEyiSkJ_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-G6A0M6aO.js";import"./index-BtQYyCmS.js";import"./hooks-CXRZ7L0i.js";import"./axisSelectors-BG6ANmCy.js";import"./d3-scale-DeHMkDWI.js";import"./zIndexSlice-Dncpv5eL.js";import"./renderedTicksSlice-D7QGUU6q.js";import"./CartesianChart-DU23w57v.js";import"./chartDataContext-CjureaJk.js";import"./CategoricalChart-0dU2cdKG.js";import"./CartesianAxis-DDkNiZWI.js";import"./Layer-Ba8IePkn.js";import"./Text-DFNv1G75.js";import"./DOMUtils-U3UN3Upo.js";import"./Label-DBOJ1SQQ.js";import"./ZIndexLayer-BEbEcElf.js";import"./types-Tac8hqr1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-qDjeeFl4.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CZZFGVCv.js";import"./ChartSizeDimensions-DXL_JkvM.js";import"./OffsetShower-BD7Cp3wL.js";import"./PlotAreaShower-lKDhtFbm.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
