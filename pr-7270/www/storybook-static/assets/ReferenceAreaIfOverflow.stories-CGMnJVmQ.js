import{e}from"./iframe-BF30cewz.js";import{R as s}from"./arrayEqualityCheck-54E-EMHV.js";import{C as p}from"./ComposedChart-vR6M8Csb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BN1BW5YM.js";import{X as l}from"./XAxis-R3SRHTpu.js";import{Y as h}from"./YAxis-COwWoIRq.js";import{R as d}from"./ReferenceArea-Dq0htgKR.js";import{R as x}from"./RechartsHookInspector-B0E9dfMt.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CfzAmxrO.js";import"./immer-1Y6b4ABg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ds6-czPk.js";import"./index-C4aFfAFk.js";import"./hooks-DBaONgSL.js";import"./axisSelectors-BbIpa25b.js";import"./d3-scale-BQcoNVts.js";import"./zIndexSlice-Dzpaa8RG.js";import"./renderedTicksSlice-DaQzOTaA.js";import"./CartesianChart-Cib6BDKJ.js";import"./chartDataContext-C-ltUYxq.js";import"./CategoricalChart-Ax6WUToq.js";import"./CartesianAxis-CRTXwVx1.js";import"./Layer-1B0B10df.js";import"./Text-Bj9a0rsl.js";import"./DOMUtils-CfR-oYDo.js";import"./Label-CqAF8SIT.js";import"./ZIndexLayer-Cm42983z.js";import"./types-BtUrEkv_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-Tp-Mj0iL.js";import"./useAnimationId-CdSd8RaE.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Cmlct8zH.js";import"./ChartSizeDimensions-DqRU3Tup.js";import"./OffsetShower-Orj9RHn3.js";import"./PlotAreaShower-BaW8-cBL.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
