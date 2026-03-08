import{e}from"./iframe-DujSE0UK.js";import{R as i}from"./arrayEqualityCheck-D8VjMjvf.js";import{C as p}from"./ComposedChart-DcASGjDc.js";import{C as a}from"./CartesianGrid-DMmCJ2YK.js";import{X as n}from"./XAxis-YY1xwgnu.js";import{Y as s}from"./YAxis-DGH9UPdi.js";import{L as c}from"./Line-D-gcbtsu.js";import{R as d}from"./ReferenceLine-COU7G27m.js";import{R as g}from"./RechartsHookInspector-CRMB31G9.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C48txAh5.js";import"./immer-DoffRpuJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZxyCKqo.js";import"./index-BzWEaTVN.js";import"./hooks-BfEZyruk.js";import"./axisSelectors-CplbQtmA.js";import"./d3-scale-DAOxFYCv.js";import"./zIndexSlice-DxmTVpDq.js";import"./renderedTicksSlice-qOFace14.js";import"./CartesianChart-C8FLn_u-.js";import"./chartDataContext-C-qHRTgP.js";import"./CategoricalChart-H-u-kan4.js";import"./CartesianAxis-DVd0f2kI.js";import"./Layer-B-nUYb5l.js";import"./Text-qQLvw26P.js";import"./DOMUtils-CiKk1OJG.js";import"./Label-D6PynPvp.js";import"./ZIndexLayer-sSQKP7NE.js";import"./types-D6xVUDWG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CJKtjJwj.js";import"./ActivePoints-BzgKbyfb.js";import"./Dot-Bc7S1y82.js";import"./RegisterGraphicalItemId-CBH-yQFt.js";import"./ErrorBarContext-D8NP2kg_.js";import"./GraphicalItemClipPath-SL3od_yD.js";import"./SetGraphicalItem-BsRnOhvR.js";import"./useAnimationId-DcYOTGVs.js";import"./getRadiusAndStrokeWidthFromDot-BIQm3Qe0.js";import"./ActiveShapeUtils-CfdmikBA.js";import"./isPlainObject-PvV2F2dX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-SsDZNd-D.js";import"./Trapezoid-C4tWIuQV.js";import"./Sector-FLQA7LtL.js";import"./Symbols-nyT1XPVO.js";import"./symbol-CaRsNxSw.js";import"./step-BqfvS8lo.js";import"./Curve-BIsIHsFZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B_iM8tEy.js";import"./ChartSizeDimensions-DEiQIg5P.js";import"./OffsetShower-CF4VV-Vy.js";import"./PlotAreaShower-CLUz5lpa.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
