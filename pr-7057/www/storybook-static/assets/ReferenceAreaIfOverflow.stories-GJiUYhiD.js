import{e}from"./iframe-D4_kWiik.js";import{R as s}from"./arrayEqualityCheck-B3HrMvOJ.js";import{C as p}from"./ComposedChart-Ba8l5vfK.js";import{C as c}from"./CartesianGrid-CxCgcGG8.js";import{X as f}from"./XAxis-DYXsWNnz.js";import{Y as l}from"./YAxis-DgOR7wnS.js";import{R as h}from"./ReferenceArea-C6TN0mo0.js";import{R as d}from"./RechartsHookInspector-CKRvII-U.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DooOk0ZG.js";import"./immer-0ruqGMtg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CPReM4TO.js";import"./index-DoPLCw_p.js";import"./hooks-6jZB3yL2.js";import"./axisSelectors-BmHnRFxW.js";import"./d3-scale-n7QD4WrB.js";import"./zIndexSlice-C4SzCaYD.js";import"./renderedTicksSlice-CIXKwc0U.js";import"./CartesianChart-sfWAfsuQ.js";import"./chartDataContext-jjjOdAEg.js";import"./CategoricalChart-Csqo5QVJ.js";import"./CartesianAxis-Lz5XVqBq.js";import"./Layer-hulGBcYw.js";import"./Text-CoLcKwL4.js";import"./DOMUtils-Dzu75jG0.js";import"./Label-CWL13-o_.js";import"./ZIndexLayer-sXRztW1g.js";import"./types-BCRPpXrS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BGtDGrdk.js";import"./useAnimationId-Dur5dtsq.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Dx5VrxvW.js";import"./ChartSizeDimensions-DSAP6Fpc.js";import"./OffsetShower-DTklH8sW.js";import"./PlotAreaShower-Cqlm22k_.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
