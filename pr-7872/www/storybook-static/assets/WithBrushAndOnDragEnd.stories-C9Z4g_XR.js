import{R as t}from"./iframe-Hl-NyIui.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CfmJ5m3S.js";import{B as p}from"./BarChart-DuoC5S5x.js";import{X as l}from"./XAxis-dvgP8Xa0.js";import{Y as h}from"./YAxis-aV4oz1qa.js";import{B as x}from"./Brush-BvcTjzQF.js";import{B as c}from"./Bar-g_JiauVn.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BbfdAojm.js";import"./index--xPFvF8G.js";import"./index-BDqTEc2Q.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cef9-W_0.js";import"./isWellBehavedNumber-DkDVf3J3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-6h9C2k7P.js";import"./axisSelectors-BUNPrG5h.js";import"./d3-scale-jS5aGAiZ.js";import"./index-DBpjU2SQ.js";import"./index-BofEEBUS.js";import"./renderedTicksSlice-CNE8P8TP.js";import"./index-D2iNSRAe.js";import"./CartesianChart-Ci5OoGHz.js";import"./chartDataContext-C-VJeLBh.js";import"./CategoricalChart-CArj-fEw.js";import"./CartesianAxis-B_3pRXW9.js";import"./Layer-CFBs8Wel.js";import"./Text-BrVNMlzX.js";import"./DOMUtils-CG6HmAln.js";import"./useId-DW-27Lrg.js";import"./useBackwardsCompatibleTheme-gSrU4sF5.js";import"./Label-B3PtgVX6.js";import"./ZIndexLayer-C3i-HdBs.js";import"./types-B1K9SbcX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-ChX6uVrd.js";import"./useAnimationId-DLNOJTSV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ChG8X9SF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D9ea8jTE.js";import"./tooltipContext-BPtMQ1jk.js";import"./RegisterGraphicalItemId-D1BMc2l2.js";import"./ErrorBarContext-D2c9lRCZ.js";import"./GraphicalItemClipPath-CzquVpfg.js";import"./SetGraphicalItem-BgE77ea4.js";import"./getZIndexFromUnknown-D8k5nfEd.js";import"./useGraphicalItemIdentity-uh3z32K3.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
