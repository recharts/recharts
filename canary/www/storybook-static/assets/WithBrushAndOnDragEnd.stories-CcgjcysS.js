import{e as t}from"./iframe-DTmqf-89.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-B5lu4Lk9.js";import{B as p}from"./BarChart-Cgfw0vS5.js";import{X as l}from"./XAxis-FYHpftxu.js";import{Y as h}from"./YAxis-CBw5C5aG.js";import{B as c}from"./Brush-BKNjSgoy.js";import{B as x}from"./Bar-CoyBKVvo.js";import{R as u}from"./RechartsHookInspector-1827yCK6.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C00TVibV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-COXu3P-w.js";import"./hooks-BU_yGiYF.js";import"./axisSelectors-C7PUT4HW.js";import"./zIndexSlice-Vv1FeqCv.js";import"./CartesianChart-BS9lWtNm.js";import"./chartDataContext-DSwc8Xm3.js";import"./CategoricalChart-D6K3dQ4i.js";import"./CartesianAxis-CyR9LutT.js";import"./Layer-BTS4uGxy.js";import"./Text-CUOaxD2f.js";import"./DOMUtils-B3KaDt1C.js";import"./Label-egeGTsC3.js";import"./ZIndexLayer-DxJNdv8G.js";import"./types-B8nej2n0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DWeHrq8C.js";import"./ReactUtils-byYmdu0g.js";import"./ActiveShapeUtils-BRF5U1J5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-rgqUccDm.js";import"./useAnimationId-CwTw9zZj.js";import"./Trapezoid-jP0l7-Gz.js";import"./Sector-CGOePyQw.js";import"./Symbols-C_pVSGbd.js";import"./Curve-B7xWVUlS.js";import"./RegisterGraphicalItemId-DzHJgvRB.js";import"./ErrorBarContext-CQrouc6N.js";import"./GraphicalItemClipPath-BMDqk7zi.js";import"./SetGraphicalItem-BFlL7NjP.js";import"./getZIndexFromUnknown-BCgZvKju.js";import"./graphicalItemSelectors-B4vCRplq.js";import"./index-Csnv4pYo.js";import"./ChartSizeDimensions-DGu1LvxE.js";import"./OffsetShower-BXOIobIw.js";import"./PlotAreaShower-BatiQcKf.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
