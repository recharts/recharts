import{e}from"./iframe-BzK4IM4O.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DntSlYRe.js";import{B as p}from"./BarChart-zd4yAx4R.js";import{X as l}from"./XAxis-BEioX7l9.js";import{Y as h}from"./YAxis-FFHKkbRQ.js";import{B as c}from"./Brush-DLHI2HGI.js";import{B as x}from"./Bar-BnNxeRwK.js";import{R as u}from"./RechartsHookInspector-Blpd2IS8.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DxvkoyFj.js";import"./PolarUtils-CkcjhAmg.js";import"./RechartsWrapper-G-7uZuvB.js";import"./hooks-VI0oeyv4.js";import"./axisSelectors-FRDErLTA.js";import"./zIndexSlice-CDkWNK3b.js";import"./CartesianChart-LpoIcLQ4.js";import"./chartDataContext-DMRgNTR6.js";import"./CategoricalChart-DIHkHBGg.js";import"./CartesianAxis-Bvc9afGW.js";import"./Layer-D3djBZrj.js";import"./Text-2hmmkMzb.js";import"./DOMUtils-DhJGRkcK.js";import"./Label-Cw9dZn4K.js";import"./ZIndexLayer-CvqQuagi.js";import"./types-CR25OGX1.js";import"./tooltipContext-Cw9KLuKa.js";import"./ReactUtils-BdJFLjIw.js";import"./ActiveShapeUtils-CRuw5H-2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CHjVgmr4.js";import"./useAnimationId-BpCcKQdg.js";import"./Trapezoid-BORiQi9t.js";import"./Sector-BXKtHGMH.js";import"./Symbols-C_2JILz4.js";import"./Curve-Cez8Njk6.js";import"./RegisterGraphicalItemId-BlwXRQ76.js";import"./ErrorBarContext-DVva_-TX.js";import"./GraphicalItemClipPath-C1-ivBuq.js";import"./SetGraphicalItem-DxeqcNbM.js";import"./getZIndexFromUnknown-T54ciAeD.js";import"./graphicalItemSelectors-BRf_76Py.js";import"./index-977mc2AH.js";import"./ChartSizeDimensions-D2LiT7mU.js";import"./OffsetShower-0fHUvhro.js";import"./PlotAreaShower-DvSB-8u7.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
