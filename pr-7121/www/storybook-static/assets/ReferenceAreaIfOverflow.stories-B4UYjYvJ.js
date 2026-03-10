import{e}from"./iframe-B0RBHKhv.js";import{R as s}from"./arrayEqualityCheck-CUrlIiZa.js";import{C as p}from"./ComposedChart-DP9VXl43.js";import{C as c}from"./CartesianGrid-CB91r2uB.js";import{X as f}from"./XAxis-CmZ1Qc-G.js";import{Y as l}from"./YAxis-CpFYoB6j.js";import{R as h}from"./ReferenceArea--6FZ7CA9.js";import{R as d}from"./RechartsHookInspector-BW5IS2xz.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-COjtEafr.js";import"./immer-4Zn5elZn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DJ9Ttq8o.js";import"./index-CJLF0Mhh.js";import"./hooks-D2D_3Kbz.js";import"./axisSelectors-fGBidpaE.js";import"./d3-scale-DmOZwrln.js";import"./zIndexSlice-CVs48kDF.js";import"./renderedTicksSlice-BWSAiWSy.js";import"./CartesianChart-CJLV3cRG.js";import"./chartDataContext-C8RmHr1V.js";import"./CategoricalChart-DjdfrcyP.js";import"./CartesianAxis-CwVzMBAZ.js";import"./Layer-DKG_J2lX.js";import"./Text-cX_Ucvjm.js";import"./DOMUtils-DRSD_e_k.js";import"./Label-zCnoVUoE.js";import"./ZIndexLayer-D0KeT139.js";import"./types-Cr4gQIo8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-CwMZJDWv.js";import"./useAnimationId-BhQIBdFI.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CAjd4rxZ.js";import"./ChartSizeDimensions-Dn4uFPS3.js";import"./OffsetShower-6Ks2UPdd.js";import"./PlotAreaShower-CXPk0Esn.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
