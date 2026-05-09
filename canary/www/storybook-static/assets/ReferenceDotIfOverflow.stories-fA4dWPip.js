import{e}from"./iframe-DCkCb3cL.js";import{R as n}from"./arrayEqualityCheck-Cyv8hSdj.js";import{C as s}from"./ComposedChart-DNMO5eaz.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CeNS5HZC.js";import{X as f}from"./XAxis-DjeZloTX.js";import{Y as l}from"./YAxis-sTotZWFY.js";import{R as h}from"./ReferenceDot-LBc4nlSK.js";import{R as d}from"./RechartsHookInspector-GywlJnGS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Brvb-unE.js";import"./immer-CJIR5Dxo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ysnAkpcY.js";import"./index-DmTf6G0P.js";import"./hooks-rTm4XK8H.js";import"./axisSelectors-DLVZqdCy.js";import"./d3-scale-cKex8xs_.js";import"./zIndexSlice-C2SLAmdu.js";import"./renderedTicksSlice-dBR_dEs7.js";import"./CartesianChart-U8I4mwYO.js";import"./chartDataContext-BB8jRTpM.js";import"./CategoricalChart-sLprv-i8.js";import"./CartesianAxis-2U-Fs3nY.js";import"./Layer-DdpUaJ6z.js";import"./Text-C0rSCzeg.js";import"./DOMUtils-D_52ZroA.js";import"./Label-DgXvgibU.js";import"./ZIndexLayer-DmR4HC_4.js";import"./types-BN3BphoZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-H-WiFDrq.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-tKLwA4MY.js";import"./ChartSizeDimensions-3SLqT2DF.js";import"./OffsetShower-DuCJOCxi.js";import"./PlotAreaShower-DYkpYr6V.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
