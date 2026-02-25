import{e}from"./iframe-BxnpLNlI.js";import{R as i}from"./arrayEqualityCheck-Ev4pEcaj.js";import{C as p}from"./ComposedChart-B09NG58-.js";import{C as a}from"./CartesianGrid-CF0QmcFA.js";import{X as n}from"./XAxis-DivYk73O.js";import{Y as s}from"./YAxis-N3Hr219E.js";import{L as c}from"./Line-BsG4Isq5.js";import{R as d}from"./ReferenceLine-Dg6UBU6p.js";import{R as g}from"./RechartsHookInspector-BB1lEmoR.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-znjuu04v.js";import"./immer-BkCi42RL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_MSRa_Ei.js";import"./index-b30Cmp9V.js";import"./hooks-C-flJ6p6.js";import"./axisSelectors-CNXspQbT.js";import"./d3-scale-ClZ26DSd.js";import"./zIndexSlice--EK8Um__.js";import"./renderedTicksSlice-BJPmxvjH.js";import"./CartesianChart-C-nBds0D.js";import"./chartDataContext-j05r-NuJ.js";import"./CategoricalChart-DZvzXAdF.js";import"./CartesianAxis-xelplfqC.js";import"./Layer-CjPvoy9w.js";import"./Text-lfWzmX-o.js";import"./DOMUtils-BwcWjDda.js";import"./Label-BJJgujul.js";import"./ZIndexLayer-BFJ6fW_I.js";import"./types-gZ1RVbMB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BdNEbP_1.js";import"./ActivePoints-BBEugXOU.js";import"./Dot-yJDT37nk.js";import"./RegisterGraphicalItemId-D2g_8__I.js";import"./ErrorBarContext-BbpRKECp.js";import"./GraphicalItemClipPath-BWEZTu7p.js";import"./SetGraphicalItem-legQuKyA.js";import"./useAnimationId-BkMfgj6S.js";import"./getRadiusAndStrokeWidthFromDot-TgdqzR3J.js";import"./ActiveShapeUtils-BFvjG2KX.js";import"./isPlainObject-B1iN99vF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvUDBcr-.js";import"./Trapezoid-BVhmBeys.js";import"./Sector-B9qkET69.js";import"./Symbols-7Di5jhUy.js";import"./symbol-CNSHwdEE.js";import"./step-ClrTL6ck.js";import"./Curve-Cd2m7ztB.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D27xip60.js";import"./ChartSizeDimensions-CkjlP-Hw.js";import"./OffsetShower-tOvUkh5S.js";import"./PlotAreaShower-IShq8O5s.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
