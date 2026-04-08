import{e}from"./iframe-GFfTjQoK.js";import{R as s}from"./arrayEqualityCheck-rTBxpMje.js";import{C as p}from"./ComposedChart-D9Sx-1p6.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-D6MTnGUA.js";import{X as l}from"./XAxis-DKH_cPy1.js";import{Y as h}from"./YAxis-BZdMUrT_.js";import{R as d}from"./ReferenceArea-C032RuNo.js";import{R as x}from"./RechartsHookInspector-B-bvN_Hp.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BjWq3AFN.js";import"./immer-DuJeroaq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0HFJBeI.js";import"./index-DXddhZW0.js";import"./hooks-CqeOQ7eW.js";import"./axisSelectors-L84MoTjP.js";import"./d3-scale-BPfRQFr_.js";import"./zIndexSlice-BfN4rN3H.js";import"./renderedTicksSlice-DKYVxNAz.js";import"./CartesianChart-D-2ecpa2.js";import"./chartDataContext-FYXA0LCO.js";import"./CategoricalChart-B30LS6x5.js";import"./CartesianAxis-Cx84Q0BH.js";import"./Layer-CKdwahrM.js";import"./Text-CMg3-e7E.js";import"./DOMUtils-D3LQizf9.js";import"./Label-B7hBq0Ji.js";import"./ZIndexLayer-BaMuJtoq.js";import"./types-CLB7ynuJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-CYvKy2lW.js";import"./useAnimationId-Yz3h7jnZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DEk02y8i.js";import"./ChartSizeDimensions-C4mVk4KC.js";import"./OffsetShower-UIogbUR8.js";import"./PlotAreaShower-DSjypVDX.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
