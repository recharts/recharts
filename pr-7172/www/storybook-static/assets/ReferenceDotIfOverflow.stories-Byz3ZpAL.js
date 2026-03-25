import{e}from"./iframe-E-WC41kJ.js";import{R as n}from"./arrayEqualityCheck-BqUzcRut.js";import{C as s}from"./ComposedChart-Cj1Yh8a_.js";import{C as p}from"./CartesianGrid-D9oeCwlR.js";import{X as c}from"./XAxis-BaFlydz6.js";import{Y as f}from"./YAxis-CDciY-WX.js";import{R as l}from"./ReferenceDot-BKo6YmUV.js";import{R as h}from"./RechartsHookInspector-DKk-8ET5.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZw5DbVo.js";import"./immer-B2AHHn8G.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BIczAnOb.js";import"./index-DZtbJ9Ut.js";import"./hooks-DQ5ZrLCC.js";import"./axisSelectors-BVUql3J4.js";import"./d3-scale-CSKw2yvo.js";import"./zIndexSlice-DkBOVcrD.js";import"./renderedTicksSlice-BqXsAF6I.js";import"./CartesianChart-B56zTdxs.js";import"./chartDataContext-CK93mzcE.js";import"./CategoricalChart-aHZNXhsF.js";import"./CartesianAxis-BOHEbUwD.js";import"./Layer-DOBdv7Ak.js";import"./Text-DTbX-dn1.js";import"./DOMUtils-CpAJnaA6.js";import"./Label-C5w0zLuo.js";import"./ZIndexLayer-DVYJjRDY.js";import"./types-CSLfd7k_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-hyCNPvjn.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DcwfkASu.js";import"./ChartSizeDimensions-myNJ6iDJ.js";import"./OffsetShower-h4QuBQIC.js";import"./PlotAreaShower-ByNkN2fY.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
