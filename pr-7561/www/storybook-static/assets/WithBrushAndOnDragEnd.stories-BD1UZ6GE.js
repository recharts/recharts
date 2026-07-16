import{R as t}from"./iframe-wiglGnBh.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DGL63V4L.js";import{B as p}from"./BarChart-CAOV6vuP.js";import{X as l}from"./XAxis-DcNyXe69.js";import{Y as h}from"./YAxis-BqO3yae8.js";import{B as x}from"./Brush-DjSa5TX_.js";import{B as c}from"./Bar-BKvwhZwD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BMNVPqSq.js";import"./index-Mz84GrVY.js";import"./index-s4-LlFgK.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BM8NmOex.js";import"./isWellBehavedNumber-DsqaaTNJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-5SoXlYEo.js";import"./index-WWLocB5H.js";import"./index-1ZP6iUpr.js";import"./renderedTicksSlice-BYFI-WHt.js";import"./axisSelectors-BaS0q6Il.js";import"./d3-scale-Bn4UFc1s.js";import"./CartesianChart-Us5vBUdh.js";import"./chartDataContext-JmkVpeXS.js";import"./CategoricalChart-D2_16EkL.js";import"./CartesianAxis-CUoTvBNy.js";import"./Layer-nH5sm9p4.js";import"./Text-BTuAOKpf.js";import"./DOMUtils-LT1AML3l.js";import"./Label-B3PbOJvm.js";import"./ZIndexLayer-jQgtLS9e.js";import"./types-BoamgyWM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-B3aJiH8d.js";import"./AnimatedItems-B9y47QYM.js";import"./useAnimationId-2tqnpEoJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bid_fSIj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C95mhFam.js";import"./RegisterGraphicalItemId-BK4vqvvE.js";import"./ErrorBarContext-BdKRNCre.js";import"./GraphicalItemClipPath-RZ6a2McD.js";import"./SetGraphicalItem-BXbX8E7N.js";import"./getZIndexFromUnknown-mU-DoNtJ.js";import"./graphicalItemSelectors-BaQ9FtQD.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
