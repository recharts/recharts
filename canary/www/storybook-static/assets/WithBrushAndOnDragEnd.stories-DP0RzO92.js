import{R as t}from"./iframe-QVKxPJQm.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-G0DC-c-K.js";import{B as p}from"./BarChart-CDqcPY9S.js";import{X as l}from"./XAxis-C2HS1FtJ.js";import{Y as h}from"./YAxis-D2swP-TV.js";import{B as x}from"./Brush-PAM-uN8o.js";import{B as c}from"./Bar-D2KgqMyW.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-edRA0-Yp.js";import"./index-C30tpYub.js";import"./index-BlfChkir.js";import"./get-DLMFwiXu.js";import"./resolveDefaultProps-CEVaC25K.js";import"./isWellBehavedNumber-JryOpPT2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-HdUf1N.js";import"./index-CIkXYV9A.js";import"./index-D4ODfY0z.js";import"./renderedTicksSlice-BovhzHMl.js";import"./axisSelectors-C3vt1wN5.js";import"./d3-scale-CGteqX7a.js";import"./CartesianChart-KcupAlfP.js";import"./chartDataContext-zcaQUTsU.js";import"./CategoricalChart-CeUMrFdM.js";import"./CartesianAxis-DF6IixyN.js";import"./Layer-Bc0oacyD.js";import"./Text-BQy0Q-oS.js";import"./DOMUtils-D8ZqFxMD.js";import"./Label-IjZcZSlh.js";import"./ZIndexLayer-CNHQW8Kz.js";import"./types-DQssRkrH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BMDq1ZNk.js";import"./AnimatedItems--IUYJkxx.js";import"./useAnimationId-BUf_qCat.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BBAzwt0m.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dv5zSjSn.js";import"./RegisterGraphicalItemId-DJWNxqfN.js";import"./ErrorBarContext-CGBznjIg.js";import"./GraphicalItemClipPath-cpuBGhtV.js";import"./SetGraphicalItem-mX53cDIp.js";import"./getZIndexFromUnknown-D3n2ofgM.js";import"./graphicalItemSelectors-CvQeNwQF.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
