import{e as t}from"./iframe-c0lvfgLm.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DNZkspsy.js";import{B as p}from"./BarChart-DB2qyyKX.js";import{X as l}from"./XAxis-BzKnXhRE.js";import{Y as h}from"./YAxis-CpBtSMnf.js";import{B as c}from"./Brush-BZ2cTJzO.js";import{B as x}from"./Bar-C5rYKrCf.js";import{R as u}from"./RechartsHookInspector-5i7IBG_e.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DX2cxMOG.js";import"./immer-DMEI_VCu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7zqAgEz.js";import"./index-JTQ4PF_k.js";import"./hooks-ChUb4DZG.js";import"./axisSelectors-CPhAqa0q.js";import"./d3-scale-DyxWsOri.js";import"./zIndexSlice-B7Te91Jz.js";import"./renderedTicksSlice-CoATx-5v.js";import"./CartesianChart-B0tcceZf.js";import"./chartDataContext-D5ehU8Li.js";import"./CategoricalChart-CZL3Qa9D.js";import"./CartesianAxis-BPHeWl3o.js";import"./Layer-7iJmeUkd.js";import"./Text-Bx9IcEZb.js";import"./DOMUtils-lAJ9Yg9q.js";import"./Label-BLt0xOi5.js";import"./ZIndexLayer-FNmvAVY8.js";import"./types-Dylc_TMc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DWHuWuaq.js";import"./ReactUtils-CueXlXtD.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DlPS2wY5.js";import"./isPlainObject-YzH8Qd1R.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CcbUzCSE.js";import"./useAnimationId-BHpMyUty.js";import"./Trapezoid-CQsqSlZw.js";import"./Sector-Bob5xxX4.js";import"./Symbols-DtF8_27w.js";import"./symbol-BFhqOZgB.js";import"./step-BpAcvZss.js";import"./Curve-BXRCCM_V.js";import"./RegisterGraphicalItemId-B0SpB0cP.js";import"./ErrorBarContext-BIxtFArD.js";import"./GraphicalItemClipPath-BPFJLqSa.js";import"./SetGraphicalItem-DnhQPEpT.js";import"./getZIndexFromUnknown-DTpz1cfi.js";import"./graphicalItemSelectors-BRP-cgOs.js";import"./index-B2Ds3Lof.js";import"./ChartSizeDimensions-biGDO6V4.js";import"./OffsetShower-bDiiPLh2.js";import"./PlotAreaShower-DfFE-FzJ.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
