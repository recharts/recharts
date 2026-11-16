import{R as t}from"./iframe-CO23d3n1.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DMSZKiVC.js";import{B as p}from"./BarChart-BQsI39dp.js";import{X as l}from"./XAxis-BoBOjjsH.js";import{Y as h}from"./YAxis-DVp-8yRY.js";import{B as x}from"./Brush-CC0EgCL6.js";import{B as c}from"./Bar-Bj7Ckloc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-q2NyX8vA.js";import"./throttle-B66_T3U8.js";import"./index-BxzZTuqI.js";import"./index-Del1ANZm.js";import"./RechartsWrapper-Bh8_r7fw.js";import"./axisSelectors-DJQVEMl6.js";import"./polarAxisSelectors-D8_om16C.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C9xcvLA3.js";import"./index-D4fJrATD.js";import"./index-D0uo_LWY.js";import"./renderedTicksSlice-DOtk_XFi.js";import"./index-BjQv-IHX.js";import"./fillDefinitions-B9Iskt95.js";import"./CartesianChart-BGvEgPGc.js";import"./chartDataContext-aToDcgxK.js";import"./CategoricalChart-DPCnYwF-.js";import"./CartesianAxis-Dnx0rUNa.js";import"./Layer-CYlWB893.js";import"./Text-DWIEtkwC.js";import"./ZIndexLayer-DcfMfyOV.js";import"./Label-2Fni25es.js";import"./types-BU4Ojrin.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BB1e2MfD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-xnUKvACR.js";import"./useAnimationId-DzTpCf5I.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B6AIFy1l.js";import"./tooltipContext-DH4nuqG4.js";import"./ErrorBarContext-Cmo7ZUB7.js";import"./activeStyles-Bl6Emzo4.js";import"./SetGraphicalItem-CuLT1LeE.js";import"./getZIndexFromUnknown-CJSbLwv_.js";import"./useEffectiveDataKey-DjFvtGIK.js";import"./omit-BKvazyKr.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
