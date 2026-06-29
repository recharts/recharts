import{R as t}from"./iframe-Xn2MpEZO.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Ci7uKtqk.js";import{B as p}from"./BarChart-rw_kPyDi.js";import{X as l}from"./XAxis-BfvOUMD4.js";import{Y as h}from"./YAxis-CAfubk2b.js";import{B as x}from"./Brush-j5nvsoAL.js";import{B as c}from"./Bar-LXwcAE0e.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Df9E9w07.js";import"./index-B9rMLYis.js";import"./index-BJjZAGkk.js";import"./get-a5GlobPr.js";import"./resolveDefaultProps-ComQIB2r.js";import"./isWellBehavedNumber-ikHr81yL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxUke-Wy.js";import"./index-DCEv34s7.js";import"./index-BFHb-0iX.js";import"./renderedTicksSlice-DHtwTgZF.js";import"./axisSelectors-N1yg_9bS.js";import"./d3-scale-BhQeBFLV.js";import"./CartesianChart-qVEZ4DBv.js";import"./chartDataContext-CdM4lEIq.js";import"./CategoricalChart-BYw4mGkG.js";import"./CartesianAxis-Ci5XT6aX.js";import"./Layer-DSBtIc_n.js";import"./Text-DhiURvp0.js";import"./DOMUtils-C9OtDZJT.js";import"./Label-Drk02YPI.js";import"./ZIndexLayer-rkhqqfVD.js";import"./types-BkUFHbYz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BGI5JWMg.js";import"./AnimatedItems-AezG2GF8.js";import"./useAnimationId-Dddlhxb8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BNtGtL1T.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DjKDdlLp.js";import"./RegisterGraphicalItemId-CGNP0Yo_.js";import"./ErrorBarContext-C0h6VuZc.js";import"./GraphicalItemClipPath-Cc8lCQ6R.js";import"./SetGraphicalItem-97hX8Iat.js";import"./getZIndexFromUnknown-C4ETOTVk.js";import"./graphicalItemSelectors-IpQzZ0vj.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
