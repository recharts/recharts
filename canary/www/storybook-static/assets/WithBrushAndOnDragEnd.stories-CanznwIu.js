import{e as t}from"./iframe-DerYKIzi.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BjVe0Fqi.js";import{B as p}from"./BarChart-hemsRewe.js";import{X as l}from"./XAxis-Bgvn5DCx.js";import{Y as h}from"./YAxis-D6MwvlMv.js";import{B as c}from"./Brush-Dabg-UJj.js";import{B as x}from"./Bar-BhR19V-p.js";import{R as u}from"./RechartsHookInspector-6OICS92a.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D_i-pIL4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dp6BNSyV.js";import"./hooks-Bufm5eM3.js";import"./axisSelectors-D2mivk7c.js";import"./zIndexSlice-Dl8TZiao.js";import"./CartesianChart-D0F_6B8F.js";import"./chartDataContext-BIeWUiZ4.js";import"./CategoricalChart-SAQ8s2cq.js";import"./CartesianAxis-CgnzR7dE.js";import"./Layer-D3SGVv1F.js";import"./Text-D2gYoFny.js";import"./DOMUtils-6QLScgDd.js";import"./Label-Dcc5xZ5Y.js";import"./ZIndexLayer-B4AZig9C.js";import"./types-aH4hB60Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DpD997Ve.js";import"./ReactUtils-C811ViG8.js";import"./ActiveShapeUtils-BHypxLS_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2nS0zsop.js";import"./useAnimationId-Q_ju2aFP.js";import"./Trapezoid-BqTiWmsP.js";import"./Sector-KrvgbNAg.js";import"./Symbols-BsidgTnn.js";import"./Curve-HbHV5hCk.js";import"./RegisterGraphicalItemId-55_HnQyg.js";import"./ErrorBarContext-B9auALKr.js";import"./GraphicalItemClipPath-nQyCcZZw.js";import"./SetGraphicalItem-y1gBA4Wm.js";import"./getZIndexFromUnknown-fgnswuXS.js";import"./graphicalItemSelectors-DGqGzZkQ.js";import"./index-Baa4xFqo.js";import"./ChartSizeDimensions-CJTC7XUM.js";import"./OffsetShower-CcEDeZ1H.js";import"./PlotAreaShower-lQ69SKO-.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
