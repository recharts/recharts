import{e as t}from"./iframe-CxdcV2iU.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DE5QCts1.js";import{B as p}from"./BarChart-Bd_u5qN7.js";import{X as l}from"./XAxis-C3dQuPvy.js";import{Y as h}from"./YAxis-Kn_05Fgj.js";import{B as c}from"./Brush-ypQFGnpb.js";import{B as x}from"./Bar-Di1vIZxd.js";import{R as u}from"./RechartsHookInspector-Cmn_3oAZ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BPgO4-u0.js";import"./immer-DbqgSjuj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-xlhT3EQD.js";import"./index-DQ1yjceL.js";import"./hooks-yyrPm8Tk.js";import"./axisSelectors-DYgSuTD7.js";import"./d3-scale-C-pis2q-.js";import"./zIndexSlice-DIhuoP2j.js";import"./renderedTicksSlice-DjqA2mFu.js";import"./CartesianChart-DuL6NNnl.js";import"./chartDataContext-yNk83f89.js";import"./CategoricalChart-3r6RgUng.js";import"./CartesianAxis-BIQ5tC5_.js";import"./Layer-C-TFz9Vn.js";import"./Text-gpiQWITt.js";import"./DOMUtils-C9YYP4cZ.js";import"./Label-BgXSQpWc.js";import"./ZIndexLayer-CWN6c1mH.js";import"./types-d6h03Wgd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-_0hGqBv0.js";import"./ReactUtils-BTiU_wBS.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C1lnMWmS.js";import"./isPlainObject-7KcThv1C.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dl57DUUW.js";import"./useAnimationId-LJTPfExM.js";import"./Trapezoid-DT3U4xXZ.js";import"./Sector-CTFx0r-m.js";import"./Symbols-PkBH2_X7.js";import"./symbol-6aewdZ8t.js";import"./step-D4kO6QN2.js";import"./Curve-BibSVypT.js";import"./RegisterGraphicalItemId-Cdy6MSjO.js";import"./ErrorBarContext-CcA-FFLX.js";import"./GraphicalItemClipPath-CIKZm01y.js";import"./SetGraphicalItem-C9igpr7g.js";import"./getZIndexFromUnknown-CRE50_W2.js";import"./graphicalItemSelectors-Bs-xZQV7.js";import"./index-8erOpdWv.js";import"./ChartSizeDimensions-yUCjMHhs.js";import"./OffsetShower-BFUvvsPo.js";import"./PlotAreaShower-BtFJQ4W6.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
