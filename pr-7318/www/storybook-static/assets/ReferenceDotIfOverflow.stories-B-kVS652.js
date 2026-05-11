import{e}from"./iframe-CBxZ3YEm.js";import{R as n}from"./arrayEqualityCheck-Blj5Aeqs.js";import{C as s}from"./ComposedChart-CTVnh_SC.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-ZMdhEHdo.js";import{X as f}from"./XAxis-C1aLPlbC.js";import{Y as l}from"./YAxis-myA84OCs.js";import{R as h}from"./ReferenceDot-CuzszX6p.js";import{R as d}from"./RechartsHookInspector-CqBmfRxm.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BEDeUj8t.js";import"./immer-CcXWnMnm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-gLcbW_Rw.js";import"./index-HycHHMGp.js";import"./hooks-DYoyM5tD.js";import"./axisSelectors-CzPcR0bZ.js";import"./d3-scale-BQHKXGzh.js";import"./zIndexSlice-De9OMF5H.js";import"./renderedTicksSlice-f_j9Tm_g.js";import"./CartesianChart-BE_qH18M.js";import"./chartDataContext-DvlevAqI.js";import"./CategoricalChart-Bg-fk5CT.js";import"./CartesianAxis-DW4xU2v8.js";import"./Layer-8oMMti5m.js";import"./Text-7hG94G_y.js";import"./DOMUtils-v8LS_cLE.js";import"./Label-C9wjKN1h.js";import"./ZIndexLayer-B7fniKOv.js";import"./types-CzApK6LP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-xzbDIn8F.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-FhOfqCjV.js";import"./ChartSizeDimensions-D6Chm1KW.js";import"./OffsetShower-Cf5FndXJ.js";import"./PlotAreaShower-Bk6tssdT.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
