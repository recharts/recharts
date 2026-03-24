import{e as t}from"./iframe-B-0BbsAX.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-D0GIznF3.js";import{B as p}from"./BarChart-CmctqCli.js";import{X as l}from"./XAxis-DbUi1vPs.js";import{Y as h}from"./YAxis-CX3uKBZw.js";import{B as c}from"./Brush-CaJxzEp0.js";import{B as x}from"./Bar-U-xk9OIT.js";import{R as u}from"./RechartsHookInspector-a5VIBXh4.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CeHfSYTr.js";import"./immer-16Lk8WhM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DdelftvL.js";import"./index-CC_jrfcS.js";import"./hooks-CLbcsvpt.js";import"./axisSelectors-B5M5y7tb.js";import"./d3-scale-CRpFVGXV.js";import"./zIndexSlice-k5NGco1R.js";import"./renderedTicksSlice-DrnPsf35.js";import"./CartesianChart-BzA52Q7h.js";import"./chartDataContext-ZzZnHAfn.js";import"./CategoricalChart-CiBn8gUj.js";import"./CartesianAxis-DSL26GAi.js";import"./Layer-DmBsOgtN.js";import"./Text-BDsrdoFV.js";import"./DOMUtils-ChlQnBsE.js";import"./Label-RKv-aJqQ.js";import"./ZIndexLayer-BS0cCdPh.js";import"./types-CmNjNiS4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-3p5S3cTB.js";import"./ReactUtils-Dc4L6Dcx.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-nrA-vqiB.js";import"./isPlainObject-CkRpqEDw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ApzVODqx.js";import"./useAnimationId-C_pphjez.js";import"./Trapezoid-Coy9-nSc.js";import"./Sector-Czl1xAWH.js";import"./Symbols-D_XjywmB.js";import"./symbol-mrFX37Pu.js";import"./step-BJ3svLa1.js";import"./Curve-zb7_jZJr.js";import"./RegisterGraphicalItemId-EYUIR0Rr.js";import"./ErrorBarContext-B191cjJB.js";import"./GraphicalItemClipPath-j2FZHUrx.js";import"./SetGraphicalItem--6EOKRx7.js";import"./getZIndexFromUnknown-CC2DL1Fi.js";import"./graphicalItemSelectors-ChPy1Wqk.js";import"./index-BMYt7gcu.js";import"./ChartSizeDimensions-BoIgW8rA.js";import"./OffsetShower-DSqgSq0T.js";import"./PlotAreaShower-DqxXtLCD.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
