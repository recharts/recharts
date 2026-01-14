import{e}from"./iframe-0lTGunMW.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BcVHM6kB.js";import{B as p}from"./BarChart--HZGrnPb.js";import{X as l}from"./XAxis-Cfcoth7C.js";import{Y as h}from"./YAxis-lXYEyZz1.js";import{B as c}from"./Brush-ChgfuFY6.js";import{B as x}from"./Bar-CS8vgPJn.js";import{R as u}from"./RechartsHookInspector-Dk1C8jj5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Hv7UJc4Y.js";import"./PolarUtils-mWliNy-S.js";import"./RechartsWrapper-CnzobKYl.js";import"./hooks-CXPWyfRe.js";import"./axisSelectors-Djz2yXUi.js";import"./zIndexSlice-D-YSqdMJ.js";import"./CartesianChart-CMMpVnoF.js";import"./chartDataContext-Cyqtlzkq.js";import"./CategoricalChart-CV-slYuT.js";import"./CartesianAxis-Co_LHUOm.js";import"./Layer-BnXp22uo.js";import"./Text-bhqNXfXh.js";import"./DOMUtils-B5DHQ51j.js";import"./Label-CODe3zwa.js";import"./ZIndexLayer-DWGlhSed.js";import"./types-WsTRE19v.js";import"./tooltipContext-PVr3o7WU.js";import"./ReactUtils-CXVPwG-V.js";import"./ActiveShapeUtils-CKfXoaq0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BCh8wZqF.js";import"./useAnimationId-D9Wpr36K.js";import"./Trapezoid-Tsb3ohUM.js";import"./Sector-Doli5igL.js";import"./Symbols-DWUe3itn.js";import"./Curve-DZsm4o-J.js";import"./RegisterGraphicalItemId-BjD0GJz1.js";import"./ErrorBarContext-ADLH_OpK.js";import"./GraphicalItemClipPath-DvXQ6fJn.js";import"./SetGraphicalItem-j4NHyBYf.js";import"./getZIndexFromUnknown-YuXuJ5q7.js";import"./graphicalItemSelectors-132llaWu.js";import"./index-DjmMVEJp.js";import"./ChartSizeDimensions-C9nZfRd3.js";import"./OffsetShower-ZX4tabc8.js";import"./PlotAreaShower-BEMT4keu.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const se=["WithBrushAndOnDragEnd"];export{t as WithBrushAndOnDragEnd,se as __namedExportsOrder,me as default};
