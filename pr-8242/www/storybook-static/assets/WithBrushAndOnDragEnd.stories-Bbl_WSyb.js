import{R as t}from"./iframe-BRs2DqB3.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-XRTrDK7l.js";import{B as p}from"./BarChart-BmzI1YCh.js";import{X as l}from"./XAxis-BJyhb9sC.js";import{Y as h}from"./YAxis-DidbNqGc.js";import{B as x}from"./Brush-DQ-lSV4y.js";import{B as c}from"./Bar-BJb5F-sS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BRTztjAc.js";import"./throttle-BN55ZsBD.js";import"./index-CqTGU6qX.js";import"./index-C0uv-V1O.js";import"./RechartsWrapper-CJYaD9xA.js";import"./axisSelectors-DBUHuATQ.js";import"./polarAxisSelectors-DwLugqE9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B39-KfBv.js";import"./index-BL5_00_X.js";import"./index-Co-V1H3-.js";import"./renderedTicksSlice-BjdRfY4C.js";import"./index-IgyX-1iw.js";import"./fillDefinitions-Cww6uxJT.js";import"./CartesianChart-Dsxkw-P3.js";import"./chartDataContext-QcS0sZvi.js";import"./CategoricalChart-BZHqfx2A.js";import"./CartesianAxis-C23TAeVf.js";import"./Layer-DqrqtEm2.js";import"./Text-DRaltNnR.js";import"./ZIndexLayer-BCRtaoEe.js";import"./Label-utTJNWp0.js";import"./types-BN549hIA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-B5I1MPoS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BivqHDne.js";import"./useAnimationId-De06VpE9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cvk6a1r9.js";import"./tooltipContext-Datniygv.js";import"./ErrorBarContext-D0NsIgk-.js";import"./activeStyles-gnY1xuwf.js";import"./SetGraphicalItem-C9srr3mG.js";import"./getZIndexFromUnknown-D7iRE9IP.js";import"./useEffectiveDataKey-_AqelCoa.js";import"./omit-Bx3nEryi.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
