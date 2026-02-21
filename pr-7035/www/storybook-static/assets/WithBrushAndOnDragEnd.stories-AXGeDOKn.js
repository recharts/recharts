import{e as t}from"./iframe-BJOlw-Op.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DnusCzBD.js";import{B as p}from"./BarChart-Dukq5XxQ.js";import{X as l}from"./XAxis-43KHVoFo.js";import{Y as h}from"./YAxis-BPIAOwcF.js";import{B as c}from"./Brush-yGAFPiCe.js";import{B as x}from"./Bar-C0OupSK-.js";import{R as u}from"./RechartsHookInspector-CPO0M8Xx.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Wvn0zu9i.js";import"./immer-DfiRd44R.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BHn8DA_q.js";import"./index-Qcq4P_Nt.js";import"./hooks-CnmjgxEU.js";import"./axisSelectors-WpUYVbi6.js";import"./d3-scale-DYbsxYoA.js";import"./zIndexSlice-CeiBfx4M.js";import"./renderedTicksSlice-BL6GofNb.js";import"./CartesianChart-BMN72tVe.js";import"./chartDataContext-DTMD5Oqb.js";import"./CategoricalChart-linssQQb.js";import"./CartesianAxis-Y6m8iiHs.js";import"./Layer-BBwqN8Jm.js";import"./Text-CtfAbWJb.js";import"./DOMUtils-OblLamz_.js";import"./Label-D8He3MwY.js";import"./ZIndexLayer-DYremzN-.js";import"./types-CnF3ZZeT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BCFBe9nx.js";import"./ReactUtils-BfARamF_.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CbtKb807.js";import"./isPlainObject-D466DHg4.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-vSj0lbmg.js";import"./useAnimationId-C14qPNnG.js";import"./Trapezoid-DFU8e3Ta.js";import"./Sector-CGzr-x9r.js";import"./Symbols-rjn2Khx8.js";import"./symbol-DL0oUuW8.js";import"./step-DgvGX9zV.js";import"./Curve-pTrnSDAj.js";import"./RegisterGraphicalItemId-Dp1CPZih.js";import"./ErrorBarContext-DQMcR9jZ.js";import"./GraphicalItemClipPath-EzqtyZLV.js";import"./SetGraphicalItem-BPcUI2au.js";import"./getZIndexFromUnknown-RIC495x0.js";import"./graphicalItemSelectors-WjPEDVR6.js";import"./index-D9yuPKYy.js";import"./ChartSizeDimensions-C1LvrkRR.js";import"./OffsetShower-B4YdrASr.js";import"./PlotAreaShower-DXcv1_AG.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
