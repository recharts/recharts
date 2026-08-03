import{R as t}from"./iframe-DJpt453r.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BEI9HpJP.js";import{B as p}from"./BarChart-BPRT6Ife.js";import{X as l}from"./XAxis-BA-ddF1e.js";import{Y as h}from"./YAxis-CLwOmL6r.js";import{B as x}from"./Brush-CqVvTduk.js";import{B as c}from"./Bar-CBa45wX2.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DmwBytCC.js";import"./index-DoMIVr-B.js";import"./index-BXFZGfKa.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CLx3DpUR.js";import"./isWellBehavedNumber-DKWCRCpD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DPF1jiXq.js";import"./index-D2X8nAMV.js";import"./index-DNypUe5l.js";import"./renderedTicksSlice--nt2FmmR.js";import"./axisSelectors-CK35li4D.js";import"./d3-scale-B7WR5FSF.js";import"./CartesianChart-m4WNSH7S.js";import"./chartDataContext-D5OCzkMp.js";import"./CategoricalChart-Dhlk9IOH.js";import"./CartesianAxis-C6-8NriX.js";import"./Layer-BYTSm4Ec.js";import"./Text-Bi21htDl.js";import"./DOMUtils-DAtMTnWN.js";import"./Label-dDyJmDxJ.js";import"./ZIndexLayer-K-94Fkyc.js";import"./types-C91tVnYw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DM-6Q2RL.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-Cd-vVFdQ.js";import"./AnimatedItems-CECphMY_.js";import"./useAnimationId-BTloGm3i.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bb9l30Tv.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ML-GG5dE.js";import"./RegisterGraphicalItemId-DBh3uGfr.js";import"./ErrorBarContext-KgdOLmDh.js";import"./GraphicalItemClipPath-CbnfZ2S6.js";import"./SetGraphicalItem-CyMh2I00.js";import"./getZIndexFromUnknown-BAReAepk.js";import"./graphicalItemSelectors-DJW39wIa.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
