import{R as t}from"./iframe-B87Mdf3W.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BIRpUMd-.js";import{B as p}from"./BarChart-Bml3Tta9.js";import{X as l}from"./XAxis-CR6bWmBK.js";import{Y as h}from"./YAxis-vKfYeEWT.js";import{B as x}from"./Brush-DbihfMzX.js";import{B as c}from"./Bar-CmasOwOZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B7C94OgR.js";import"./index-CFlriD1l.js";import"./index-DOs9r3IB.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DKsQyDke.js";import"./isWellBehavedNumber-B3D8b1zU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CTH97mkX.js";import"./index-DzAi6-mi.js";import"./index-Kzzk0SfL.js";import"./renderedTicksSlice--g9rzjaW.js";import"./axisSelectors-CjpQ8_nF.js";import"./d3-scale-BOgOxbfH.js";import"./CartesianChart-B1vhIJLv.js";import"./chartDataContext-qB4fiklo.js";import"./CategoricalChart-DkKx3P5s.js";import"./CartesianAxis-Bnk9r_M-.js";import"./Layer-rvbR5IlK.js";import"./Text-CiS0vhWP.js";import"./DOMUtils-Dj6lanE1.js";import"./Label-D69_s3j-.js";import"./ZIndexLayer-CBz7KXzh.js";import"./types-CS4XJdLR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-2ygZrkIo.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-FIMno2s6.js";import"./AnimatedItems-DhwNGwGQ.js";import"./useAnimationId-B04VzGQY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D3hzUcUp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dgoc85eT.js";import"./RegisterGraphicalItemId-B3POwG2t.js";import"./ErrorBarContext-DijL4Xrx.js";import"./GraphicalItemClipPath-DnF4EuGO.js";import"./SetGraphicalItem-BP9VRM5v.js";import"./getZIndexFromUnknown-DsPzlJcu.js";import"./graphicalItemSelectors-C2C4094n.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
