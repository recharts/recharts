import{e}from"./iframe-BOKMyF_X.js";import{R as s}from"./arrayEqualityCheck-CqOdBUpx.js";import{C as p}from"./ComposedChart-CM0vmQ8b.js";import{C as c}from"./CartesianGrid-CODw85-L.js";import{X as f}from"./XAxis-CZEffDuF.js";import{Y as l}from"./YAxis-CBNt9JSX.js";import{R as h}from"./ReferenceArea-BYqkSYse.js";import{R as d}from"./RechartsHookInspector-CyXtWZCT.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D-2ZbLU8.js";import"./immer-BWwXhaAr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BbOfJK_v.js";import"./index-DyqnJuAH.js";import"./hooks-BSpUdl1W.js";import"./axisSelectors-DKV-tPdL.js";import"./d3-scale-DFwrAk_i.js";import"./zIndexSlice-5HlspQCC.js";import"./renderedTicksSlice-BzcMdbXv.js";import"./CartesianChart-DhtZ13KG.js";import"./chartDataContext-CzpIjlkZ.js";import"./CategoricalChart-BuHiBizY.js";import"./CartesianAxis-DfkQ8mC4.js";import"./Layer-jqqI8J4h.js";import"./Text-v3vniUMj.js";import"./DOMUtils-BpFKs9GQ.js";import"./Label-D-SjomvA.js";import"./ZIndexLayer-BPVGtKRn.js";import"./types-BRMSpD9x.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-DaPP8vxp.js";import"./useAnimationId-CQeaLNgU.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C_V29KK9.js";import"./ChartSizeDimensions-BzpSoNcH.js";import"./OffsetShower-DzkfGY4a.js";import"./PlotAreaShower-Djb9Eb2x.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
