import{R as t}from"./iframe-Dkncjqe5.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-3Eut4nle.js";import{B as p}from"./BarChart-DrAmyXrm.js";import{X as l}from"./XAxis-BAQVI_cg.js";import{Y as h}from"./YAxis-Dxbos16T.js";import{B as x}from"./Brush-BkQzF4Bn.js";import{B as c}from"./Bar-D1LOMIF8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-fiJaoKIv.js";import"./index-DuZYSu8x.js";import"./index-CEbzYCUB.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DKbDW2P0.js";import"./isWellBehavedNumber-h0zKWQQH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BbHdyrKZ.js";import"./axisSelectors-DzgXC3ir.js";import"./d3-scale-D7_DItYV.js";import"./index-Bw7gNQT7.js";import"./index-BWQ516bg.js";import"./renderedTicksSlice-DBigkG9b.js";import"./index-DULW3GES.js";import"./CartesianChart-_Rd0DLP-.js";import"./chartDataContext-BPkdx2D0.js";import"./CategoricalChart-DpeOMck6.js";import"./CartesianAxis-Dwpurh4e.js";import"./Layer-CZ9ZIOVu.js";import"./Text-BwfQxnJz.js";import"./pageBackground-CmllYwCr.js";import"./useId-ZYm6mEVk.js";import"./useBackwardsCompatibleTheme-BCpg7K4A.js";import"./Label-V2ZN4uKZ.js";import"./ZIndexLayer-DaEkt6aU.js";import"./types-BHEXbjwq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-DQuNqkwN.js";import"./useAnimationId-MEfDv_ZE.js";import"./dataEntryStyles-DXfoX1Tx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-A_cS0CAA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B1bflkee.js";import"./tooltipContext-zJ5iECbC.js";import"./ErrorBarContext-e-s-GcHB.js";import"./GraphicalItemClipPath-DPL4dOJ-.js";import"./SetGraphicalItem-Bg3q-OfM.js";import"./getZIndexFromUnknown-BewmFjSj.js";import"./useEffectiveDataKey-CjhYhiH-.js";import"./omit-C58MDPW2.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};
