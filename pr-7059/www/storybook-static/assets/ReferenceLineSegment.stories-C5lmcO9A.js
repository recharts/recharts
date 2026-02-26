import{e}from"./iframe-CZHGkDMk.js";import{R as i}from"./arrayEqualityCheck-t7_Vj7sH.js";import{C as p}from"./ComposedChart-mSvqj3lP.js";import{C as a}from"./CartesianGrid-BIRxsn1l.js";import{X as n}from"./XAxis-Cs9WyPyM.js";import{Y as s}from"./YAxis-CdFo-ouM.js";import{L as c}from"./Line-ClQhLAMG.js";import{R as d}from"./ReferenceLine-CizUfhfg.js";import{R as g}from"./RechartsHookInspector-C2iN9faU.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CKtEFeCC.js";import"./immer-CfF_q19L.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BGk6MiSH.js";import"./index-D3qhFu-Q.js";import"./hooks-CUvOjLlM.js";import"./axisSelectors-D3XLf68-.js";import"./d3-scale-CJ4CmDjU.js";import"./zIndexSlice-GashnqAX.js";import"./renderedTicksSlice-BHMidfzd.js";import"./CartesianChart-DdydfBsf.js";import"./chartDataContext-jJyFb7d8.js";import"./CategoricalChart-DKqzOjpF.js";import"./CartesianAxis-DF2xaChD.js";import"./Layer-BtRR3UnB.js";import"./Text-Dz8Smy7e.js";import"./DOMUtils-Dplq7MJH.js";import"./Label-BXzi6VYN.js";import"./ZIndexLayer-BsPUf8rB.js";import"./types-DWMIcrlC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BbDB6XIE.js";import"./ActivePoints-DNK08ppe.js";import"./Dot-B15ey3u9.js";import"./RegisterGraphicalItemId-ZIh58Q32.js";import"./ErrorBarContext-CBnG3rqw.js";import"./GraphicalItemClipPath-ChUVq13t.js";import"./SetGraphicalItem-CkEorLUE.js";import"./useAnimationId-Dafl-wjr.js";import"./getRadiusAndStrokeWidthFromDot-BZkgtEFS.js";import"./ActiveShapeUtils-o-rZaL_n.js";import"./isPlainObject-D32szo0O.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-edUSSKkv.js";import"./Trapezoid-BJG4OUz6.js";import"./Sector-DW-S4DGt.js";import"./Symbols-Ctb7kZia.js";import"./symbol-CijKNxf6.js";import"./step-Dqoonar_.js";import"./Curve-Blj5JdwD.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CdrqNv6J.js";import"./ChartSizeDimensions-CNgNJ-I_.js";import"./OffsetShower-CN3I_bcm.js";import"./PlotAreaShower-AE8bmklz.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
