import{e as t}from"./iframe-BA-zV7_F.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BqA822v0.js";import{B as p}from"./BarChart-DFUKgnFL.js";import{X as l}from"./XAxis-DC7WjUX8.js";import{Y as h}from"./YAxis-32LA6dK9.js";import{B as c}from"./Brush-CtiqxYXn.js";import{B as x}from"./Bar-Cch4cH_2.js";import{R as u}from"./RechartsHookInspector-D0XJS29G.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DAB-gcAU.js";import"./immer-CQr9v0v0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-mihAAWay.js";import"./index-B7YX6_DJ.js";import"./hooks-BhKgrcGm.js";import"./axisSelectors-C-c05xug.js";import"./d3-scale-DG9Ho5_0.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-CahP5Bvu.js";import"./renderedTicksSlice-CICucQq1.js";import"./CartesianChart-BDebLbDY.js";import"./chartDataContext-CAEi_CMV.js";import"./CategoricalChart-C254V1pE.js";import"./CartesianAxis-C3WTNiVK.js";import"./Layer-CfzD199M.js";import"./Text-reYRnfFB.js";import"./DOMUtils-DH-1IhDl.js";import"./Label-CHedA7kt.js";import"./ZIndexLayer-BBpTuRSZ.js";import"./types-mhJjiQ_4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Cx-Qjrob.js";import"./AnimatedItems-Dh5-Zm6U.js";import"./useAnimationId-DojuRQal.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-fUtPyr_w.js";import"./isPlainObject-C-Ml-lWL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bu9DVT5n.js";import"./Trapezoid-Bk1aSQBG.js";import"./Sector-DJLTI9DR.js";import"./Symbols-D9ObUrus.js";import"./symbol-BIEGaDb4.js";import"./step-j_6aZTKG.js";import"./Curve-C9qfySG5.js";import"./RegisterGraphicalItemId-pJFOOmQA.js";import"./ErrorBarContext-CGvFvXH0.js";import"./GraphicalItemClipPath-Bm1jNNtI.js";import"./SetGraphicalItem-ebt92THW.js";import"./getZIndexFromUnknown-ixd4-wqn.js";import"./graphicalItemSelectors-DKq5kTda.js";import"./index-C9L2m6gr.js";import"./ChartSizeDimensions-C4osSvkZ.js";import"./OffsetShower-DaLST6nw.js";import"./PlotAreaShower-D2fXHUqq.js";const vt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const Bt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,Bt as __namedExportsOrder,vt as default};
