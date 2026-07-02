import{R as t}from"./iframe-BNNSts13.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B_0Vu2Ew.js";import{B as p}from"./BarChart-DM0KUyU_.js";import{X as l}from"./XAxis-CQLk361J.js";import{Y as h}from"./YAxis-BE5H5SGl.js";import{B as x}from"./Brush-CZnMECh0.js";import{B as c}from"./Bar-DomrdapL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CBpSFV7b.js";import"./index-DRHlmdrn.js";import"./index-CJSHvi6L.js";import"./get-C9gxS0ZW.js";import"./resolveDefaultProps-BmCbt7JO.js";import"./isWellBehavedNumber-Cd8BT25E.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CxhgYL0g.js";import"./index-D3L22MUx.js";import"./index-DZAGR4_4.js";import"./renderedTicksSlice-mOWj0GHU.js";import"./axisSelectors-CDUBaBt4.js";import"./d3-scale-0CyMSTZz.js";import"./CartesianChart-CCTvUou3.js";import"./chartDataContext-bOV91Uvd.js";import"./CategoricalChart-KYW8s8_3.js";import"./CartesianAxis-Bo6M1fU4.js";import"./Layer-BUN3jU8m.js";import"./Text-BAbJXX-B.js";import"./DOMUtils-BpYC5T-M.js";import"./Label-B9RstaAA.js";import"./ZIndexLayer-i45Mn5Qx.js";import"./types-CMjaNGyL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-20KYJakf.js";import"./AnimatedItems-u006QBg6.js";import"./useAnimationId-CPqzTwnW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-L3OxoeXe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CnkeP5Du.js";import"./RegisterGraphicalItemId-8U08pWsl.js";import"./ErrorBarContext-Dsbm5JOc.js";import"./GraphicalItemClipPath-DvAXcUk3.js";import"./SetGraphicalItem-BRpvB0vT.js";import"./getZIndexFromUnknown-uWVFz-kT.js";import"./graphicalItemSelectors-BTrh16_N.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};
