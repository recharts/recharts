import{e}from"./iframe-Db5WrE36.js";import{R as s}from"./arrayEqualityCheck-C3JobR2_.js";import{C as p}from"./ComposedChart-CmGmKOjn.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DpMLcdnA.js";import{X as l}from"./XAxis-BTNXWmYe.js";import{Y as h}from"./YAxis-DlOThTCh.js";import{R as d}from"./ReferenceArea-CvuCMh7A.js";import{R as x}from"./RechartsHookInspector-CFI1frAU.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DvMxgvCh.js";import"./immer-CAzEWOIE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DDDerXEh.js";import"./index-BJzZql5p.js";import"./hooks-lxXboCZm.js";import"./axisSelectors-CDotANNU.js";import"./d3-scale-FiYYf1nP.js";import"./zIndexSlice-DHcQINX8.js";import"./renderedTicksSlice-CypQTB_Z.js";import"./CartesianChart-5yWhuVSR.js";import"./chartDataContext-DCp_Y5EI.js";import"./CategoricalChart-K1l3oikN.js";import"./CartesianAxis-D6uDjXla.js";import"./Layer-BG3cqZBo.js";import"./Text-B5PL99FR.js";import"./DOMUtils-C6TuwyJI.js";import"./Label-CpNI3apL.js";import"./ZIndexLayer-xgBtkb6c.js";import"./types-CFSpK2OQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BGyhLsa6.js";import"./useAnimationId-DKHJcbO_.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B08ilTo6.js";import"./ChartSizeDimensions-CXOsnzEA.js";import"./OffsetShower-DEnIV-uj.js";import"./PlotAreaShower-CqTq0MkW.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
