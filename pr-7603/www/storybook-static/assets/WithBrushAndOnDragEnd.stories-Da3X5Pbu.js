import{R as t}from"./iframe-BfLA0-xE.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CxHl2f9g.js";import{B as p}from"./BarChart-Czo8KVNj.js";import{X as l}from"./XAxis-WPatnG2H.js";import{Y as h}from"./YAxis-BCvzYcvQ.js";import{B as x}from"./Brush-CKwyggIb.js";import{B as c}from"./Bar-Cl-Lo5Rp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B4u_I-fq.js";import"./index-B543iUM5.js";import"./index-BW364ill.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DtsxpH35.js";import"./isWellBehavedNumber-D8uyT4tB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BAR0yTLB.js";import"./index-BjcF9KIO.js";import"./index-Ua2Ph-JY.js";import"./renderedTicksSlice-CGglt0-o.js";import"./axisSelectors-k3PcgN9v.js";import"./d3-scale-d2-bssiM.js";import"./CartesianChart-BkXNVBYX.js";import"./chartDataContext-CGwkpgmd.js";import"./CategoricalChart-Y3X7k6Lu.js";import"./CartesianAxis-C347muns.js";import"./Layer-D2dAv-AD.js";import"./Text-ClB8EwPj.js";import"./DOMUtils-AQyyON10.js";import"./Label-KTqJ5zS0.js";import"./ZIndexLayer-t--MbcyW.js";import"./types-CMVKXdeT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BFvPG-1n.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-6iBApvE7.js";import"./AnimatedItems-27DP4DZS.js";import"./useAnimationId-Uu44n6G0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CJAi1gPv.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DGNTXBhg.js";import"./RegisterGraphicalItemId-E0HC7VAQ.js";import"./ErrorBarContext-CpZDTVtA.js";import"./GraphicalItemClipPath-Cw3vhXUK.js";import"./SetGraphicalItem-DquyLFCZ.js";import"./getZIndexFromUnknown-Bo5w_uCr.js";import"./graphicalItemSelectors-BLLskjKC.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
