import{e}from"./iframe-DuNEY226.js";import{R as n}from"./arrayEqualityCheck-DDMqu3f1.js";import{C as s}from"./ComposedChart-DmWeIfHx.js";import{C as p}from"./CartesianGrid-BNTlTqSI.js";import{X as c}from"./XAxis-DdwDbuRS.js";import{Y as f}from"./YAxis-QXoWtC2j.js";import{R as l}from"./ReferenceDot-DEbAHjm2.js";import{R as h}from"./RechartsHookInspector-CfHmmsr6.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C-2Byojj.js";import"./immer-BVAwiqUd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CEqZKjHf.js";import"./index-D7ubYLAP.js";import"./hooks-DB_oXYxy.js";import"./axisSelectors-DAR8t-c9.js";import"./d3-scale-CgGCPdr7.js";import"./zIndexSlice-CRDA7WbI.js";import"./renderedTicksSlice-BQwvsrpL.js";import"./CartesianChart-v-wDegKF.js";import"./chartDataContext-D8l2QHPQ.js";import"./CategoricalChart-C_g1w3w0.js";import"./CartesianAxis-BtkWVQbW.js";import"./Layer-D_n9WiuW.js";import"./Text-Dc6VXTKK.js";import"./DOMUtils-C-AY4UId.js";import"./Label-DKCGVJ9i.js";import"./ZIndexLayer-CZdiz2vD.js";import"./types-D9KOomKd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-Cr0aUliX.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CE1COEz0.js";import"./ChartSizeDimensions-CTe7q-3t.js";import"./OffsetShower-CpVXhOAG.js";import"./PlotAreaShower-CXvEQ9OL.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
