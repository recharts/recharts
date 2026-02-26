import{e}from"./iframe-DUQ2rD4k.js";import{R as s}from"./arrayEqualityCheck-BBPGZIUg.js";import{C as p}from"./ComposedChart-BTcaBYEi.js";import{C as c}from"./CartesianGrid-CrLNpTgd.js";import{X as f}from"./XAxis-Dj-mbvwT.js";import{Y as l}from"./YAxis-CeQ3Mvu1.js";import{R as h}from"./ReferenceArea-CG1N1KGm.js";import{R as d}from"./RechartsHookInspector-EoCZS-ly.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRDb4LtS.js";import"./immer-CXKbBCwk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-rIHkV1_R.js";import"./index-B0EPCnDB.js";import"./hooks-HXjvsCy4.js";import"./axisSelectors-D2XTxCjc.js";import"./d3-scale-PQ3Jd5dr.js";import"./zIndexSlice-D6ARQVQn.js";import"./renderedTicksSlice-CW_OarVn.js";import"./CartesianChart-CMhPpmfP.js";import"./chartDataContext-DyVaFi3Q.js";import"./CategoricalChart-CK6_FENE.js";import"./CartesianAxis-CJmVZJSG.js";import"./Layer-7WkqLLbY.js";import"./Text-C5kR-_Zz.js";import"./DOMUtils-D_ZO6wl2.js";import"./Label-C0FJwtOT.js";import"./ZIndexLayer-59Hqjxa2.js";import"./types-SmO60qvE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-Bo_Jblzr.js";import"./useAnimationId-yl6yHjaO.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-mcEQG0VX.js";import"./ChartSizeDimensions-vnbsz8Dv.js";import"./OffsetShower-ndNiLHUj.js";import"./PlotAreaShower-Y-PU9931.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
