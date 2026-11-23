import{R as t}from"./iframe-B5lEY8zD.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BgROAb6p.js";import{B as p}from"./BarChart-DCDpiZfu.js";import{X as l}from"./XAxis-DFQPNyZu.js";import{Y as h}from"./YAxis-B84b5tRH.js";import{B as x}from"./Brush-Cg1wdwOZ.js";import{B as c}from"./Bar-CFBmLyjf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bw4esZyQ.js";import"./throttle-B3jfQssg.js";import"./index-DOD6pO5N.js";import"./index-CrxBt4o0.js";import"./RechartsWrapper-Dry7ZWQ8.js";import"./axisSelectors-BghrQiEU.js";import"./polarAxisSelectors-CnEvxLcF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Be2MBhun.js";import"./index-DK10suvB.js";import"./index-C_OJiFXB.js";import"./renderedTicksSlice-BBBAmkst.js";import"./index-DxvEKk7O.js";import"./fillDefinitions-BYW3BXfQ.js";import"./CartesianChart-BJrH5JsN.js";import"./chartDataContext-BJNaOkd4.js";import"./CategoricalChart-DELNesLI.js";import"./CartesianAxis-C5RmfnOa.js";import"./Layer-DvqCln2S.js";import"./Text-Bpx0HJU1.js";import"./ZIndexLayer-BKjofHlF.js";import"./Label-BcoGvPAa.js";import"./types-DtlUuq-f.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-XQ5o-AIv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DrSOMoM_.js";import"./useAnimationId-BR63270P.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BtGosP0P.js";import"./tooltipContext-BuWKvB93.js";import"./ErrorBarContext-BW17ZVEc.js";import"./activeStyles-CCUgVOTa.js";import"./SetGraphicalItem-BlbgEltH.js";import"./getZIndexFromUnknown-CQW5aQcV.js";import"./useEffectiveDataKey-TbJa30kz.js";import"./omit-BVCEdaBF.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
