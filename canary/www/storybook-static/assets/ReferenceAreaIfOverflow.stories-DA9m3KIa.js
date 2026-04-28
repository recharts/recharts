import{e}from"./iframe-IYV0DWV_.js";import{R as s}from"./arrayEqualityCheck-Bd9te8h5.js";import{C as p}from"./ComposedChart--vw2gJgx.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-COBVU_Zt.js";import{X as l}from"./XAxis-D3Ygop7A.js";import{Y as h}from"./YAxis-CWiUIZ-q.js";import{R as d}from"./ReferenceArea-BbzYQaBm.js";import{R as x}from"./RechartsHookInspector-F4E7g6Er.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DW10euc9.js";import"./immer-C5y28x1y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CiV29pyr.js";import"./index-C-_sV-M9.js";import"./hooks-CYsU2mzH.js";import"./axisSelectors-D7Iryj26.js";import"./d3-scale-gSH8fZ7r.js";import"./zIndexSlice-DeGAM3mJ.js";import"./renderedTicksSlice-oy8dviAt.js";import"./CartesianChart-DeU7jjaP.js";import"./chartDataContext-DpSq4A2Y.js";import"./CategoricalChart-C5NFGp4t.js";import"./CartesianAxis-Bs0B3eSH.js";import"./Layer-BlQSfqc0.js";import"./Text-CljAKOCB.js";import"./DOMUtils-lNitbhsw.js";import"./Label-Ue-uNxNq.js";import"./ZIndexLayer-CuF5EOOK.js";import"./types-wRdleKl8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-CxtnmBb5.js";import"./useAnimationId-Bm2M_Pz2.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DlrvcT1S.js";import"./ChartSizeDimensions-qhfaRB1O.js";import"./OffsetShower-CVu4qLNi.js";import"./PlotAreaShower-B-AaQufv.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
