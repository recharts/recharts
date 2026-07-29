import{R as t}from"./iframe-B1mwOZ4B.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DpKDqXzy.js";import{B as p}from"./BarChart-rhA_8OHK.js";import{X as l}from"./XAxis-BJXCAx8k.js";import{Y as h}from"./YAxis-CJdoflUo.js";import{B as x}from"./Brush-CKFuG6Yk.js";import{B as c}from"./Bar-Dw1mCXLP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B9hrHP2z.js";import"./index-CGmAV-n6.js";import"./index-DfE0c-YN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C5OuETHs.js";import"./isWellBehavedNumber-CJikzJGt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CO3J1RuZ.js";import"./index-h2iP9BkR.js";import"./index-CErrAQ9r.js";import"./renderedTicksSlice-CU0BXE-7.js";import"./axisSelectors-CHibCpWI.js";import"./d3-scale-C-ENdXUt.js";import"./CartesianChart-0J6AxZg0.js";import"./chartDataContext-4XOxxqNR.js";import"./CategoricalChart-aKqfV8G8.js";import"./CartesianAxis-DVp2DYfW.js";import"./Layer-BPIZMWg2.js";import"./Text-BvU8EdL8.js";import"./DOMUtils-j3EH7wUz.js";import"./Label-B_N5n860.js";import"./ZIndexLayer-Dgr6-NYc.js";import"./types-D3n9ld0M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-ATwIj2YD.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-DI_28pnD.js";import"./AnimatedItems-CP4Ed5tB.js";import"./useAnimationId-DOfhPbEn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B0J9CZX5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CKuXh55Z.js";import"./RegisterGraphicalItemId-CNYa3zPu.js";import"./ErrorBarContext-BUi-bCeZ.js";import"./GraphicalItemClipPath-B5MjopOD.js";import"./SetGraphicalItem-D7FiLvSi.js";import"./getZIndexFromUnknown-BIut2kVF.js";import"./graphicalItemSelectors-CZB8nDwD.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
