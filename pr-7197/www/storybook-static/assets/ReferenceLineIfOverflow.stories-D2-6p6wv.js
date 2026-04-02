import{e}from"./iframe-CbsqwKCk.js";import{R as n}from"./arrayEqualityCheck-B4FTx25I.js";import{C as p}from"./ComposedChart-CyCs0zfk.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CSBt72E4.js";import{X as f}from"./XAxis-BIdlq_pt.js";import{Y as l}from"./YAxis-DsWBihca.js";import{L as d}from"./Line-C2YpBvOE.js";import{R as h}from"./ReferenceLine-B1-0Ms0g.js";import{R as w}from"./RechartsHookInspector-Damt6MYH.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DHVE9Qfq.js";import"./immer-D83u5OhZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CaUG62oZ.js";import"./index-Bo04Zijq.js";import"./hooks-F0Z_c1HD.js";import"./axisSelectors-DXxkO63G.js";import"./d3-scale-PAY7D1_G.js";import"./zIndexSlice-CDw3ZEmc.js";import"./renderedTicksSlice-BdDgwbXy.js";import"./CartesianChart-CbTSIjqR.js";import"./chartDataContext-IGsi4pC_.js";import"./CategoricalChart-Xd7p2iPq.js";import"./CartesianAxis-wjZQBsHa.js";import"./Layer-wLThQp-f.js";import"./Text-DA8mBm_w.js";import"./DOMUtils-BTAw3duz.js";import"./Label-r3u5Hs--.js";import"./ZIndexLayer-CIamb34_.js";import"./types-QtIGWOWS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DODSDo-0.js";import"./ActivePoints-lpfaj2C4.js";import"./Dot-CuN0ZmgD.js";import"./RegisterGraphicalItemId-DHXh_EOv.js";import"./ErrorBarContext-DUhaTo8P.js";import"./GraphicalItemClipPath-Cc_74RAJ.js";import"./SetGraphicalItem-wEHd-RTz.js";import"./useAnimationId-ika4uZpq.js";import"./getRadiusAndStrokeWidthFromDot-DI4cxlJn.js";import"./ActiveShapeUtils-Bhkbjsma.js";import"./isPlainObject-DdM1ysjb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ctrb2AG7.js";import"./Trapezoid-uYQTNnF6.js";import"./Sector-GnbpuK9-.js";import"./Symbols-hUvwFh1j.js";import"./symbol-BCOnJOrD.js";import"./step-uZ9iGWhX.js";import"./Curve-d3v-cFMl.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BHJKnvwH.js";import"./ChartSizeDimensions-D9ExJIau.js";import"./OffsetShower-Bv4vecoR.js";import"./PlotAreaShower-XHfKy6Ay.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
