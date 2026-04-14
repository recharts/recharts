import{e}from"./iframe-BL30a25n.js";import{R as s}from"./arrayEqualityCheck-CTdhw7v2.js";import{C as p}from"./ComposedChart-CwvxB3E8.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-NIG_z2rH.js";import{X as l}from"./XAxis-BuEHyROH.js";import{Y as h}from"./YAxis-97iCNCLl.js";import{R as d}from"./ReferenceArea-DfZjYIcT.js";import{R as x}from"./RechartsHookInspector-CKAPvAcq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dhgfu696.js";import"./immer-BLjYPncX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSatPt3_.js";import"./index-DaX2Q3AK.js";import"./hooks-Bu6pJnUO.js";import"./axisSelectors-CmxwFFvW.js";import"./d3-scale-DN4NcrYH.js";import"./zIndexSlice-DuEq0Nzw.js";import"./renderedTicksSlice-BNblKiJo.js";import"./CartesianChart-DOXn6f_f.js";import"./chartDataContext-BvCVPcPU.js";import"./CategoricalChart-Cg95RMGg.js";import"./CartesianAxis-6XJOi0JN.js";import"./Layer-DbzzoT5W.js";import"./Text-Da5MrtOo.js";import"./DOMUtils-2S3W7qMd.js";import"./Label-tOosDzC9.js";import"./ZIndexLayer-Ct2VJKyV.js";import"./types-DngVF1gy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-Dbi9MvBK.js";import"./useAnimationId-StTSWEFx.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CJGBDWaZ.js";import"./ChartSizeDimensions-tl2VnG3o.js";import"./OffsetShower-D6jdoegT.js";import"./PlotAreaShower-CDPFlOoQ.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
