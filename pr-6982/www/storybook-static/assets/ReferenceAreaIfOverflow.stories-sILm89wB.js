import{e}from"./iframe-xqabyeMj.js";import{R as s}from"./arrayEqualityCheck-8L6pkBib.js";import{C as p}from"./ComposedChart-0LqFksIP.js";import{C as c}from"./CartesianGrid-BBOEzBe7.js";import{X as f}from"./XAxis-DCnicXeQ.js";import{Y as l}from"./YAxis-DVjLQwct.js";import{R as h}from"./ReferenceArea-BTUhVzWG.js";import{R as d}from"./RechartsHookInspector-CFJUwZ9y.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C4CpinzP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BiqM6SLb.js";import"./hooks-DUKF9BS0.js";import"./axisSelectors-Dsv016Jw.js";import"./zIndexSlice-D0PgK1Qq.js";import"./CartesianChart-YoieVqbI.js";import"./chartDataContext-99M3a9R_.js";import"./CategoricalChart-5qGPlSyR.js";import"./CartesianAxis-DhN_DQtJ.js";import"./Layer-Bh77GRoo.js";import"./Text-CGJ1V4Sp.js";import"./DOMUtils-C4dT54L9.js";import"./Label-BONDDJIo.js";import"./ZIndexLayer-DT_FpcHY.js";import"./types-B39fGcYg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BnLG2ZKC.js";import"./useAnimationId-Cs8mC2Bw.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DIiQC_pi.js";import"./ChartSizeDimensions-gwsg2o-R.js";import"./OffsetShower-BIYWKZux.js";import"./PlotAreaShower-BBgrf_OL.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
