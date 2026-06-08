import{R as t}from"./iframe-DhtJ7XT9.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Cyl_38qZ.js";import{B as p}from"./BarChart-C1zNMe2W.js";import{X as l}from"./XAxis-J3EL6z9G.js";import{Y as h}from"./YAxis-B01PX68r.js";import{B as x}from"./Brush-BvfP6h0Q.js";import{B as c}from"./Bar-B6QqgIWL.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C_Dt4QUB.js";import"./index-DTiOXBm6.js";import"./index-Dy3Dnjis.js";import"./get-DhiNYMWj.js";import"./resolveDefaultProps-BPtkQdI7.js";import"./isWellBehavedNumber-BgBeU-y_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DW50izWv.js";import"./index-C3B0n__O.js";import"./index-oGt5PMWE.js";import"./renderedTicksSlice-DPSLbyPQ.js";import"./axisSelectors-BpKxpkpF.js";import"./d3-scale-4zEsHVES.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D-Z4Ej1T.js";import"./chartDataContext-Cf1gYJ5h.js";import"./CategoricalChart-BvhJOhQN.js";import"./CartesianAxis-D_A7dWIR.js";import"./Layer-nlXR0D_W.js";import"./Text-CqnnGvfO.js";import"./DOMUtils-BvTkEDRU.js";import"./Label-Dca6KvYU.js";import"./ZIndexLayer-Cs-V2L6r.js";import"./types-CLlZJjoC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-CdUZzi6a.js";import"./AnimatedItems-D0rQfZQx.js";import"./useAnimationId-LwDoReja.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-aI9UNPH3.js";import"./ActiveShapeUtils-BKy8UOMn.js";import"./RegisterGraphicalItemId-xETxoZW3.js";import"./ErrorBarContext-C_o2ElKr.js";import"./GraphicalItemClipPath-ClwgD8YP.js";import"./SetGraphicalItem-Cm2Uf41M.js";import"./getZIndexFromUnknown-B5NwXHY_.js";import"./graphicalItemSelectors-vkGoE_CM.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
