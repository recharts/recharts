import{e}from"./iframe-CLIMsGOZ.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CbYFkYA0.js";import{B as p}from"./BarChart-C5UyfOQ1.js";import{X as l}from"./XAxis-D0rBjGgi.js";import{Y as h}from"./YAxis-BCedXT45.js";import{B as c}from"./Brush-B5UeQRfB.js";import{B as x}from"./Bar-BtNuA1eL.js";import{R as u}from"./RechartsHookInspector-B158dvGO.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-E8mWkwf6.js";import"./PolarUtils-BIAYT_Jm.js";import"./RechartsWrapper-lPK7Cxev.js";import"./hooks-DenE5nGN.js";import"./axisSelectors-GOM-QLi6.js";import"./zIndexSlice-DazYr2Iy.js";import"./CartesianChart-q3xsLMrE.js";import"./chartDataContext-B4asjYes.js";import"./CategoricalChart-DAMhxPe3.js";import"./CartesianAxis-tT7FqCIW.js";import"./Layer-l9L2Sb8o.js";import"./Text-BeJ5iM47.js";import"./DOMUtils-BnxK2rS8.js";import"./Label-QzDxpC8q.js";import"./ZIndexLayer-5xiPbIim.js";import"./types-HWBumAOZ.js";import"./tooltipContext-BI8Gpz0W.js";import"./ReactUtils-Bk0OFjED.js";import"./ActiveShapeUtils-YEQ3f73b.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-JG6TvpVB.js";import"./useAnimationId-wMl1lWMr.js";import"./Trapezoid-D79jjH6v.js";import"./Sector-C08coEZ4.js";import"./Symbols-DbV1O1CF.js";import"./Curve-DXQteT8k.js";import"./RegisterGraphicalItemId-46GsKK8-.js";import"./ErrorBarContext-D97KkegB.js";import"./GraphicalItemClipPath-D_8sBR8P.js";import"./SetGraphicalItem-C8e1XdZ2.js";import"./getZIndexFromUnknown-BIHzH5Tz.js";import"./graphicalItemSelectors-C2k1hf8k.js";import"./index-8YxDhDRV.js";import"./ChartSizeDimensions-4XerZwXh.js";import"./OffsetShower-CTodD9i0.js";import"./PlotAreaShower-BoV_Aqat.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
