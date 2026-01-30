import{e}from"./iframe-C0b843bJ.js";import{R as s}from"./arrayEqualityCheck-Cbemodpd.js";import{C as p}from"./ComposedChart-E69Ihgri.js";import{C as c}from"./CartesianGrid-D40AEZku.js";import{X as f}from"./XAxis-ARyNq3Ww.js";import{Y as l}from"./YAxis-DsEQlDV3.js";import{R as h}from"./ReferenceArea-CyVUgelK.js";import{R as d}from"./RechartsHookInspector-CBnKyMAv.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DhRhZ63O.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CO19iou7.js";import"./hooks-dTw7M1vz.js";import"./axisSelectors-qWILVFYf.js";import"./zIndexSlice-B8FeRzdW.js";import"./CartesianChart-7cy0WoRj.js";import"./chartDataContext-Btc_iGmV.js";import"./CategoricalChart-Bd7xSF-i.js";import"./CartesianAxis-By4zoTN4.js";import"./Layer-purCCvV2.js";import"./Text-rJUU6KZ4.js";import"./DOMUtils-C0s6ZPvi.js";import"./Label-2fZ2yvU7.js";import"./ZIndexLayer-_DstmVXN.js";import"./types-B5P-qikU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-C4tB6UmQ.js";import"./useAnimationId-D7FQIEyi.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-lXdD0Nzr.js";import"./ChartSizeDimensions-DcGIh6Y9.js";import"./OffsetShower-1eskoS1A.js";import"./PlotAreaShower-8zrELIBX.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
