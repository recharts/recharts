import{R as t}from"./iframe-DJ6rtu5y.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-GKDeUFOJ.js";import{B as p}from"./BarChart-BYDQgC71.js";import{X as l}from"./XAxis-BUVKQY8c.js";import{Y as h}from"./YAxis-pMQszEvE.js";import{B as x}from"./Brush-5SAPWS-n.js";import{B as c}from"./Bar-BxL0WSN3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-sudvDT5X.js";import"./index-Byzogkak.js";import"./index-BJPQreJu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-TPSV-hYk.js";import"./isWellBehavedNumber-B2OjYN3n.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGKs6O5B.js";import"./axisSelectors-C35c3TE0.js";import"./d3-scale-D71QV_XP.js";import"./index-0mnAToBP.js";import"./index-CUo6OWxa.js";import"./renderedTicksSlice-omd44aKK.js";import"./index-Bxq5EtVn.js";import"./CartesianChart-L5wJYDJT.js";import"./chartDataContext-Bk4HvwoY.js";import"./CategoricalChart-DK2VSKip.js";import"./CartesianAxis-BUpdfbmz.js";import"./Layer-cCkIU0Vd.js";import"./Text-BucchPCr.js";import"./DOMUtils-D7Zrpi7b.js";import"./useId-Byv4usHp.js";import"./useBackwardsCompatibleTheme-DdWo0Fs4.js";import"./Label-6LwczIk6.js";import"./ZIndexLayer-IvPQYMIA.js";import"./types-CF6XO-qy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-H08MVe4l.js";import"./useAnimationId-BjJyuwQe.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CTp7N4-J.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CPDo8aA6.js";import"./tooltipContext-CXTFKcjQ.js";import"./RegisterGraphicalItemId-BsIALwJ-.js";import"./ErrorBarContext-DT0TIJoX.js";import"./GraphicalItemClipPath-B5qfpalh.js";import"./SetGraphicalItem-DbBJcchq.js";import"./getZIndexFromUnknown-4RzOQXWf.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BwSeHd6K.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const xt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
