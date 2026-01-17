import{e}from"./iframe-CLIMsGOZ.js";import{R as s}from"./arrayEqualityCheck-CbYFkYA0.js";import{C as p}from"./ComposedChart-CdyWcK0I.js";import{C as c}from"./CartesianGrid-EVwWbDqI.js";import{X as f}from"./XAxis-D0rBjGgi.js";import{Y as l}from"./YAxis-BCedXT45.js";import{R as h}from"./ReferenceArea-Cn2_KaY7.js";import{R as d}from"./RechartsHookInspector-B158dvGO.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-E8mWkwf6.js";import"./PolarUtils-BIAYT_Jm.js";import"./RechartsWrapper-lPK7Cxev.js";import"./hooks-DenE5nGN.js";import"./axisSelectors-GOM-QLi6.js";import"./zIndexSlice-DazYr2Iy.js";import"./CartesianChart-q3xsLMrE.js";import"./chartDataContext-B4asjYes.js";import"./CategoricalChart-DAMhxPe3.js";import"./CartesianAxis-tT7FqCIW.js";import"./Layer-l9L2Sb8o.js";import"./Text-BeJ5iM47.js";import"./DOMUtils-BnxK2rS8.js";import"./Label-QzDxpC8q.js";import"./ZIndexLayer-5xiPbIim.js";import"./types-HWBumAOZ.js";import"./Rectangle-JG6TvpVB.js";import"./useAnimationId-wMl1lWMr.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-8YxDhDRV.js";import"./ChartSizeDimensions-4XerZwXh.js";import"./OffsetShower-CTodD9i0.js";import"./PlotAreaShower-BoV_Aqat.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
