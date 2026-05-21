import{e}from"./iframe-D2xkh5VA.js";import{g as s}from"./arrayEqualityCheck-BcvopYI_.js";import{C as p}from"./ComposedChart-oF9YiWjC.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-DkShnBeV.js";import{X as l}from"./XAxis-8irwFxlw.js";import{Y as h}from"./YAxis-Bb2589BF.js";import{R as d}from"./ReferenceArea-CcCSa2U3.js";import{R as x}from"./RechartsHookInspector-BNLXTPTn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ba1qBB1K.js";import"./immer-CX6PUSO2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAWcFgQP.js";import"./index-DQcqmY6q.js";import"./hooks-BYxDncjb.js";import"./axisSelectors-7PXIpU8J.js";import"./d3-scale-CrDd0VeH.js";import"./zIndexSlice-BbkJeUOK.js";import"./renderedTicksSlice-C-KOSoJD.js";import"./CartesianChart-BJzueQ6r.js";import"./chartDataContext-DR1VP15t.js";import"./CategoricalChart-BDCy0ysN.js";import"./CartesianAxis-DAZlFlgD.js";import"./Layer-DhOsa-t6.js";import"./Text-hIOc-MSS.js";import"./DOMUtils-BkYWFWy3.js";import"./Label-DeRbtMqy.js";import"./ZIndexLayer-C7En4AyY.js";import"./types-CxiHHYTB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BFymuHuj.js";import"./useAnimationId-DiNRYHAi.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-bibejZah.js";import"./ChartSizeDimensions-1DNJC0TT.js";import"./OffsetShower-CUjzMbk1.js";import"./PlotAreaShower-BjwPr_87.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
