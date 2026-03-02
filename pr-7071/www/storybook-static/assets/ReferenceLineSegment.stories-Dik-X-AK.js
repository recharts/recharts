import{e}from"./iframe-iwEL6Umv.js";import{R as i}from"./arrayEqualityCheck-BhZQM3Cp.js";import{C as p}from"./ComposedChart-CJS29MNc.js";import{C as a}from"./CartesianGrid-BBwa0t5D.js";import{X as n}from"./XAxis-Dgqn4iEv.js";import{Y as s}from"./YAxis-umZBaGOr.js";import{L as c}from"./Line-BcSBVIXo.js";import{R as d}from"./ReferenceLine-DTI5_Azj.js";import{R as g}from"./RechartsHookInspector-CYTcWIXs.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BCVuQ-Yr.js";import"./immer-Cr1rPGS6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-9n0f-4bA.js";import"./index-DLdiPLRr.js";import"./hooks-BKxqdv6E.js";import"./axisSelectors-OvY2hZ5X.js";import"./d3-scale-DtoPWeCi.js";import"./zIndexSlice-B2mfmoSl.js";import"./renderedTicksSlice-C2RN1S42.js";import"./CartesianChart-awM32UjI.js";import"./chartDataContext-GxGvfaB0.js";import"./CategoricalChart-DS_wxFYH.js";import"./CartesianAxis-BWMGM7_Q.js";import"./Layer-blbwcMF4.js";import"./Text-BGZOUB9S.js";import"./DOMUtils-DAlnAof2.js";import"./Label-D1qeHozD.js";import"./ZIndexLayer--muSGjRM.js";import"./types-CbKx0ZMp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-sQyeAkyW.js";import"./ActivePoints-CCPY0FLb.js";import"./Dot-77XJxXcb.js";import"./RegisterGraphicalItemId-DquoBc_j.js";import"./ErrorBarContext-CgjFOrMU.js";import"./GraphicalItemClipPath-DN8WJV-C.js";import"./SetGraphicalItem-7qCAbAa9.js";import"./useAnimationId-fTTqSava.js";import"./getRadiusAndStrokeWidthFromDot-CfubkPAe.js";import"./ActiveShapeUtils-C3Zx6KRY.js";import"./isPlainObject-Ddh5v3It.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CXew48xc.js";import"./Trapezoid-CwbjlUlI.js";import"./Sector-CvrBUmaX.js";import"./Symbols-CT2be5W7.js";import"./symbol-Q9vYiwbO.js";import"./step-4pZgFtPk.js";import"./Curve-_1pLvIld.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-LsQkT41Y.js";import"./ChartSizeDimensions-CbGn3agI.js";import"./OffsetShower-DbewMYJd.js";import"./PlotAreaShower-DJ_CeKT6.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
