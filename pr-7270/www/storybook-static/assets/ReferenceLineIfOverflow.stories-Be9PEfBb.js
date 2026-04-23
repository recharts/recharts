import{e}from"./iframe-BF30cewz.js";import{R as n}from"./arrayEqualityCheck-54E-EMHV.js";import{C as p}from"./ComposedChart-vR6M8Csb.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BN1BW5YM.js";import{X as f}from"./XAxis-R3SRHTpu.js";import{Y as l}from"./YAxis-COwWoIRq.js";import{L as d}from"./Line-CM2lbnkw.js";import{R as h}from"./ReferenceLine-BDNxkoRj.js";import{R as w}from"./RechartsHookInspector-B0E9dfMt.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CfzAmxrO.js";import"./immer-1Y6b4ABg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ds6-czPk.js";import"./index-C4aFfAFk.js";import"./hooks-DBaONgSL.js";import"./axisSelectors-BbIpa25b.js";import"./d3-scale-BQcoNVts.js";import"./zIndexSlice-Dzpaa8RG.js";import"./renderedTicksSlice-DaQzOTaA.js";import"./CartesianChart-Cib6BDKJ.js";import"./chartDataContext-C-ltUYxq.js";import"./CategoricalChart-Ax6WUToq.js";import"./CartesianAxis-CRTXwVx1.js";import"./Layer-1B0B10df.js";import"./Text-Bj9a0rsl.js";import"./DOMUtils-CfR-oYDo.js";import"./Label-CqAF8SIT.js";import"./ZIndexLayer-Cm42983z.js";import"./types-BtUrEkv_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-COSqs2Fw.js";import"./ActivePoints-7Ywr0SSF.js";import"./Dot-B_sEvCV-.js";import"./RegisterGraphicalItemId-DWRskJJq.js";import"./ErrorBarContext-ZqPrhrZR.js";import"./GraphicalItemClipPath-DbWDMhh-.js";import"./SetGraphicalItem-qm0_Djp4.js";import"./useAnimationId-CdSd8RaE.js";import"./getRadiusAndStrokeWidthFromDot-6mt_XejO.js";import"./ActiveShapeUtils-DE4EzjJ7.js";import"./isPlainObject-CJnQjQWE.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Tp-Mj0iL.js";import"./Trapezoid-BEm6NDNW.js";import"./Sector-D-Bqj8eF.js";import"./Symbols-DMcSZqwV.js";import"./symbol-b3bNJW4O.js";import"./step-CE2o8WHd.js";import"./Curve-C-HPs5Cn.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Cmlct8zH.js";import"./ChartSizeDimensions-DqRU3Tup.js";import"./OffsetShower-Orj9RHn3.js";import"./PlotAreaShower-BaW8-cBL.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,Re as default};
