import{e}from"./iframe-Cr_9Zxyz.js";import{R as s}from"./arrayEqualityCheck-C67VePae.js";import{C as p}from"./ComposedChart-BP3-QQ_Z.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BGDg0quO.js";import{X as l}from"./XAxis-DoXEBn_P.js";import{Y as h}from"./YAxis-don10v8F.js";import{R as d}from"./ReferenceArea-X6Iwht94.js";import{R as x}from"./RechartsHookInspector-CkzoI9c0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-TCwXH7Ec.js";import"./immer-C4QSyCgb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqKKWRfj.js";import"./index-WCTFjGJ3.js";import"./hooks-BpLTq7P8.js";import"./axisSelectors-B1y7r4Cr.js";import"./d3-scale-BBKGKrVC.js";import"./zIndexSlice-DN_TI4P2.js";import"./renderedTicksSlice-CLpIiVNo.js";import"./CartesianChart-CrypXdK_.js";import"./chartDataContext-B_zHpYbg.js";import"./CategoricalChart-Dwl_niiN.js";import"./CartesianAxis-D2bUE24b.js";import"./Layer-LRa_hkeo.js";import"./Text-B2FTpI2T.js";import"./DOMUtils-ZnDVm2Wt.js";import"./Label-C4NmpEg6.js";import"./ZIndexLayer-DdInyA8Z.js";import"./types-DtvHHfJA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-CigjyTr6.js";import"./useAnimationId-CtG5S8C9.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BCUg-3d0.js";import"./ChartSizeDimensions-BSIBvgzx.js";import"./OffsetShower-CxfJShSk.js";import"./PlotAreaShower-28Fi8dPq.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
