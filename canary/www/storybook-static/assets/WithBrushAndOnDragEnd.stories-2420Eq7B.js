import{R as t}from"./iframe-CLIhRm7R.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-cURKLlYU.js";import{B as p}from"./BarChart-nXfPyvy8.js";import{X as l}from"./XAxis-ClFJPrvR.js";import{Y as h}from"./YAxis-CpKr4jH1.js";import{B as x}from"./Brush-CTOsmTU8.js";import{B as c}from"./Bar-DodE2F49.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D-eAHaNk.js";import"./throttle-B7ykPIAJ.js";import"./index-DR1HnwII.js";import"./index-BUNiVZYu.js";import"./RechartsWrapper-DwQg3ppC.js";import"./axisSelectors-CDU9IwIv.js";import"./polarAxisSelectors-D5qsDUBS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D44QmEnt.js";import"./index-BRcZtsT0.js";import"./index-B_FXaL58.js";import"./renderedTicksSlice-BBFFs0IH.js";import"./index-CQ513AnM.js";import"./fillDefinitions-Y1HmkZBg.js";import"./CartesianChart-Cfp3axNC.js";import"./chartDataContext-CnJguSW_.js";import"./CategoricalChart-RViwWBSb.js";import"./CartesianAxis-xu52TX6T.js";import"./Layer-BbygySlV.js";import"./Text-JwQNyxYp.js";import"./ZIndexLayer-CVT-3Kt6.js";import"./Label-DearAakw.js";import"./types-B-D67JLt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BrgkWZuf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-_VT99gpA.js";import"./useAnimationId-CFCPoirY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B5F3agWS.js";import"./tooltipContext-CF_VsdUz.js";import"./ErrorBarContext-D47utnLy.js";import"./activeStyles-DkO8dKQi.js";import"./SetGraphicalItem-Byj-zkni.js";import"./getZIndexFromUnknown-Q2U1gBg2.js";import"./useEffectiveDataKey-B6ZXrXvv.js";import"./omit-BzKSo3AK.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
