import{e as t}from"./iframe-Ddtg6pJD.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CG9XTfyR.js";import{B as p}from"./BarChart-pzcxXmJK.js";import{X as l}from"./XAxis-BuVbltIt.js";import{Y as h}from"./YAxis-DZmITrXC.js";import{B as c}from"./Brush-BsUYTXQf.js";import{B as x}from"./Bar-BvfaycCs.js";import{R as u}from"./RechartsHookInspector-CCfITcFS.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BClOIvLb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_aZbub_8.js";import"./hooks-DMJ48TSK.js";import"./axisSelectors-yUV1wcMm.js";import"./zIndexSlice-Ccg2qy_d.js";import"./CartesianChart-BJB0TrzH.js";import"./chartDataContext-rtX1npPB.js";import"./CategoricalChart-DEs3YJXi.js";import"./CartesianAxis-Bg_xmACB.js";import"./Layer-DFCJKk43.js";import"./Text-Dr3Q50hE.js";import"./DOMUtils-ClD35WUk.js";import"./Label-DVFU8Pe0.js";import"./ZIndexLayer-BmeIxVaP.js";import"./types-ClXtAg6j.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-k2sqnbZb.js";import"./ReactUtils-Cw8MXjHP.js";import"./ActiveShapeUtils-DMR6fW_T.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DJ8F3yH0.js";import"./useAnimationId-CURyQWbL.js";import"./Trapezoid-CtTP1eQD.js";import"./Sector-ClpHZ9p-.js";import"./Symbols-TieKMT2F.js";import"./Curve-C-ksUiT7.js";import"./RegisterGraphicalItemId-QH6oSkLG.js";import"./ErrorBarContext-CvI528BI.js";import"./GraphicalItemClipPath-3Plpc9D_.js";import"./SetGraphicalItem-CMBgXv4K.js";import"./getZIndexFromUnknown-COkFz8cR.js";import"./graphicalItemSelectors-DLxd3U73.js";import"./index-DxoUglm9.js";import"./ChartSizeDimensions-CSjlsLF1.js";import"./OffsetShower-B4ALlsP9.js";import"./PlotAreaShower-B9MEGcsm.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
