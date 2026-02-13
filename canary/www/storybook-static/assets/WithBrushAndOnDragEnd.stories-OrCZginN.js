import{e as t}from"./iframe-DDewu6bn.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DXTExga0.js";import{B as p}from"./BarChart-3GbWFrYs.js";import{X as l}from"./XAxis-8FAWklv8.js";import{Y as h}from"./YAxis-D9vEUw1w.js";import{B as c}from"./Brush-CR7Y90_R.js";import{B as x}from"./Bar-2lXs6N7j.js";import{R as u}from"./RechartsHookInspector-CD3vvvGL.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B5JubxST.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CzQiRy-1.js";import"./hooks-DyhX_5uQ.js";import"./axisSelectors-DesRmFZd.js";import"./zIndexSlice-DyN1nTyR.js";import"./CartesianChart-C8I-Y6aj.js";import"./chartDataContext-CbJjYI1P.js";import"./CategoricalChart-hCldkx1o.js";import"./CartesianAxis-D7kXIk58.js";import"./Layer-DqLbE6Uv.js";import"./Text-ytjI21CM.js";import"./DOMUtils-Cf-jMyF1.js";import"./Label-J4ZfWAib.js";import"./ZIndexLayer-mUyPWZcK.js";import"./types-BJyKbQEz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BdVIHa0M.js";import"./ReactUtils-DtjzxdpY.js";import"./ActiveShapeUtils-uXTIH56O.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Don_yAtF.js";import"./useAnimationId-CjgQOJMR.js";import"./Trapezoid-Bbc_2Q2m.js";import"./Sector-efCwWuY6.js";import"./Symbols-DzJjx9Jp.js";import"./Curve-BBC21-sm.js";import"./RegisterGraphicalItemId-CHV5Wa4s.js";import"./ErrorBarContext-CZxFfXpJ.js";import"./GraphicalItemClipPath-B9jmiGSm.js";import"./SetGraphicalItem-CnIZ3Mlk.js";import"./getZIndexFromUnknown-X5J4hp43.js";import"./graphicalItemSelectors-aUvBtoK5.js";import"./index-BXZrkBkN.js";import"./ChartSizeDimensions-BLu5DM0Z.js";import"./OffsetShower-D84gsABh.js";import"./PlotAreaShower-CEgKBwqt.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
