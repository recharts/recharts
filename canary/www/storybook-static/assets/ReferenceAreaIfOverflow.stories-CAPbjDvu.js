import{e}from"./iframe-B1pz1HPh.js";import{g as s}from"./arrayEqualityCheck-CGszzuoD.js";import{C as p}from"./ComposedChart-DL9Bpu5J.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-DO8_5Fqv.js";import{X as l}from"./XAxis-BVzuhrCO.js";import{Y as h}from"./YAxis-CEBdEAk1.js";import{R as d}from"./ReferenceArea-BjxB8JZN.js";import{R as x}from"./RechartsHookInspector-Ba9PVlAC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BMF326Ad.js";import"./immer-D5ZK6-zj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_DMEy6X.js";import"./index-CONuoc65.js";import"./hooks-_Fqb7rcn.js";import"./axisSelectors-rNwEbhlr.js";import"./d3-scale-COb-tvd6.js";import"./zIndexSlice-D685U5bi.js";import"./renderedTicksSlice-CvGe_rQ2.js";import"./CartesianChart-DW92cNBQ.js";import"./chartDataContext-CaM10qH-.js";import"./CategoricalChart-Bv4j4Ty_.js";import"./CartesianAxis-C3QEFHfw.js";import"./Layer-hEcP7t1Y.js";import"./Text-ZPZaoHNl.js";import"./DOMUtils-CC-NDZXa.js";import"./Label-C7IOirY6.js";import"./ZIndexLayer-B25MTFPC.js";import"./types-pm80QyIf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-H0q-eroK.js";import"./useAnimationId-DfZh1iG1.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-rYM0k6kK.js";import"./ChartSizeDimensions-DucsnCfP.js";import"./OffsetShower-C5l1TQVl.js";import"./PlotAreaShower-D97eaCHy.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
