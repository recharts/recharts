import{e}from"./iframe-Bg9Z345n.js";import{R as n}from"./arrayEqualityCheck-CR8W5Kti.js";import{C as p}from"./ComposedChart-XHqgTgy-.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dn3x157K.js";import{X as f}from"./XAxis-DhRZk_Mh.js";import{Y as l}from"./YAxis-BhiIVd-U.js";import{L as d}from"./Line-gMUWcZmO.js";import{R as h}from"./ReferenceLine-DgbmGJIj.js";import{R as w}from"./RechartsHookInspector-DZje97zi.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-1kFCboKo.js";import"./immer-BVutyhQF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8iTtnHJd.js";import"./index-DmHLw308.js";import"./hooks-BQaOS62t.js";import"./axisSelectors-26bP4L-h.js";import"./d3-scale-Dqhx0vW7.js";import"./zIndexSlice-peT_55F_.js";import"./renderedTicksSlice-By7COYk0.js";import"./CartesianChart-LuczCI7G.js";import"./chartDataContext-UodH6WPb.js";import"./CategoricalChart-DxtCX4Pl.js";import"./CartesianAxis-2wCCgYqS.js";import"./Layer-BdGV6vMM.js";import"./Text-DxC6lCk_.js";import"./DOMUtils-DkCGUMsy.js";import"./Label-CELZqSQs.js";import"./ZIndexLayer-DPL5778T.js";import"./types-B4W4ehrV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BmxePv9D.js";import"./ActivePoints-BR-WzUNj.js";import"./Dot-Bp1BlqgP.js";import"./RegisterGraphicalItemId-CQ218WRb.js";import"./ErrorBarContext-Cj6LG5IF.js";import"./GraphicalItemClipPath-DwPF2ph8.js";import"./SetGraphicalItem-H_2GMEv6.js";import"./useAnimationId-DlZyApEc.js";import"./getRadiusAndStrokeWidthFromDot-DAE3CzX3.js";import"./ActiveShapeUtils-te7DRz-E.js";import"./isPlainObject-Bo6U1upe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-EnxeHGuf.js";import"./Trapezoid-DbTvkq0k.js";import"./Sector-Cn3PZ_qJ.js";import"./Symbols-tflhkrqf.js";import"./symbol-Bo8u8Uca.js";import"./step-DoGAfiJ-.js";import"./Curve-CW_ra8M9.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CjwjTBDZ.js";import"./ChartSizeDimensions-Uo90Geyy.js";import"./OffsetShower-C3m1IvZt.js";import"./PlotAreaShower-CfpcGPOz.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
