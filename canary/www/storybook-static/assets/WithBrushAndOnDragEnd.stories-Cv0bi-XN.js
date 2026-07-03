import{R as t}from"./iframe-Bqhaiwq8.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BJS-a__d.js";import{B as p}from"./BarChart-DP_5y0wX.js";import{X as l}from"./XAxis-Du5noYHq.js";import{Y as h}from"./YAxis-BtCExx2a.js";import{B as x}from"./Brush-Cbju0FAZ.js";import{B as c}from"./Bar-REXa0AwW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C_LSyirk.js";import"./index-CENQUa5y.js";import"./index-ChBrJC7P.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bz_Hg9tX.js";import"./isWellBehavedNumber-Be3mi6aN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D0HX42ff.js";import"./index-QuJ2DhnT.js";import"./index-DxkzSUWz.js";import"./renderedTicksSlice-dCTNHtgX.js";import"./axisSelectors-Dd8okoki.js";import"./d3-scale-i5sn4jpY.js";import"./CartesianChart-DUun358R.js";import"./chartDataContext-BxVBYRL6.js";import"./CategoricalChart-BqinH4KG.js";import"./CartesianAxis-217VZgzf.js";import"./Layer-Co0F7rtj.js";import"./Text-BtH8DQvC.js";import"./DOMUtils-BpHmJx8-.js";import"./Label-D7swILSN.js";import"./ZIndexLayer-CIZ0RaUe.js";import"./types-OmV-cVYy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BZgtZUe3.js";import"./AnimatedItems-ZUM4uHMT.js";import"./useAnimationId-D0jk17bx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BIkqYwDS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DZHTMyL3.js";import"./RegisterGraphicalItemId-BMXEaOnC.js";import"./ErrorBarContext-CWwmFSat.js";import"./GraphicalItemClipPath-9FMv3-Ih.js";import"./SetGraphicalItem-CKezQY-K.js";import"./getZIndexFromUnknown-c6n4tA5_.js";import"./graphicalItemSelectors-CchqaGKR.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
