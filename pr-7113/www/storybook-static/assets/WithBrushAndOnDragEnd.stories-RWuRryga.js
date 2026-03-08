import{e as t}from"./iframe-DujSE0UK.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-D8VjMjvf.js";import{B as p}from"./BarChart-CgYZ2qE9.js";import{X as l}from"./XAxis-YY1xwgnu.js";import{Y as h}from"./YAxis-DGH9UPdi.js";import{B as c}from"./Brush-DS0gI12y.js";import{B as x}from"./Bar-dwixR8Bq.js";import{R as u}from"./RechartsHookInspector-CRMB31G9.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C48txAh5.js";import"./immer-DoffRpuJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZxyCKqo.js";import"./index-BzWEaTVN.js";import"./hooks-BfEZyruk.js";import"./axisSelectors-CplbQtmA.js";import"./d3-scale-DAOxFYCv.js";import"./zIndexSlice-DxmTVpDq.js";import"./renderedTicksSlice-qOFace14.js";import"./CartesianChart-C8FLn_u-.js";import"./chartDataContext-C-qHRTgP.js";import"./CategoricalChart-H-u-kan4.js";import"./CartesianAxis-DVd0f2kI.js";import"./Layer-B-nUYb5l.js";import"./Text-qQLvw26P.js";import"./DOMUtils-CiKk1OJG.js";import"./Label-D6PynPvp.js";import"./ZIndexLayer-sSQKP7NE.js";import"./types-D6xVUDWG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DMW6mWzr.js";import"./ReactUtils-CJKtjJwj.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CfdmikBA.js";import"./isPlainObject-PvV2F2dX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-SsDZNd-D.js";import"./useAnimationId-DcYOTGVs.js";import"./Trapezoid-C4tWIuQV.js";import"./Sector-FLQA7LtL.js";import"./Symbols-nyT1XPVO.js";import"./symbol-CaRsNxSw.js";import"./step-BqfvS8lo.js";import"./Curve-BIsIHsFZ.js";import"./RegisterGraphicalItemId-CBH-yQFt.js";import"./ErrorBarContext-D8NP2kg_.js";import"./GraphicalItemClipPath-SL3od_yD.js";import"./SetGraphicalItem-BsRnOhvR.js";import"./getZIndexFromUnknown-Cbr6eMfh.js";import"./graphicalItemSelectors-DgRwhpMi.js";import"./index-B_iM8tEy.js";import"./ChartSizeDimensions-DEiQIg5P.js";import"./OffsetShower-CF4VV-Vy.js";import"./PlotAreaShower-CLUz5lpa.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
