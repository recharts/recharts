import{e}from"./iframe-BNAvIRSF.js";import{R as n}from"./arrayEqualityCheck-B_mhFHzb.js";import{C as p}from"./ComposedChart-CL-Wzbwp.js";import{C as s}from"./CartesianGrid-JU9Ty3P0.js";import{X as c}from"./XAxis-jNdEOqKJ.js";import{Y as f}from"./YAxis-DKn9Z0NX.js";import{L as l}from"./Line-Bse-X7XW.js";import{R as d}from"./ReferenceLine-BTw3I2VA.js";import{R as h}from"./RechartsHookInspector-RJGN-lnu.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D8b97oaV.js";import"./immer-CgHRgtA8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DOKHmNYT.js";import"./index-C8X3jAB2.js";import"./hooks-BLrpM1nt.js";import"./axisSelectors-BdwfMvGg.js";import"./d3-scale-H_vF25Xi.js";import"./zIndexSlice-Di15SS1w.js";import"./renderedTicksSlice-BJfEJ4_M.js";import"./CartesianChart-CvP_4bZU.js";import"./chartDataContext-CvjStfkk.js";import"./CategoricalChart-sDSM-fNf.js";import"./CartesianAxis-B-mMrgKm.js";import"./Layer-DWhwKERy.js";import"./Text-3IHlO_kG.js";import"./DOMUtils-PvS2Tri4.js";import"./Label-CPS78KHE.js";import"./ZIndexLayer-H82-bw69.js";import"./types-QGUyibIY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DDF_v5tC.js";import"./ActivePoints-BuD7fFwZ.js";import"./Dot-C0S93Sbg.js";import"./RegisterGraphicalItemId-Ddyr6RRu.js";import"./ErrorBarContext-BmA35ro-.js";import"./GraphicalItemClipPath-B3V5TXUV.js";import"./SetGraphicalItem-BnPwV1U_.js";import"./useAnimationId-COyixU_T.js";import"./getRadiusAndStrokeWidthFromDot-BJXSwpXZ.js";import"./ActiveShapeUtils-7ytblip2.js";import"./isPlainObject-D9rsbW2B.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DxFfTDWj.js";import"./Trapezoid-qTCS7j3n.js";import"./Sector-B7_OzMPm.js";import"./Symbols-DgKTLzDc.js";import"./symbol-CoAiT4va.js";import"./step-CmqF8yoP.js";import"./Curve-BiyZrQzX.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BjQmXn2i.js";import"./ChartSizeDimensions-BQzIEJvl.js";import"./OffsetShower-DQh6BuRU.js";import"./PlotAreaShower-C8HeOK1-.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
