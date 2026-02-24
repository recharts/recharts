import{e}from"./iframe-zwlZ9sO1.js";import{R as n}from"./arrayEqualityCheck-CJjag0zJ.js";import{C as s}from"./ComposedChart-B-ZDBPB-.js";import{C as p}from"./CartesianGrid-B642OziP.js";import{X as c}from"./XAxis-CnAuA4rg.js";import{Y as f}from"./YAxis-Dth2njTV.js";import{R as l}from"./ReferenceDot-BlBACz8n.js";import{R as h}from"./RechartsHookInspector-DHSpqDma.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BQQGnYzX.js";import"./immer-BiA4uk1x.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C3nGIabu.js";import"./index-eUA2bMWQ.js";import"./hooks-DVdpADFp.js";import"./axisSelectors-B00kI0GG.js";import"./d3-scale-5RI03Ty3.js";import"./zIndexSlice-oDtJWVOP.js";import"./renderedTicksSlice-DgjXgpF0.js";import"./CartesianChart-DC-pRf_l.js";import"./chartDataContext-7-VMSKg2.js";import"./CategoricalChart-BEqoCUOW.js";import"./CartesianAxis--bPf-qQg.js";import"./Layer-BoZ3FYfy.js";import"./Text-tkFuu0zo.js";import"./DOMUtils-p8GgN5aM.js";import"./Label-IHkKI2op.js";import"./ZIndexLayer-DApcsQWW.js";import"./types-B9pmE4ka.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-D8W5fYzP.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CfDL0XYd.js";import"./ChartSizeDimensions-DUwgzJDd.js";import"./OffsetShower-CZf4Y8fK.js";import"./PlotAreaShower-B03de4RT.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
