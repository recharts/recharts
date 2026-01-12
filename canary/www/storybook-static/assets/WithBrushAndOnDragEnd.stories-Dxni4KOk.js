import{e}from"./iframe-B8wZLo82.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-mQHvFPpg.js";import{B as p}from"./BarChart-C0Ej1Q1H.js";import{X as l}from"./XAxis-BVtf3sZB.js";import{Y as h}from"./YAxis-DRyjSKtp.js";import{B as c}from"./Brush-CqwA1qCH.js";import{B as x}from"./Bar-DZSjuuu2.js";import{R as u}from"./RechartsHookInspector-GmoDPQRs.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DhFJ0Eqh.js";import"./PolarUtils-DHvcKc2n.js";import"./RechartsWrapper-CBigNIyW.js";import"./hooks-BiJhptmv.js";import"./axisSelectors-Bv-IDWqv.js";import"./zIndexSlice-vxKp5epo.js";import"./CartesianChart-o83YROHa.js";import"./chartDataContext-Cx3FiXmZ.js";import"./CategoricalChart-DfnOGKPM.js";import"./CartesianAxis-B9jPSK4o.js";import"./Layer-BJUTpLkJ.js";import"./Text-B5lfNvYb.js";import"./DOMUtils-Caps1FVU.js";import"./Label-DvY0zh6c.js";import"./ZIndexLayer-DdiLICHA.js";import"./types-DiGBS5_O.js";import"./tooltipContext-CuTQZya9.js";import"./ReactUtils-Dj7f4Iqr.js";import"./ActiveShapeUtils-CpZCSmIN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bg6726WX.js";import"./useAnimationId-Dy4qDS51.js";import"./Trapezoid-Zj_KtUDG.js";import"./Sector-B3KOtxMp.js";import"./Symbols-CZWpR43S.js";import"./Curve-CMsBNtPf.js";import"./RegisterGraphicalItemId-CCpmn4R2.js";import"./ErrorBarContext-D12Q2uZb.js";import"./GraphicalItemClipPath-BYlHtFhX.js";import"./SetGraphicalItem-CNzy8eWj.js";import"./getZIndexFromUnknown-CRBaJxD-.js";import"./graphicalItemSelectors-DZbwE9ZQ.js";import"./index-DUOpxgLn.js";import"./ChartSizeDimensions-QOi8XTXN.js";import"./OffsetShower-DE0ZkW5V.js";import"./PlotAreaShower-ZBvPTwOe.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
