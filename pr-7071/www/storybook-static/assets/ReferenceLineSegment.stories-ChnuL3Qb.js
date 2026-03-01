import{e}from"./iframe-DKyU_iXE.js";import{R as i}from"./arrayEqualityCheck-CBuQt-LQ.js";import{C as p}from"./ComposedChart-W1r0Y87Q.js";import{C as a}from"./CartesianGrid-COdiZEbw.js";import{X as n}from"./XAxis-4nisg1uZ.js";import{Y as s}from"./YAxis-C-bpHLVI.js";import{L as c}from"./Line-Cn5FvcMW.js";import{R as d}from"./ReferenceLine-CT9QQzZn.js";import{R as g}from"./RechartsHookInspector-Dv9I4YHQ.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-cUmGB5BP.js";import"./immer-CaNK2Wnd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1k7PNNo.js";import"./index-Bc9uivsf.js";import"./hooks-CcwQQS4K.js";import"./axisSelectors-CdP5XGoN.js";import"./d3-scale-frJU2Btm.js";import"./zIndexSlice-w00ysM4m.js";import"./renderedTicksSlice-CWpXf5qL.js";import"./CartesianChart-DR1aPl1R.js";import"./chartDataContext-B1YWbHj7.js";import"./CategoricalChart-BzovAk5i.js";import"./CartesianAxis-D-Yy--uR.js";import"./Layer--fTJnsnP.js";import"./Text-D31e4mTY.js";import"./DOMUtils-BSHfgs8I.js";import"./Label-kMa1V762.js";import"./ZIndexLayer-6WeTgCgn.js";import"./types-DZPKaEAC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CiNFkB-2.js";import"./ActivePoints-sa10AzyA.js";import"./Dot-CKbtf96r.js";import"./RegisterGraphicalItemId-BtuRgDxJ.js";import"./ErrorBarContext-BwvMd7Q8.js";import"./GraphicalItemClipPath-f-LT7H0l.js";import"./SetGraphicalItem-geCsQwmc.js";import"./useAnimationId-De9-pIXx.js";import"./getRadiusAndStrokeWidthFromDot-DnCZvFUa.js";import"./ActiveShapeUtils-BhHFALxr.js";import"./isPlainObject-ClBz4bnQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CFv_pW3l.js";import"./Trapezoid-CI4993jy.js";import"./Sector-dJduajY3.js";import"./Symbols-0HhL3rnr.js";import"./symbol-CXDVJGuj.js";import"./step-DMWIYdYk.js";import"./Curve-CExLt2Iv.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CAiBL-v8.js";import"./ChartSizeDimensions-BOJu1RXr.js";import"./OffsetShower-CJI2DXcR.js";import"./PlotAreaShower-Bq5ePm5q.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
