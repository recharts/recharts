import{e}from"./iframe-CQJPfyRy.js";import{R as s}from"./arrayEqualityCheck-Do-enXm5.js";import{C as p}from"./ComposedChart-CSl27s_R.js";import{C as c}from"./CartesianGrid-2VhS-Z6i.js";import{X as f}from"./XAxis-C55dSO1i.js";import{Y as l}from"./YAxis-zax745HO.js";import{R as h}from"./ReferenceArea-xs9Zsn3U.js";import{R as d}from"./RechartsHookInspector-BPipPUFl.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-0riu8XRb.js";import"./immer-DHWyBJal.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-7Czoz0bu.js";import"./index-asPVD2vd.js";import"./hooks-Br8DVu9M.js";import"./axisSelectors-gm8fWGo4.js";import"./d3-scale-0hh8p2_S.js";import"./zIndexSlice-BiBD01er.js";import"./renderedTicksSlice-DTP68QVC.js";import"./CartesianChart-CPXNCGau.js";import"./chartDataContext-DJi5hdYR.js";import"./CategoricalChart-CEJ--eNG.js";import"./CartesianAxis-DQSl9zNs.js";import"./Layer-BR9af65P.js";import"./Text-DUnDznQK.js";import"./DOMUtils-D2gdOsD8.js";import"./Label-BC7yp0Hg.js";import"./ZIndexLayer-CPRNxtdQ.js";import"./types-C_DlCak5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-Dj9r1Fs-.js";import"./useAnimationId-CEC-e8Az.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Dy-O-5Cx.js";import"./ChartSizeDimensions-LXLx4zNb.js";import"./OffsetShower-DO50Xpn-.js";import"./PlotAreaShower-5vmtZ6RI.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
