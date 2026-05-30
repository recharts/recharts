import{c as t}from"./iframe-CR5xUcH4.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./zIndexSlice-Coakq-0y.js";import{B as p}from"./BarChart-Cb8DUnPV.js";import{X as l}from"./XAxis-CPvIxoVT.js";import{Y as h}from"./YAxis-7a5sZdUx.js";import{B as x}from"./Brush-DgWmj964.js";import{B as c}from"./Bar-B2iZFUKD.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-MiNeKFai.js";import"./index-vQTj3wjJ.js";import"./index-BwAW1XSH.js";import"./get-CdpBIjqV.js";import"./resolveDefaultProps-Ceeul6CI.js";import"./isWellBehavedNumber-VNzXGTrj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DqbEnq-O.js";import"./index-BL2MNBFa.js";import"./index-C1C-S7u7.js";import"./renderedTicksSlice-BX_9N5fQ.js";import"./axisSelectors-GqEe5nOB.js";import"./d3-scale-Cr_JmSke.js";import"./CartesianChart-C1PsmK-N.js";import"./chartDataContext-YedE8BO5.js";import"./CategoricalChart-DNMItnv2.js";import"./CartesianAxis-CM2xAnRM.js";import"./Layer-DDAYqTxx.js";import"./Text-Diq_68Pn.js";import"./DOMUtils-HE2atAIH.js";import"./Label-gV3sJO-c.js";import"./ZIndexLayer-Br2sJvd3.js";import"./types-vWyLmemb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-CI8X2x7c.js";import"./ReactUtils-D5HGwZm0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-IJojDNZ6.js";import"./useAnimationId-qfC-4EnL.js";import"./ActiveShapeUtils-G1Nz0YGi.js";import"./RegisterGraphicalItemId-BwAGbVF8.js";import"./ErrorBarContext-C7CGAddG.js";import"./GraphicalItemClipPath-BXgSat3L.js";import"./SetGraphicalItem-Duk0nTzk.js";import"./getZIndexFromUnknown-CpM14gun.js";import"./graphicalItemSelectors-BfOvLmPr.js";const ot={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const dt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,dt as __namedExportsOrder,ot as default};
