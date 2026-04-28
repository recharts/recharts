import{e}from"./iframe-KDaejyXN.js";import{R as i}from"./arrayEqualityCheck-Dl9si1nG.js";import{C as p}from"./ComposedChart-Da77r5Ei.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BFk4wEkm.js";import{X as s}from"./XAxis-CUWzsXQO.js";import{Y as c}from"./YAxis-CqYxMeQG.js";import{L as d}from"./Line-D4d4pIVB.js";import{R as g}from"./ReferenceLine-BMRZYpSH.js";import{R as f}from"./RechartsHookInspector-BNR7Zm8b.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BkMgUNPT.js";import"./immer-CeGNtgFu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D4JhW72j.js";import"./index-DSI_5Wf4.js";import"./hooks-CwyWi44i.js";import"./axisSelectors-BceHH7kX.js";import"./d3-scale-CG0ZS8xo.js";import"./zIndexSlice-rJuXE5Mc.js";import"./renderedTicksSlice-B9nrJdqK.js";import"./CartesianChart-CCFhyuSh.js";import"./chartDataContext-B8zHImkQ.js";import"./CategoricalChart-BdhxEmbd.js";import"./CartesianAxis-BiIKu8kc.js";import"./Layer-SuuPoHJx.js";import"./Text-QAqYT_st.js";import"./DOMUtils-nQzBqLwC.js";import"./Label-qsNuh3C9.js";import"./ZIndexLayer-ByxBNcmF.js";import"./types-D57AIWPR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Cz14zwuP.js";import"./ActivePoints-9qhwqgPR.js";import"./Dot-BonfgY2V.js";import"./RegisterGraphicalItemId-Dm0pQXAu.js";import"./ErrorBarContext-BOfeTKVj.js";import"./GraphicalItemClipPath-D6jTsWti.js";import"./SetGraphicalItem-F9UKQ2Ti.js";import"./useAnimationId-BgX8Z8_i.js";import"./getRadiusAndStrokeWidthFromDot-BSb3e5WQ.js";import"./ActiveShapeUtils-CHydaFDW.js";import"./isPlainObject-DwPMRYDf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7hb1YKX.js";import"./Trapezoid-DebRFFpI.js";import"./Sector-Dm_k8cyb.js";import"./Symbols-DZnm1ivu.js";import"./symbol-BVVD6ru2.js";import"./step-DG8IXFxN.js";import"./Curve-CK8qujc-.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BtJXyiTG.js";import"./ChartSizeDimensions-DVpdAMro.js";import"./OffsetShower-CxuZTe0D.js";import"./PlotAreaShower-N-DfZF_A.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
