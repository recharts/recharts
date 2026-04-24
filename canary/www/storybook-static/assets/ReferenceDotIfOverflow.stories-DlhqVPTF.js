import{e}from"./iframe-iXVZ0OWw.js";import{R as n}from"./arrayEqualityCheck-Bs7awETv.js";import{C as s}from"./ComposedChart-D42n6zmq.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C2nMAjLT.js";import{X as f}from"./XAxis-Y2bxQYNa.js";import{Y as l}from"./YAxis-BONLIFGC.js";import{R as h}from"./ReferenceDot-Ca6dFccb.js";import{R as d}from"./RechartsHookInspector-QPfA1UiQ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DZrbJThI.js";import"./immer-D9XbeXAx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Al7ZScv5.js";import"./index-P8miOr9q.js";import"./hooks-hExiU42m.js";import"./axisSelectors-C0i3ctr0.js";import"./d3-scale-CKEOWdk4.js";import"./zIndexSlice-D699PQjh.js";import"./renderedTicksSlice-CFlbd-Pg.js";import"./CartesianChart-CmpgeL8p.js";import"./chartDataContext-BSmZPOfG.js";import"./CategoricalChart-C87NLSKj.js";import"./CartesianAxis-8r9ztVGp.js";import"./Layer-CGbljtJR.js";import"./Text-BTO53QFq.js";import"./DOMUtils-BF1xhoe1.js";import"./Label-DFdLWFZO.js";import"./ZIndexLayer-Bsv83kPu.js";import"./types-BHwUrVE7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-CCBlTxNb.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-czQzbvEN.js";import"./ChartSizeDimensions-iHbrzIWQ.js";import"./OffsetShower-dcduOxOC.js";import"./PlotAreaShower-BzP3r89Q.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
