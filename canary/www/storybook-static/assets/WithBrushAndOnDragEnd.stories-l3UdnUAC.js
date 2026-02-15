import{e as t}from"./iframe-CcI14rjx.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-B8tVyMzV.js";import{B as p}from"./BarChart-Bkw8mSTZ.js";import{X as l}from"./XAxis-CzdMAN4d.js";import{Y as h}from"./YAxis-CbFx-Oik.js";import{B as c}from"./Brush-ClDWJ3gQ.js";import{B as x}from"./Bar-BhYeplZK.js";import{R as u}from"./RechartsHookInspector-BirTV-4S.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-po8mUv-4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ds5PaNoP.js";import"./hooks-CRZN5urL.js";import"./axisSelectors-RKSisFMT.js";import"./zIndexSlice-BZyTHnj4.js";import"./CartesianChart-DnBMHEHS.js";import"./chartDataContext-BY-Xyvma.js";import"./CategoricalChart-DcuTq1rr.js";import"./CartesianAxis-Vu_uTkrX.js";import"./Layer-8dVuGqJD.js";import"./Text-D_czYdq0.js";import"./DOMUtils-BjGcEiQ0.js";import"./Label-Dpi6i3BM.js";import"./ZIndexLayer-DuQEL0lP.js";import"./types-Ce3J44ym.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-C9iRPvdc.js";import"./ReactUtils-C84uddRP.js";import"./ActiveShapeUtils-DL6WZdbr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DSZATy_S.js";import"./useAnimationId-B5oI4zFf.js";import"./Trapezoid-D4oUuF48.js";import"./Sector-DCwH9VE3.js";import"./Symbols-CXif55_q.js";import"./Curve-CHXnr1rt.js";import"./RegisterGraphicalItemId-hDx3Uu0O.js";import"./ErrorBarContext-CRPnKTk6.js";import"./GraphicalItemClipPath-CPgfiSVt.js";import"./SetGraphicalItem-GKBrKzuX.js";import"./getZIndexFromUnknown-C2vSSX07.js";import"./graphicalItemSelectors-BKqXZH6g.js";import"./index-DRUD6mwN.js";import"./ChartSizeDimensions-DOkJnWBq.js";import"./OffsetShower-CLsXqqyI.js";import"./PlotAreaShower-BWzOW3_u.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
