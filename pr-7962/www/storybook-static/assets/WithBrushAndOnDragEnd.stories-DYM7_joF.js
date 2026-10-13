import{R as t}from"./iframe-D3EjTtxy.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CR47Grm-.js";import{B as p}from"./BarChart-BYVC0dCi.js";import{X as l}from"./XAxis-CBAr_26y.js";import{Y as h}from"./YAxis-ChbhO02F.js";import{B as x}from"./Brush-MYJl1WUD.js";import{B as c}from"./Bar-ChXPI4NF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-EojsqAtG.js";import"./index-BrBaOJJz.js";import"./index-ClKWjY2h.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CypR0Li3.js";import"./isWellBehavedNumber-D6-F1Zhx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BKqCmNei.js";import"./axisSelectors-2jJKhRaD.js";import"./d3-scale-Bcyj84u8.js";import"./index-CW2m-a8N.js";import"./index-D-PCy9lp.js";import"./renderedTicksSlice-DWYht6zE.js";import"./index-C-LGK5kE.js";import"./CartesianChart-ClyYLTkq.js";import"./chartDataContext-tvTSeXcP.js";import"./CategoricalChart-D-xvlCPh.js";import"./CartesianAxis-Mzi-Pwf8.js";import"./Layer-CAR2aUbH.js";import"./Text-D8BNDsFW.js";import"./pageBackground-Bgbh54PU.js";import"./useId-CXtTlWvS.js";import"./useBackwardsCompatibleTheme-DShn4Fj5.js";import"./Label-Cwzl5MfK.js";import"./ZIndexLayer-DYrhxp9-.js";import"./types-OWn5Mrao.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-Celt-13r.js";import"./useAnimationId-C3lA_xne.js";import"./dataEntryStyles-BOeZ2OB5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BkUhA54S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DJnsuYPC.js";import"./tooltipContext-AeMc0G5i.js";import"./ErrorBarContext-D2RzPC2k.js";import"./GraphicalItemClipPath-qNx1D-3O.js";import"./SetGraphicalItem-2Yc4bdBx.js";import"./getZIndexFromUnknown-ocp5ONv-.js";import"./useEffectiveDataKey-CruL2487.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
