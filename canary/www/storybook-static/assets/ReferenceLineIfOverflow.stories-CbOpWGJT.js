import{e}from"./iframe-DrwMi_jY.js";import{R as n}from"./arrayEqualityCheck-B-j0Xn6j.js";import{C as p}from"./ComposedChart-pyYzeAOr.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BvNeKc46.js";import{X as f}from"./XAxis-31NaFi-n.js";import{Y as l}from"./YAxis-BCaqdjY5.js";import{L as d}from"./Line-BuQavlay.js";import{R as h}from"./ReferenceLine-6TyCc2Kq.js";import{R as w}from"./RechartsHookInspector-Dgz_6twg.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-s4nUKxVc.js";import"./immer-CGi3HKm3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BPsUoTC1.js";import"./index-BfRPVrJS.js";import"./hooks-DuA_RFk6.js";import"./axisSelectors-Df-PAYL2.js";import"./d3-scale-CR0wzDjj.js";import"./zIndexSlice-Cq0CmY1s.js";import"./renderedTicksSlice-6MUNcuFU.js";import"./CartesianChart-C-l714_S.js";import"./chartDataContext-Dpw29ePn.js";import"./CategoricalChart-Cnq8zR7d.js";import"./CartesianAxis-DnPHxzem.js";import"./Layer-DYkX7ETa.js";import"./Text-BDAX0lGk.js";import"./DOMUtils-JSRhYAW0.js";import"./Label-Y-xTk_cW.js";import"./ZIndexLayer-BvKo2Q94.js";import"./types-BfZOKs5E.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-QKY7d0Xg.js";import"./ActivePoints-DQSj2864.js";import"./Dot-Bm1SdT5p.js";import"./RegisterGraphicalItemId-C8YIxCe8.js";import"./ErrorBarContext-DoWBXbsV.js";import"./GraphicalItemClipPath-CHSUdKNG.js";import"./SetGraphicalItem-Bw_3CFfP.js";import"./useAnimationId-BDrjbpdr.js";import"./getRadiusAndStrokeWidthFromDot-CvXHsMkU.js";import"./ActiveShapeUtils-BuFEUH-Q.js";import"./isPlainObject-DaSvI5No.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-s1druNuz.js";import"./Trapezoid-AXqmqz4r.js";import"./Sector-DniAdCyK.js";import"./Symbols-B6BVciUF.js";import"./symbol-B1XBVJt7.js";import"./step-8t-ymKLI.js";import"./Curve-B_0v1Aat.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CmbvRTYj.js";import"./ChartSizeDimensions-D4m-G81R.js";import"./OffsetShower-r4JmIKW8.js";import"./PlotAreaShower-CAZL1ycm.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
