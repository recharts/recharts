import{e as t}from"./iframe-Bz2Qn6Q0.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-SrtJKTr1.js";import{B as p}from"./BarChart-CeXZI2Gl.js";import{X as l}from"./XAxis-0rcliQLc.js";import{Y as h}from"./YAxis-B5cQ30-7.js";import{B as c}from"./Brush-CvSfM4-w.js";import{B as x}from"./Bar-CJwBIc7Y.js";import{R as u}from"./RechartsHookInspector-CRp0734Q.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bw6mkRAu.js";import"./immer-Bf1ANpdG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxgxCr4x.js";import"./index-XEi-vt0m.js";import"./hooks-Bn0YkRzT.js";import"./axisSelectors-Dn0P--3Q.js";import"./d3-scale-Cj0fhoc6.js";import"./zIndexSlice-MM57jocS.js";import"./renderedTicksSlice-KjJl__e1.js";import"./CartesianChart-JAhvkHqp.js";import"./chartDataContext-DBTgugHo.js";import"./CategoricalChart-M6gnVyEJ.js";import"./CartesianAxis-BokQwd-n.js";import"./Layer-Bp-alVkQ.js";import"./Text-BeGwGDIw.js";import"./DOMUtils-CfBuJ7pA.js";import"./Label-Cx92zGqb.js";import"./ZIndexLayer-Ci1J2GEs.js";import"./types-Bq1ywEo3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BkgkT_1E.js";import"./ReactUtils-BKN20BZR.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Cw4OmDCr.js";import"./isPlainObject-C7eNr1WD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BZ4j4B1r.js";import"./useAnimationId-C0d16Qdx.js";import"./Trapezoid-BI8cfUTU.js";import"./Sector-DlNvRyQv.js";import"./Symbols-CBkGZNC5.js";import"./symbol-CWNMfYRI.js";import"./step-Dly43UW-.js";import"./Curve-DWJn7QSQ.js";import"./RegisterGraphicalItemId-BDNbOxSF.js";import"./ErrorBarContext-s59o9x04.js";import"./GraphicalItemClipPath-DmsPoL2A.js";import"./SetGraphicalItem-DmI1gY5l.js";import"./getZIndexFromUnknown-DzER0cx7.js";import"./graphicalItemSelectors-BZwK_bTp.js";import"./index-6agPL1sG.js";import"./ChartSizeDimensions-DcrFs19n.js";import"./OffsetShower-CKOTZiON.js";import"./PlotAreaShower-SYizFfd0.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
