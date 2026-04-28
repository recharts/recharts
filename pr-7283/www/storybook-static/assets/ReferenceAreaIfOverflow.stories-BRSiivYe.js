import{e}from"./iframe-Y_Pa4XUD.js";import{R as s}from"./arrayEqualityCheck-ufqgmavw.js";import{C as p}from"./ComposedChart-DNNSx7vR.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BhKPLH6E.js";import{X as l}from"./XAxis-Bv1vfoF0.js";import{Y as h}from"./YAxis-JfFUSobz.js";import{R as d}from"./ReferenceArea-Dw0lXrbQ.js";import{R as x}from"./RechartsHookInspector-CoUZ_IKN.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B_hVYzQT.js";import"./immer-fIOXVJOd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C8CMlo1v.js";import"./index-BJNVUtSj.js";import"./hooks-CIr5CD4S.js";import"./axisSelectors-BmerCj2n.js";import"./d3-scale-ByVEmPR9.js";import"./zIndexSlice-CTCYCdxd.js";import"./renderedTicksSlice-CQWIZJ1K.js";import"./CartesianChart-Ds9j1WCi.js";import"./chartDataContext-DAoPlUXM.js";import"./CategoricalChart-C8vuTQEv.js";import"./CartesianAxis-DaCLeBFj.js";import"./Layer-Cvh40WqM.js";import"./Text-mkkNE3Pk.js";import"./DOMUtils-DN2B9zoo.js";import"./Label-DoWUrSWO.js";import"./ZIndexLayer-DHPXYj4K.js";import"./types-CFzlQQ1s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BWx4TmVI.js";import"./useAnimationId-LxxsO2il.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CPjVtjVX.js";import"./ChartSizeDimensions-Bp_T5Mu5.js";import"./OffsetShower-Bd96igZ1.js";import"./PlotAreaShower-DzHDy2_i.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
