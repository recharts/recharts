import{e}from"./iframe-DyvFbeiY.js";import{R as s}from"./arrayEqualityCheck-Bn5wKa8z.js";import{C as p}from"./ComposedChart-DfTxnUhc.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DwKHDwdI.js";import{X as l}from"./XAxis-B293BcKI.js";import{Y as h}from"./YAxis-D9QZuXTS.js";import{R as d}from"./ReferenceArea-DVo2RbK4.js";import{R as x}from"./RechartsHookInspector-DV82AArc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DGnWrc4H.js";import"./immer-BXVzTfKp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DdWihcwC.js";import"./index-CNtF4wRg.js";import"./hooks-CfJmKGn6.js";import"./axisSelectors-088cVuhB.js";import"./d3-scale-CNJHznva.js";import"./zIndexSlice-Bqm6vulu.js";import"./renderedTicksSlice-CJenSa8J.js";import"./CartesianChart-CS3DBPlX.js";import"./chartDataContext-DviLklHI.js";import"./CategoricalChart-D-rA1y19.js";import"./CartesianAxis-DvrkT7dv.js";import"./Layer-CpTA_ktM.js";import"./Text-Be76LL2i.js";import"./DOMUtils-CzBYED_e.js";import"./Label-CDXCniHM.js";import"./ZIndexLayer-C1288rIw.js";import"./types-CSsXZ5tJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-Ddgym3Wn.js";import"./useAnimationId-DwaEpfhV.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C_zDqZx9.js";import"./ChartSizeDimensions-Ca623tER.js";import"./OffsetShower-B7jjHmTv.js";import"./PlotAreaShower-B6clyZxt.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
