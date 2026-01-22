import{e}from"./iframe-qFyPNvi_.js";import{R as s}from"./arrayEqualityCheck-BR44KOOG.js";import{C as p}from"./ComposedChart-ANDNIb_y.js";import{C as c}from"./CartesianGrid-8Lbkprhq.js";import{X as f}from"./XAxis-B5Ueyu7e.js";import{Y as l}from"./YAxis-B1s9pj0r.js";import{R as h}from"./ReferenceArea-C7cioPCe.js";import{R as d}from"./RechartsHookInspector-Ce3qLbRt.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CiVGu3Bt.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DM4_tnRN.js";import"./hooks-aCDbeiPX.js";import"./axisSelectors-De9afnke.js";import"./zIndexSlice-yXhSr7sB.js";import"./CartesianChart-DplX7WDC.js";import"./chartDataContext-byZU3wA9.js";import"./CategoricalChart-Bg7JUw0R.js";import"./CartesianAxis-BrVa5ao-.js";import"./Layer-B9wfXqHf.js";import"./Text-icE1XF3t.js";import"./DOMUtils-EYrslgiu.js";import"./Label-CaGvlJzM.js";import"./ZIndexLayer-B3rHEP_M.js";import"./types-BhYGGyZO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-C4WR-Qi1.js";import"./useAnimationId-CBoODHVq.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CxM5gQIi.js";import"./ChartSizeDimensions-QfvN_Ah7.js";import"./OffsetShower-BUMougLk.js";import"./PlotAreaShower-CjC9fWZt.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
