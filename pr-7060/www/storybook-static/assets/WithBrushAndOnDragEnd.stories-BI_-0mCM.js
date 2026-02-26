import{e as t}from"./iframe-Ch2H383w.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CcoXvTIe.js";import{B as p}from"./BarChart-_VSeMVam.js";import{X as l}from"./XAxis-CNQurGdF.js";import{Y as h}from"./YAxis-DxTWoH9V.js";import{B as c}from"./Brush-C4uvURcJ.js";import{B as x}from"./Bar-BOqcBXON.js";import{R as u}from"./RechartsHookInspector-BJIWLpAN.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Ce5Vf20-.js";import"./immer-CuzWzTfz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B4us9W1h.js";import"./index-B83dRs4n.js";import"./hooks-CSqGm2Vh.js";import"./axisSelectors-D5kbvOqb.js";import"./d3-scale--P9_UiJN.js";import"./zIndexSlice-D0Km72rD.js";import"./renderedTicksSlice-Cpaoi516.js";import"./CartesianChart-Bsy01o0m.js";import"./chartDataContext-Dkm8eTMR.js";import"./CategoricalChart-DRsF6Hco.js";import"./CartesianAxis-DOQRlkLH.js";import"./Layer-yB3Q88eR.js";import"./Text-CMCGaMex.js";import"./DOMUtils-DvEd-B07.js";import"./Label-h8Lj8ZpR.js";import"./ZIndexLayer-Bo-lDWay.js";import"./types-yO-TS24R.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DxircbSh.js";import"./ReactUtils-BnK3eejK.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BKBe1trq.js";import"./isPlainObject-Bve2BbtD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BKDxLQJC.js";import"./useAnimationId-dRwxXRVb.js";import"./Trapezoid-DPpAMK_h.js";import"./Sector-HOrLF-jD.js";import"./Symbols-DbTFPMcv.js";import"./symbol-BWpDFnQE.js";import"./step-BoAzBu0R.js";import"./Curve-BBxbYyGH.js";import"./RegisterGraphicalItemId-DrnJwnvQ.js";import"./ErrorBarContext-BZSQmULr.js";import"./GraphicalItemClipPath-rQxmGc46.js";import"./SetGraphicalItem-BZ3_hlL3.js";import"./getZIndexFromUnknown-BTDbutHh.js";import"./graphicalItemSelectors-CbMnGhzf.js";import"./index-DtZkbyPi.js";import"./ChartSizeDimensions-7l9XUt5L.js";import"./OffsetShower-DDeP8nwr.js";import"./PlotAreaShower-CC7ji8nO.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
