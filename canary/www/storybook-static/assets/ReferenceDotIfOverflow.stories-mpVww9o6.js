import{e}from"./iframe-DU-LucVk.js";import{R as n}from"./arrayEqualityCheck-CclNUIwX.js";import{C as s}from"./ComposedChart-D6mSG6uW.js";import{C as p}from"./CartesianGrid-ZQnOdJGL.js";import{X as c}from"./XAxis-NPkkQ63f.js";import{Y as f}from"./YAxis-oxI_7caT.js";import{R as l}from"./ReferenceDot-mkRAkh4e.js";import{R as h}from"./RechartsHookInspector-BEY9qfJh.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B2aHdDhI.js";import"./immer-CeDnDLs7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQ8ifATJ.js";import"./index-BvEdvQ3w.js";import"./hooks-5DppKLy_.js";import"./axisSelectors-1v6f9L3u.js";import"./d3-scale-s-kDCmvc.js";import"./zIndexSlice-BokCIqI7.js";import"./renderedTicksSlice-CYsmXTCd.js";import"./CartesianChart-Cbq4Hmtt.js";import"./chartDataContext-CG1EXfO5.js";import"./CategoricalChart-I9vscfUJ.js";import"./CartesianAxis-xpog4YLf.js";import"./Layer-8a5GeXWN.js";import"./Text-CzwymKY5.js";import"./DOMUtils-CWJBrBTl.js";import"./Label-OGUbf68M.js";import"./ZIndexLayer-BaiBFLw5.js";import"./types-Dgs-vk0Z.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-D3cffN2_.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-k3KoyLP9.js";import"./ChartSizeDimensions-ChW5udk0.js";import"./OffsetShower-BWhNcTks.js";import"./PlotAreaShower-9QTURT9p.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
