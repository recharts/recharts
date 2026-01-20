import{e}from"./iframe-CZOKXyYX.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-ZCpvDDUM.js";import{B as p}from"./BarChart-CnEEJFJH.js";import{X as l}from"./XAxis-DzfgVxfw.js";import{Y as h}from"./YAxis-3HWUkaDa.js";import{B as c}from"./Brush-DBEYXeOd.js";import{B as x}from"./Bar-D2VkXKSj.js";import{R as u}from"./RechartsHookInspector-B7tAaeEL.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BdIYVt_j.js";import"./PolarUtils-BdcP-kXS.js";import"./RechartsWrapper-BzS4jEvb.js";import"./hooks-Cs7Pyl2H.js";import"./axisSelectors-Cy9T5-14.js";import"./zIndexSlice-DkluUigR.js";import"./CartesianChart-CEGcX5i7.js";import"./chartDataContext-CGCgcL6T.js";import"./CategoricalChart-CueK-ohc.js";import"./CartesianAxis-DWBeqImC.js";import"./Layer-ipPtt6GK.js";import"./Text-DBc2QLFr.js";import"./DOMUtils-BK6pK0qd.js";import"./Label-wuyiSzGf.js";import"./ZIndexLayer-DuvPoAvp.js";import"./types-mDJez9wS.js";import"./tooltipContext-DDrfIX0-.js";import"./ReactUtils-CKx1UPE3.js";import"./ActiveShapeUtils-BNlU2ssp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-8jBBkAoM.js";import"./useAnimationId-BrU_ieRo.js";import"./Trapezoid-Damk21qr.js";import"./Sector-Dsjq5sTO.js";import"./Symbols-DZsrADbK.js";import"./Curve-Cn7M-l6J.js";import"./RegisterGraphicalItemId-CT7gxHP9.js";import"./ErrorBarContext-CgOU7j9T.js";import"./GraphicalItemClipPath-DG_FLSO_.js";import"./SetGraphicalItem-A4Aj3AlV.js";import"./getZIndexFromUnknown-DHYiQXz8.js";import"./graphicalItemSelectors-Bg9oV1_t.js";import"./index-Bq0EYqss.js";import"./ChartSizeDimensions-DcBo26mg.js";import"./OffsetShower-D0BahXva.js";import"./PlotAreaShower-D0tOLrH8.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
