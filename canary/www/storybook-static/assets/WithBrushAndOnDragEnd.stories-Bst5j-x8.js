import{e as t}from"./iframe-Drx3sHzD.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Cxh3C5Ut.js";import{B as p}from"./BarChart-BJcbMe-I.js";import{X as l}from"./XAxis-CHiVQCBM.js";import{Y as h}from"./YAxis-BFFqV8T1.js";import{B as c}from"./Brush-l2Cg61uc.js";import{B as x}from"./Bar-BxbgyqMg.js";import{R as u}from"./RechartsHookInspector-B47NB8Ba.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DJZRJ_w1.js";import"./immer-CMngUaVZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C25rZHqy.js";import"./index-C1X6dA56.js";import"./hooks-CoGkBA0W.js";import"./axisSelectors-Dvu2n2j0.js";import"./d3-scale-DJsTU-V4.js";import"./zIndexSlice-BtH-N1PM.js";import"./renderedTicksSlice-NaH2qnuB.js";import"./CartesianChart-X3a2_VbG.js";import"./chartDataContext-4c8heGUY.js";import"./CategoricalChart-BH-H9_fa.js";import"./CartesianAxis-CtfoqZiD.js";import"./Layer-BX4NaN0s.js";import"./Text-puWaXg2i.js";import"./DOMUtils-CNGQFx5Q.js";import"./Label-BYpXDDHB.js";import"./ZIndexLayer-BCRbCnLV.js";import"./types-Dt1v_DFT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CzTx9OJn.js";import"./ReactUtils-DR-cFl3z.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Y6ehCTYB.js";import"./isPlainObject-Dhx1cBId.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-dAm4Nryw.js";import"./useAnimationId-BvmpUmZ8.js";import"./Trapezoid-BmQTJ1Eh.js";import"./Sector-BU43v3eZ.js";import"./Symbols-5INEUEhj.js";import"./symbol-DLZzCtHC.js";import"./step-DiiGtOJG.js";import"./Curve-CWdwiHun.js";import"./RegisterGraphicalItemId-D_XwV7_H.js";import"./ErrorBarContext-C-SKJBnp.js";import"./GraphicalItemClipPath-DJ0LBSJn.js";import"./SetGraphicalItem-CaVxJkE3.js";import"./getZIndexFromUnknown-BcJnj15j.js";import"./graphicalItemSelectors-B3D-k-PR.js";import"./index-UsmbSRTd.js";import"./ChartSizeDimensions-DO_eIzzc.js";import"./OffsetShower-C7m1BjsQ.js";import"./PlotAreaShower-BQS_Wf3K.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};
