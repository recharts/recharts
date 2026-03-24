import{e as t}from"./iframe-Cghk5Dv5.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Blp4qByB.js";import{B as p}from"./BarChart-CqEjLhlA.js";import{X as l}from"./XAxis-C28GaQOE.js";import{Y as h}from"./YAxis-DfDbyqX9.js";import{B as c}from"./Brush-CgFrRqA9.js";import{B as x}from"./Bar-Bf_Pfq8_.js";import{R as u}from"./RechartsHookInspector-Dhw1ahnh.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Ca9Q42EU.js";import"./immer-C9d2WDC3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCDf7E4k.js";import"./index--WQv2JEI.js";import"./hooks-DvHGCK_P.js";import"./axisSelectors-BmN1bSZG.js";import"./d3-scale-DwfmephR.js";import"./zIndexSlice-Cr5Wd2hn.js";import"./renderedTicksSlice-B7PVLtE-.js";import"./CartesianChart-Dl7eKZR1.js";import"./chartDataContext-FHRsRLf6.js";import"./CategoricalChart-BX2q-J4I.js";import"./CartesianAxis-NFB-A6xZ.js";import"./Layer-BZayzYJ5.js";import"./Text-CTdXj2Wj.js";import"./DOMUtils-B6BLeQuC.js";import"./Label-DMYBuQg7.js";import"./ZIndexLayer-C0MHsSee.js";import"./types-BAdQFhn_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-fbLXfv7J.js";import"./ReactUtils-DJKFAAVq.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CgedLmsf.js";import"./isPlainObject-GvFH0_0U.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-SpFzk5.js";import"./useAnimationId-B_fUzLa-.js";import"./Trapezoid-D5vWYT03.js";import"./Sector-WHMRpyIm.js";import"./Symbols-i2nCmAEN.js";import"./symbol-BX-g_aqV.js";import"./step-CJt2p9N6.js";import"./Curve-tyrMpXlR.js";import"./RegisterGraphicalItemId-DxmHa7yf.js";import"./ErrorBarContext-B48_fgxO.js";import"./GraphicalItemClipPath-J2zVG9I1.js";import"./SetGraphicalItem-DKkCveHJ.js";import"./getZIndexFromUnknown-GgP1zh9g.js";import"./graphicalItemSelectors-CtRjTlVF.js";import"./index-DQ-QIWuT.js";import"./ChartSizeDimensions-Dm4LSJOm.js";import"./OffsetShower-CKEh5r6l.js";import"./PlotAreaShower-m5B18Oa-.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
