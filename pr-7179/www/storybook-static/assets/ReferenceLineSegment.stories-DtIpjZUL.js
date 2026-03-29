import{e}from"./iframe-DqE0HhDh.js";import{R as i}from"./arrayEqualityCheck-BhYj9TRB.js";import{C as p}from"./ComposedChart-zcx9iDtH.js";import{C as a}from"./CartesianGrid-DoUWc-aJ.js";import{X as n}from"./XAxis-C0xiJ-tU.js";import{Y as s}from"./YAxis-CxtIp3Fv.js";import{L as c}from"./Line-CRKf7T1y.js";import{R as d}from"./ReferenceLine-CTcvrvMB.js";import{R as g}from"./RechartsHookInspector-euBm-j1Q.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B0zUW797.js";import"./immer-DaO_pvPG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-HEjAodTD.js";import"./index-CKBMJiTG.js";import"./hooks-yD69KcYZ.js";import"./axisSelectors-DBPKow-C.js";import"./d3-scale-BFk6iKoW.js";import"./zIndexSlice-VVzaKraz.js";import"./renderedTicksSlice-DXSpE_fB.js";import"./CartesianChart-yHIHv3q8.js";import"./chartDataContext-Bc6WqcUu.js";import"./CategoricalChart-CIvi1KrP.js";import"./CartesianAxis-BflK07ha.js";import"./Layer-DVJHVubL.js";import"./Text-BvcQj2uR.js";import"./DOMUtils-Rt6oxOkz.js";import"./Label-BC1NNDJR.js";import"./ZIndexLayer-DiFU3mdL.js";import"./types-DTL0qiru.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D5QixmYd.js";import"./ActivePoints-CSJ_ljSz.js";import"./Dot-KnUtLjFJ.js";import"./RegisterGraphicalItemId-CEsZ-P-v.js";import"./ErrorBarContext-B9B0bG7x.js";import"./GraphicalItemClipPath-iQzHXFpk.js";import"./SetGraphicalItem-BjVOdg4M.js";import"./useAnimationId-BH8Y0C-h.js";import"./getRadiusAndStrokeWidthFromDot-CIcwAwcp.js";import"./ActiveShapeUtils-DeEcXvYf.js";import"./isPlainObject-ClSQ8ayO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CjxlKMCH.js";import"./Trapezoid-BrfeAX72.js";import"./Sector-HtnhKewF.js";import"./Symbols-OgGFg2Oe.js";import"./symbol-CIQc0sSb.js";import"./step-Mkfg8JSi.js";import"./Curve-DSraN8-A.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BN77NN_W.js";import"./ChartSizeDimensions-DB_WkeO6.js";import"./OffsetShower-D_wBefSQ.js";import"./PlotAreaShower-CX6NyhGu.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
