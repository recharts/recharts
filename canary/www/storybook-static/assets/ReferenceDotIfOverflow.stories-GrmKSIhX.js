import{e}from"./iframe-3u-Q1UnB.js";import{R as n}from"./arrayEqualityCheck-4YdFFnIZ.js";import{C as s}from"./ComposedChart-B88mQwK1.js";import{C as p}from"./CartesianGrid-CXrPJC1I.js";import{X as c}from"./XAxis-Djkeo-gr.js";import{Y as f}from"./YAxis-Dj18iK3G.js";import{R as l}from"./ReferenceDot-BEabJ2Kf.js";import{R as h}from"./RechartsHookInspector-CGCoL2RB.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cxetozbj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DTxIwYKV.js";import"./hooks-CA6mXnfo.js";import"./axisSelectors-tXlpibGR.js";import"./zIndexSlice-DFZrsegf.js";import"./CartesianChart-CPrM6Y72.js";import"./chartDataContext-oduysAeX.js";import"./CategoricalChart-C1AjKJFD.js";import"./CartesianAxis-DNUlfq8v.js";import"./Layer-BUQITwlU.js";import"./Text-C0k6XBru.js";import"./DOMUtils-B1iHjA53.js";import"./Label-DEySkZO8.js";import"./ZIndexLayer-BBlPVpqD.js";import"./types-DeBO-UOQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-B1g7vVO3.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BW-nQ8nH.js";import"./ChartSizeDimensions-BtJ4zNfJ.js";import"./OffsetShower-CS2dm1Mz.js";import"./PlotAreaShower-DAGea8GQ.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
