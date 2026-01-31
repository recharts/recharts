import{e as t}from"./iframe-DKKmvtM4.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BH7M1_Mo.js";import{B as p}from"./BarChart-DC3rYaui.js";import{X as l}from"./XAxis-D0l8_bF1.js";import{Y as h}from"./YAxis-opqB1HJ5.js";import{B as c}from"./Brush-BTQh2Jwx.js";import{B as x}from"./Bar-BOLbm5bF.js";import{R as u}from"./RechartsHookInspector-_f5C5MnG.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKSvQ-CI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DSOfgqQ4.js";import"./hooks-CAZEb-K2.js";import"./axisSelectors-BwBIfn7P.js";import"./zIndexSlice-AjUFaEiP.js";import"./CartesianChart-DhY9l1Jf.js";import"./chartDataContext-C3SlyDgH.js";import"./CategoricalChart-BpOJCian.js";import"./CartesianAxis-BfEn85oF.js";import"./Layer-CRV4337m.js";import"./Text-sKIHJABx.js";import"./DOMUtils-CGnu9ifx.js";import"./Label-Da19cvil.js";import"./ZIndexLayer-ub3Xu4w-.js";import"./types-Bj4-1oYY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-OBwlOkwA.js";import"./ReactUtils-CYxP7B05.js";import"./ActiveShapeUtils-czniNIT7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B6ULbvfC.js";import"./useAnimationId-Hx06RWvS.js";import"./Trapezoid-RWF7Vajg.js";import"./Sector-Dn7O6oob.js";import"./Symbols-CMo2qdsV.js";import"./Curve-Cf01ES6k.js";import"./RegisterGraphicalItemId-D_mkL-K8.js";import"./ErrorBarContext-BUSUJFaK.js";import"./GraphicalItemClipPath-BPF3OyQO.js";import"./SetGraphicalItem-DxgYEhry.js";import"./getZIndexFromUnknown-C-8A48K9.js";import"./graphicalItemSelectors-rhw8Er39.js";import"./index-COzuImjz.js";import"./ChartSizeDimensions-C-W9gvmn.js";import"./OffsetShower-BXtHvm8O.js";import"./PlotAreaShower-CYWF0naR.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
