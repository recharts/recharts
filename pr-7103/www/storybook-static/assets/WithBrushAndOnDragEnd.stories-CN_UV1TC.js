import{e as t}from"./iframe-I81QGiZ0.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DEF1A1K9.js";import{B as p}from"./BarChart-D-esW7qv.js";import{X as l}from"./XAxis-CQKq-ex8.js";import{Y as h}from"./YAxis-w5mY6Ink.js";import{B as c}from"./Brush-S82jSstz.js";import{B as x}from"./Bar-BPVwY_gT.js";import{R as u}from"./RechartsHookInspector-CY8GaMGS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CESK2sOz.js";import"./immer-Bx-m2dTE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DhPN24j4.js";import"./index-MTHTVMV2.js";import"./hooks-BwARZfYC.js";import"./axisSelectors-D3NUsEze.js";import"./d3-scale-BKQywhX-.js";import"./zIndexSlice-BTQopzha.js";import"./renderedTicksSlice-DjaQJSKB.js";import"./CartesianChart-BgVpH7Hp.js";import"./chartDataContext-DLJ8LOtf.js";import"./CategoricalChart-Dhxptkdp.js";import"./CartesianAxis-B00ihn4w.js";import"./Layer-nQYqqIOO.js";import"./Text-CYvk9Z-R.js";import"./DOMUtils-DRotObOj.js";import"./Label-LA2ogkfT.js";import"./ZIndexLayer-R3Wk8cgP.js";import"./types-CpBHwU86.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BkxoPcwr.js";import"./ReactUtils-bl8BpOYM.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C9oxgbzm.js";import"./isPlainObject-3DRjiOwk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSAz1yWp.js";import"./useAnimationId-BTiaxNBH.js";import"./Trapezoid-BCwQCoIH.js";import"./Sector-CEDvP0Pt.js";import"./Symbols-MCFH85eq.js";import"./symbol-B5gXRZo2.js";import"./step-DCb-mqT3.js";import"./Curve-COcp6alG.js";import"./RegisterGraphicalItemId-ECNqkOOP.js";import"./ErrorBarContext-6fNIAsL2.js";import"./GraphicalItemClipPath-BVS2WqeA.js";import"./SetGraphicalItem-D5u-UCbo.js";import"./getZIndexFromUnknown-DD8ECy1A.js";import"./graphicalItemSelectors-Bhl9ritq.js";import"./index-DG9lLNBE.js";import"./ChartSizeDimensions-BL05aSMc.js";import"./OffsetShower-B9su28DB.js";import"./PlotAreaShower-D0Rx9exC.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
