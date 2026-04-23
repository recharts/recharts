import{e}from"./iframe-CUdKgdkG.js";import{R as s}from"./arrayEqualityCheck-BSmSVrdu.js";import{C as p}from"./ComposedChart-B_srWo8L.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CuZ2qMB_.js";import{X as l}from"./XAxis-mAd7Kpdc.js";import{Y as h}from"./YAxis-Na-JXGDj.js";import{R as d}from"./ReferenceArea-Cf8MGs2U.js";import{R as x}from"./RechartsHookInspector-Cq0IOlAH.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-FNj3XcfL.js";import"./immer-Cj2VbGf6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cw3qTPi-.js";import"./index-CFMZ10nV.js";import"./hooks-CQ9pmujM.js";import"./axisSelectors-B4cxlRHn.js";import"./d3-scale-Cybfxil2.js";import"./zIndexSlice-R-FfD4BY.js";import"./renderedTicksSlice-CKVu5O47.js";import"./CartesianChart-2AvxhW1F.js";import"./chartDataContext-C6IOAwjY.js";import"./CategoricalChart-Cyn18alE.js";import"./CartesianAxis-IOZxWSIl.js";import"./Layer-DmKN-F8X.js";import"./Text-DGg_g2qE.js";import"./DOMUtils-BpuSrLFt.js";import"./Label-DglRGLXy.js";import"./ZIndexLayer-CDgenCRH.js";import"./types-Du7cRNSr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BfZJm5g2.js";import"./useAnimationId-AqfbREG9.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D6AtQ2XN.js";import"./ChartSizeDimensions-BX1J8uWf.js";import"./OffsetShower-Ba03E4d5.js";import"./PlotAreaShower-CBo6UyYv.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
