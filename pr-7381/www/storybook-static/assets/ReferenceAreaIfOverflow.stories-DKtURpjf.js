import{e}from"./iframe-nKBNN5B0.js";import{g as s}from"./arrayEqualityCheck-CxT-wzVL.js";import{C as p}from"./ComposedChart-CMimiTb9.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-CfI49b5n.js";import{X as l}from"./XAxis-DU_guq9x.js";import{Y as h}from"./YAxis-FQ23aVkz.js";import{R as d}from"./ReferenceArea-CwOE4Z22.js";import{R as x}from"./RechartsHookInspector-sGkexO-0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B1K37wAO.js";import"./immer-CyCHtQC_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CtYT8XrE.js";import"./index-92xVHDbu.js";import"./hooks-D9IV7SS_.js";import"./axisSelectors-Ce9ynWe4.js";import"./d3-scale-BkKzcfBn.js";import"./zIndexSlice-D0XiDET1.js";import"./renderedTicksSlice-CO8dGGel.js";import"./CartesianChart-B93j2FVh.js";import"./chartDataContext-C9hfLHwH.js";import"./CategoricalChart-DseIVHYy.js";import"./CartesianAxis-Bnh1LK4J.js";import"./Layer-Dlo03F9V.js";import"./Text-DB5b8CCD.js";import"./DOMUtils-B7v60ynE.js";import"./Label-CsEI_R5F.js";import"./ZIndexLayer-C2zC9czD.js";import"./types-DsvdP6xG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BECvYQY2.js";import"./useAnimationId-C5EqhcJr.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-zSDCnArX.js";import"./ChartSizeDimensions-NMIHm-Kh.js";import"./OffsetShower-6NeAlfeU.js";import"./PlotAreaShower-DGsJDI99.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
