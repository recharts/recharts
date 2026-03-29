import{e as t}from"./iframe-C5xSgLrQ.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-y9OahTCZ.js";import{B as p}from"./BarChart-fad1Mauq.js";import{X as l}from"./XAxis-BRtXBZQJ.js";import{Y as h}from"./YAxis-DVWoPU6G.js";import{B as c}from"./Brush-CbTCpmfN.js";import{B as x}from"./Bar-CukmCO32.js";import{R as u}from"./RechartsHookInspector-DGw_Tn__.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CvWnTU23.js";import"./immer-CibMA2Vd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C6VkPGGy.js";import"./index-7mth2ygc.js";import"./hooks-D_Ct_jBZ.js";import"./axisSelectors-Cjz2FycN.js";import"./d3-scale-DSnNq-Zb.js";import"./zIndexSlice-Bh8d7RDS.js";import"./renderedTicksSlice-3asYpfwT.js";import"./CartesianChart-DEUFIUWW.js";import"./chartDataContext-DLPHSsFH.js";import"./CategoricalChart-CdAWxs2w.js";import"./CartesianAxis-z8YHC5m1.js";import"./Layer-BwFEHJgH.js";import"./Text-D6Wg1Fki.js";import"./DOMUtils-DtO1NYEm.js";import"./Label-BiYutikV.js";import"./ZIndexLayer-BcEHBZGv.js";import"./types-BYICSsoS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-D4kX2TZ6.js";import"./ReactUtils-BVTYGt8W.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-8cpt_Ena.js";import"./isPlainObject-3QUEcvgB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-FhpSgi7L.js";import"./useAnimationId-CQohD0O1.js";import"./Trapezoid-C6D7yGaZ.js";import"./Sector-DJx2xoEl.js";import"./Symbols-DwxktYbI.js";import"./symbol-B65zJ9aN.js";import"./step-D0TR_J7h.js";import"./Curve-BgNWnWhG.js";import"./RegisterGraphicalItemId-B7TKQ3nD.js";import"./ErrorBarContext-C-GsEDOJ.js";import"./GraphicalItemClipPath-2_yqp8aO.js";import"./SetGraphicalItem-DGqH91p1.js";import"./getZIndexFromUnknown-Dpx2smIr.js";import"./graphicalItemSelectors-CTP79arQ.js";import"./index-DNx2k_-S.js";import"./ChartSizeDimensions-ChWtlIEh.js";import"./OffsetShower-ChplnW4p.js";import"./PlotAreaShower-UojNVDVn.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
