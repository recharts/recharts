import{R as t}from"./iframe-CWxtgXuN.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DuNjPOIA.js";import{B as p}from"./BarChart-DqF7YYb9.js";import{X as l}from"./XAxis-BIy0Ixfj.js";import{Y as h}from"./YAxis-BwANZfYx.js";import{B as x}from"./Brush-sailDbDK.js";import{B as c}from"./Bar-Bx-OnJSc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DySWaKHI.js";import"./index-D3Okail2.js";import"./index-Co2hlbGQ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DB57oDCz.js";import"./isWellBehavedNumber-RhnC_be2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-cC4MiwtJ.js";import"./index-ClfrRk61.js";import"./index-Cgh7W-Sw.js";import"./axisSelectors-D3U5jtqo.js";import"./d3-scale-PJ0eA6WB.js";import"./renderedTicksSlice-DdR3Yk66.js";import"./CartesianChart-VS3m0tpN.js";import"./chartDataContext-BzVtDYqK.js";import"./CategoricalChart-CDL51AOI.js";import"./CartesianAxis-Bg_4zGXW.js";import"./Layer-DvshJojd.js";import"./Text-Bzp-NWLm.js";import"./DOMUtils-B_ZEHGfF.js";import"./Label-B4Vj6wwG.js";import"./ZIndexLayer-BlQF_3Y8.js";import"./types-CUZin1-8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DQSpDGj3.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-AzgxhFkw.js";import"./AnimatedItems-xrLxeBUX.js";import"./useAnimationId-N7_T0mrz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BaSYnlz4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHtnvTAF.js";import"./RegisterGraphicalItemId-DrgIbtZo.js";import"./ErrorBarContext-CAu46fWB.js";import"./GraphicalItemClipPath-C5JLsR_L.js";import"./SetGraphicalItem-DN47EjfQ.js";import"./getZIndexFromUnknown-ji4hQVSt.js";import"./graphicalItemSelectors-CE4_kVFF.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
