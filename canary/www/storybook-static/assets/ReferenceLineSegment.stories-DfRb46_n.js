import{e}from"./iframe-CGwC73OO.js";import{R as i}from"./arrayEqualityCheck-BlziNjUk.js";import{C as p}from"./ComposedChart-8-UPKNFd.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-B2JXZgjN.js";import{X as s}from"./XAxis-KheqwHPS.js";import{Y as c}from"./YAxis-DJqKmGik.js";import{L as d}from"./Line-B0ozFG-e.js";import{R as g}from"./ReferenceLine-Do3qrpdL.js";import{R as f}from"./RechartsHookInspector-BOLymao4.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2h9cia6B.js";import"./immer-CURee86N.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMSzhStw.js";import"./index-CByG6IuO.js";import"./hooks-C-sNjqxb.js";import"./axisSelectors-ClgkNKcu.js";import"./d3-scale-BH0-xThR.js";import"./zIndexSlice-Pvig-liy.js";import"./renderedTicksSlice-DBon5NFb.js";import"./CartesianChart-ChaOc86m.js";import"./chartDataContext-CmWRMrC9.js";import"./CategoricalChart-DtqXk2xy.js";import"./CartesianAxis-Bw03X_Zl.js";import"./Layer-BBc4ESPC.js";import"./Text-DyJrB0G7.js";import"./DOMUtils-C1ZRgIwE.js";import"./Label-CE6Oihdn.js";import"./ZIndexLayer-CAqiJgLq.js";import"./types-C_6Vkwi_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CYVZdurj.js";import"./ActivePoints-BTOrd9Zd.js";import"./Dot-By1SCY7k.js";import"./RegisterGraphicalItemId-yX1pqnM-.js";import"./ErrorBarContext-a8CrbqxK.js";import"./GraphicalItemClipPath-CuaCHgKU.js";import"./SetGraphicalItem-CRoX03qV.js";import"./useAnimationId-B3H-bs7p.js";import"./getRadiusAndStrokeWidthFromDot--GB1IBDa.js";import"./ActiveShapeUtils-BoZw7F6l.js";import"./isPlainObject-CMDmT6Oo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Qmwzuu0_.js";import"./Trapezoid-3CdzbHVF.js";import"./Sector-C4mEqCcR.js";import"./Symbols-DVb7nCyx.js";import"./symbol-zQKMiMKl.js";import"./step-zq2neHnY.js";import"./Curve-C4VRfueh.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CF2MM-Q8.js";import"./ChartSizeDimensions-BPnl0leJ.js";import"./OffsetShower-BHX9YNtn.js";import"./PlotAreaShower-CFsnprFU.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
