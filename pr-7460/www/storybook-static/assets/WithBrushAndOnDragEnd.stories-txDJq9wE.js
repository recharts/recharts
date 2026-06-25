import{R as t}from"./iframe-Bwb61Kb3.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D31yQesP.js";import{B as p}from"./BarChart-CD9z5lUn.js";import{X as l}from"./XAxis-CSW3SlTU.js";import{Y as h}from"./YAxis-CFeDU12P.js";import{B as x}from"./Brush-a0U1c8Lo.js";import{B as c}from"./Bar-C9qBkTRy.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-_NZCx9ap.js";import"./index-u4qnc4RM.js";import"./index-DHxQl28E.js";import"./get-Cnvgfe2T.js";import"./resolveDefaultProps-BSJiJTDh.js";import"./isWellBehavedNumber-BUfCnJUB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BmkLmt4T.js";import"./index-VoBgttoT.js";import"./index-CQ8V2YYj.js";import"./renderedTicksSlice-DltxEF0x.js";import"./axisSelectors-C6KxvASB.js";import"./d3-scale-jv5Gnb2-.js";import"./CartesianChart-BNE4fepl.js";import"./chartDataContext-D41xMC5d.js";import"./CategoricalChart-BUwoY-M8.js";import"./CartesianAxis-BPlmGRVp.js";import"./Layer-Ci9WruQM.js";import"./Text-DNg8TFYr.js";import"./DOMUtils-ChqDP5B4.js";import"./Label-C3p-lZQP.js";import"./ZIndexLayer-Djnma_X0.js";import"./types-Bi-bjjeC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DjXrxuIo.js";import"./AnimatedItems-4rj5S85S.js";import"./useAnimationId-h0tb0wwo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CMlDVrj7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ZkpQ4WD_.js";import"./RegisterGraphicalItemId-BzHAnQiR.js";import"./ErrorBarContext-CyOyQ4I7.js";import"./GraphicalItemClipPath-CxkydB3y.js";import"./SetGraphicalItem-BRIRFn2y.js";import"./getZIndexFromUnknown-zcnBuJfC.js";import"./graphicalItemSelectors-hamdw4Lr.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};
