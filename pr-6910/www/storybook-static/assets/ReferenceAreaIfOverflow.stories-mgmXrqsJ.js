import{e}from"./iframe-Qbvlqe9c.js";import{R as s}from"./arrayEqualityCheck-B3n_664E.js";import{C as p}from"./ComposedChart-dCvdXjW4.js";import{C as c}from"./CartesianGrid-BrR2o-p8.js";import{X as f}from"./XAxis-DvwXUl6_.js";import{Y as l}from"./YAxis-CbhDcywn.js";import{R as h}from"./ReferenceArea-9uGCWr5f.js";import{R as d}from"./RechartsHookInspector-Bcf65z8s.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-76Pg9xKV.js";import"./PolarUtils-1Zh54hEc.js";import"./RechartsWrapper-j0khHO2J.js";import"./hooks-C__9gfvB.js";import"./axisSelectors-DP3q5L3p.js";import"./zIndexSlice-Dd4fWTvl.js";import"./CartesianChart-BEe2ZeB9.js";import"./chartDataContext-meOOuMw1.js";import"./CategoricalChart-BN7dR1q_.js";import"./CartesianAxis-a9jFIi9h.js";import"./Layer-CGD9i9Tv.js";import"./Text-BhRNkj8s.js";import"./DOMUtils-D4R1mvUb.js";import"./Label-BjNpzDAS.js";import"./ZIndexLayer-BGnFu8Hz.js";import"./types-BIElRGEC.js";import"./Rectangle-Dq-tt7hT.js";import"./useAnimationId-BMBkTPld.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BFsVO8Up.js";import"./ChartSizeDimensions-DHXLFfdm.js";import"./OffsetShower-CcbpVL0P.js";import"./PlotAreaShower-Bw9dKf0L.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
