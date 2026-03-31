import{e}from"./iframe-Ch1Isql8.js";import{R as n}from"./arrayEqualityCheck-BCEbDsDx.js";import{C as s}from"./ComposedChart-BG01JFWy.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CftF3wqv.js";import{X as f}from"./XAxis-BKww8jIv.js";import{Y as l}from"./YAxis-BZ1lWBvu.js";import{R as h}from"./ReferenceDot-DoOEGWM1.js";import{R as d}from"./RechartsHookInspector-DbN8VMTu.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C2WRALEr.js";import"./immer-BTgrVrx0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BHlnvpBC.js";import"./index-BQodkfcp.js";import"./hooks-DIQ-JHwY.js";import"./axisSelectors-0Ej_8yTo.js";import"./d3-scale-CrbEySHr.js";import"./zIndexSlice-CfYpWTyk.js";import"./renderedTicksSlice-B_3Gl1Hk.js";import"./CartesianChart-CM5Qb5gP.js";import"./chartDataContext-jCxwHdJc.js";import"./CategoricalChart-DFR8bKN5.js";import"./CartesianAxis-BTQibmSQ.js";import"./Layer-BO4GuAqP.js";import"./Text-BVN_POYl.js";import"./DOMUtils-10gf_B-M.js";import"./Label-DD8AaqpA.js";import"./ZIndexLayer-DjVbUmgd.js";import"./types-BJb3G4uR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BiNuTUfQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B9MqbPA_.js";import"./ChartSizeDimensions-Xxd3TXQk.js";import"./OffsetShower-CEfGPMuj.js";import"./PlotAreaShower-BXMcaFZq.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
