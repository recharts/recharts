import{e}from"./iframe-BEaYZ8Ke.js";import{R as n}from"./arrayEqualityCheck-BO9iL3J2.js";import{C as p}from"./ComposedChart-DUwCMO8t.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BgVx0tSK.js";import{X as f}from"./XAxis-B2ZFMdFE.js";import{Y as l}from"./YAxis-D75udpV7.js";import{L as d}from"./Line-DgcXsGuE.js";import{R as h}from"./ReferenceLine-CeeyqtWZ.js";import{R as w}from"./RechartsHookInspector-D2tl7RgO.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-w4GCi4u5.js";import"./immer-ByOrN6rV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxjX8qFn.js";import"./index-BUXBVCXz.js";import"./hooks-BJ-fa7mf.js";import"./axisSelectors-DCKCETlC.js";import"./d3-scale-BqTC062g.js";import"./zIndexSlice-DSliDKHU.js";import"./renderedTicksSlice-2DyJU65H.js";import"./CartesianChart-Da_Lqy5J.js";import"./chartDataContext-416DyL2h.js";import"./CategoricalChart-CsR3P7Yd.js";import"./CartesianAxis-CxvGMdSy.js";import"./Layer-BLQnqq8X.js";import"./Text-DmuVr28j.js";import"./DOMUtils-w1bHB0TX.js";import"./Label-CF7kInX4.js";import"./ZIndexLayer-D6bVHPc-.js";import"./types-N9mcSd1s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DilCfUhS.js";import"./ActivePoints-D_4hsixX.js";import"./Dot-CcBnwLaV.js";import"./RegisterGraphicalItemId-BaBHxSFh.js";import"./ErrorBarContext-BjGO5YSj.js";import"./GraphicalItemClipPath-CM553tH1.js";import"./SetGraphicalItem-CxB6zzLj.js";import"./useAnimationId-Ngy9FXMV.js";import"./getRadiusAndStrokeWidthFromDot-Ditulol4.js";import"./ActiveShapeUtils-MXRMbrW9.js";import"./isPlainObject-DJ4nWZqf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B25XPYc9.js";import"./Trapezoid-q196FHE8.js";import"./Sector-CEm4BkOd.js";import"./Symbols-BPjsU5gQ.js";import"./symbol-CNAvV-XC.js";import"./step-C3Uiieba.js";import"./Curve-atLapjtD.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D7lPj8lh.js";import"./ChartSizeDimensions-57Mz-9Pr.js";import"./OffsetShower-D0pz8TZy.js";import"./PlotAreaShower-uQsOnF-d.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
