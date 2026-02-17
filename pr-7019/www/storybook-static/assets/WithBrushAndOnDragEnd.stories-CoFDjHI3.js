import{e as t}from"./iframe-DSWYlzWY.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Fy9pCvBq.js";import{B as p}from"./BarChart-ZiWVEpGQ.js";import{X as l}from"./XAxis-iMOgY7Au.js";import{Y as h}from"./YAxis-Bm_Vu3am.js";import{B as c}from"./Brush-Bxur_2zp.js";import{B as x}from"./Bar-cASxdDTM.js";import{R as u}from"./RechartsHookInspector-f6frTyp5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BiAk_CPB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DVh3xt6X.js";import"./hooks-B7BbWUVY.js";import"./axisSelectors-C1uR2G3h.js";import"./zIndexSlice-CwHVazMP.js";import"./renderedTicksSlice-soMCmbpR.js";import"./CartesianChart-BFtDWNyw.js";import"./chartDataContext-DGfmnKNf.js";import"./CategoricalChart-DpkOEink.js";import"./CartesianAxis-BDz1zwgU.js";import"./Layer-BJ-1LjgN.js";import"./Text-CcJbWbw0.js";import"./DOMUtils-9Gl4sMzI.js";import"./Label-DAbjiZ3-.js";import"./ZIndexLayer-DdgNL7UI.js";import"./types-C3ofbdQr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CyOsvigW.js";import"./ReactUtils-cJI4Ub_j.js";import"./ActiveShapeUtils-CIyCCcXD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BMuMjxhY.js";import"./useAnimationId-C_vJY8DS.js";import"./Trapezoid-COd96k2O.js";import"./Sector-BpUrusHe.js";import"./Symbols-DBQdL11F.js";import"./Curve-kGDkBF5o.js";import"./RegisterGraphicalItemId-BBtGsgZd.js";import"./ErrorBarContext-W32xCQ7P.js";import"./GraphicalItemClipPath-SnzIRqgJ.js";import"./SetGraphicalItem-BwFpDELA.js";import"./getZIndexFromUnknown-BAzIcvHZ.js";import"./graphicalItemSelectors-DN5wHNNo.js";import"./index-CFzpIqAG.js";import"./ChartSizeDimensions-B4hBN_oD.js";import"./OffsetShower-Dq8TEAZv.js";import"./PlotAreaShower-CsbtiMRd.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
