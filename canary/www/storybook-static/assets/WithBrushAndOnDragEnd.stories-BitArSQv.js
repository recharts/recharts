import{R as t}from"./iframe-C9QnkkRp.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BYQlmGuM.js";import{B as p}from"./BarChart-CvEokkdX.js";import{X as l}from"./XAxis-49PSd8B9.js";import{Y as h}from"./YAxis-cnj8Nk2R.js";import{B as x}from"./Brush-CNqFPO26.js";import{B as c}from"./Bar-CtKrTHeu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BwjvRfJi.js";import"./throttle-CzhN4mlB.js";import"./index-Bd4zIGdh.js";import"./index-Dp_pNI9d.js";import"./RechartsWrapper-Cq91RCWh.js";import"./axisSelectors-CTzSQU4W.js";import"./polarAxisSelectors-C_EdGVJO.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Yr2mcnpg.js";import"./index-BwU8wHQt.js";import"./index-WorF6OpA.js";import"./renderedTicksSlice-DR11ylMF.js";import"./index-D8Lsm-a-.js";import"./fillDefinitions-cPUsTY--.js";import"./CartesianChart-DUhViccR.js";import"./chartDataContext-BJIrZYve.js";import"./CategoricalChart-BY9HlJis.js";import"./CartesianAxis-CyUzu-Nz.js";import"./Layer-CEkcTjee.js";import"./Text-BwyCofjZ.js";import"./ZIndexLayer-CPmeg_kQ.js";import"./Label-yo2OQSgL.js";import"./types-DqaK-59q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BFdezSvK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CvNdNhfG.js";import"./useAnimationId-CShc60ZQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ba4XY1pS.js";import"./tooltipContext-Di65yGev.js";import"./ErrorBarContext-BjyFMzrh.js";import"./activeStyles-CN7lMIFZ.js";import"./SetGraphicalItem-C_jDfqao.js";import"./getZIndexFromUnknown-BQtXUpZz.js";import"./useEffectiveDataKey-DiymfXWH.js";import"./omit-DbiO3X2L.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
