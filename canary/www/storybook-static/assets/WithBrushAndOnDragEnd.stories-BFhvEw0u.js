import{R as t}from"./iframe-ZXtfb4yD.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BYWdHlTe.js";import{B as p}from"./BarChart-CrV4RJj0.js";import{X as l}from"./XAxis-DLWMZedb.js";import{Y as h}from"./YAxis-CpZ4maZ2.js";import{B as x}from"./Brush-C5Ex0qO0.js";import{B as c}from"./Bar-DcJP8DZE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-UQol_oMR.js";import"./index-SIPxA2ka.js";import"./index-Bo6RSdvh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-xIIdHmm9.js";import"./isWellBehavedNumber-DxKoG7Ba.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DeOd3865.js";import"./axisSelectors-B-7UnAhK.js";import"./d3-scale-CLk4WDw9.js";import"./index-BxR6IAN7.js";import"./index-CZ8YJbDi.js";import"./renderedTicksSlice-D1lcrg0m.js";import"./index-Bj13Gnlq.js";import"./CartesianChart-yzowS7n9.js";import"./chartDataContext-Vgws8ib_.js";import"./CategoricalChart-DidrDbM3.js";import"./CartesianAxis-DsWhwIZU.js";import"./Layer-BNcbfxWn.js";import"./Text-DV_FynOi.js";import"./DOMUtils-C0C9d7iI.js";import"./useId-0Gl7JyMf.js";import"./useBackwardsCompatibleTheme-C4wl67U3.js";import"./Label-C_XzWtLw.js";import"./ZIndexLayer-Ck2jrevN.js";import"./types-D_Nat2yf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-sQcK0Cnf.js";import"./useAnimationId-BzcgW_0X.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bc1PlKQQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C4fIJN7R.js";import"./tooltipContext-1PumGPBU.js";import"./RegisterGraphicalItemId-BLTTAUNU.js";import"./ErrorBarContext-CM-xdG0H.js";import"./GraphicalItemClipPath-Du8p1Oou.js";import"./SetGraphicalItem-QMczFyB9.js";import"./getZIndexFromUnknown-DBEGKWYw.js";import"./useGraphicalItemIdentity-DEuXq7FQ.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
