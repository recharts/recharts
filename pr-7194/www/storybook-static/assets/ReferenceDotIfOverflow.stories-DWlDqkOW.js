import{e}from"./iframe-C4ae8FtK.js";import{R as n}from"./arrayEqualityCheck-lfrA5Bq2.js";import{C as s}from"./ComposedChart-ZcgyiIbi.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-ANQ7z1Ly.js";import{X as f}from"./XAxis-D-4HgMe7.js";import{Y as l}from"./YAxis-BwAcKPAC.js";import{R as h}from"./ReferenceDot-R3qWhGhi.js";import{R as d}from"./RechartsHookInspector-BUlLV83W.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CeAK8DLj.js";import"./immer-JFltD55q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-tTigpQ5n.js";import"./index-BAPPw7tY.js";import"./hooks-CXUA9yEr.js";import"./axisSelectors-DobMcDEZ.js";import"./d3-scale-Bqdags1w.js";import"./zIndexSlice-CgotL-NA.js";import"./renderedTicksSlice-Cj9ny3Ly.js";import"./CartesianChart-DasFBtUo.js";import"./chartDataContext-DPN8Z90E.js";import"./CategoricalChart-D917O6MX.js";import"./CartesianAxis-2J4hk8WJ.js";import"./Layer-N4FzZ7QF.js";import"./Text-CIi3nsya.js";import"./DOMUtils-Ds2y4XHZ.js";import"./Label-DBvzFRUp.js";import"./ZIndexLayer-Cm0MOpfC.js";import"./types-C9HDIMgp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-RR5mO9JR.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DYmzarGE.js";import"./ChartSizeDimensions-DrJNk4HA.js";import"./OffsetShower-CscpLTCd.js";import"./PlotAreaShower-LJKqGtZ8.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
