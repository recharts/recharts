import{e}from"./iframe-DTjNyuRV.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-C4xGcSTy.js";import{B as p}from"./BarChart-BSb-I72k.js";import{X as l}from"./XAxis-Cc4WtM0z.js";import{Y as h}from"./YAxis-CTYfecrB.js";import{B as c}from"./Brush-B01CTEhC.js";import{B as x}from"./Bar-CQ9qjQMP.js";import{R as u}from"./RechartsHookInspector-euo4g-ug.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-SGcnM_aC.js";import"./PolarUtils-jGr_7wxa.js";import"./RechartsWrapper-Buv5ZAi-.js";import"./hooks-BKspSbbk.js";import"./axisSelectors-C5N0FKJg.js";import"./zIndexSlice-DRfn0LKt.js";import"./CartesianChart-oqf3iy5S.js";import"./chartDataContext-_UJlrEtw.js";import"./CategoricalChart-D9AJMhmv.js";import"./CartesianAxis-DGjvbjMn.js";import"./Layer-Bnob1t-w.js";import"./Text-Df79kjUu.js";import"./DOMUtils-Ckv5L2Ry.js";import"./Label-BLKfXojP.js";import"./ZIndexLayer-DQomkPs4.js";import"./types-To9Ddb8E.js";import"./tooltipContext-DeWM14_N.js";import"./ReactUtils-338dS-Qh.js";import"./ActiveShapeUtils-DzFlbCdp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-p9Ft26dZ.js";import"./useAnimationId-DyTjjL6a.js";import"./Trapezoid-DDbPynHI.js";import"./Sector-DY-WO6-X.js";import"./Symbols-Bqb-NDkg.js";import"./Curve-OPgUPtNu.js";import"./RegisterGraphicalItemId-DpE9EW2r.js";import"./ErrorBarContext-D6_J_E6J.js";import"./GraphicalItemClipPath-C3b1vJcH.js";import"./SetGraphicalItem-B-b4IafD.js";import"./getZIndexFromUnknown-oJ4pp5B2.js";import"./graphicalItemSelectors-DqkonIUB.js";import"./index-qnmfyn6T.js";import"./ChartSizeDimensions-C7n2xQzd.js";import"./OffsetShower-NiY8JQK2.js";import"./PlotAreaShower-B9h0VEbL.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
