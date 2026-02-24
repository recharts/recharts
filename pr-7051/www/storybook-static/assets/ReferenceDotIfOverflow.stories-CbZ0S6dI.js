import{e}from"./iframe-DTgyoVvk.js";import{R as n}from"./arrayEqualityCheck-EHbEP26L.js";import{C as s}from"./ComposedChart-DxsdSTLV.js";import{C as p}from"./CartesianGrid-BOtFk4fE.js";import{X as c}from"./XAxis-BkL5cMjG.js";import{Y as f}from"./YAxis-CeCrGO4m.js";import{R as l}from"./ReferenceDot-BZUkrXLB.js";import{R as h}from"./RechartsHookInspector-CEM_bNOG.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D6qERWpv.js";import"./immer-Cali6Ur_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Chfcl0hS.js";import"./index-BZ07V7b0.js";import"./hooks-C2ewgjKA.js";import"./axisSelectors-etAOI9l8.js";import"./d3-scale-OH59Lrba.js";import"./zIndexSlice-C5hUHulT.js";import"./renderedTicksSlice-lIBtZyXl.js";import"./CartesianChart-3k35313H.js";import"./chartDataContext-DEXCwpe8.js";import"./CategoricalChart-tWQ6qvk8.js";import"./CartesianAxis-BkWnH6i3.js";import"./Layer-CN_vGRpI.js";import"./Text-DzAJvHlo.js";import"./DOMUtils-BzN38qwO.js";import"./Label-Ceoi0MO2.js";import"./ZIndexLayer-BR0xXhbH.js";import"./types-CFHwNx79.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DzhxTZg1.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BSHSP00B.js";import"./ChartSizeDimensions-DEWYFyG1.js";import"./OffsetShower-DkHEZ74E.js";import"./PlotAreaShower-VzN6bTnW.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
