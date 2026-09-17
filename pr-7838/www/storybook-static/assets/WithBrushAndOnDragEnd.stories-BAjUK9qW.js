import{R as t}from"./iframe-Bo128pRc.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-WbjY_zmo.js";import{B as p}from"./BarChart-DMhvXJTy.js";import{X as l}from"./XAxis-BBTi9Quq.js";import{Y as h}from"./YAxis-Bd_441pA.js";import{B as x}from"./Brush-DvvNrGS_.js";import{B as c}from"./Bar-CrdjQA3e.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DKRp2Cpf.js";import"./index-BFq8L4Qf.js";import"./index-Cj2yGnH8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CR_Daah7.js";import"./isWellBehavedNumber-DSGzbKJq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DmrtgzWA.js";import"./axisSelectors-BYCa1KQi.js";import"./d3-scale-EUAW_uXn.js";import"./index-CTI4te1e.js";import"./index-9RfS0P5N.js";import"./renderedTicksSlice-BJhZejFa.js";import"./index-CNXfLYdJ.js";import"./CartesianChart-Df4TbwdF.js";import"./chartDataContext-BfZakhMa.js";import"./CategoricalChart-D4todBvL.js";import"./CartesianAxis-CscJTeW3.js";import"./Layer-DR8K2tDR.js";import"./Text-BFaLgVB9.js";import"./DOMUtils-DyhgREL4.js";import"./useId-DR5HNXG4.js";import"./useBackwardsCompatibleTheme-DyPyGrUA.js";import"./Label-ghQ3JhC7.js";import"./ZIndexLayer-DD1XEuiL.js";import"./types-CsIyy1S-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BX9wZRAd.js";import"./useAnimationId-CQmNoSKE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CDN6vLqp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-wH4Ic5EK.js";import"./tooltipContext-DXP82UUR.js";import"./RegisterGraphicalItemId-CwYw7hzr.js";import"./ErrorBarContext-QkPpzvTl.js";import"./GraphicalItemClipPath-RiFLM0LL.js";import"./SetGraphicalItem-qyOUVGvM.js";import"./getZIndexFromUnknown-DU7HI6wE.js";import"./useGraphicalItemIdentity-B2TrnUL8.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
