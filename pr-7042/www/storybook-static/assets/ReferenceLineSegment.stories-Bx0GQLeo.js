import{e}from"./iframe-Dr9hlnt0.js";import{R as i}from"./arrayEqualityCheck-dGE5_Gdx.js";import{C as p}from"./ComposedChart-C3ymMAIf.js";import{C as a}from"./CartesianGrid-C-DxZLwk.js";import{X as n}from"./XAxis-DVCekQJU.js";import{Y as s}from"./YAxis-oVvY9CD_.js";import{L as c}from"./Line-DLj2NM4I.js";import{R as d}from"./ReferenceLine-DXLW464-.js";import{R as g}from"./RechartsHookInspector-DqXSZ2_4.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BcfXVXAk.js";import"./immer-B0cgghQh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DInH99Th.js";import"./index-IE9LPIX3.js";import"./hooks-CB3Bi2qN.js";import"./axisSelectors-BElW-4uO.js";import"./d3-scale-Kw50_LDj.js";import"./zIndexSlice-DGOFW2aZ.js";import"./renderedTicksSlice-CKBM6rCx.js";import"./CartesianChart-DxJdttbu.js";import"./chartDataContext-no4gboHT.js";import"./CategoricalChart-BlqKECmV.js";import"./CartesianAxis-zfjDIuu9.js";import"./Layer-Dau6qZl4.js";import"./Text-5hzj-3E2.js";import"./DOMUtils-CHMlhwBF.js";import"./Label-Cwqjf1nY.js";import"./ZIndexLayer-bo4FLnP8.js";import"./types-BT9nDPZN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DLDWRsmH.js";import"./ActivePoints-BWlIiscJ.js";import"./Dot-G9S3vDXU.js";import"./RegisterGraphicalItemId-DaJnSa8q.js";import"./ErrorBarContext-DFPKgud5.js";import"./GraphicalItemClipPath-C96TQI3r.js";import"./SetGraphicalItem-13vPI63j.js";import"./useAnimationId-DF7fT-LB.js";import"./getRadiusAndStrokeWidthFromDot-IhVKPv-0.js";import"./ActiveShapeUtils-Zy3mhGJ3.js";import"./isPlainObject-CA9cA3dI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C0CBW5qs.js";import"./Trapezoid-B4y_3kG1.js";import"./Sector-B2l0FABS.js";import"./Symbols-DjCtNUtk.js";import"./symbol-DBg6OtuT.js";import"./step-0gc20F8a.js";import"./Curve-B9wE7HPg.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Dj7LSIr-.js";import"./ChartSizeDimensions-DlMrTXA2.js";import"./OffsetShower-DfvMVNLi.js";import"./PlotAreaShower-DpM8yPVC.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
