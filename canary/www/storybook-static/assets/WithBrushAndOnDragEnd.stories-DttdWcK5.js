import{R as t}from"./iframe-BW71A1Nl.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D0nATGhG.js";import{B as p}from"./BarChart-Dd7yO0Ev.js";import{X as l}from"./XAxis-DjClnNcb.js";import{Y as h}from"./YAxis-CBUi58KC.js";import{B as x}from"./Brush-DkyNEY2x.js";import{B as c}from"./Bar-BEoIcg9q.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-iZdzJVDj.js";import"./index-qgRbHTql.js";import"./index-CUqZ5NZx.js";import"./get-BsK8Vst9.js";import"./resolveDefaultProps-BwvNNDLm.js";import"./isWellBehavedNumber-6M6ThiRO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0unhTn-.js";import"./index-7I5wiu9M.js";import"./index-BeMOkAqZ.js";import"./renderedTicksSlice-BObQrIhG.js";import"./axisSelectors-CGn4mfga.js";import"./d3-scale-vdMRCf0o.js";import"./CartesianChart-CGswDKyQ.js";import"./chartDataContext-DixWbQnN.js";import"./CategoricalChart-C428T1Jl.js";import"./CartesianAxis-6UaBWKrc.js";import"./Layer-BmYZzoaR.js";import"./Text-DDeu8cp3.js";import"./DOMUtils-mo8tevis.js";import"./Label-7Nd_0-bw.js";import"./ZIndexLayer-B4CcndAw.js";import"./types-CoBkUvrA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-V-tLLPbE.js";import"./AnimatedItems-D3llU_s4.js";import"./useAnimationId-L1gInTUa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D96ELsS-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DnbIkStc.js";import"./RegisterGraphicalItemId-DpVIzNFe.js";import"./ErrorBarContext-Pp_bAm-i.js";import"./GraphicalItemClipPath-C8hys0YQ.js";import"./SetGraphicalItem-DVIO0q7q.js";import"./getZIndexFromUnknown-H4IYpaHa.js";import"./graphicalItemSelectors-B_CHNNOp.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
