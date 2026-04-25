import{e as t}from"./iframe-BtT0SffI.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CUZpg3gX.js";import{B as p}from"./BarChart-D3R9SWUo.js";import{X as l}from"./XAxis-DXJhdPvR.js";import{Y as h}from"./YAxis-CB6KhlLv.js";import{B as c}from"./Brush-JgwFesiP.js";import{B as x}from"./Bar-DjnLlc8R.js";import{R as u}from"./RechartsHookInspector-CB7j-2_m.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D8J53oj2.js";import"./immer-BbVrPebv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D-UxfXd4.js";import"./index-yehPfNJx.js";import"./hooks-DumFRXGT.js";import"./axisSelectors-BJ3ETvYB.js";import"./d3-scale-Crn8UFeD.js";import"./zIndexSlice-EIyEPPia.js";import"./renderedTicksSlice-DR61tOdZ.js";import"./CartesianChart-CmyYYHYF.js";import"./chartDataContext-D50adY5q.js";import"./CategoricalChart-CFyceSYG.js";import"./CartesianAxis-By19jgIb.js";import"./Layer-C7tDoNBc.js";import"./Text-CjXZVbw2.js";import"./DOMUtils-C0x823nG.js";import"./Label-DMCJfrwq.js";import"./ZIndexLayer-Dsmg3QGj.js";import"./types-mmIvaWnd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CHPlZIfa.js";import"./ReactUtils-BK_CWQIO.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-qAI1kzWp.js";import"./isPlainObject-DlgbpHVk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DihoywZ_.js";import"./useAnimationId-Dq1v2kj_.js";import"./Trapezoid-CtXqEzYB.js";import"./Sector-BupA_fFM.js";import"./Symbols-Bh8GvTwl.js";import"./symbol-BNo9YZcN.js";import"./step-B__dH_Lt.js";import"./Curve-BjgRzFMd.js";import"./RegisterGraphicalItemId-DOATocTa.js";import"./ErrorBarContext-ClxAS9vu.js";import"./GraphicalItemClipPath-CKGxUURQ.js";import"./SetGraphicalItem-y832ODij.js";import"./getZIndexFromUnknown-CTC1A1j4.js";import"./graphicalItemSelectors-ZGOGf_TD.js";import"./index-Da5q_Tsr.js";import"./ChartSizeDimensions-77XN8iRa.js";import"./OffsetShower-DzUOYmPE.js";import"./PlotAreaShower-CT5v2Ou7.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
