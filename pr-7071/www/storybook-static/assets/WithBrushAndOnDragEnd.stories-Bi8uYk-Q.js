import{e as t}from"./iframe-iwEL6Umv.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BhZQM3Cp.js";import{B as p}from"./BarChart-BwHhvNC5.js";import{X as l}from"./XAxis-Dgqn4iEv.js";import{Y as h}from"./YAxis-umZBaGOr.js";import{B as c}from"./Brush-DAxsPoGH.js";import{B as x}from"./Bar-CBLZffpB.js";import{R as u}from"./RechartsHookInspector-CYTcWIXs.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BCVuQ-Yr.js";import"./immer-Cr1rPGS6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-9n0f-4bA.js";import"./index-DLdiPLRr.js";import"./hooks-BKxqdv6E.js";import"./axisSelectors-OvY2hZ5X.js";import"./d3-scale-DtoPWeCi.js";import"./zIndexSlice-B2mfmoSl.js";import"./renderedTicksSlice-C2RN1S42.js";import"./CartesianChart-awM32UjI.js";import"./chartDataContext-GxGvfaB0.js";import"./CategoricalChart-DS_wxFYH.js";import"./CartesianAxis-BWMGM7_Q.js";import"./Layer-blbwcMF4.js";import"./Text-BGZOUB9S.js";import"./DOMUtils-DAlnAof2.js";import"./Label-D1qeHozD.js";import"./ZIndexLayer--muSGjRM.js";import"./types-CbKx0ZMp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Ct2699AQ.js";import"./ReactUtils-sQyeAkyW.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C3Zx6KRY.js";import"./isPlainObject-Ddh5v3It.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CXew48xc.js";import"./useAnimationId-fTTqSava.js";import"./Trapezoid-CwbjlUlI.js";import"./Sector-CvrBUmaX.js";import"./Symbols-CT2be5W7.js";import"./symbol-Q9vYiwbO.js";import"./step-4pZgFtPk.js";import"./Curve-_1pLvIld.js";import"./RegisterGraphicalItemId-DquoBc_j.js";import"./ErrorBarContext-CgjFOrMU.js";import"./GraphicalItemClipPath-DN8WJV-C.js";import"./SetGraphicalItem-7qCAbAa9.js";import"./getZIndexFromUnknown-DPHLpJXu.js";import"./graphicalItemSelectors-B7BXRcku.js";import"./index-LsQkT41Y.js";import"./ChartSizeDimensions-CbGn3agI.js";import"./OffsetShower-DbewMYJd.js";import"./PlotAreaShower-DJ_CeKT6.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
