import{e as t}from"./iframe-RyyUADvi.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BK7ZKOIC.js";import{B as p}from"./BarChart-DkGqVZdV.js";import{X as l}from"./XAxis-CoWhvSWs.js";import{Y as h}from"./YAxis-Un8vVQsB.js";import{B as c}from"./Brush-Bd8iBQ8H.js";import{B as x}from"./Bar-CYpY6KsP.js";import{R as u}from"./RechartsHookInspector-p0Yz6ifZ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CwxDEkD6.js";import"./immer-DiJOv4tT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-oQCIJm_t.js";import"./index-DS9IaigZ.js";import"./hooks-ZFjK5fyy.js";import"./axisSelectors-Bf3stQgf.js";import"./d3-scale-ZW2PW4r9.js";import"./zIndexSlice-I41T8JEG.js";import"./renderedTicksSlice-BUipPmkG.js";import"./CartesianChart-BVog2BC6.js";import"./chartDataContext-D7w4QAUg.js";import"./CategoricalChart-D1KFd6eK.js";import"./CartesianAxis-BpXuAb-I.js";import"./Layer-DGeVqCLc.js";import"./Text-BCjtKebt.js";import"./DOMUtils-CUy7YYLN.js";import"./Label-CQil7oNR.js";import"./ZIndexLayer-CXHEgDXB.js";import"./types-Bp-ZZqOO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DHhWnKq3.js";import"./ReactUtils-BuUocuWo.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Db-WQFuK.js";import"./isPlainObject-Dd20guMq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BY6gKUrO.js";import"./useAnimationId-6eUUABj9.js";import"./Trapezoid-BnRug_7I.js";import"./Sector-CY4skt_U.js";import"./Symbols-C-qwK5A2.js";import"./symbol-BBBIWRyY.js";import"./step-4PchhSUC.js";import"./Curve-BOxvHyTd.js";import"./RegisterGraphicalItemId-BvOeRSvq.js";import"./ErrorBarContext-DoMKVMyl.js";import"./GraphicalItemClipPath-B8_DVnDn.js";import"./SetGraphicalItem-Cl0KJDHX.js";import"./getZIndexFromUnknown-CNB0fveM.js";import"./graphicalItemSelectors-DwFXfbD1.js";import"./index-BPy7O-_m.js";import"./ChartSizeDimensions-B2WcmWF_.js";import"./OffsetShower-Cy4pmMeQ.js";import"./PlotAreaShower-CgXv_TiK.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
