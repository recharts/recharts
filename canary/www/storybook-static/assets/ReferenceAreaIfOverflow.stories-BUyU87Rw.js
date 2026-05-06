import{e}from"./iframe-6KIzFwNo.js";import{R as s}from"./arrayEqualityCheck-CGqQmqAs.js";import{C as p}from"./ComposedChart-CFeB8Qm9.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DOgFM7CW.js";import{X as l}from"./XAxis-D1NIlvkv.js";import{Y as h}from"./YAxis-BQuCUfzU.js";import{R as d}from"./ReferenceArea-CcTHmzEj.js";import{R as x}from"./RechartsHookInspector-DHKbTB6e.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CCemV21k.js";import"./immer-ql4DR2MT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BS52G--d.js";import"./index-CsYEUaZR.js";import"./hooks-DBLrG0Zs.js";import"./axisSelectors-IZ0_1Z0f.js";import"./d3-scale-CbScBmFc.js";import"./zIndexSlice-NyQa_NDp.js";import"./renderedTicksSlice-Bre3xjAe.js";import"./CartesianChart-BlXPw11X.js";import"./chartDataContext-BRQTC3wB.js";import"./CategoricalChart-C7SCseXA.js";import"./CartesianAxis-ByaVWi8_.js";import"./Layer-qh1dFQeJ.js";import"./Text-EuDfZQJr.js";import"./DOMUtils-CF_DubJK.js";import"./Label-LIb90dQ2.js";import"./ZIndexLayer-oU3hoYkX.js";import"./types-Bw6Zsg7c.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BFSMfk7Q.js";import"./useAnimationId-sBKnBvXo.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D6ot0Q8y.js";import"./ChartSizeDimensions-Cv_HNug1.js";import"./OffsetShower-DwEE3buh.js";import"./PlotAreaShower-BdnS3yQL.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
