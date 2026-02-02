import{e}from"./iframe-CehQ8xFj.js";import{R as n}from"./arrayEqualityCheck-CJf3kznu.js";import{C as s}from"./ComposedChart-Db5HmFmR.js";import{C as p}from"./CartesianGrid-BqtWDT0T.js";import{X as c}from"./XAxis-Dibf-8ej.js";import{Y as f}from"./YAxis-D-v27uKG.js";import{R as l}from"./ReferenceDot-BHPe7DM7.js";import{R as h}from"./RechartsHookInspector-C9Dv8rR_.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C1y00WFc.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DUmIU6Xd.js";import"./hooks-CfryKUEV.js";import"./axisSelectors-BMvdINl-.js";import"./zIndexSlice-39s27tLx.js";import"./CartesianChart-B0Z5fEtd.js";import"./chartDataContext-BU4Ti452.js";import"./CategoricalChart-BJ_PCHx8.js";import"./CartesianAxis-CZCa0md7.js";import"./Layer-6nj2T2Rl.js";import"./Text-BXNpWGIz.js";import"./DOMUtils-B5Ex3wvu.js";import"./Label-Dw6m4C0Z.js";import"./ZIndexLayer-DeWQbK55.js";import"./types-CYKcJHFL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BD7d-X5L.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-jUFHLVIb.js";import"./ChartSizeDimensions-CfEeTzES.js";import"./OffsetShower-BbVpqDQS.js";import"./PlotAreaShower-BZ3neXdt.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
