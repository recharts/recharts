import{R as t}from"./iframe-DwLZZwhK.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-lVUWNgM0.js";import{B as p}from"./BarChart-DuwrC4Ko.js";import{X as l}from"./XAxis-DBBjIwDo.js";import{Y as h}from"./YAxis-BRmSg-U1.js";import{B as x}from"./Brush-91Vc0Fcj.js";import{B as c}from"./Bar-DBq_vWy7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-m49sR4Np.js";import"./index-CyNYrL4w.js";import"./index-D2i4UmdT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D_yJAfqa.js";import"./isWellBehavedNumber-DdXnDQ5z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B6xOBDhR.js";import"./index-BRPN53-o.js";import"./index-VnXRJ0a1.js";import"./renderedTicksSlice-BnOQ8D5D.js";import"./axisSelectors-Deou-VxK.js";import"./d3-scale-CjSqz0E9.js";import"./CartesianChart--QBa1qTn.js";import"./chartDataContext-BGrP4bw5.js";import"./CategoricalChart-Bx727tBC.js";import"./CartesianAxis-ByQIstMG.js";import"./Layer-BVmot7FB.js";import"./Text-Bh0YxhQF.js";import"./DOMUtils-BGpns11t.js";import"./Label-tECJL-37.js";import"./ZIndexLayer-BAEsl3nH.js";import"./types-B7g8Th-s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-pLBMwypQ.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-C3AtKIbJ.js";import"./AnimatedItems-DKnm6tp0.js";import"./useAnimationId-C3Y_zOxU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DhnvvCg-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BFi0EA_4.js";import"./RegisterGraphicalItemId-CzEEk6Dd.js";import"./ErrorBarContext-wXozNj3Y.js";import"./GraphicalItemClipPath-C29F_2hP.js";import"./SetGraphicalItem-DX7YElzO.js";import"./getZIndexFromUnknown-BRCSk4uY.js";import"./graphicalItemSelectors-CsGPPAWZ.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
