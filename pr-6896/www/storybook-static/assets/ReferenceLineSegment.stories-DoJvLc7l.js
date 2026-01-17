import{e}from"./iframe-C7dv0yNH.js";import{R as i}from"./arrayEqualityCheck-DyqdVI3P.js";import{C as a}from"./ComposedChart-FscYfn8A.js";import{C as p}from"./CartesianGrid-TP-3ZJJg.js";import{X as n}from"./XAxis-B2XI662D.js";import{Y as s}from"./YAxis-BUtL7A2A.js";import{L as c}from"./Line-CglyNln1.js";import{R as d}from"./ReferenceLine-CShszDJ0.js";import{R as g}from"./RechartsHookInspector-lhW0mFdD.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C_lLZ5sY.js";import"./PolarUtils-Cz9TAlOj.js";import"./RechartsWrapper-C9EYdUpz.js";import"./hooks-sLNaPpHz.js";import"./axisSelectors-C_30vZFc.js";import"./zIndexSlice-BInAuLle.js";import"./CartesianChart-DFTdRJBL.js";import"./chartDataContext-BIHEfK7s.js";import"./CategoricalChart-CHqTaTxC.js";import"./CartesianAxis-qkbdisew.js";import"./Layer-BTAEH97T.js";import"./Text-c0T3JDCh.js";import"./DOMUtils-C38PLAG9.js";import"./Label-pLuTDL7t.js";import"./ZIndexLayer-DHYRzIS_.js";import"./types-CjrwKJ5w.js";import"./ReactUtils-Jbry0BUC.js";import"./ActivePoints-DNYEbsDX.js";import"./Dot-CQ29Eu8v.js";import"./RegisterGraphicalItemId-DhjtTH4e.js";import"./ErrorBarContext-FWB8EeAg.js";import"./GraphicalItemClipPath-DkWi_iXg.js";import"./SetGraphicalItem-dcgdauaK.js";import"./useAnimationId-y4GFPobY.js";import"./getRadiusAndStrokeWidthFromDot-BPy-vWAZ.js";import"./ActiveShapeUtils-BhYBD1tZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BknPpfrj.js";import"./Trapezoid-B8NGdIRJ.js";import"./Sector-DHOItzHM.js";import"./Symbols-CWjjEhVI.js";import"./Curve-DWNdd9EU.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CtbSRCbY.js";import"./ChartSizeDimensions-DjjqF_40.js";import"./OffsetShower-CNtlgBc5.js";import"./PlotAreaShower-DP2LRcem.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
