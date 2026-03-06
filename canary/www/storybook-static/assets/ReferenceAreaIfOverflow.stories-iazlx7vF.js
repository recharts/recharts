import{e}from"./iframe-6EykQKfG.js";import{R as s}from"./arrayEqualityCheck-CqC3jwM6.js";import{C as p}from"./ComposedChart-D9Ylu3vF.js";import{C as c}from"./CartesianGrid-DVK0Bf9z.js";import{X as f}from"./XAxis-Bq0FFrPR.js";import{Y as l}from"./YAxis-EuersLOS.js";import{R as h}from"./ReferenceArea-BXu7GtGx.js";import{R as d}from"./RechartsHookInspector-De58Dhu7.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZLGh6RG.js";import"./immer-DZYxGOvJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B-8Vi1YZ.js";import"./index-C5RNfFWo.js";import"./hooks-C3ySExDc.js";import"./axisSelectors-FAny2dXm.js";import"./d3-scale-ZR-RinUh.js";import"./zIndexSlice-C6kP2rU-.js";import"./renderedTicksSlice-ChlibOAb.js";import"./CartesianChart-yFNUOVem.js";import"./chartDataContext-vZs3YuCl.js";import"./CategoricalChart-B0C_vbjT.js";import"./CartesianAxis-DTiDbYgb.js";import"./Layer-DsfYNbWJ.js";import"./Text-ByiAR9HY.js";import"./DOMUtils-BptD102S.js";import"./Label-AanK--nR.js";import"./ZIndexLayer-Dj7WhaOm.js";import"./types-DI1ZOnYm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle--9HeXx83.js";import"./useAnimationId-SK1GTTks.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DoXoLnYR.js";import"./ChartSizeDimensions-4WehLi-t.js";import"./OffsetShower-DPGgRtYl.js";import"./PlotAreaShower-DJZyMIDk.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
