import{e}from"./iframe-BWXS80lS.js";import{R as n}from"./arrayEqualityCheck-C3u4XnRQ.js";import{C as s}from"./ComposedChart-xvGA_wfn.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-cwDREeaV.js";import{X as f}from"./XAxis-_91HGxIi.js";import{Y as l}from"./YAxis-CryQDPi0.js";import{R as h}from"./ReferenceDot-rtc6bBbQ.js";import{R as d}from"./RechartsHookInspector-BRyQ5hs2.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BuIDsZJ5.js";import"./immer-q9ikkIh9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ge4Ob0hk.js";import"./index-BHFN0jNx.js";import"./hooks-RRXvqXA6.js";import"./axisSelectors-CxvM0uDn.js";import"./d3-scale-zfNl6p6O.js";import"./zIndexSlice-d9o2MkaU.js";import"./renderedTicksSlice-DqJmQzpf.js";import"./CartesianChart-34jBpyPx.js";import"./chartDataContext-BhTPdOXh.js";import"./CategoricalChart-DEIvmDa9.js";import"./CartesianAxis-B8jMapSP.js";import"./Layer-CiG7NGHu.js";import"./Text-BQ1FWDem.js";import"./DOMUtils-DC1JBHtR.js";import"./Label-CJTshKiS.js";import"./ZIndexLayer-fCru-3Nt.js";import"./types-B2Bimmd7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BwCqCngA.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DflyfLFf.js";import"./ChartSizeDimensions-hQ4c9Mxw.js";import"./OffsetShower-uoVY1zNd.js";import"./PlotAreaShower-BwJGGkjL.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
