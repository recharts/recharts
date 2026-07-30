import{R as t}from"./iframe-BEI88iUa.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CNhIK6pZ.js";import{B as p}from"./BarChart-BR58Jqbz.js";import{X as l}from"./XAxis-0izQHWsV.js";import{Y as h}from"./YAxis-ByzVR28-.js";import{B as x}from"./Brush-cwI8yNga.js";import{B as c}from"./Bar-l7m4T70-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BbtfERHN.js";import"./index-CNenOY3c.js";import"./index-DGXEJOU7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CNtzbuaW.js";import"./isWellBehavedNumber-DwXWb7IU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwAaxlIx.js";import"./index-DdylQdZr.js";import"./index-UjVR-wEt.js";import"./renderedTicksSlice-CfGYAsFa.js";import"./axisSelectors-BwSjoLT0.js";import"./d3-scale-Mw6WOBPY.js";import"./CartesianChart-BBEthDu3.js";import"./chartDataContext-DSUhfh_h.js";import"./CategoricalChart-D3IYhdol.js";import"./CartesianAxis-DsLYDFB2.js";import"./Layer-BHa_r1ys.js";import"./Text-b9BvWKjK.js";import"./DOMUtils-CavEusJ9.js";import"./Label-CQfR7C4I.js";import"./ZIndexLayer-6tY-vHyf.js";import"./types-CzsmCJZd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-az12ZSPD.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-BtwoPJ1U.js";import"./AnimatedItems-99nv9Q5e.js";import"./useAnimationId-oD_5QjXY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CXxl5AiF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CCFEfVD0.js";import"./RegisterGraphicalItemId-DE2xjbZV.js";import"./ErrorBarContext-BOU1rFco.js";import"./GraphicalItemClipPath-35MUlgJV.js";import"./SetGraphicalItem-DEteyePq.js";import"./getZIndexFromUnknown-C9Zn6XmI.js";import"./graphicalItemSelectors-DMzswwb3.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
