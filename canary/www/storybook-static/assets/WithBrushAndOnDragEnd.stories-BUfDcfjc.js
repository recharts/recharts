import{R as t}from"./iframe-DzGmKl0f.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-C_hCocyn.js";import{B as p}from"./BarChart-DCEGcUru.js";import{X as l}from"./XAxis-jTQGWzOI.js";import{Y as h}from"./YAxis-0b4E4ljK.js";import{B as x}from"./Brush-BmFI46iL.js";import{B as c}from"./Bar-CPWBwh6t.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DQfzh6Jd.js";import"./throttle-CTpO1d0G.js";import"./index-CLtTm24E.js";import"./index-BW8cRvO1.js";import"./RechartsWrapper-DyktFVWv.js";import"./axisSelectors-CXmW2Cx2.js";import"./polarAxisSelectors-BjROy2nM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BqUwTZLN.js";import"./index-Dfq7BfPO.js";import"./index-CbanqfDi.js";import"./renderedTicksSlice-Cj7UXIdm.js";import"./index-By0aYyvM.js";import"./fillDefinitions-D8TUKuUW.js";import"./CartesianChart-BHEtFY6v.js";import"./chartDataContext-CBkj6nC7.js";import"./CategoricalChart-8iPxehsc.js";import"./CartesianAxis-CdlgwruK.js";import"./Layer-FlA1vg8A.js";import"./Text-4Yqe8NiQ.js";import"./ZIndexLayer-DCgoY3ny.js";import"./Label-D7SDC5pA.js";import"./types-DhQXJZ5L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-Dj48sKZ8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C67JpI60.js";import"./useAnimationId-CGyZ0qQs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DvbjLMLM.js";import"./tooltipContext-BNPOIc1F.js";import"./ErrorBarContext-DXEk3_Nm.js";import"./activeStyles-wSVq9YzU.js";import"./SetGraphicalItem-BOgZ-5S7.js";import"./getZIndexFromUnknown-H2fTT77H.js";import"./useEffectiveDataKey-DtLTSAvq.js";import"./omit-D9Uvq-cR.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
