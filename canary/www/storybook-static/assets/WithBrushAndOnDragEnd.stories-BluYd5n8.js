import{R as t}from"./iframe-556vb-qw.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Dx_8tKSl.js";import{B as p}from"./BarChart-1B8uwNdT.js";import{X as l}from"./XAxis-C8oxlX6U.js";import{Y as h}from"./YAxis-CUYZIBQF.js";import{B as x}from"./Brush-Sw74PhBW.js";import{B as c}from"./Bar-BOliZufY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bki2cXyV.js";import"./index-DiiXHLk0.js";import"./index-CiB0Io8X.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-FVjcPzTE.js";import"./isWellBehavedNumber-Dc37N4M2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-KC_7-tBU.js";import"./index-DQcKumtN.js";import"./index-BtPxInWz.js";import"./renderedTicksSlice-CfWaZqlF.js";import"./axisSelectors-BduM4NJa.js";import"./d3-scale-D2li86P1.js";import"./CartesianChart-D8G919J3.js";import"./chartDataContext-Bs-zR_b9.js";import"./CategoricalChart-CcDvDLSk.js";import"./CartesianAxis-C3UFcQ97.js";import"./Layer-BTltl-Cn.js";import"./Text-UXI8_ZCT.js";import"./DOMUtils-B14va7zq.js";import"./Label-BaM1U3dt.js";import"./ZIndexLayer-BOwqliX9.js";import"./types-CA3u3vRt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BlLTGOp5.js";import"./AnimatedItems-CxcoqNDa.js";import"./useAnimationId-ClUEd6We.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-dJLSMSgO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BLdFLviC.js";import"./RegisterGraphicalItemId-n-hAz8yp.js";import"./ErrorBarContext-DZjyWL-W.js";import"./GraphicalItemClipPath-CuuadlYj.js";import"./SetGraphicalItem-DRzPdsV9.js";import"./getZIndexFromUnknown-BRUWBuui.js";import"./graphicalItemSelectors-B4mj_ypA.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
