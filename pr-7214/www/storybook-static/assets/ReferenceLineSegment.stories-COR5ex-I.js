import{e}from"./iframe-DchjWIcT.js";import{R as i}from"./arrayEqualityCheck-QCkrs1PG.js";import{C as p}from"./ComposedChart-CFs0TJqd.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-D1l-HRKy.js";import{X as s}from"./XAxis-D4P_mYvM.js";import{Y as c}from"./YAxis-DuKGJBLI.js";import{L as d}from"./Line-C66uK_WI.js";import{R as g}from"./ReferenceLine-D_bTOIi4.js";import{R as f}from"./RechartsHookInspector-CPRA6xJz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-SMaOT1cA.js";import"./immer-DLCBpJSm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B6NPWdWo.js";import"./index-Brnv01PQ.js";import"./hooks-0MUNxS-P.js";import"./axisSelectors-Cs62S3eJ.js";import"./d3-scale-Dz9swnGz.js";import"./zIndexSlice-B4fo6Fp2.js";import"./renderedTicksSlice-ARMD3d3P.js";import"./CartesianChart-9IsHXkda.js";import"./chartDataContext-CtCLKmwO.js";import"./CategoricalChart-Cx0EsJSw.js";import"./CartesianAxis-DSoy_rG_.js";import"./Layer-BGlDxeZH.js";import"./Text-BMGBMw2v.js";import"./DOMUtils-BQHfItYf.js";import"./Label-DmoQv3Ji.js";import"./ZIndexLayer-D4usu0YU.js";import"./types-pHat4itB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CJlztPJN.js";import"./ActivePoints-BD_uaCkW.js";import"./Dot-DmVbifMK.js";import"./RegisterGraphicalItemId-BNrN6AWA.js";import"./ErrorBarContext-DeijJDUH.js";import"./GraphicalItemClipPath-BfbIuSDD.js";import"./SetGraphicalItem-CNHi9Fw6.js";import"./useAnimationId-D5Nwowfc.js";import"./getRadiusAndStrokeWidthFromDot-rusUR86Z.js";import"./ActiveShapeUtils-dHK-lCgP.js";import"./isPlainObject-BctI-URS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsEwa7FZ.js";import"./Trapezoid-BNsb85N7.js";import"./Sector-lrv0bu3P.js";import"./Symbols-BflYIgaG.js";import"./symbol-CXv5i0x2.js";import"./step-DoaVUl3G.js";import"./Curve-B-giixFy.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DNOa6QVy.js";import"./ChartSizeDimensions-CVsXW5Vd.js";import"./OffsetShower-35EhUoAr.js";import"./PlotAreaShower-CHLX1rVB.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
