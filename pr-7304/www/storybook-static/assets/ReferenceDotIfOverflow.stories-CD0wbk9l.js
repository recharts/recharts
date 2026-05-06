import{e}from"./iframe-C1XJGX3t.js";import{R as n}from"./arrayEqualityCheck-BpeTDNly.js";import{C as s}from"./ComposedChart-lM7HGj1N.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D-GIt9bm.js";import{X as f}from"./XAxis-F1KgXCzm.js";import{Y as l}from"./YAxis-BS-4hm0t.js";import{R as h}from"./ReferenceDot-C4qV1p3P.js";import{R as d}from"./RechartsHookInspector-GAphqeRz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DoOIdNyO.js";import"./immer-DdA_cEFp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Jcx6MylA.js";import"./index-BMIXdyLv.js";import"./hooks-DkyxLj8R.js";import"./axisSelectors-0L8Hl7-Q.js";import"./d3-scale-DfhtN67L.js";import"./zIndexSlice-YaBRx6kS.js";import"./renderedTicksSlice-ROonkpc2.js";import"./CartesianChart-DfX14VSl.js";import"./chartDataContext-COU-oqyF.js";import"./CategoricalChart-B6tCsX7-.js";import"./CartesianAxis-CUdmmf-V.js";import"./Layer-Dk6O6-C9.js";import"./Text-CHym7YYQ.js";import"./DOMUtils-PN4-Wh3o.js";import"./Label-B-UiuQeI.js";import"./ZIndexLayer-f3tuaVy9.js";import"./types-BO06-FVT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-CY448ZsK.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-FCQIpD8D.js";import"./ChartSizeDimensions-B31rA8_p.js";import"./OffsetShower-bDh9UTlF.js";import"./PlotAreaShower-ByyJWnzF.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
