import{R as t}from"./iframe-C0aK3mAR.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CaqKW8u4.js";import{B as p}from"./BarChart-BLwj7eCr.js";import{X as l}from"./XAxis-oAoSo46I.js";import{Y as h}from"./YAxis-7NanDh-1.js";import{B as x}from"./Brush-CPSQAFFm.js";import{B as c}from"./Bar-CuckYCvH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D6yE2Er3.js";import"./throttle-Csdh9d4D.js";import"./index-DJ1epRIR.js";import"./index-C-RKF6PB.js";import"./RechartsWrapper-D12_Reb0.js";import"./axisSelectors-D_X7VOsT.js";import"./polarAxisSelectors-CptuzTw1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B_djSwnK.js";import"./index-Dtyq-_Jm.js";import"./index-wV9G7-7k.js";import"./renderedTicksSlice-De1tNPIq.js";import"./index-BYUWoSWy.js";import"./fillDefinitions-D-bSMJSA.js";import"./CartesianChart-D4R8-bYQ.js";import"./chartDataContext-FpEebw8X.js";import"./CategoricalChart-D8DGrwi8.js";import"./CartesianAxis-CUkLyyeh.js";import"./Layer-CagqC790.js";import"./Text-sM2vj8c3.js";import"./ZIndexLayer-Cc5kF-_I.js";import"./Label-DrUlGLQ7.js";import"./types-CmOm39qI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-cRuikTAi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D2OQ5a3O.js";import"./useAnimationId-sv0XuVET.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BPSXSNcd.js";import"./tooltipContext-BzFP69XA.js";import"./ErrorBarContext-zrW_wYS_.js";import"./activeStyles-D8lDViyk.js";import"./SetGraphicalItem-D-GYSqJW.js";import"./getZIndexFromUnknown-B15Wxwj-.js";import"./useEffectiveDataKey-C4GReELG.js";import"./omit-BsLcpZjr.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
