import{e}from"./iframe-XFn8o3qI.js";import{R as s}from"./arrayEqualityCheck-DoWZ8Al-.js";import{C as p}from"./ComposedChart-CqHuuwTM.js";import{C as c}from"./CartesianGrid-WQDXrRHE.js";import{X as f}from"./XAxis-wsJSxX26.js";import{Y as l}from"./YAxis-DlNOg73C.js";import{R as h}from"./ReferenceArea-Cn35JBIr.js";import{R as d}from"./RechartsHookInspector-D90IXMov.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DasUcEmR.js";import"./immer-Hw8ZlrcX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bqol093Z.js";import"./index-DNZJK2gS.js";import"./hooks-CgDMZSu6.js";import"./axisSelectors-B-8e66Qc.js";import"./d3-scale-BECtu2Jj.js";import"./zIndexSlice-BaTuqdfU.js";import"./renderedTicksSlice-Dl0HjFeM.js";import"./CartesianChart-CtYhkutQ.js";import"./chartDataContext-C4USeiES.js";import"./CategoricalChart-BM4cINHZ.js";import"./CartesianAxis-j4wY0iFh.js";import"./Layer-DCadlIaL.js";import"./Text-Bl76oSnc.js";import"./DOMUtils-DhQP54ma.js";import"./Label-BlYwY5-1.js";import"./ZIndexLayer-DWBavU2w.js";import"./types-Bj0G5aQF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-kXtUPCc6.js";import"./useAnimationId-DlDP6-K6.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BCvGM1bQ.js";import"./ChartSizeDimensions-BgEuIf6D.js";import"./OffsetShower-2hoMWt5-.js";import"./PlotAreaShower-D2hH_gCG.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
