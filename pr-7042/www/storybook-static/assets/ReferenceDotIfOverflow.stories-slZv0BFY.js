import{e}from"./iframe-Cg8afp3P.js";import{R as n}from"./arrayEqualityCheck-CdnxX3zW.js";import{C as s}from"./ComposedChart-Dw1ue8mx.js";import{C as p}from"./CartesianGrid-Dufe2PKF.js";import{X as c}from"./XAxis-CcHOaWFK.js";import{Y as f}from"./YAxis-B5L1n3Hm.js";import{R as l}from"./ReferenceDot-rdJIcmLi.js";import{R as h}from"./RechartsHookInspector-DBmCwbx2.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-3HltEOEu.js";import"./immer-496O7mbU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Jn537Djk.js";import"./index-BTReDVD1.js";import"./hooks-CbbXi_l7.js";import"./axisSelectors-C693hjfU.js";import"./d3-scale-Cj67Rjiy.js";import"./zIndexSlice-BhrWtTkt.js";import"./renderedTicksSlice-DkvAPKlQ.js";import"./CartesianChart-DjSIFQx_.js";import"./chartDataContext-GXm2JMjL.js";import"./CategoricalChart-Cr-8QZnp.js";import"./CartesianAxis-BH2_JJNm.js";import"./Layer-YebNzFxt.js";import"./Text-CShVWkSN.js";import"./DOMUtils-DjmgTp4l.js";import"./Label-DvKY9pNQ.js";import"./ZIndexLayer-8TBIBWl0.js";import"./types-CMLysTZx.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BEaF242C.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DRXexYxK.js";import"./ChartSizeDimensions-DccCBOyY.js";import"./OffsetShower-7vNsmCvs.js";import"./PlotAreaShower-C7II51Mo.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
