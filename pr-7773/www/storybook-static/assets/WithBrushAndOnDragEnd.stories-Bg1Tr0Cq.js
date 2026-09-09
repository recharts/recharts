import{R as t}from"./iframe-BkVFpUlY.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DsJvGkf_.js";import{B as p}from"./BarChart-ktmqT9B-.js";import{X as l}from"./XAxis-DKVVz-sZ.js";import{Y as h}from"./YAxis-ydoiCG45.js";import{B as x}from"./Brush-DKusQ6Cj.js";import{B as c}from"./Bar-CS101LmD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BmqzJcEu.js";import"./index-0hsVYWu6.js";import"./index-DymoF_97.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BteSFwB2.js";import"./isWellBehavedNumber-CfBMT12P.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-odbOlBoE.js";import"./axisSelectors-B50PWx2F.js";import"./d3-scale-DYQ4LMXq.js";import"./index-Q5aHXVFQ.js";import"./index-YkbYvVvq.js";import"./renderedTicksSlice-CwTU9gZs.js";import"./index-DUxWWrkZ.js";import"./CartesianChart-CqMhYxBy.js";import"./chartDataContext-VrlvbsLo.js";import"./CategoricalChart-CzfSjKl0.js";import"./CartesianAxis-CKyL8NSQ.js";import"./Layer-DQ1QN6bj.js";import"./Text-BIwedGTb.js";import"./DOMUtils-BcDWMqtm.js";import"./useId-Cugd2wLY.js";import"./useBackwardsCompatibleTheme-bP9OoM6q.js";import"./Label-Cg9XptP0.js";import"./ZIndexLayer-CfoAs0yr.js";import"./types-CKn4wQG_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BpowKEth.js";import"./useAnimationId-Bk6mcJf6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cy_w7-0b.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BSJyn28s.js";import"./tooltipContext-fcW-xcg3.js";import"./RegisterGraphicalItemId-C4Vmg6Ny.js";import"./ErrorBarContext-BYIQqhKW.js";import"./GraphicalItemClipPath-KjuHWuk-.js";import"./SetGraphicalItem-BGmRK6gI.js";import"./getZIndexFromUnknown-EDbwK6Tp.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-D9FBhzIW.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
