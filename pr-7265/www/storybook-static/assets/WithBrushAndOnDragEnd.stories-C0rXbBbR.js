import{e as t}from"./iframe-jbS-E__g.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Bc6HaNgk.js";import{B as p}from"./BarChart-DlU267LS.js";import{X as l}from"./XAxis-D2ruk6hB.js";import{Y as h}from"./YAxis-pXEMWudQ.js";import{B as c}from"./Brush-C7kPL_BG.js";import{B as x}from"./Bar-C-8XCMym.js";import{R as u}from"./RechartsHookInspector-BHyXn1pK.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-AZHx8nL2.js";import"./immer-1JIHG1sP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B-Sq2tux.js";import"./index-CUlk-TbT.js";import"./hooks-BJbsnZ8W.js";import"./axisSelectors--9NjHi9J.js";import"./d3-scale-CgsVpM20.js";import"./zIndexSlice-fK74Fe27.js";import"./renderedTicksSlice-kref20Pz.js";import"./CartesianChart-Bb9w7oEt.js";import"./chartDataContext-ZjVOMNJz.js";import"./CategoricalChart-Ca7o1_-0.js";import"./CartesianAxis-DVvLgkRy.js";import"./Layer-D3-cQotP.js";import"./Text-DPOTj-ff.js";import"./DOMUtils-Co4AyA4r.js";import"./Label-CqNEB3cA.js";import"./ZIndexLayer-C0UmvjN1.js";import"./types-KpzOghRu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BXqDKwqG.js";import"./ReactUtils-CmIIaVE7.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BRRS2IIP.js";import"./isPlainObject-CVxhLbCo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CttT3kPR.js";import"./useAnimationId-Dl-7lH7S.js";import"./Trapezoid-BNwixCzS.js";import"./Sector-C7-FdoJb.js";import"./Symbols-BT1y5TAN.js";import"./symbol-DR7gyPC3.js";import"./step-CRkklqfM.js";import"./Curve-BHonL5AG.js";import"./RegisterGraphicalItemId-B4Mgvmap.js";import"./ErrorBarContext-BTnDLWKc.js";import"./GraphicalItemClipPath-DQWRROhy.js";import"./SetGraphicalItem-CLdOZJOU.js";import"./getZIndexFromUnknown-DRq9OvD4.js";import"./graphicalItemSelectors-Dv9j5m5Q.js";import"./index-BLWb42Ez.js";import"./ChartSizeDimensions-BpE-Gxiy.js";import"./OffsetShower-BXbfoimB.js";import"./PlotAreaShower-CIgqmqyc.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
