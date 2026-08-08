import{R as t}from"./iframe-CmqkAU55.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DttPm2yG.js";import{B as p}from"./BarChart-BbGf80_a.js";import{X as l}from"./XAxis-iMrKHVYZ.js";import{Y as h}from"./YAxis-DokLpr5R.js";import{B as x}from"./Brush-zKKPdT3W.js";import{B as c}from"./Bar-C7_jDiVs.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-45H0AIAq.js";import"./index-CrNK6q9O.js";import"./index-Ccra80NE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BMY6nxFh.js";import"./isWellBehavedNumber-eRUuJPZy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CdZHTDnE.js";import"./index-ImOuOX5i.js";import"./index-BIMQ5lZl.js";import"./axisSelectors-v6b69rA0.js";import"./d3-scale-CM34ZdGn.js";import"./renderedTicksSlice-CSz7jA9g.js";import"./CartesianChart-DHPjYa1I.js";import"./chartDataContext-CiMrnFkp.js";import"./CategoricalChart-CAeMU4C2.js";import"./CartesianAxis--fgQsGIr.js";import"./Layer-JlYR6W_Z.js";import"./Text-DFCCUK93.js";import"./DOMUtils-DDl9EDuG.js";import"./Label-CI9Aa94q.js";import"./ZIndexLayer-B8NE7f7O.js";import"./types-DD7WKq2Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C9_zddkn.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-CrR8cJ2x.js";import"./AnimatedItems-CEenLt2d.js";import"./useAnimationId-DOKlurUN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B7ctYemZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJK8znX0.js";import"./RegisterGraphicalItemId-DkK-FjDI.js";import"./ErrorBarContext-BQBXXX5z.js";import"./GraphicalItemClipPath-bjx9wsKp.js";import"./SetGraphicalItem-Bg0mOoGz.js";import"./getZIndexFromUnknown-DQOFV6cF.js";import"./graphicalItemSelectors-DQSzFvnt.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
