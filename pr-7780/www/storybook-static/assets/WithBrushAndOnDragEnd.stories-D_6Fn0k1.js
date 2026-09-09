import{R as t}from"./iframe-CrjMmK-P.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BjJGmtkk.js";import{B as p}from"./BarChart-D5rFTYLw.js";import{X as l}from"./XAxis-Bf99Djp-.js";import{Y as h}from"./YAxis-WGtSziYB.js";import{B as x}from"./Brush-k8XPCmJA.js";import{B as c}from"./Bar-CAGhqtCF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DvPRoUwa.js";import"./index-C29X7Fc2.js";import"./index-BDweFuqO.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-1lRPudDL.js";import"./isWellBehavedNumber-i-P4IxnU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-W15Lm7G0.js";import"./axisSelectors-CArdhpNf.js";import"./d3-scale-60bYpT2W.js";import"./index-DhUbeUHh.js";import"./index-C0KmE10p.js";import"./renderedTicksSlice-CoKKbA57.js";import"./index-p1bk8TMl.js";import"./CartesianChart-CtX-pqzv.js";import"./chartDataContext-rtr64WFG.js";import"./CategoricalChart-RhdZ5xjE.js";import"./CartesianAxis-B8LyCo9q.js";import"./Layer-D9-s7BIj.js";import"./Text-CvoG-yND.js";import"./DOMUtils-BLhe2-Wn.js";import"./useId-BEuvre-A.js";import"./useBackwardsCompatibleTheme-C_kcEgOz.js";import"./Label-BUscAhBU.js";import"./ZIndexLayer-BnhEIQdT.js";import"./types-DQIGWyvO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DhhQShtD.js";import"./useAnimationId-yNh7qZi1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-4U1uwwED.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DNRW1wio.js";import"./tooltipContext-BnMOhzUN.js";import"./RegisterGraphicalItemId-BtD1DcTG.js";import"./ErrorBarContext-DVTSO5_6.js";import"./GraphicalItemClipPath-d2m1y1AJ.js";import"./SetGraphicalItem-Cz1BmFYo.js";import"./getZIndexFromUnknown-DjH7KU0c.js";import"./useGraphicalItemIdentity-D4eInQUL.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
