import{R as t}from"./iframe-BUJOmzqi.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BsaVfiwf.js";import{B as p}from"./BarChart-B0rrshk8.js";import{X as l}from"./XAxis-DaOKHhNP.js";import{Y as h}from"./YAxis-DKbaQ5d8.js";import{B as x}from"./Brush-Dk1I-TED.js";import{B as c}from"./Bar-CXM7wx16.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DH0vdgZo.js";import"./index-Z5G1v5br.js";import"./index-JbQrqUHI.js";import"./get-BL4oPmOH.js";import"./resolveDefaultProps-hlzoE81R.js";import"./isWellBehavedNumber-PVSksaHl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DKJe8hzM.js";import"./index-BFCbJ3zw.js";import"./index-Ba2rQUwD.js";import"./renderedTicksSlice-CvbHS7R-.js";import"./axisSelectors-BsZbVas6.js";import"./d3-scale-DS8AhCL8.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CwVYswgd.js";import"./chartDataContext-BLLyTvAK.js";import"./CategoricalChart--vXw4uUZ.js";import"./CartesianAxis-Bv_4t9YA.js";import"./Layer-DAIr4ncG.js";import"./Text-KTF0LXVS.js";import"./DOMUtils-DD35gjWu.js";import"./Label-BNcqFpiL.js";import"./ZIndexLayer-DYX-KLdv.js";import"./types-BzrTCe99.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-n5p5vu7t.js";import"./AnimatedItems-JOMjWh90.js";import"./useAnimationId-BY-iJyWy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D2JiSHo9.js";import"./ActiveShapeUtils-ySv4_Jt-.js";import"./RegisterGraphicalItemId-BRRIJdHI.js";import"./ErrorBarContext-DA6daDg9.js";import"./GraphicalItemClipPath-CGh6UnOu.js";import"./SetGraphicalItem-7EGMhuIl.js";import"./getZIndexFromUnknown-C2YVw8tG.js";import"./graphicalItemSelectors-6So_Cw7T.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
