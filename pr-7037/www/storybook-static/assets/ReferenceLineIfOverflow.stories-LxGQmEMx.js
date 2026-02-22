import{e}from"./iframe-DwKnaYxn.js";import{R as n}from"./arrayEqualityCheck-LpIzrfco.js";import{C as p}from"./ComposedChart-DVQptumT.js";import{C as s}from"./CartesianGrid-BvxKDgK5.js";import{X as c}from"./XAxis-BZQZZAmU.js";import{Y as f}from"./YAxis-CPIo8OmW.js";import{L as l}from"./Line-CajB4DXV.js";import{R as d}from"./ReferenceLine-BxcBtdeQ.js";import{R as h}from"./RechartsHookInspector-BulN8Qtf.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C4ASXxnl.js";import"./immer-DQq_9s85.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cx1zvPpd.js";import"./index-CdfNcBdj.js";import"./hooks-hd7QZ5DW.js";import"./axisSelectors-CHTcuo-V.js";import"./d3-scale-DF79GY39.js";import"./zIndexSlice-BYI3CC3N.js";import"./renderedTicksSlice-CSkX6jPi.js";import"./CartesianChart-CzQwlEOC.js";import"./chartDataContext-BLheDghz.js";import"./CategoricalChart-E4I9FfSw.js";import"./CartesianAxis-CcPlK-DU.js";import"./Layer-DSEoyjCD.js";import"./Text-Cmd1_Toj.js";import"./DOMUtils-Poqmn9Kz.js";import"./Label-V1o-IcdK.js";import"./ZIndexLayer-BN-fjZdO.js";import"./types-CuZ_PvfO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BWd9nqnf.js";import"./ActivePoints-O0bbVxi4.js";import"./Dot-Bm4ifZBZ.js";import"./RegisterGraphicalItemId-DJ-_fktQ.js";import"./ErrorBarContext-C_ynaDio.js";import"./GraphicalItemClipPath-BWTY-wx8.js";import"./SetGraphicalItem-BvmoZ9RU.js";import"./useAnimationId-DAuxgXsL.js";import"./getRadiusAndStrokeWidthFromDot-CGIH-rbC.js";import"./ActiveShapeUtils-BElib0Bt.js";import"./isPlainObject-CWJcMVMA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-bCycDAsX.js";import"./Trapezoid-lPFf9vCg.js";import"./Sector-DE27qkYe.js";import"./Symbols-C2QRSUXD.js";import"./symbol-CZd2cT8P.js";import"./step-Cbn8vCGE.js";import"./Curve-BGSMtIpM.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DfrlB0-M.js";import"./ChartSizeDimensions-Bj69MEnT.js";import"./OffsetShower-BpsLBEIx.js";import"./PlotAreaShower-5WwlvIXR.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
