import{e}from"./iframe-BeTvSsnM.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-D3IRE7yY.js";import{B as p}from"./BarChart-DrTcPygR.js";import{X as l}from"./XAxis-CikzDxWn.js";import{Y as h}from"./YAxis-htB2Xdvz.js";import{B as c}from"./Brush-zar5xtQ5.js";import{B as x}from"./Bar-CHHgzfDk.js";import{R as u}from"./RechartsHookInspector-CQodTe4G.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bu9sKtx0.js";import"./PolarUtils-CiP_-J6C.js";import"./RechartsWrapper-DqbHfwZA.js";import"./hooks-Buy-B5J7.js";import"./axisSelectors-B3oALCrY.js";import"./zIndexSlice-ClDvfLGt.js";import"./CartesianChart-Btcoj6QB.js";import"./chartDataContext-BveSyHyY.js";import"./CategoricalChart-7psyK6-L.js";import"./CartesianAxis-CLVwDgLN.js";import"./Layer-vwm7UlyD.js";import"./Text-DQUPEW1Z.js";import"./DOMUtils-CPaL2uk1.js";import"./Label-DX1B0Se3.js";import"./ZIndexLayer-D3vvSLkM.js";import"./types-ColG541f.js";import"./tooltipContext-1OFOmRSd.js";import"./ReactUtils-Bt5PnhOQ.js";import"./ActiveShapeUtils-DAFlR22H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Do5x2l-c.js";import"./useAnimationId-CijMLLZk.js";import"./Trapezoid-zw4Ixv-f.js";import"./Sector-CUcldSZb.js";import"./Symbols-Drvhtafw.js";import"./Curve-B6pW5hMh.js";import"./RegisterGraphicalItemId-ktGcRGkW.js";import"./ErrorBarContext-MJgNid9a.js";import"./GraphicalItemClipPath-CllyT1DZ.js";import"./SetGraphicalItem-T9xLTiUd.js";import"./getZIndexFromUnknown-Bs2AFGGc.js";import"./graphicalItemSelectors-3O4_0vAQ.js";import"./index-BBjIj-68.js";import"./ChartSizeDimensions-8siL2NNx.js";import"./OffsetShower-Bali05F_.js";import"./PlotAreaShower-DNqWhhRF.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
