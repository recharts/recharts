import{R as t}from"./iframe-5h9djFbt.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BdIKrmmY.js";import{B as p}from"./BarChart-BoigrIZj.js";import{X as l}from"./XAxis-C-anAgqA.js";import{Y as h}from"./YAxis-DLX5lo20.js";import{B as x}from"./Brush-oKzI1Zw1.js";import{B as c}from"./Bar-BxBebqIO.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BRkWLUiC.js";import"./index-CEJvLeX_.js";import"./index-B9x0kJ-U.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-P7Da5mqR.js";import"./isWellBehavedNumber-DStaytIC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-QvnV0uNt.js";import"./axisSelectors-DjHfkPnH.js";import"./d3-scale-BcvXASmu.js";import"./index-BetN_RMo.js";import"./index-DkJjmLoR.js";import"./renderedTicksSlice-BUXo475V.js";import"./index-C__FEdkF.js";import"./CartesianChart-CEUQRdCg.js";import"./chartDataContext-Bq32LFRB.js";import"./CategoricalChart-DAp11J6f.js";import"./CartesianAxis-B0pvT4G3.js";import"./Layer-CyvtfT-W.js";import"./Text-KAAJmctl.js";import"./DOMUtils-ccwVme2-.js";import"./useId-C3MUzbkU.js";import"./useBackwardsCompatibleTheme-DY45QFX2.js";import"./Label-CP2XtCyN.js";import"./ZIndexLayer-BBvGlV3x.js";import"./types-CcKw46qs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-s0U1kgXJ.js";import"./useAnimationId-B4WX31v5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-igHY6SME.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-VwknAe2e.js";import"./tooltipContext-Dm3ZqEGu.js";import"./RegisterGraphicalItemId-zWnNyz48.js";import"./ErrorBarContext-COzjx-TB.js";import"./GraphicalItemClipPath-DH9zOtRz.js";import"./SetGraphicalItem-CXIeHIB6.js";import"./getZIndexFromUnknown-ClsRFbII.js";import"./useGraphicalItemIdentity-BGObpJ42.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
