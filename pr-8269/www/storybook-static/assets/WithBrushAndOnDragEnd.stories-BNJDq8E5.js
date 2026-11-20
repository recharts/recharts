import{R as t}from"./iframe-qp48uAQ7.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-KCJej1vF.js";import{B as p}from"./BarChart-Bce4iXT3.js";import{X as l}from"./XAxis-DBjPaOy0.js";import{Y as h}from"./YAxis-DlgcwvPx.js";import{B as x}from"./Brush-BgX8nlPF.js";import{B as c}from"./Bar-GEtuL3Cq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-H_yb4yD-.js";import"./throttle-DidOwtMq.js";import"./index-neNyiLUw.js";import"./index-BV3Lw9OX.js";import"./RechartsWrapper-1rMBmo6H.js";import"./axisSelectors-EQaPQOEj.js";import"./polarAxisSelectors-B_tUAyjC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C1UROyMV.js";import"./index-BBO10kZC.js";import"./index-DSRi-YPI.js";import"./renderedTicksSlice-BsS9ZrzM.js";import"./index-D8wT4PmW.js";import"./fillDefinitions-0M80HuO4.js";import"./CartesianChart-2yA0qqcE.js";import"./chartDataContext-BjUDfEUJ.js";import"./CategoricalChart-Dz_UBlxz.js";import"./CartesianAxis-CvElXQWV.js";import"./Layer-3O8BuD1C.js";import"./Text-9axAMSSa.js";import"./ZIndexLayer-B5vbT5ul.js";import"./Label-Sje2x2ae.js";import"./types-B-Gso0-n.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-MmJGBd3d.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cfn5NBZC.js";import"./useAnimationId-gBLR8eku.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--ilFziir.js";import"./tooltipContext-CRinBg2b.js";import"./ErrorBarContext-BOAdtyxi.js";import"./activeStyles-CvvZZ1RN.js";import"./SetGraphicalItem-BRHHFk9x.js";import"./getZIndexFromUnknown-BAgHT1YF.js";import"./useEffectiveDataKey-81Od8ro-.js";import"./omit-D2tnasXN.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
