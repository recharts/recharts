import{R as t}from"./iframe-BWaBJMJm.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CtmWcXao.js";import{B as p}from"./BarChart-CxqWPpsn.js";import{X as l}from"./XAxis-Du0WrONz.js";import{Y as h}from"./YAxis-BbW4o0g7.js";import{B as x}from"./Brush-BeVTvv0O.js";import{B as c}from"./Bar-DOGzCGT3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dt5qCkk5.js";import"./index-DUifKCeq.js";import"./index-D2GUCawm.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BoTf8eWq.js";import"./isWellBehavedNumber-hjVXvh9H.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_LHq0Dp.js";import"./axisSelectors-WjeILgtA.js";import"./d3-scale-DYdeDEBW.js";import"./index-I7xfvYkR.js";import"./index-B1abja9I.js";import"./renderedTicksSlice-B4vPTGd7.js";import"./index-BakoavmS.js";import"./CartesianChart-DTHkZiLZ.js";import"./chartDataContext-D5Ez6fbj.js";import"./CategoricalChart-DZaCTL-I.js";import"./CartesianAxis-ihxfexzN.js";import"./Layer-WH1GH-3R.js";import"./Text-CaLxBG_J.js";import"./DOMUtils-ZU1bRPvN.js";import"./useId-DH400x7B.js";import"./useBackwardsCompatibleTheme-C9V53e4Q.js";import"./Label-DaAaSDK3.js";import"./ZIndexLayer-BbdMqToM.js";import"./types-CeFzDtUp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CqoL6PKs.js";import"./useAnimationId-CrzFE7bT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DkogAKI_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DlN6eMVb.js";import"./tooltipContext-B7JCteW0.js";import"./RegisterGraphicalItemId-B7vtKiJL.js";import"./ErrorBarContext-BU0PpEiW.js";import"./GraphicalItemClipPath-DPY_uU75.js";import"./SetGraphicalItem-DSLLIs8g.js";import"./getZIndexFromUnknown-CTXFDQEN.js";import"./useGraphicalItemIdentity-B-PLK1-q.js";import"./dataEntryStyles-DHMdVsJm.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
