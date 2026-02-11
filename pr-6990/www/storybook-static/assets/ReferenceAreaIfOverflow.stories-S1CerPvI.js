import{e}from"./iframe-uc6dFw_p.js";import{R as s}from"./arrayEqualityCheck-CQn2kQOi.js";import{C as p}from"./ComposedChart-CRYzJVTL.js";import{C as c}from"./CartesianGrid-DL0uandd.js";import{X as f}from"./XAxis-bu2lwvBT.js";import{Y as l}from"./YAxis-BSExt7in.js";import{R as h}from"./ReferenceArea-BnNKHMKb.js";import{R as d}from"./RechartsHookInspector-IvFhBGHX.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-kGpremEA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DhOLU858.js";import"./hooks-vCWItnff.js";import"./axisSelectors-B8_chuAi.js";import"./zIndexSlice-WGd4Bakr.js";import"./renderedTicksSlice-nuZito-G.js";import"./CartesianChart-CgnwnU-y.js";import"./chartDataContext-Dmpd0AQd.js";import"./CategoricalChart-BjqK4Uyg.js";import"./CartesianAxis-B3Lcnjmt.js";import"./Layer-DswXiCbz.js";import"./Text-Bqz-nWjx.js";import"./DOMUtils-DBQIyNfT.js";import"./Label-D0b7Dnqv.js";import"./ZIndexLayer-CxICY6ph.js";import"./types-BngWNVP1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-B0I4wQZ7.js";import"./useAnimationId-BjF_cXy3.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C4cmB5lh.js";import"./ChartSizeDimensions-DgaeT0Q8.js";import"./OffsetShower-CN5uyxGG.js";import"./PlotAreaShower-rJfWFAXI.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
