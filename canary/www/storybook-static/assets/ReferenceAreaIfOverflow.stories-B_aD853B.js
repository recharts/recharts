import{e}from"./iframe-CrHrvGFA.js";import{R as s}from"./arrayEqualityCheck-D7V7-zfy.js";import{C as p}from"./ComposedChart-CTjSJXS0.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-C5wf1Xk_.js";import{X as l}from"./XAxis-D0X6vRGT.js";import{Y as h}from"./YAxis-p0cAlhrk.js";import{R as d}from"./ReferenceArea-Bp80hbRx.js";import{R as x}from"./RechartsHookInspector-DW_mvAVM.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CHUiU1F7.js";import"./immer-BCwItB4q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BB1RiCRS.js";import"./index-BkAWwSZa.js";import"./hooks-C-ZW7Hvz.js";import"./axisSelectors-apUKQ5p6.js";import"./d3-scale-aLx8KFU7.js";import"./zIndexSlice-BPhJKxcZ.js";import"./renderedTicksSlice-BKLazWGY.js";import"./CartesianChart-BtNZYkZt.js";import"./chartDataContext-CBLNwLu7.js";import"./CategoricalChart-Ds9PKqQr.js";import"./CartesianAxis-C6mIt3Wc.js";import"./Layer-VGdDjG6T.js";import"./Text-DPhEVUwO.js";import"./DOMUtils-C8jm054W.js";import"./Label-DZt9DpVA.js";import"./ZIndexLayer-CaiMnAVk.js";import"./types-C-thJRzw.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-DTNp-Bxb.js";import"./useAnimationId-gwH5_ERq.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CpHQapov.js";import"./ChartSizeDimensions-DZ9MktBW.js";import"./OffsetShower-C2k5oquR.js";import"./PlotAreaShower-DFoVEO8k.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
