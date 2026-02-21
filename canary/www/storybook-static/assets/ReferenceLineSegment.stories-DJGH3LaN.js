import{e}from"./iframe-9V8AjEOx.js";import{R as i}from"./arrayEqualityCheck--JByrSZG.js";import{C as p}from"./ComposedChart-IZ3mT89B.js";import{C as a}from"./CartesianGrid-NlelQ9W-.js";import{X as n}from"./XAxis-DLQ4yzhf.js";import{Y as s}from"./YAxis-CMVVgcYW.js";import{L as c}from"./Line-B0Dau14d.js";import{R as d}from"./ReferenceLine-D1DHoRCL.js";import{R as g}from"./RechartsHookInspector-BPTP_PJv.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CUsIIFoU.js";import"./immer-GD2CRReg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqXbC8Hs.js";import"./index-BMXE6tR4.js";import"./hooks-DNt9wj8m.js";import"./axisSelectors-QruKIcBb.js";import"./d3-scale-Bl0aS6m3.js";import"./zIndexSlice-B9w7kjZW.js";import"./renderedTicksSlice-C4Apcjxw.js";import"./CartesianChart-CpyTtyWF.js";import"./chartDataContext-DJ1KYV-U.js";import"./CategoricalChart-dRG2K9eI.js";import"./CartesianAxis-BQAjBvVB.js";import"./Layer-BqC-87gq.js";import"./Text-Bl4_Rxhh.js";import"./DOMUtils-BsKMkSa3.js";import"./Label-BTjKNwoq.js";import"./ZIndexLayer-jMQWKp1h.js";import"./types-O5g7_guk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D2pkvG7O.js";import"./ActivePoints-C1-72Ow0.js";import"./Dot-D5dnQ80q.js";import"./RegisterGraphicalItemId-CZx2estc.js";import"./ErrorBarContext-DJx-pzZ-.js";import"./GraphicalItemClipPath-C9Ikc3kX.js";import"./SetGraphicalItem-CKCVtDA0.js";import"./useAnimationId-DIbwNcNj.js";import"./getRadiusAndStrokeWidthFromDot-CL71UNXv.js";import"./ActiveShapeUtils-BMU98mA9.js";import"./isPlainObject-CxfM663_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSXeln9N.js";import"./Trapezoid-A27zrHNd.js";import"./Sector-BmAUhY_Z.js";import"./Symbols-BY884xTp.js";import"./symbol-CSV3itcb.js";import"./step-gLl9sxps.js";import"./Curve-DFGvX__4.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CwQkTyvb.js";import"./ChartSizeDimensions-CbBegVji.js";import"./OffsetShower-BP30_Vv4.js";import"./PlotAreaShower-BGwj-jTe.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
