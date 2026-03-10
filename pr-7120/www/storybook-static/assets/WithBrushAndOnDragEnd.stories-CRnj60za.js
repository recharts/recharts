import{e as t}from"./iframe-DHjTBwa0.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CGXWmECa.js";import{B as p}from"./BarChart-Dba9QfwC.js";import{X as l}from"./XAxis-DzpQW1k6.js";import{Y as h}from"./YAxis-CHgoMFSJ.js";import{B as c}from"./Brush-CQZSQ9wZ.js";import{B as x}from"./Bar-DQnJWcO9.js";import{R as u}from"./RechartsHookInspector-D6nhtH8K.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DXy8j8LY.js";import"./immer-BrXT1eSW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DyX2fUcK.js";import"./index-BPCnijYz.js";import"./hooks-BI4eFA2i.js";import"./axisSelectors-DhPURh7h.js";import"./d3-scale-BUA-RFqD.js";import"./zIndexSlice-DqtSbfBR.js";import"./renderedTicksSlice-DkHSSwGo.js";import"./CartesianChart-Dm1WBf-W.js";import"./chartDataContext-j2R-tyUk.js";import"./CategoricalChart-ByXlXeCM.js";import"./CartesianAxis-D9ZJukHE.js";import"./Layer-CoFjoalk.js";import"./Text-BWLl8TIe.js";import"./DOMUtils-DL_tkNCI.js";import"./Label-DMGH-XEw.js";import"./ZIndexLayer-CWpbiknC.js";import"./types-B-PC6Emj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-C8KY5Efg.js";import"./ReactUtils-DXoYQqwM.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-9h77ymCT.js";import"./isPlainObject-DLGkOX2v.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dj02ipMQ.js";import"./useAnimationId-C2i6VIVJ.js";import"./Trapezoid-DxOEh9VV.js";import"./Sector-CIZ18yvj.js";import"./Symbols-CnglQ83s.js";import"./symbol-LmxUlDu5.js";import"./step-C25GYkrO.js";import"./Curve-DPzG6TNm.js";import"./RegisterGraphicalItemId-DKDKYGnd.js";import"./ErrorBarContext-By3ClU9F.js";import"./GraphicalItemClipPath-CGzigbYh.js";import"./SetGraphicalItem-XHeepBo6.js";import"./getZIndexFromUnknown-BvtEXJQE.js";import"./graphicalItemSelectors-D_K7F2ot.js";import"./index-CGH8qd9t.js";import"./ChartSizeDimensions-xCJQuae6.js";import"./OffsetShower-DuOTKuKX.js";import"./PlotAreaShower-H4JN1u5I.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
