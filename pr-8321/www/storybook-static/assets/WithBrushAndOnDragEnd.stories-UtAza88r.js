import{R as t}from"./iframe-CvaFu5-c.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BCgb8eXa.js";import{B as p}from"./BarChart-B7lqXfli.js";import{X as l}from"./XAxis-DQoNxyYu.js";import{Y as h}from"./YAxis-3HuEzFma.js";import{B as x}from"./Brush-B1BsIjKC.js";import{B as c}from"./Bar-DNJCJq_u.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CVIJCqoI.js";import"./get-CjriyByo.js";import"./throttle-CPKsFv9V.js";import"./index-Dtg5gRR9.js";import"./index-D2kSQ0HF.js";import"./RechartsWrapper-B-sPOqKb.js";import"./axisSelectors-BvhvBZte.js";import"./polarAxisSelectors-nhz4Skhy.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-1_Z3dmgw.js";import"./index-gm9J6V3Z.js";import"./index-DnvnPPwe.js";import"./renderedTicksSlice-DknGqI4w.js";import"./index-6xLnrqw3.js";import"./fillDefinitions-DWPX2s4U.js";import"./CartesianChart-DGNKw331.js";import"./chartDataContext-LmmBbzgU.js";import"./CategoricalChart-Cug4ru24.js";import"./CartesianAxis-71DKFDGT.js";import"./Layer-GSzXSKza.js";import"./Text-BlqBUDkB.js";import"./ZIndexLayer-DO68mxLb.js";import"./Label-D9P4cAWK.js";import"./types-B8ocCfqn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-B7SMVv85.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BN9-Ud6u.js";import"./useAnimationId-UMR0vx8i.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-nr8N1oHW.js";import"./tooltipContext-DP5JJD-s.js";import"./ErrorBarContext-Y9Ni32mE.js";import"./activeStyles-TP9Js-Ix.js";import"./SetGraphicalItem-A7-SSfJY.js";import"./getZIndexFromUnknown-DCzd4AEq.js";import"./useEffectiveDataKey-BIeeRG6o.js";import"./omit-CJDDCLUj.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
