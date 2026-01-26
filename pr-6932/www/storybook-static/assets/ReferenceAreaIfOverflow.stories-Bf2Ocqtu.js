import{e}from"./iframe-CWA75x6f.js";import{R as s}from"./arrayEqualityCheck-BbPHrIiT.js";import{C as p}from"./ComposedChart-CikPPUoS.js";import{C as c}from"./CartesianGrid-BBd7sKWs.js";import{X as f}from"./XAxis-DIb7kM4Q.js";import{Y as l}from"./YAxis--OX2yYy6.js";import{R as h}from"./ReferenceArea-CrmJLS0V.js";import{R as d}from"./RechartsHookInspector-SnjudCfW.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BVW4aoQY.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-wD_Oxn-K.js";import"./hooks-Cs6aCTjY.js";import"./axisSelectors-BTTbx4UP.js";import"./zIndexSlice-BxnMOy2T.js";import"./CartesianChart-yuxJjJQJ.js";import"./chartDataContext-C93txyR3.js";import"./CategoricalChart-CD5Q6zer.js";import"./CartesianAxis-CEnZCSRe.js";import"./Layer-Dyb8NBHJ.js";import"./Text-BJCnsyFb.js";import"./DOMUtils-DvhTIFrn.js";import"./Label-QjXIZu_1.js";import"./ZIndexLayer-C1tQmmyV.js";import"./types-ieTTG77J.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BDQ_yE-B.js";import"./useAnimationId-CiXad0CX.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-rMQlUXxN.js";import"./ChartSizeDimensions-I7n2Q31L.js";import"./OffsetShower-ra48L2at.js";import"./PlotAreaShower-DRjHdJ_p.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
