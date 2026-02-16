import{e as t}from"./iframe-DnFqMkNF.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DEUF_nnv.js";import{B as p}from"./BarChart-8sUUBP8x.js";import{X as l}from"./XAxis-j8l4i7VN.js";import{Y as h}from"./YAxis-DkzCTt_M.js";import{B as c}from"./Brush-DHXg93ag.js";import{B as x}from"./Bar-BzOtQTEQ.js";import{R as u}from"./RechartsHookInspector-CUfHCEPB.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CrMqOqSJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-5Wt67h2M.js";import"./hooks-CP5b_m36.js";import"./axisSelectors-CPdHEeWG.js";import"./zIndexSlice-CXYr44g9.js";import"./renderedTicksSlice-BJnCLUzI.js";import"./CartesianChart-CRkgE73v.js";import"./chartDataContext-BDWyCmXn.js";import"./CategoricalChart-IxDmkQ4g.js";import"./CartesianAxis-CJ5glNJc.js";import"./Layer-9mC9xCqL.js";import"./Text-DsmkRe5m.js";import"./DOMUtils-D5GQzw0x.js";import"./Label-D7fFgVlW.js";import"./ZIndexLayer-B30mlZWZ.js";import"./types-D_jqkROP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-e4AoOKdp.js";import"./ReactUtils-46mNTZgz.js";import"./ActiveShapeUtils-BUYAPEqO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BqCnT0bH.js";import"./useAnimationId-CAcVrmxD.js";import"./Trapezoid-h6fpFzx0.js";import"./Sector-CApGG2LQ.js";import"./Symbols-CDqR_0sP.js";import"./Curve-BT-KWQUD.js";import"./RegisterGraphicalItemId-DJudlZJr.js";import"./ErrorBarContext-CbJ9bt-9.js";import"./GraphicalItemClipPath-B-dv77RJ.js";import"./SetGraphicalItem-jeGmKde2.js";import"./getZIndexFromUnknown-CpVSq-Wn.js";import"./graphicalItemSelectors-SZG3dBHq.js";import"./index-B4_M3vQq.js";import"./ChartSizeDimensions-C8KjVzvN.js";import"./OffsetShower-CPo0ir56.js";import"./PlotAreaShower-B87d4Zfp.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
