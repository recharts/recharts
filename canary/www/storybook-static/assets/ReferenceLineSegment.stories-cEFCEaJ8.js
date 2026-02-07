import{e}from"./iframe-DhLWPZ06.js";import{R as i}from"./arrayEqualityCheck-CC1O7uMi.js";import{C as a}from"./ComposedChart-DqQWtOY7.js";import{C as p}from"./CartesianGrid-Dbvz7fke.js";import{X as n}from"./XAxis-DHBBBHf5.js";import{Y as s}from"./YAxis-CnLq9B_y.js";import{L as c}from"./Line-DV1Pc56J.js";import{R as d}from"./ReferenceLine-XeA0ZzPW.js";import{R as g}from"./RechartsHookInspector-BYy17HVN.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Xflu8RP3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DUMd0Jc6.js";import"./hooks-BVelaaLp.js";import"./axisSelectors-DMZtzusH.js";import"./zIndexSlice-DphDhRje.js";import"./CartesianChart-XrmXSdkV.js";import"./chartDataContext-D-yHh9FI.js";import"./CategoricalChart-CZEP5E7E.js";import"./CartesianAxis-DBjvK8IT.js";import"./Layer-DYv-jvxI.js";import"./Text-DO5FmLPB.js";import"./DOMUtils-CqWLBihg.js";import"./Label-FSHYxmdz.js";import"./ZIndexLayer-DD1HiNcR.js";import"./types-C2AjUdZP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BtUFOzkx.js";import"./ActivePoints-DprIqvLX.js";import"./Dot-BoxzeF_p.js";import"./RegisterGraphicalItemId-DKys76eX.js";import"./ErrorBarContext-D2Y9d5di.js";import"./GraphicalItemClipPath-CuDzi9bq.js";import"./SetGraphicalItem-BLAlPe4G.js";import"./useAnimationId-C9SVwlUf.js";import"./getRadiusAndStrokeWidthFromDot-Lki9i3qE.js";import"./ActiveShapeUtils-BM0r3s-g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DZfrdEyG.js";import"./Trapezoid-C38TpHLa.js";import"./Sector-DNph1k80.js";import"./Symbols-BmApJZ92.js";import"./Curve-CrhEQPlh.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DvWkBSj_.js";import"./ChartSizeDimensions-C4EMLUii.js";import"./OffsetShower-DlJYxrX-.js";import"./PlotAreaShower-HP7o8TwR.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
