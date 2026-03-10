import{e}from"./iframe-DHjTBwa0.js";import{R as s}from"./arrayEqualityCheck-CGXWmECa.js";import{C as p}from"./ComposedChart-CoHd_5kA.js";import{C as c}from"./CartesianGrid-Dn9Sz7KD.js";import{X as f}from"./XAxis-DzpQW1k6.js";import{Y as l}from"./YAxis-CHgoMFSJ.js";import{R as h}from"./ReferenceArea-ppz9eQaE.js";import{R as d}from"./RechartsHookInspector-D6nhtH8K.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DXy8j8LY.js";import"./immer-BrXT1eSW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DyX2fUcK.js";import"./index-BPCnijYz.js";import"./hooks-BI4eFA2i.js";import"./axisSelectors-DhPURh7h.js";import"./d3-scale-BUA-RFqD.js";import"./zIndexSlice-DqtSbfBR.js";import"./renderedTicksSlice-DkHSSwGo.js";import"./CartesianChart-Dm1WBf-W.js";import"./chartDataContext-j2R-tyUk.js";import"./CategoricalChart-ByXlXeCM.js";import"./CartesianAxis-D9ZJukHE.js";import"./Layer-CoFjoalk.js";import"./Text-BWLl8TIe.js";import"./DOMUtils-DL_tkNCI.js";import"./Label-DMGH-XEw.js";import"./ZIndexLayer-CWpbiknC.js";import"./types-B-PC6Emj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-Dj02ipMQ.js";import"./useAnimationId-C2i6VIVJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CGH8qd9t.js";import"./ChartSizeDimensions-xCJQuae6.js";import"./OffsetShower-DuOTKuKX.js";import"./PlotAreaShower-H4JN1u5I.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
