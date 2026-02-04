import{e as t}from"./iframe-2vdihYaA.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Cz6bem1a.js";import{B as p}from"./BarChart-Bs7dA6kJ.js";import{X as l}from"./XAxis-Dj-4Nnot.js";import{Y as h}from"./YAxis-DeIibkX2.js";import{B as c}from"./Brush-DF17fSjz.js";import{B as x}from"./Bar-CDDah9bF.js";import{R as u}from"./RechartsHookInspector-CqgE5Nv7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BMo1MjoM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BKqPTBXa.js";import"./hooks-DRq4Dknc.js";import"./axisSelectors-B6I2jDAj.js";import"./zIndexSlice-_CZsqZq4.js";import"./CartesianChart-CgDezk2P.js";import"./chartDataContext-DF08vkso.js";import"./CategoricalChart-CTkRrNay.js";import"./CartesianAxis-BzbcZQiG.js";import"./Layer-BY-fsyoM.js";import"./Text-B79Sux8Q.js";import"./DOMUtils-CHIYEZ9y.js";import"./Label-DyVMIxDt.js";import"./ZIndexLayer-BhK_pYZk.js";import"./types-BVLdKdSl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Dt1_-fAv.js";import"./ReactUtils-YY1V_Sy8.js";import"./ActiveShapeUtils-BzwzNQ6E.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-LulPmG5i.js";import"./useAnimationId-C00yQmDC.js";import"./Trapezoid-Csj6mQp9.js";import"./Sector-BfatqE6A.js";import"./Symbols-DySEQhPv.js";import"./Curve-CO1p58ib.js";import"./RegisterGraphicalItemId-BxLSDVx1.js";import"./ErrorBarContext-CWPUp6By.js";import"./GraphicalItemClipPath-ZZzgSpw_.js";import"./SetGraphicalItem-B1yLHWtu.js";import"./getZIndexFromUnknown-HFSzFdQF.js";import"./graphicalItemSelectors-BTuYPuVE.js";import"./index-DIOAgVA6.js";import"./ChartSizeDimensions-C8811dw0.js";import"./OffsetShower-ePUr3CkU.js";import"./PlotAreaShower-D0LZ_i9v.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
