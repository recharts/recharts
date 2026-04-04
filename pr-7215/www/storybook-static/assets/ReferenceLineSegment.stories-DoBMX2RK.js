import{e}from"./iframe-BA-zV7_F.js";import{R as i}from"./arrayEqualityCheck-BqA822v0.js";import{C as p}from"./ComposedChart-DGaIMIIA.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CBtq2Jrg.js";import{X as s}from"./XAxis-DC7WjUX8.js";import{Y as c}from"./YAxis-32LA6dK9.js";import{L as d}from"./Line-AsvZMwsR.js";import{R as g}from"./ReferenceLine-N7VvxZfv.js";import{R as f}from"./RechartsHookInspector-D0XJS29G.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DAB-gcAU.js";import"./immer-CQr9v0v0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-mihAAWay.js";import"./index-B7YX6_DJ.js";import"./hooks-BhKgrcGm.js";import"./axisSelectors-C-c05xug.js";import"./d3-scale-DG9Ho5_0.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-CahP5Bvu.js";import"./renderedTicksSlice-CICucQq1.js";import"./CartesianChart-BDebLbDY.js";import"./chartDataContext-CAEi_CMV.js";import"./CategoricalChart-C254V1pE.js";import"./CartesianAxis-C3WTNiVK.js";import"./Layer-CfzD199M.js";import"./Text-reYRnfFB.js";import"./DOMUtils-DH-1IhDl.js";import"./Label-CHedA7kt.js";import"./ZIndexLayer-BBpTuRSZ.js";import"./types-mhJjiQ_4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./AnimatedItems-Dh5-Zm6U.js";import"./useAnimationId-DojuRQal.js";import"./ActivePoints-hBuzQYc_.js";import"./Dot---bkTzjD.js";import"./RegisterGraphicalItemId-pJFOOmQA.js";import"./ErrorBarContext-CGvFvXH0.js";import"./GraphicalItemClipPath-Bm1jNNtI.js";import"./SetGraphicalItem-ebt92THW.js";import"./getRadiusAndStrokeWidthFromDot-7IUVpSgw.js";import"./ActiveShapeUtils-fUtPyr_w.js";import"./isPlainObject-C-Ml-lWL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bu9DVT5n.js";import"./Trapezoid-Bk1aSQBG.js";import"./Sector-DJLTI9DR.js";import"./Symbols-D9ObUrus.js";import"./symbol-BIEGaDb4.js";import"./step-j_6aZTKG.js";import"./Curve-C9qfySG5.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C9L2m6gr.js";import"./ChartSizeDimensions-C4osSvkZ.js";import"./OffsetShower-DaLST6nw.js";import"./PlotAreaShower-D2fXHUqq.js";const ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const Ee=["Segment"];export{t as Segment,Ee as __namedExportsOrder,ye as default};
