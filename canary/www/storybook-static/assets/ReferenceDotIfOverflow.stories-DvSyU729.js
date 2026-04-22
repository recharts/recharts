import{e}from"./iframe-BoQTj_5t.js";import{R as n}from"./arrayEqualityCheck-h4HF4x_W.js";import{C as s}from"./ComposedChart-CC2uFk3W.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DDawkQoj.js";import{X as f}from"./XAxis-Bw8NdzWJ.js";import{Y as l}from"./YAxis-C-30AhxJ.js";import{R as h}from"./ReferenceDot-3jdBu0uX.js";import{R as d}from"./RechartsHookInspector-LBDhOt6e.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cuq7Ey8b.js";import"./immer-LK4juX8g.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJottPx3.js";import"./index-BJ1s4j4a.js";import"./hooks-CxCFhuYH.js";import"./axisSelectors-vijQZibc.js";import"./d3-scale-Dvc-KAkv.js";import"./zIndexSlice-CJZLZTJ5.js";import"./renderedTicksSlice-js0QwYAy.js";import"./CartesianChart-DLPrj-Eg.js";import"./chartDataContext-BrW6BV92.js";import"./CategoricalChart-CT1UCyKb.js";import"./CartesianAxis-B91cAptM.js";import"./Layer-D7Wm7_P-.js";import"./Text-BztroWIo.js";import"./DOMUtils-DmRwSly6.js";import"./Label-_o7tKgSJ.js";import"./ZIndexLayer-BO_vi_Q6.js";import"./types-DLJuN5NY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-D0_1FxKW.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DDs3_BL6.js";import"./ChartSizeDimensions-BZhCWEAS.js";import"./OffsetShower-C-R2nTqO.js";import"./PlotAreaShower-d-TVNynX.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
