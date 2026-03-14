import{e as t}from"./iframe-CsXVB2ZJ.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BCHdTh97.js";import{B as p}from"./BarChart-B9MuERtw.js";import{X as l}from"./XAxis-B7CspB_5.js";import{Y as h}from"./YAxis-CG9kcCow.js";import{B as c}from"./Brush-BilTwPou.js";import{B as x}from"./Bar-irvV9oNr.js";import{R as u}from"./RechartsHookInspector-DPsZ88KI.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dxo_4k9c.js";import"./immer-BTK-YsvV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsYOQVLv.js";import"./index-DrJPvX0I.js";import"./hooks-D_05cmM9.js";import"./axisSelectors-DotnTkUo.js";import"./d3-scale-COfDs1Hg.js";import"./zIndexSlice-COIrpl7N.js";import"./renderedTicksSlice-BIUh3E5-.js";import"./CartesianChart-D5A6zJYY.js";import"./chartDataContext-U_ALNAnQ.js";import"./CategoricalChart-D25YEStt.js";import"./CartesianAxis-D3FkxlAO.js";import"./Layer-ZxhtGexe.js";import"./Text-t92igXCI.js";import"./DOMUtils-DOi0Kbgg.js";import"./Label-CpKh3CyV.js";import"./ZIndexLayer-kRMHxQSg.js";import"./types-BRXmP5ht.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CL623EMG.js";import"./ReactUtils-BPsWb6oC.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CSysbPr0.js";import"./isPlainObject-C0suLCJu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BziwuLFH.js";import"./useAnimationId-CQeQyoAC.js";import"./Trapezoid-XBp8FK9I.js";import"./Sector-BbnyTQRb.js";import"./Symbols-B41PQ-gK.js";import"./symbol-C0zx-DBl.js";import"./step-Do92eA3g.js";import"./Curve-DWbGncva.js";import"./RegisterGraphicalItemId-Bh8wdrii.js";import"./ErrorBarContext-Dh71FriX.js";import"./GraphicalItemClipPath-CHSTcUHY.js";import"./SetGraphicalItem-1mPwySrk.js";import"./getZIndexFromUnknown-DeiGtIqz.js";import"./graphicalItemSelectors-CjrGpOc3.js";import"./index-B4Kp1LJ2.js";import"./ChartSizeDimensions-DnhUms5f.js";import"./OffsetShower-DndIy-Mf.js";import"./PlotAreaShower-BkBHMfKD.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
