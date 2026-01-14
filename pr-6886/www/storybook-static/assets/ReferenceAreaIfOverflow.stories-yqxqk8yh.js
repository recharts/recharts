import{e}from"./iframe-AMdIPtJ_.js";import{R as s}from"./arrayEqualityCheck-3UyTPjiS.js";import{C as p}from"./ComposedChart-CdZS-7p_.js";import{C as c}from"./CartesianGrid-Cp4flrLp.js";import{X as f}from"./XAxis-CXCVRDkD.js";import{Y as l}from"./YAxis-L1AiUQKA.js";import{R as h}from"./ReferenceArea-eSBHu5JY.js";import{R as d}from"./RechartsHookInspector-Bq93gymj.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-eDHOoSb6.js";import"./PolarUtils-KOfaMXsG.js";import"./RechartsWrapper-QBdH5qJC.js";import"./hooks-BddCSC5x.js";import"./axisSelectors-CYvP6yih.js";import"./zIndexSlice-CLEOTtEz.js";import"./CartesianChart-C7nb5Il8.js";import"./chartDataContext-BsDdYGEp.js";import"./CategoricalChart-C39w_Gis.js";import"./CartesianAxis-5YsJLijc.js";import"./Layer-s4o8RnMf.js";import"./Text-Bmd0wKqf.js";import"./DOMUtils-Bw_kQjwH.js";import"./Label-BXNXe9p5.js";import"./ZIndexLayer-DJXgyukI.js";import"./types-CQP6j9X1.js";import"./Rectangle-BXzCN27L.js";import"./useAnimationId-DD0SbbDQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C1Q9sGQl.js";import"./ChartSizeDimensions-C4K5r_rw.js";import"./OffsetShower-DJsmVlcW.js";import"./PlotAreaShower-poQ332x-.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
