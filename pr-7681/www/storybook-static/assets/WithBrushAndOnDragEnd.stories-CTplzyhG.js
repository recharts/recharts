import{R as t}from"./iframe-DjwM0vgm.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-S6d1Qn7a.js";import{B as p}from"./BarChart-Z4T5kxZP.js";import{X as l}from"./XAxis-BZppthUd.js";import{Y as h}from"./YAxis-BzjCo30t.js";import{B as x}from"./Brush-DZl6B1HF.js";import{B as c}from"./Bar-COKJRg7P.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CucYyHCR.js";import"./index-D4-5N2-z.js";import"./index-z5DhIgT0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BFL8H9_0.js";import"./isWellBehavedNumber-DYJhUs7I.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BA3LaKhk.js";import"./index-DNt860Ln.js";import"./index-DxMXUOIN.js";import"./axisSelectors-BUwM7bTC.js";import"./d3-scale-CwSigEVq.js";import"./renderedTicksSlice-BdL9Tyr5.js";import"./CartesianChart-DqDwVa2A.js";import"./chartDataContext-D_305TZw.js";import"./CategoricalChart-Cq3eseQi.js";import"./CartesianAxis-SmpQZLxS.js";import"./Layer-4XX9ZvT_.js";import"./Text-esJ64cTt.js";import"./DOMUtils-CoSy3vPc.js";import"./useId-C20ArA-J.js";import"./useBackwardsCompatibleTheme-DiGCOcMi.js";import"./Label-DksVCiKj.js";import"./ZIndexLayer-BplzHMbl.js";import"./types-Co4bPNAL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C2ZGCcD3.js";import"./useAnimationId-C_ptHuMP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dhvnt00l.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D8QEGcp-.js";import"./tooltipContext-Dw7NaLsl.js";import"./RegisterGraphicalItemId-Bfv8TlvG.js";import"./ErrorBarContext-SnNUtmYc.js";import"./GraphicalItemClipPath-BTc4Rf5I.js";import"./SetGraphicalItem-BH3XWVOo.js";import"./getZIndexFromUnknown-Dtej4adq.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DksdnjTK.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
