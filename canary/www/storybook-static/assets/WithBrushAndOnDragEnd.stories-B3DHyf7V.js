import{e}from"./iframe-B2sVpU8Z.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Dhi79NZV.js";import{B as p}from"./BarChart-B8xaZP39.js";import{X as l}from"./XAxis-tglJjYCd.js";import{Y as h}from"./YAxis-DOY4gwW6.js";import{B as c}from"./Brush-CxO7KLoC.js";import{B as x}from"./Bar-BZPreMrQ.js";import{R as u}from"./RechartsHookInspector-CVc_RdQc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CY8PYEK4.js";import"./PolarUtils-D7wLniJK.js";import"./RechartsWrapper-BO_KERjm.js";import"./hooks-CO8_l9qG.js";import"./axisSelectors-CpQ2T2MD.js";import"./zIndexSlice-D-AtcMvw.js";import"./CartesianChart-Cy5Kgrrw.js";import"./chartDataContext-BKjXgLbF.js";import"./CategoricalChart-Dr5ioBXT.js";import"./CartesianAxis-BtXVVZhW.js";import"./Layer-CgMiZnew.js";import"./Text-BIiE8Zu5.js";import"./DOMUtils-BEUHT1oG.js";import"./Label-Cini22wZ.js";import"./ZIndexLayer-BRoLt-1O.js";import"./types-DwL4AKHm.js";import"./tooltipContext-3LTJxxWf.js";import"./ReactUtils-myx_H7Lt.js";import"./ActiveShapeUtils-BmX6o3Pn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-r91KSjwc.js";import"./useAnimationId-Dci0ZhWb.js";import"./Trapezoid-CHmzYexd.js";import"./Sector-DOuizIpa.js";import"./Symbols-D-gYgerz.js";import"./Curve-DIfGyAUS.js";import"./RegisterGraphicalItemId-DS_P1DDV.js";import"./ErrorBarContext-DVCgOIGq.js";import"./GraphicalItemClipPath-Dg2YJGXp.js";import"./SetGraphicalItem-BEcH9pqG.js";import"./getZIndexFromUnknown-DKFBfRKK.js";import"./graphicalItemSelectors-BGjz7zMP.js";import"./index-8c_ign4p.js";import"./ChartSizeDimensions-DNVkMrvA.js";import"./OffsetShower-BJ2e6zPx.js";import"./PlotAreaShower-BJGrz5Yh.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
