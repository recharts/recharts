import{e}from"./iframe-D1Hwi0RI.js";import{R as i}from"./arrayEqualityCheck-DQEOD_zw.js";import{C as a}from"./ComposedChart-DgxcfSQu.js";import{C as p}from"./CartesianGrid-BxNgwSyo.js";import{X as n}from"./XAxis-BuTZpXCP.js";import{Y as s}from"./YAxis-Bdw8XaXe.js";import{L as c}from"./Line-DpHBAjCF.js";import{R as d}from"./ReferenceLine-Bit55V1A.js";import{R as g}from"./RechartsHookInspector-DsUGDtNJ.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bz6XhQRL.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CXtEZB_H.js";import"./hooks-CSIs-51X.js";import"./axisSelectors-GEJN5kco.js";import"./zIndexSlice-D8jnnygc.js";import"./CartesianChart-Dc2mELGa.js";import"./chartDataContext-GCfI3aAK.js";import"./CategoricalChart-DQ6b8iW8.js";import"./CartesianAxis-CyxUGwT-.js";import"./Layer-Di0VROrF.js";import"./Text-DLOnQ8zM.js";import"./DOMUtils-dbB3jEW_.js";import"./Label-Bb86ILB8.js";import"./ZIndexLayer-By5F7TF9.js";import"./types-C-uSS9Dl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-hNtx3_VI.js";import"./ActivePoints-DbTDI5Wq.js";import"./Dot-BxaODjLb.js";import"./RegisterGraphicalItemId-Pd4SqxWN.js";import"./ErrorBarContext-DWrqh2-_.js";import"./GraphicalItemClipPath-Ba1a27e_.js";import"./SetGraphicalItem-DLoBPGEI.js";import"./useAnimationId-CwGlJXjy.js";import"./getRadiusAndStrokeWidthFromDot-CJ731Roi.js";import"./ActiveShapeUtils-CoHlE8BH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-YjLZgqxG.js";import"./Trapezoid-CD3SuCZk.js";import"./Sector-Dr9-p71P.js";import"./Symbols-0go88kKd.js";import"./Curve-CF532csu.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BkDkQzlc.js";import"./ChartSizeDimensions-CUepdASc.js";import"./OffsetShower-7LYmniyx.js";import"./PlotAreaShower-BWomwUUC.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
