import{e as t}from"./iframe-Dq5DdRfA.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-qGR3MUeV.js";import{B as p}from"./BarChart-DRCkoDi7.js";import{X as l}from"./XAxis-CZx-cxt6.js";import{Y as h}from"./YAxis-BfiaHiWI.js";import{B as c}from"./Brush-BR2KYEAj.js";import{B as x}from"./Bar-b5Qgp7-I.js";import{R as u}from"./RechartsHookInspector-hbHSdV_4.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DHlsVcqU.js";import"./immer-BgAF4C3H.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-vGlNcTAG.js";import"./index-KC-eWLnl.js";import"./hooks-BxbNPqIZ.js";import"./axisSelectors-BFeCG5Ru.js";import"./d3-scale-DI2YC43N.js";import"./zIndexSlice-DPv0Xhij.js";import"./renderedTicksSlice-DP9i4nv6.js";import"./CartesianChart-BaePTbzD.js";import"./chartDataContext-CXein_ih.js";import"./CategoricalChart-BcQURnMq.js";import"./CartesianAxis-D7oRmpa0.js";import"./Layer-xEbSwsN4.js";import"./Text-CZ8K0x5S.js";import"./DOMUtils-C3M38rM5.js";import"./Label-RkqWKdyr.js";import"./ZIndexLayer-CmxjkRKY.js";import"./types-D0iVcQvS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Dfb4q0I2.js";import"./ReactUtils-Cob9khRk.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BEqpyM3Z.js";import"./isPlainObject-C_fJeprc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DwxhPvUN.js";import"./useAnimationId-D_Jb4Dtq.js";import"./Trapezoid-CVP_TvCO.js";import"./Sector-D0MGcgsD.js";import"./Symbols-4l3uCecX.js";import"./symbol-DApxb55n.js";import"./step-Cni1WXw7.js";import"./Curve-tqjOY4Pq.js";import"./RegisterGraphicalItemId-DlkbZouM.js";import"./ErrorBarContext-Bj_DbTGw.js";import"./GraphicalItemClipPath-BA8J5QwR.js";import"./SetGraphicalItem-nN4OlGtN.js";import"./getZIndexFromUnknown-DknF_fsr.js";import"./graphicalItemSelectors-BJ7jsKd2.js";import"./index-DD51iIl-.js";import"./ChartSizeDimensions-CU3eWKS2.js";import"./OffsetShower-6LrCHYpG.js";import"./PlotAreaShower-BdkOHlKt.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
