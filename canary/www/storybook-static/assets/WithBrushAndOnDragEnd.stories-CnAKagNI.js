import{R as t}from"./iframe-Cy0y2ns8.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DIpYS2pc.js";import{B as p}from"./BarChart-CKYndNhf.js";import{X as l}from"./XAxis-I6ByZryQ.js";import{Y as h}from"./YAxis-CsAJfuiU.js";import{B as x}from"./Brush-B1yGizz4.js";import{B as c}from"./Bar-DTdmGkz3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-GHjNdOLX.js";import"./index-Cannfx1n.js";import"./index-MdLyaQUy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-W2SA8EIl.js";import"./isWellBehavedNumber-BHC-xMw7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-tnntysZI.js";import"./axisSelectors-B794UmHN.js";import"./d3-scale-Bptb5_HU.js";import"./index-ed9S2gc_.js";import"./index-DMDvJQSi.js";import"./renderedTicksSlice-CcSlQNqm.js";import"./index-z8Y8cGgG.js";import"./CartesianChart-CkZRPVAF.js";import"./chartDataContext-_Lx0KL5V.js";import"./CategoricalChart-C4X2uKz7.js";import"./CartesianAxis-DZCowAwb.js";import"./Layer-Dt1c85pW.js";import"./Text-CR6ssGu_.js";import"./pageBackground-C3xeFLUy.js";import"./useId-DoEOHgvO.js";import"./useBackwardsCompatibleTheme-DoDvRsUd.js";import"./Label-VahG2YbD.js";import"./ZIndexLayer-DfeIwWxW.js";import"./types-es-lSoS7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-Cnxc9Yt_.js";import"./useAnimationId-DaE5gtmK.js";import"./dataEntryStyles-D42MsVUE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BAcsN_iB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-XGy6Fbre.js";import"./tooltipContext-GJ6dETi4.js";import"./ErrorBarContext-Cwi5XQfL.js";import"./GraphicalItemClipPath-ANLjpQPo.js";import"./SetGraphicalItem-jtlbfoJE.js";import"./getZIndexFromUnknown-DrdS4TKg.js";import"./useEffectiveDataKey-BEJg52qX.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
