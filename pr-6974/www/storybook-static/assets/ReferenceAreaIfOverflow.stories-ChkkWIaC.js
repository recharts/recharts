import{e}from"./iframe-p_UG0KAI.js";import{R as s}from"./arrayEqualityCheck-RFBrzMpT.js";import{C as p}from"./ComposedChart-CkU6p2-M.js";import{C as c}from"./CartesianGrid-DRqphYMG.js";import{X as f}from"./XAxis-zKsPIOo2.js";import{Y as l}from"./YAxis-DEIZfQQv.js";import{R as h}from"./ReferenceArea-Cgj3WSr9.js";import{R as d}from"./RechartsHookInspector-DC0vak21.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DGxp3uGd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-tEJUk72V.js";import"./hooks-pJuOnib6.js";import"./axisSelectors-PDDTaSk3.js";import"./zIndexSlice-BmIGVCRU.js";import"./CartesianChart-pFigcRMV.js";import"./chartDataContext-CH9fTHhq.js";import"./CategoricalChart-BF8f5Erd.js";import"./CartesianAxis-0r0p8ryQ.js";import"./Layer-JpdK0Yhb.js";import"./Text-D6vjCcrH.js";import"./DOMUtils-CJ8h57fm.js";import"./Label-079Vd-9w.js";import"./ZIndexLayer-CVbpoIAO.js";import"./types-PTj5YW0Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-Bxtfu4l2.js";import"./useAnimationId-CNvXWFg0.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Cmf0vnA4.js";import"./ChartSizeDimensions-IHqJf279.js";import"./OffsetShower-X_nsBUDf.js";import"./PlotAreaShower-BlZaNjOc.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
