import{e}from"./iframe-CT4QuQ5L.js";import{R as s}from"./arrayEqualityCheck-CUEtHgfA.js";import{C as p}from"./ComposedChart-DZSwiMb4.js";import{C as c}from"./CartesianGrid-B5eEZuRf.js";import{X as f}from"./XAxis-DHcCUjsJ.js";import{Y as l}from"./YAxis-BZSCjBeJ.js";import{R as h}from"./ReferenceArea-flSPGAYv.js";import{R as d}from"./RechartsHookInspector-lcTlhUAW.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CTWHIHtK.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-Dw0rEgTJ.js";import"./hooks-CidIT9Ht.js";import"./axisSelectors-DlMKUcSY.js";import"./zIndexSlice-BbZ3gLFC.js";import"./CartesianChart-ChOeo1co.js";import"./chartDataContext-BO8jZHln.js";import"./CategoricalChart-DmUQY6Sd.js";import"./CartesianAxis-ByfjT7H_.js";import"./Layer-BIxjtyeO.js";import"./Text-ZzNZJtBS.js";import"./DOMUtils-CDXEyiOj.js";import"./Label-CFlrJOC9.js";import"./ZIndexLayer-B4whtcRw.js";import"./types-CGMRlxY8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BJlDY3Tg.js";import"./useAnimationId-ByA7rgvy.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DDx2nU6r.js";import"./ChartSizeDimensions-71uSM08s.js";import"./OffsetShower-bHCqATCI.js";import"./PlotAreaShower-DYHCw4lK.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
