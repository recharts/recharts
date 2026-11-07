import{R as t}from"./iframe-CAwz8uN7.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-TMbeSoaw.js";import{B as p}from"./BarChart-DnLQGRit.js";import{X as l}from"./XAxis-DaHA7aw5.js";import{Y as h}from"./YAxis-CXb4tru9.js";import{B as x}from"./Brush-DwMaxEPP.js";import{B as c}from"./Bar-B896n764.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DMIb7SBs.js";import"./throttle-DghoigHv.js";import"./index-DgXSxR_f.js";import"./index-Bzw5OmaH.js";import"./RechartsWrapper-Dxg_wm9v.js";import"./axisSelectors-CpwbL3Oz.js";import"./polarAxisSelectors-Cc_qYj6o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CIIJy1t9.js";import"./index-Bn6lI9jh.js";import"./index-DXtXm7rl.js";import"./renderedTicksSlice-GqHDAcQt.js";import"./index-D4t20APB.js";import"./fillDefinitions-CB-_Qdnq.js";import"./CartesianChart-Cfm778D2.js";import"./chartDataContext-BqdYE3y4.js";import"./CategoricalChart-BV8BHimy.js";import"./CartesianAxis-VsizMTED.js";import"./Layer-LEH2Le6G.js";import"./Text-B8IGolEi.js";import"./ZIndexLayer-BXCDLr1d.js";import"./Label-CdS579rS.js";import"./types-BWdHpl7S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BvT9zs0X.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-COjWgFDq.js";import"./useAnimationId-p8KP1za0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CWtt7knh.js";import"./tooltipContext-DCKEuyvz.js";import"./ErrorBarContext-Qh2D0zyI.js";import"./activeStyles-WxNZ0DKg.js";import"./SetGraphicalItem-BpveB_1U.js";import"./getZIndexFromUnknown-CDpbDaFt.js";import"./useEffectiveDataKey-DBkqmySO.js";import"./omit-DX6t1PET.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
