import{e}from"./iframe-BbZhTIjX.js";import{R as s}from"./arrayEqualityCheck-DkKqnDzt.js";import{C as p}from"./ComposedChart-DswvV8lx.js";import{C as c}from"./CartesianGrid-BPBxIaVq.js";import{X as f}from"./XAxis-C9xRC5JP.js";import{Y as l}from"./YAxis-ktUi3e4g.js";import{R as h}from"./ReferenceArea-Bv0VHcAp.js";import{R as d}from"./RechartsHookInspector-BEtvb3d9.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DpK6kTo-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNXfyTKD.js";import"./hooks-xGvQVXJu.js";import"./axisSelectors-tXY5A5QT.js";import"./zIndexSlice-Dz-zn5zm.js";import"./renderedTicksSlice-Bw2BSgf6.js";import"./CartesianChart-CjVvsiSP.js";import"./chartDataContext-DGmstLWk.js";import"./CategoricalChart-B-wga6Ud.js";import"./CartesianAxis-TJWR5-DY.js";import"./Layer-BRjxkTBT.js";import"./Text-DoKSXl81.js";import"./DOMUtils-BPmVZuXj.js";import"./Label-Be7TSIhI.js";import"./ZIndexLayer-C9gNEIfS.js";import"./types-BKBSpGfD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-E9CHGVoE.js";import"./useAnimationId-DVyCRxxH.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BeB1Guy7.js";import"./ChartSizeDimensions-CT9Oervl.js";import"./OffsetShower-D-jScXPc.js";import"./PlotAreaShower-FMUTuolU.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
