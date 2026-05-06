import{e}from"./iframe-CB3xDsCu.js";import{R as n}from"./arrayEqualityCheck-BR3R0AIc.js";import{C as s}from"./ComposedChart-CS2PtOXx.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-LO_JUYCi.js";import{X as f}from"./XAxis-DYQUx0ZR.js";import{Y as l}from"./YAxis-mQ0C3LQl.js";import{R as h}from"./ReferenceDot-Dv1AxSyY.js";import{R as d}from"./RechartsHookInspector-YR9f7y3a.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D2yjNbgT.js";import"./immer-DVlX7gWW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DzH2iSQ0.js";import"./index-dzLlUSBq.js";import"./hooks-DFjGEA5J.js";import"./axisSelectors-BD2wGdYf.js";import"./d3-scale-DBjacL5V.js";import"./zIndexSlice-BDUpIrxI.js";import"./renderedTicksSlice-DTGPDQhB.js";import"./CartesianChart-Cn7O9-Sb.js";import"./chartDataContext-BOo6jc00.js";import"./CategoricalChart-D8l_W_kj.js";import"./CartesianAxis-DkDylqpL.js";import"./Layer-Ch9gTjDA.js";import"./Text-UtkJ3ap3.js";import"./DOMUtils-D031Yf3A.js";import"./Label-Br8zkPUL.js";import"./ZIndexLayer-Cz6Wxl3N.js";import"./types-DISef9EU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DjIPoMxO.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DOjZWx7H.js";import"./ChartSizeDimensions-B9c3BCsk.js";import"./OffsetShower-Cd2a_SDI.js";import"./PlotAreaShower-DozSiwxV.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
