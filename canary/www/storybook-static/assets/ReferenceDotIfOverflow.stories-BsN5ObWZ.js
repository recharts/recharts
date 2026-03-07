import{e}from"./iframe-CxA-LBWH.js";import{R as n}from"./arrayEqualityCheck-hJaoC2QB.js";import{C as s}from"./ComposedChart-Y1yK6LHm.js";import{C as p}from"./CartesianGrid-CezShP0V.js";import{X as c}from"./XAxis-re4pUrp8.js";import{Y as f}from"./YAxis-BcK0se4x.js";import{R as l}from"./ReferenceDot-2tedEZ73.js";import{R as h}from"./RechartsHookInspector-Ddvgytdy.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CMH4rWNF.js";import"./immer-xqAoRSgx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQKKXFhE.js";import"./index-Dk8ktJ0b.js";import"./hooks-CIwzfPxR.js";import"./axisSelectors-OHI-Dqd0.js";import"./d3-scale-uVAmWtey.js";import"./zIndexSlice-BN1d4D77.js";import"./renderedTicksSlice-hESCiC9f.js";import"./CartesianChart-DsF2ziWs.js";import"./chartDataContext-BsA2334w.js";import"./CategoricalChart-B_RNqQJb.js";import"./CartesianAxis-D_h95VSX.js";import"./Layer-5LyTOX7F.js";import"./Text-BvZKJmQ_.js";import"./DOMUtils-BSZ8zVsl.js";import"./Label-CVqcP_87.js";import"./ZIndexLayer-N8IExBeW.js";import"./types-C0V6O8sH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-C9MXONQR.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DMMo74k-.js";import"./ChartSizeDimensions-BQWthli9.js";import"./OffsetShower-BxtkGnvp.js";import"./PlotAreaShower-lv5k_DaO.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
