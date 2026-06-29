import{R as t}from"./iframe-CCxa2X_3.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CjS-6Q6g.js";import{B as p}from"./BarChart-mUzALl9j.js";import{X as l}from"./XAxis-DgXTsbE5.js";import{Y as h}from"./YAxis-LHNbupxO.js";import{B as x}from"./Brush-CDgg0rNt.js";import{B as c}from"./Bar-CnPZd7_M.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DVixtPip.js";import"./index-BTMSijfB.js";import"./index-Bu6kQjLM.js";import"./get-BWGRxCzY.js";import"./resolveDefaultProps-DiPmn6d5.js";import"./isWellBehavedNumber-D-qJMApD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-2JrQYSBT.js";import"./index-HidsIZF1.js";import"./index-DtdyiYMy.js";import"./renderedTicksSlice-BZsMGLS6.js";import"./axisSelectors-DutwzDNX.js";import"./d3-scale-BD_lAQxm.js";import"./CartesianChart-BqBORtky.js";import"./chartDataContext-un8h0oN7.js";import"./CategoricalChart-BETRAeyd.js";import"./CartesianAxis-06zEjNAD.js";import"./Layer-DSUD-a_F.js";import"./Text-zmbPwYi6.js";import"./DOMUtils-D9dcGvYT.js";import"./Label-BbbTGnnM.js";import"./ZIndexLayer-DK9HGDkh.js";import"./types-BCrxJhqI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DqymTWbB.js";import"./AnimatedItems-CtF1ph7i.js";import"./useAnimationId-Qtosu25G.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BK1YtbdL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D6Ox5ImN.js";import"./RegisterGraphicalItemId-Co8JXb8t.js";import"./ErrorBarContext-DiexwYLt.js";import"./GraphicalItemClipPath-hMgxAXNq.js";import"./SetGraphicalItem-BLsqb4fN.js";import"./getZIndexFromUnknown-9hn4chXx.js";import"./graphicalItemSelectors-DbH8wEHn.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
