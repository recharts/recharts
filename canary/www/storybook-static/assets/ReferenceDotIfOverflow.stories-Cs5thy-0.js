import{e}from"./iframe-CrHrvGFA.js";import{R as n}from"./arrayEqualityCheck-D7V7-zfy.js";import{C as s}from"./ComposedChart-CTjSJXS0.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C5wf1Xk_.js";import{X as f}from"./XAxis-D0X6vRGT.js";import{Y as l}from"./YAxis-p0cAlhrk.js";import{R as h}from"./ReferenceDot-ciEKubDS.js";import{R as d}from"./RechartsHookInspector-DW_mvAVM.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CHUiU1F7.js";import"./immer-BCwItB4q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BB1RiCRS.js";import"./index-BkAWwSZa.js";import"./hooks-C-ZW7Hvz.js";import"./axisSelectors-apUKQ5p6.js";import"./d3-scale-aLx8KFU7.js";import"./zIndexSlice-BPhJKxcZ.js";import"./renderedTicksSlice-BKLazWGY.js";import"./CartesianChart-BtNZYkZt.js";import"./chartDataContext-CBLNwLu7.js";import"./CategoricalChart-Ds9PKqQr.js";import"./CartesianAxis-C6mIt3Wc.js";import"./Layer-VGdDjG6T.js";import"./Text-DPhEVUwO.js";import"./DOMUtils-C8jm054W.js";import"./Label-DZt9DpVA.js";import"./ZIndexLayer-CaiMnAVk.js";import"./types-C-thJRzw.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-2YvQxSoM.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CpHQapov.js";import"./ChartSizeDimensions-DZ9MktBW.js";import"./OffsetShower-C2k5oquR.js";import"./PlotAreaShower-DFoVEO8k.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
