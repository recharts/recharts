import{e}from"./iframe-RBDhNuvY.js";import{R as i}from"./arrayEqualityCheck-BS348k5r.js";import{C as p}from"./ComposedChart-amLhCzW6.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DecgGFiZ.js";import{X as s}from"./XAxis-DanSQFXO.js";import{Y as c}from"./YAxis-C9mdY1Fl.js";import{L as d}from"./Line-BcjxrMGm.js";import{R as g}from"./ReferenceLine-D0CuaaUR.js";import{R as f}from"./RechartsHookInspector-DOfZr9C1.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BY9krx0N.js";import"./immer-C4c_Wnmh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-pTvawuVp.js";import"./index-DTbqq10f.js";import"./hooks-CGOwSC0e.js";import"./axisSelectors-BWB9zPfa.js";import"./d3-scale-D1n_szfL.js";import"./zIndexSlice-D1BncfDi.js";import"./renderedTicksSlice-zElQoHGi.js";import"./CartesianChart-CvfrETq8.js";import"./chartDataContext-CHNtAjFy.js";import"./CategoricalChart-DfYiu2DH.js";import"./CartesianAxis-BomHuY_r.js";import"./Layer-u__8P6Sj.js";import"./Text-ksXr8HZ7.js";import"./DOMUtils-CPBkTdDQ.js";import"./Label-R4J1fJpi.js";import"./ZIndexLayer-Bft7LqoW.js";import"./types-bb6aQwNz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-2aoVptM5.js";import"./ActivePoints-CWeKESIY.js";import"./Dot-D4355bFc.js";import"./RegisterGraphicalItemId-Nj3D91YX.js";import"./ErrorBarContext-CdH3aE4v.js";import"./GraphicalItemClipPath-DADrCLWg.js";import"./SetGraphicalItem-n97qV-yJ.js";import"./useAnimationId-Dwr1YxhS.js";import"./getRadiusAndStrokeWidthFromDot-Kev9_BfR.js";import"./ActiveShapeUtils-Bog2Lcip.js";import"./isPlainObject-Do42GsO_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BWX_qciT.js";import"./Trapezoid-DJVnFGas.js";import"./Sector-HpIE4-5_.js";import"./Symbols-CumYzi7M.js";import"./symbol-Dd7u_zBc.js";import"./step-B8I79wVl.js";import"./Curve-D-xIgRTC.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DrnbXucV.js";import"./ChartSizeDimensions-CoDDlzmV.js";import"./OffsetShower-CNAox3ML.js";import"./PlotAreaShower-BuNBetuA.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
