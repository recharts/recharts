import{e}from"./iframe-C2QqRKe7.js";import{R as s}from"./arrayEqualityCheck-PWQDmerQ.js";import{C as p}from"./ComposedChart-XS1PtTuL.js";import{C as c}from"./CartesianGrid-D-1j0FVM.js";import{X as f}from"./XAxis-DNcvFPfK.js";import{Y as l}from"./YAxis-21rUvSzF.js";import{R as h}from"./ReferenceArea-DuDIr70i.js";import{R as d}from"./RechartsHookInspector-CgITLFRP.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-7LXz8kjz.js";import"./immer-CHIvT254.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-uOO6_n61.js";import"./index-rLwxE0hv.js";import"./hooks-mESitlr_.js";import"./axisSelectors-BKaUJCrd.js";import"./d3-scale-dRIxyhfO.js";import"./zIndexSlice-BpAhelXi.js";import"./renderedTicksSlice-psJG_LWq.js";import"./CartesianChart-_z898-at.js";import"./chartDataContext-Cua8pUoe.js";import"./CategoricalChart-DTUutzp0.js";import"./CartesianAxis-se2SzLtu.js";import"./Layer-DCLj2Osy.js";import"./Text-DIlIMQQ1.js";import"./DOMUtils-9UeuBFxq.js";import"./Label-s7jamoYW.js";import"./ZIndexLayer-DIR-sv8W.js";import"./types-DlfTkI4e.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BOyb4uG2.js";import"./useAnimationId-Bi88RhdV.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BnZqoCYA.js";import"./ChartSizeDimensions-BWtVWwLO.js";import"./OffsetShower-BY6uYDHq.js";import"./PlotAreaShower-DlAzy3wu.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
