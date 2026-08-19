import{R as t}from"./iframe-TzfrCimv.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Dp5v9G1Y.js";import{B as p}from"./BarChart-DDrJWmHI.js";import{X as l}from"./XAxis-5FjHsuX0.js";import{Y as h}from"./YAxis-B2Z4R-y-.js";import{B as x}from"./Brush-DsRHD2dw.js";import{B as c}from"./Bar-CXvna7-5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BM90P8P9.js";import"./index-31yWppKy.js";import"./index-I3E5SGvw.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CsgnMNsn.js";import"./isWellBehavedNumber-z9eNMbuG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-d5Ajpv94.js";import"./index-ououzFTQ.js";import"./index-DNVn7Vry.js";import"./axisSelectors-Cg7dZLHA.js";import"./d3-scale-DDwg_EuX.js";import"./renderedTicksSlice-DA0LErEZ.js";import"./CartesianChart-CBcHGY17.js";import"./chartDataContext-C9PL5caj.js";import"./CategoricalChart-NmYFScnM.js";import"./CartesianAxis-BGRgt604.js";import"./Layer-D26e-s_C.js";import"./Text-Cq_y2tEB.js";import"./DOMUtils-BXdig0h8.js";import"./useBackwardsCompatibleTheme-6HIvPrWs.js";import"./Label-ORziBLCU.js";import"./ZIndexLayer-LDMTKG6P.js";import"./types-GCQJUCAo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-q6ooW_4r.js";import"./useAnimationId-4hu6-jhP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DYFDa40n.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dw86rWrG.js";import"./tooltipContext-NUCe4P_t.js";import"./RegisterGraphicalItemId-ByzXvOvt.js";import"./ErrorBarContext-C3TPTEby.js";import"./GraphicalItemClipPath-DpRNkFFw.js";import"./SetGraphicalItem-B-6zq9YL.js";import"./getZIndexFromUnknown-B0R1yX0s.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DnxSRBj2.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
