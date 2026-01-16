import{e}from"./iframe-Daa7gVLq.js";import{R as s}from"./arrayEqualityCheck-DHiMbEr4.js";import{C as p}from"./ComposedChart-CYLKALlp.js";import{C as c}from"./CartesianGrid-75effBkS.js";import{X as f}from"./XAxis-9jKN-_DJ.js";import{Y as l}from"./YAxis-BnejCEyC.js";import{R as h}from"./ReferenceArea-DV4_O4qZ.js";import{R as d}from"./RechartsHookInspector-5CuZ5Ttw.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CqeH2zdA.js";import"./PolarUtils-BgeQKPj6.js";import"./RechartsWrapper-DHnB2RYt.js";import"./hooks-DRpX0LFg.js";import"./axisSelectors-BSy2Ei6Q.js";import"./zIndexSlice-DRH3Lnc3.js";import"./CartesianChart-D3r6q5qA.js";import"./chartDataContext-C9HoDYmp.js";import"./CategoricalChart-B6hlTMds.js";import"./CartesianAxis-BVtnbRV6.js";import"./Layer-CGvX8Aev.js";import"./Text-WZTWBxCY.js";import"./DOMUtils-CqCd1ysC.js";import"./Label-Czm8SDG7.js";import"./ZIndexLayer-BpC0cLWO.js";import"./types-C4ZPTuLr.js";import"./Rectangle-DdCOnFsR.js";import"./useAnimationId-ahZSEp8i.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-hu5OYDiu.js";import"./ChartSizeDimensions-b43WqGvd.js";import"./OffsetShower-11IB6J7X.js";import"./PlotAreaShower-B0b4w-E6.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
