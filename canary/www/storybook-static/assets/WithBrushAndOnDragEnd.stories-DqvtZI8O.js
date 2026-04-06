import{e as t}from"./iframe-B8SpPQoN.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-2MTTUHAP.js";import{B as p}from"./BarChart-DjvUFR0Q.js";import{X as l}from"./XAxis-Cin7z-gi.js";import{Y as h}from"./YAxis-DNa02LBn.js";import{B as c}from"./Brush-nopiz5no.js";import{B as x}from"./Bar-CPaj8_xh.js";import{R as u}from"./RechartsHookInspector-C-uKGE-C.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DzQ1rR94.js";import"./immer-DXJ0Fvyi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BPCT0kIp.js";import"./index-0MgJGhOu.js";import"./hooks-D1vO-Uu8.js";import"./axisSelectors-7IbcFarQ.js";import"./d3-scale-CgZuTiLl.js";import"./zIndexSlice-D7POqXab.js";import"./renderedTicksSlice-DVrFbe8I.js";import"./CartesianChart-B4UYsacS.js";import"./chartDataContext-5xAcHE6X.js";import"./CategoricalChart-BwxXShMz.js";import"./CartesianAxis-CtyZJFvD.js";import"./Layer-qfrTI4Q6.js";import"./Text-CvYPnnR9.js";import"./DOMUtils-7jDgYM5P.js";import"./Label-D7a9N5YB.js";import"./ZIndexLayer-ORGjuoDq.js";import"./types-ro_75Oqz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-ChJzGCgx.js";import"./ReactUtils-Dvtx4mkZ.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CAMIqiYR.js";import"./isPlainObject-D7MEnopY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CmJKdPc2.js";import"./useAnimationId-BPBgs8nb.js";import"./Trapezoid-B4rCe4Ap.js";import"./Sector-WPeAUgwy.js";import"./Symbols-Dk8MuMBV.js";import"./symbol-BupuQwEg.js";import"./step-oz_v09YS.js";import"./Curve-Cnx0u3AQ.js";import"./RegisterGraphicalItemId-rH65yuEl.js";import"./ErrorBarContext-UPy6xw3i.js";import"./GraphicalItemClipPath-DEUbhDcY.js";import"./SetGraphicalItem-DEk7bfFl.js";import"./getZIndexFromUnknown-Jn7KYacX.js";import"./graphicalItemSelectors-BmPR3CZd.js";import"./index-emaQayzG.js";import"./ChartSizeDimensions-B4hjUxAl.js";import"./OffsetShower-DFaIhHkZ.js";import"./PlotAreaShower-Yg7RB84W.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
