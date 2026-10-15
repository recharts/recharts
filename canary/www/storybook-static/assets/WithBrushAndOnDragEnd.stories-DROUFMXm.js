import{R as t}from"./iframe-CcyN1ZV1.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DWTF0hX9.js";import{B as p}from"./BarChart-Cp2dUfw8.js";import{X as l}from"./XAxis-6LjH0TsS.js";import{Y as h}from"./YAxis-DQC0nPlg.js";import{B as x}from"./Brush-B-UhM65w.js";import{B as c}from"./Bar-DNXzfDPP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B9Dwf27c.js";import"./index-Dyila60U.js";import"./index-AJQJO5x9.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CTY6OgJi.js";import"./isWellBehavedNumber-CnBZkqHG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-9S0sCc.js";import"./axisSelectors-B4ReTl4S.js";import"./d3-scale-BxouAPuB.js";import"./index-B2XcMOi-.js";import"./index-BVkJtaEu.js";import"./renderedTicksSlice-Bjh8Fjbe.js";import"./index-_YIGzYhu.js";import"./CartesianChart-B3SfFTfT.js";import"./chartDataContext-BSpB3ZZP.js";import"./CategoricalChart-CXFsQjCx.js";import"./CartesianAxis-DnpMFCoE.js";import"./Layer-cvLVo1Gu.js";import"./Text-GXnWYGAc.js";import"./pageBackground-D_UkCcJZ.js";import"./useId-C9u3rAWe.js";import"./useBackwardsCompatibleTheme-BdBaTXYz.js";import"./Label-DeeiGPOy.js";import"./ZIndexLayer-CpLPcSfq.js";import"./types-U4cAvHsY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-CeU8zAVc.js";import"./useAnimationId-J9w0IkU1.js";import"./dataEntryStyles-VGeW2eAl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdGfQr7e.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D6VvEytF.js";import"./tooltipContext-CcDYFQ4J.js";import"./ErrorBarContext-1RRlDzY7.js";import"./GraphicalItemClipPath-BRUG8_Yr.js";import"./SetGraphicalItem-CtBWbyZo.js";import"./getZIndexFromUnknown-qyJrGT0U.js";import"./useEffectiveDataKey-D_8eHxuE.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
