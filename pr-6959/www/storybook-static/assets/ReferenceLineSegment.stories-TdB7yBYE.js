import{e}from"./iframe-lWBX64pI.js";import{R as i}from"./arrayEqualityCheck-Bc4Ot0PW.js";import{C as a}from"./ComposedChart-C9sU2uaY.js";import{C as p}from"./CartesianGrid-Dbc3AG7y.js";import{X as n}from"./XAxis-TPgD44nE.js";import{Y as s}from"./YAxis-Bfy5qxVv.js";import{L as c}from"./Line-bzYOlBDc.js";import{R as d}from"./ReferenceLine-DhIX7xOq.js";import{R as g}from"./RechartsHookInspector-DQzLYc7l.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-F9aAykDU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Djqv5WdD.js";import"./hooks-DxrNJMr4.js";import"./axisSelectors-BWmy8ZsX.js";import"./zIndexSlice-DrTdUYuM.js";import"./CartesianChart-Dxi5Jpt2.js";import"./chartDataContext-BrNcW05w.js";import"./CategoricalChart-CNbBFS0r.js";import"./CartesianAxis-CCAPZiMN.js";import"./Layer-BUTtt9Bz.js";import"./Text-Cr9QQRZN.js";import"./DOMUtils-DKHDOrvS.js";import"./Label-BnM6Z2ZH.js";import"./ZIndexLayer-BWtmJpZw.js";import"./types-CeMusotU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Caa168vS.js";import"./ActivePoints-4ReyECY6.js";import"./Dot-CQ7tD8sg.js";import"./RegisterGraphicalItemId-nVIwNLcs.js";import"./ErrorBarContext-BmsITwJg.js";import"./GraphicalItemClipPath-B0xhchCc.js";import"./SetGraphicalItem-CksZixPS.js";import"./useAnimationId-Bj8WvXUY.js";import"./getRadiusAndStrokeWidthFromDot-C6m3BF6S.js";import"./ActiveShapeUtils-BBPTy8PE.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2euSkY-d.js";import"./Trapezoid-C8NVxs2k.js";import"./Sector-EvQq1WWA.js";import"./Symbols-D38f067d.js";import"./Curve-BU8W3PHf.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-04LEDiAf.js";import"./ChartSizeDimensions-BCIgaepb.js";import"./OffsetShower-CEpgJiJ4.js";import"./PlotAreaShower-BJAGaSX0.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
