import{e}from"./iframe-1J0v0kJa.js";import{R as n}from"./arrayEqualityCheck-Crr3Dzh6.js";import{C as p}from"./ComposedChart-hk6GI-DP.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BJ72W802.js";import{X as f}from"./XAxis-BA2sHg_J.js";import{Y as l}from"./YAxis-BN3lk6r1.js";import{L as d}from"./Line-BKAL78qy.js";import{R as h}from"./ReferenceLine-DOy-cmqr.js";import{R as w}from"./RechartsHookInspector-D3XyLt9P.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C05SE_tf.js";import"./immer-ZnQZAws8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-NfAPn5nO.js";import"./index-CooR3W3l.js";import"./hooks-D7UD8X0t.js";import"./axisSelectors-DmWq6GuE.js";import"./d3-scale-WGdCtqiA.js";import"./zIndexSlice-DMwFl-HJ.js";import"./renderedTicksSlice-CcC_3ltP.js";import"./CartesianChart-T051KWch.js";import"./chartDataContext-CLazaXIr.js";import"./CategoricalChart-_SeB5FDZ.js";import"./CartesianAxis-BEIIuhLy.js";import"./Layer-BVvsC5_K.js";import"./Text-DVd_qj4R.js";import"./DOMUtils-CddqG7G1.js";import"./Label-BoTwLtcO.js";import"./ZIndexLayer-Bol6PWej.js";import"./types-DbkoSsM0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DrCtqFWq.js";import"./ActivePoints-C2NgxcK8.js";import"./Dot-BM5MyVLI.js";import"./RegisterGraphicalItemId-Ds4EEh5p.js";import"./ErrorBarContext-BoDeu_Di.js";import"./GraphicalItemClipPath-AV19Jsyu.js";import"./SetGraphicalItem-CdiSFPyl.js";import"./useAnimationId-AI_H7XbQ.js";import"./getRadiusAndStrokeWidthFromDot-DVwfrbNw.js";import"./ActiveShapeUtils-DPgm42Av.js";import"./isPlainObject-yfWDawVf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CtnB5yHC.js";import"./Trapezoid-BQHCtBz1.js";import"./Sector-DrN7HSuk.js";import"./Symbols-B03fqPxI.js";import"./symbol-DdOQHYIO.js";import"./step-D8iwa8wm.js";import"./Curve-MBHSj-Hn.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-tjWZGZoc.js";import"./ChartSizeDimensions-DBgMadMY.js";import"./OffsetShower-L7gF9BZe.js";import"./PlotAreaShower-C_TnXU0T.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
