import{R as t}from"./iframe-BWYv0W0I.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BZjtJtRO.js";import{B as p}from"./BarChart-PMFDxgQO.js";import{X as l}from"./XAxis-DpTHfSKL.js";import{Y as h}from"./YAxis-DIG6TcZO.js";import{B as x}from"./Brush-BubEol2g.js";import{B as c}from"./Bar-Dm45xU6u.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BPqm6WO1.js";import"./index-DTxMd3-u.js";import"./index-BcXaHiqG.js";import"./get-YpvzSERN.js";import"./resolveDefaultProps-_5I5KHm0.js";import"./isWellBehavedNumber-BvLe-n8Z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-A48iA3eZ.js";import"./index-C30dpYE2.js";import"./index-ByNF5ywv.js";import"./renderedTicksSlice-BylsjMl6.js";import"./axisSelectors-BqS5J0kn.js";import"./d3-scale-CFHPl3Hx.js";import"./CartesianChart-CWrMrl0B.js";import"./chartDataContext-8Yx6Y713.js";import"./CategoricalChart-COWvBEEg.js";import"./CartesianAxis-DUktxQyy.js";import"./Layer-Bj1H698J.js";import"./Text-z-woKoAn.js";import"./DOMUtils-CcdNUrj8.js";import"./Label-Df5r-7el.js";import"./ZIndexLayer-DFHa7v_x.js";import"./types-Dytxgf6V.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-cYptnfj1.js";import"./AnimatedItems-DhxwbWlw.js";import"./useAnimationId-CZnp92c4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CT2eea31.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-iodju3ZT.js";import"./RegisterGraphicalItemId-CK6cp7E5.js";import"./ErrorBarContext-CwrVQcWY.js";import"./GraphicalItemClipPath-lDfebASI.js";import"./SetGraphicalItem-DQ0Lh0bj.js";import"./getZIndexFromUnknown-fNBXNElF.js";import"./graphicalItemSelectors-BD089yMu.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
