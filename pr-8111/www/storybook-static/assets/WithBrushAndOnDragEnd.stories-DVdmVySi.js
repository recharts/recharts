import{R as t}from"./iframe-BGCZ_YYu.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-cBJ2sUns.js";import{B as p}from"./BarChart-C5VblsuD.js";import{X as l}from"./XAxis-CnHX8rYU.js";import{Y as h}from"./YAxis-QzbIIYXn.js";import{B as x}from"./Brush-9hs29S0w.js";import{B as c}from"./Bar-C0d-SAnU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-RfjxFv_h.js";import"./throttle-Dnn9iNkE.js";import"./index-CJpeiM5R.js";import"./index-DRH8hgtI.js";import"./RechartsWrapper-DzjZykj4.js";import"./axisSelectors-BgHWKfZW.js";import"./polarAxisSelectors-9JDQkQFq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-WNvBVnHd.js";import"./index-BoRJhsa5.js";import"./index-DsAYZFOJ.js";import"./renderedTicksSlice-0yL2Eztm.js";import"./index-CnE4B9N1.js";import"./CartesianChart-chY_bHfR.js";import"./ZIndexPortal-UfnKJ6nq.js";import"./CategoricalChart-rRn_svVP.js";import"./CartesianAxis-D7nh9FWg.js";import"./Layer-FBjFYiDN.js";import"./Text-Cf8nBYte.js";import"./pageBackground--uJKRUbH.js";import"./ZIndexLayer-DBU2Ux2U.js";import"./Label-CG8eDc0p.js";import"./types-BvE9AUsn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-D60Hhpwl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D8zVG-_m.js";import"./useAnimationId-D-9kXAza.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CbZu-UwN.js";import"./tooltipContext-Bb3r7G0b.js";import"./dataEntryStyles--27SN7qD.js";import"./ErrorBarContext-B946Wqqn.js";import"./activeStyles-CJOfqay0.js";import"./SetGraphicalItem-Cbavgyyx.js";import"./getZIndexFromUnknown-CLzovvO6.js";import"./useEffectiveDataKey-B32bFSWN.js";import"./omit-E8rFtmot.js";import"./isArguments-yB-y1yaH.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
