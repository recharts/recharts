import{e}from"./iframe-C04w6IgM.js";import{R as i}from"./arrayEqualityCheck-CbUGNhnJ.js";import{C as a}from"./ComposedChart-CocGbXJ_.js";import{C as p}from"./CartesianGrid-NOO7UTOC.js";import{X as n}from"./XAxis-BLBsMt8p.js";import{Y as s}from"./YAxis-Bx_U4OHG.js";import{L as c}from"./Line-CyTxFKog.js";import{R as d}from"./ReferenceLine-nlJ_sk5l.js";import{R as g}from"./RechartsHookInspector-B7Jr2nYf.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-W7dKz5yL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CFnGMsu4.js";import"./hooks-Cld4lrxT.js";import"./axisSelectors-BYq9-SUS.js";import"./zIndexSlice-BbE5d2nx.js";import"./CartesianChart-enHf794Z.js";import"./chartDataContext-Cjixp2uN.js";import"./CategoricalChart-PYyhSed2.js";import"./CartesianAxis-02lidDov.js";import"./Layer-DCya1uir.js";import"./Text-BJaKJCkK.js";import"./DOMUtils-BGMw9OAN.js";import"./Label-B7VXzhwV.js";import"./ZIndexLayer-HIOEAvam.js";import"./types-D-OVIK3i.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-C2UklmlD.js";import"./ActivePoints-BaLEk5hj.js";import"./Dot-FCeRraIm.js";import"./RegisterGraphicalItemId-DHraWFR-.js";import"./ErrorBarContext-vRJZfYBF.js";import"./GraphicalItemClipPath-Do9yu51T.js";import"./SetGraphicalItem-vjtDhulh.js";import"./useAnimationId-DPZtvNGp.js";import"./getRadiusAndStrokeWidthFromDot-DFtLqJEr.js";import"./ActiveShapeUtils-BwfeuSce.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DXVXA4zS.js";import"./Trapezoid-C_oXf8hs.js";import"./Sector-Cbb0SBJZ.js";import"./Symbols-DPND5ycq.js";import"./Curve-BQk4xMcU.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Demzea1L.js";import"./ChartSizeDimensions-BMKfYLeY.js";import"./OffsetShower-RZSmdjyo.js";import"./PlotAreaShower-BeZsrL7O.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
