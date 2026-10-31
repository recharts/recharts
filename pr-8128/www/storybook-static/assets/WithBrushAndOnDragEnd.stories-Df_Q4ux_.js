import{R as t}from"./iframe-DwhrPqQ2.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CpWq1zjb.js";import{B as p}from"./BarChart-Cw3E12HY.js";import{X as l}from"./XAxis-DalFir1z.js";import{Y as h}from"./YAxis-CQHM2D8-.js";import{B as x}from"./Brush-CNktvUxp.js";import{B as c}from"./Bar-CUeW-vwp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DjT--ccN.js";import"./throttle-DfnnAIvE.js";import"./index-kf961mzr.js";import"./index-CEmaTsjJ.js";import"./RechartsWrapper-DwGtUcHg.js";import"./axisSelectors-Co6y6k23.js";import"./polarAxisSelectors-BuB4o-cj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C0de4oSn.js";import"./index-CsaEib3L.js";import"./index-BEv8RXE2.js";import"./renderedTicksSlice-6PXLxRIe.js";import"./index-Y2LMv9l3.js";import"./CartesianChart-D8j3jRJC.js";import"./ZIndexPortal-DZJ5tH-i.js";import"./CategoricalChart-j0pVaHBn.js";import"./CartesianAxis-ClEu4A1x.js";import"./Layer-vnYdlnEA.js";import"./Text-C74hS0lU.js";import"./DOMUtils-BcceySrU.js";import"./pageBackground-BJp9wwMp.js";import"./ZIndexLayer-BSdSgNTE.js";import"./Label-CPQgWsRx.js";import"./types-CR-LymQu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-Dmspdt-4.js";import"./LabelList-D6fyXhX7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C3hl6UlM.js";import"./fillDefinitions-Dhc8KNfB.js";import"./useAnimationId-Cr5bB81Q.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CDAywyE9.js";import"./tooltipContext-BDh8dCep.js";import"./dataEntryStyles-DWHZ8H87.js";import"./ErrorBarContext-ByBJW2kl.js";import"./activeStyles-DZGQwj2F.js";import"./SetGraphicalItem-Dt6F2mBE.js";import"./getZIndexFromUnknown-B0-JXqUO.js";import"./useEffectiveDataKey-D3ULyXZ6.js";import"./omit-DSdpzYC1.js";import"./isArguments-yB-y1yaH.js";const ct={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ut=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ut as __namedExportsOrder,ct as default};
