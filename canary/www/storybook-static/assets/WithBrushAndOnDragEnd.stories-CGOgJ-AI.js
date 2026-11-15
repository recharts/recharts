import{R as t}from"./iframe--N-T_hBz.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BrmEEgcV.js";import{B as p}from"./BarChart-DGUoWiPn.js";import{X as l}from"./XAxis-DdKAxJ7S.js";import{Y as h}from"./YAxis-DsuWS9IR.js";import{B as x}from"./Brush-sDiTBH8t.js";import{B as c}from"./Bar-Occbe1AV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BZdVkepW.js";import"./throttle-DiHBngta.js";import"./index-CltnTfg9.js";import"./index-C2LKm9xK.js";import"./RechartsWrapper-Dga53r6u.js";import"./axisSelectors-dSJNPUYj.js";import"./polarAxisSelectors-Ch50KZor.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-syhDUnOY.js";import"./index-DQLg1InC.js";import"./index-DSO52ANi.js";import"./renderedTicksSlice-C7C4TYLP.js";import"./index-BiiWPIDX.js";import"./fillDefinitions-DLkX59y8.js";import"./CartesianChart-DXdGkfOu.js";import"./chartDataContext-CXOzC9oO.js";import"./CategoricalChart-CbkCL8Oe.js";import"./CartesianAxis-D25MAZFZ.js";import"./Layer-1myxLhO2.js";import"./Text-B6x9BsBz.js";import"./ZIndexLayer-PDpl17Qr.js";import"./Label-DcuyFpKL.js";import"./types-CDdNjsiG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CggySQjW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C0b2pOCq.js";import"./useAnimationId-B0H5IbY6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DxAwIp1Y.js";import"./tooltipContext-DSz7WbbM.js";import"./ErrorBarContext-Cxj8MR3w.js";import"./activeStyles-CQz5jccO.js";import"./SetGraphicalItem-BuNZMI4X.js";import"./getZIndexFromUnknown-0NIZVPm3.js";import"./useEffectiveDataKey-ehD4S_ma.js";import"./omit-CZqsuqgq.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
