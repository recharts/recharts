import{e as t}from"./iframe-Bw8DjNMK.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-RqErd5pi.js";import{B as p}from"./BarChart-BOUTRlEJ.js";import{X as l}from"./XAxis-DXXKhKWM.js";import{Y as h}from"./YAxis-DdDXncps.js";import{B as c}from"./Brush-D_YtXnQc.js";import{B as x}from"./Bar-DKh2FD4L.js";import{R as u}from"./RechartsHookInspector-Dkw7rNs4.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZAfNVom.js";import"./immer-D8iSY20c.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-78h_uQ3C.js";import"./index-BrpMLpeL.js";import"./hooks-DIsqzK2K.js";import"./axisSelectors-BE5DsmIW.js";import"./d3-scale-D3xSJxj4.js";import"./zIndexSlice-DyW-bn5P.js";import"./renderedTicksSlice-BK1GDE8h.js";import"./CartesianChart-D3IHNwey.js";import"./chartDataContext-Dz8istsE.js";import"./CategoricalChart-D7TuKkne.js";import"./CartesianAxis-vRL28WoM.js";import"./Layer-DM0-BU9E.js";import"./Text-e8mIqlAu.js";import"./DOMUtils-D0bDfEmn.js";import"./Label-E6zUfHhJ.js";import"./ZIndexLayer-DWrSmtv7.js";import"./types-BIXu7WCc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CU2FJye_.js";import"./ReactUtils-lXsqpfha.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DUc-QBSd.js";import"./isPlainObject-B10acXuk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-cql93QQN.js";import"./useAnimationId-EQy0eofc.js";import"./Trapezoid-Q5mzP7fr.js";import"./Sector-DbOLYdsA.js";import"./Symbols-ZPRqUnx6.js";import"./symbol-DGPSkh8h.js";import"./step-DLR3mlGm.js";import"./Curve-DtKt2A2q.js";import"./RegisterGraphicalItemId-Bd8mrNJF.js";import"./ErrorBarContext-Ds7SXBSd.js";import"./GraphicalItemClipPath-Kk-xgOZj.js";import"./SetGraphicalItem-BPCW0ywk.js";import"./getZIndexFromUnknown-G0vkby9F.js";import"./graphicalItemSelectors-BAwUAiwg.js";import"./index-BAnsiokJ.js";import"./ChartSizeDimensions-BVLi1gDh.js";import"./OffsetShower-CGTxNqXv.js";import"./PlotAreaShower-Bs-62jbH.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
