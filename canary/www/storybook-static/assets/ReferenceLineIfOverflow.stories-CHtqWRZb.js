import{e}from"./iframe-9V8AjEOx.js";import{R as n}from"./arrayEqualityCheck--JByrSZG.js";import{C as p}from"./ComposedChart-IZ3mT89B.js";import{C as s}from"./CartesianGrid-NlelQ9W-.js";import{X as c}from"./XAxis-DLQ4yzhf.js";import{Y as f}from"./YAxis-CMVVgcYW.js";import{L as l}from"./Line-B0Dau14d.js";import{R as d}from"./ReferenceLine-D1DHoRCL.js";import{R as h}from"./RechartsHookInspector-BPTP_PJv.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CUsIIFoU.js";import"./immer-GD2CRReg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqXbC8Hs.js";import"./index-BMXE6tR4.js";import"./hooks-DNt9wj8m.js";import"./axisSelectors-QruKIcBb.js";import"./d3-scale-Bl0aS6m3.js";import"./zIndexSlice-B9w7kjZW.js";import"./renderedTicksSlice-C4Apcjxw.js";import"./CartesianChart-CpyTtyWF.js";import"./chartDataContext-DJ1KYV-U.js";import"./CategoricalChart-dRG2K9eI.js";import"./CartesianAxis-BQAjBvVB.js";import"./Layer-BqC-87gq.js";import"./Text-Bl4_Rxhh.js";import"./DOMUtils-BsKMkSa3.js";import"./Label-BTjKNwoq.js";import"./ZIndexLayer-jMQWKp1h.js";import"./types-O5g7_guk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D2pkvG7O.js";import"./ActivePoints-C1-72Ow0.js";import"./Dot-D5dnQ80q.js";import"./RegisterGraphicalItemId-CZx2estc.js";import"./ErrorBarContext-DJx-pzZ-.js";import"./GraphicalItemClipPath-C9Ikc3kX.js";import"./SetGraphicalItem-CKCVtDA0.js";import"./useAnimationId-DIbwNcNj.js";import"./getRadiusAndStrokeWidthFromDot-CL71UNXv.js";import"./ActiveShapeUtils-BMU98mA9.js";import"./isPlainObject-CxfM663_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSXeln9N.js";import"./Trapezoid-A27zrHNd.js";import"./Sector-BmAUhY_Z.js";import"./Symbols-BY884xTp.js";import"./symbol-CSV3itcb.js";import"./step-gLl9sxps.js";import"./Curve-DFGvX__4.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CwQkTyvb.js";import"./ChartSizeDimensions-CbBegVji.js";import"./OffsetShower-BP30_Vv4.js";import"./PlotAreaShower-BGwj-jTe.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
